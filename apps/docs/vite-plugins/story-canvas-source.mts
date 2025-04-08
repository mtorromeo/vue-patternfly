import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { Plugin as VitePlugin } from 'vite';
import { dedent } from "ts-dedent";
import { parse, HTMLElement, Node } from 'node-html-parser';
import Markdown from 'markdown-it';
import markdownItClass from '@toycode/markdown-it-class';
// eslint-disable-next-line vue/prefer-import-from-vue
import { escapeHtml } from '@vue/shared';
import { createHighlighter } from 'shiki';
import fs from 'fs/promises';
import path from 'path';

export const PLUGIN_NAME = 'vue-canvas-source';

export type VueCanvasPluginOptions = {
  /**
   * Filter out which files to be included as vue markdown pages.
   *
   * @default /(?:\.story|-demo).vue$/
   */
  include?: FilterPattern;

  /**
   * Filter out which files to _not_ be included as vue markdown pages.
   *
   * @default undefined
   */
  exclude?: FilterPattern;
}

const DEFAULT_INCLUDE_RE = /(?:\.story|-demo).vue$/;

async function traverse(arr: Node[], callback: (el: Node) => Promise<Node>) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = await callback(arr[i]);

    if (arr[i].childNodes) {
      await traverse(arr[i].childNodes, callback);
    }
  }
}

function fixAttrsNewLine(code: string) {
  return code.replace(/(<[^\s]+) {2}/g, '$1\n ');
}

function fixSelfClosingTag(code: string) {
  return code.replace(/<([^\s]+)([^>]*?)\s*><\/\1>/g, '<$1$2 />');
}

async function addSourceToStoryCanvas(el: HTMLElement, id: string) {
  let sourcePath: string | null = null;
  let source: string | null = null;

  const matches = el.rawAttrs.match(/(?:^|\s)src="([^"]+)"/);
  if (matches) {
    sourcePath = path.resolve(path.dirname(id), matches[1]);
    source = await fs.readFile(sourcePath, {encoding: 'utf-8'});
  }

  if (!source) {
    source = el.childNodes
      .filter(node => !(node instanceof HTMLElement) || node.rawTagName !== 'template')
      .map(node => fixAttrsNewLine(fixSelfClosingTag(node.toString()))).join('');
  }

  el.rawAttrs += ` source="${escapeHtml(dedent(source.trim()))}"`;
  return sourcePath;
}

function replaceMarkdown(md: Markdown, el: HTMLElement) {
  const mdDiv = new HTMLElement('div', { class: 'markdown pf-v6-c-content' }, '', undefined, [0,0]);
  mdDiv.innerHTML = md.render(dedent(el.innerText.replace(/&lt;/g, '<').replace(/&gt;/g, '>')));
  el.parentNode.exchangeChild(el, mdDiv);
}

export function vueCanvasPlugin(options: VueCanvasPluginOptions = {}): VitePlugin {
  const filter = createFilter(options.include ?? DEFAULT_INCLUDE_RE, options.exclude);

  const mdPromise = (async() => {
    const highlighter = await createHighlighter({
      themes: ['nord'],
      langs: ['vue', 'vue-html'],
    });

    const md = Markdown({
      html: true,
      linkify: true,
      highlight(str: string, lang: string) {
        return highlighter.codeToHtml(str, { lang, theme: 'nord' });
      },
    });

    md.use(markdownItClass, {
      h1: ['pf-v6-c-title'],
      h2: ['pf-v6-c-title'],
      h3: ['pf-v6-c-title'],
      h4: ['pf-v6-c-title'],
      h5: ['pf-v6-c-title'],
      h6: ['pf-v6-c-title'],
    });

    return md;
  })();

  return {
    name: PLUGIN_NAME,
    enforce: 'pre',

    async transform(code, id) {
      const dependencies: string[] = [];

      if (!filter(id)) {
        return null;
      }

      const md = await mdPromise;
      const html = parse(code);

      await traverse(html.childNodes, async(el) => {
        if (el instanceof HTMLElement) {
          if (el.rawTagName === 'story-canvas') {
            const dep = await addSourceToStoryCanvas(el, id);
            if (dep) {
              dependencies.push(id);
            }
          } else if (el.rawTagName === 'pre' && el.hasAttribute('v-md')) {
            replaceMarkdown(md, el);
          }
        }
        return el;
      });

      return {
        code: html.toString(),
        dependencies,
      };
    },
  };
}
