import { createFilter } from 'vite';
import type { FilterPattern, Plugin as VitePlugin } from 'vite';
import { ComponentDoc, parse } from 'vue-docgen-api';

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
    super(exc);
    this.src = src;
  }
}

export function vueDocgenInject(options: VueDocgenInjectPluginOptions = {}): VitePlugin {
  const filter = createFilter(options.include ?? /\.story\.vue$/, options.exclude);
  const componentInfoRegex = /<component-info src="([^"]+)"([^>]*?)>/g;
  const pageNameRegex = /<doc-page\b/g;

  return {
    name: 'vue-component-docs',
    enforce: 'pre',

    async transform(code, id) {
      if (filter(id)) {
        code = await replaceAsync(code, componentInfoRegex, async(matched, src: string, args: string) => {
          let componentInfo: ComponentDoc;
          try {
            componentInfo = await parse(`../../${src}`);
          } catch (e) {
            console.warn(new ParseError(src, e));
            return matched;
          }
          return `<component-info src="${src}" :doc="${JSON.stringify(componentInfo).replace(/"/g, '&quot;')}"${args}>`;
        });

        const relId = id.replace(/.*\/apps\/docs\/src\/stories\//, '');
        code = code.replace(pageNameRegex, `<doc-page :name="${JSON.stringify(relId).replace(/"/g, '&quot;')}"`);
      }

      return code;
    },
  };
}
