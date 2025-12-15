import { createFilter } from 'vite';
import type { FilterPattern, Plugin as VitePlugin } from 'vite';
import { ComponentDoc, parseMulti } from 'vue-docgen-api';
import fs from 'fs/promises';
import { dirname } from 'path';

export type VueDocgenInjectPluginOptions = {
  /**
   * Filter out which files to be included as vue markdown pages.
   *
   * @default /\.story.vue$/
   */
  include?: FilterPattern;

  /**
   * Filter out which files to _not_ be included as vue markdown pages.
   *
   * @default undefined
   */
  exclude?: FilterPattern;
}

async function replaceAsync(string: string, regexp: RegExp, replacerFunction: (...args: string[]) => Promise<string>) {
  const replacements = await Promise.all(
    Array.from(string.matchAll(regexp),
               match => replacerFunction(...match)));
  let i = 0;
  return string.replace(regexp, () => replacements[i++]);
}

class ParseError extends Error {
  src: string;

  constructor(src: string, exc: string) {
    super(`Could not parse source file ${src}: ${exc}`);
    this.src = src;
  }
}

async function parseAllDocs(docs: Record<string, ComponentDoc>) {
  const parseQ = [
    '../../packages/core/src/components/index.ts',
    '../../packages/core/src/layouts/index.ts',
  ];

  for (const index of [...parseQ]) {
    const indexSource = await fs.readFile(index, { encoding: 'utf-8' });
    const includes = indexSource.matchAll(/^export \* from ['"]\.\/(.*)['"];?$/gm);
    const dir = dirname(index);
    for (const include of includes) {
      parseQ.push(`${dir}/${include[1]}/index.ts`);
    }
  }

  parseQ.push(
    '../../packages/table/src/Table.vue',
    '../../packages/table/src/Tbody.vue',
    '../../packages/table/src/Td.vue',
    '../../packages/table/src/Th.vue',
    '../../packages/table/src/Thead.vue',
    '../../packages/table/src/Tr.vue',
  );

  const results = await Promise.allSettled(parseQ.map(async f => {
    try {
      return await parseMulti(f);
    } catch (e) {
      throw new ParseError(f, e as string);
    }
  }));

  for (const components of results) {
    if (components.status === 'rejected') {
      console.warn(components.reason);
      continue;
    }
    for (const c of components.value) {
      // remove ../../ from source path
      c.sourceFiles = c.sourceFiles?.map(f => f.substring(6, f.length));
      docs[c.name] = c;
    }
  }
}

export function vueDocgenInject(options: VueDocgenInjectPluginOptions = {}): VitePlugin {
  const filter = createFilter(options.include ?? /\.story\.vue$/, options.exclude);
  const componentInfoRegex = /<component-info((?:\s+:?[a-z]+[a-z-]*="[^"]+")+)([^>]*?)>/g;
  const pageNameRegex = /<doc-page\b/g;

  let componentDocs: Record<string, ComponentDoc> = {};

  return {
    name: 'vue-component-docs',
    enforce: 'pre',

    async transform(code, id) {
      if (!Object.keys(componentDocs).length) {
        await parseAllDocs(componentDocs);
      }

      if (filter(id)) {
        code = await replaceAsync(code, componentInfoRegex, async(matched, propsMatched: string, args: string) => {
          const props: {
            name: string;
            fallthrough: string[];
            ['no-fallthrough']: string[];
          } = {
            name: '',
            fallthrough: [],
            ['no-fallthrough']: [],
          };

          for (const propsStr of propsMatched.split(/\s+/).filter(s => s.trim() !== '')) {
            let [k, v] = propsStr.split('=', 2);
            v = v.substring(1, v.length - 1);
            if (k.startsWith(':')) {
              k = k.substring(1, k.length);
              props[k as keyof typeof props] = JSON.parse(v.replaceAll("'", '"')) as any;
            } else {
              props[k as keyof typeof props] = v as any;
            }
          }

          let componentInfo = componentDocs[props.name];

          if (!componentInfo) {
            console.warn(`No component named ${props.name} found`);
            return matched;
          }

          componentInfo.props ??= [];
          componentInfo.events ??= [];

          for (const fallthroughComponent of props.fallthrough) {
            const fallthroughInfo = componentDocs[fallthroughComponent];

            if (!fallthroughInfo) {
              console.warn(`No component named ${props.name} found`);
              continue;
            }

            for (const prop of fallthroughInfo.props ?? []) {
              if (!props['no-fallthrough'].includes(prop.name) && !componentInfo.props.find(p => p.name === prop.name)) {
                componentInfo.props.push(prop);
              }
            }

            for (const event of fallthroughInfo.events ?? []) {
              if (!props['no-fallthrough'].includes(event.name) && !componentInfo.events.find(e => e.name === event.name)) {
                componentInfo.events.push(event);
              }
            }
          }

          return `<component-info name="${props.name}" :doc="${JSON.stringify(componentInfo).replace(/"/g, '&quot;')}"${args}>`;
        });

        const relId = id.replace(/.*\/apps\/docs\/src\/stories\//, '');
        code = code.replace(pageNameRegex, `<doc-page :name="${JSON.stringify(relId).replace(/"/g, '&quot;')}"`);
      }

      return code;
    },
  };
}
