import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { Plugin as VitePlugin } from 'vite';
import { dedent } from "ts-dedent";
import { parse, HTMLElement, Node } from 'node-html-parser';
import Markdown from 'markdown-it';
import markdownItClass from '@toycode/markdown-it-class';
import { escapeHtml } from '@vue/shared';
import { getHighlighter } from 'shiki';

export const PLUGIN_NAME = 'vue-canvas-source';

export type VueCanvasPluginOptions = {
  /**
   * Filter out which files to be included as vue markdown pages.
   *
   * @default /\.story.vue($|\?)/
   */
  include?: FilterPattern;

  /**
   * Filter out which files to _not_ be included as vue markdown pages.
   *
   * @default undefined
   */
  exclude?: FilterPattern;
}

const DEFAULT_INCLUDE_RE = /\.story\.vue($|\?)/;

function traverse(arr: Node[], callback: (el: Node) => Node) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);

    if (arr[i].childNodes) {
      traverse(arr[i].childNodes, callback);
    }
  }
}

function fixAttrsNewLine(code: string) {
  return code.replace(/(<[^\s]+) {2}/g, '$1\n ');
}

function fixSelfClosingTag(code: string) {
  return code.replace(/<([^\s]+)([^>]*?)\s*><\/\1>/g, '<$1$2 />');
}

function addSourceToStoryCanvas(el: HTMLElement) {
  const source = el.childNodes
    .filter(node => !(node instanceof HTMLElement) || node.rawTagName !== 'template')
    .map(node => fixAttrsNewLine(fixSelfClosingTag(node.toString()))).join('');
  el.rawAttrs += ` source="${escapeHtml(dedent(source.trim()))}"`;
}

function replaceMarkdown(md: Markdown, el: HTMLElement) {
  const mdDiv = new HTMLElement('div', { class: 'markdown pf-c-content' }, '', null, [0,0]);
  mdDiv.innerHTML = md.render(dedent(el.innerText.replaceAll('&lt;', '<').replaceAll('&gt;', '>')));
  el.parentNode.exchangeChild(el, mdDiv);
}

export function vueCanvasPlugin(options: VueCanvasPluginOptions = {}): VitePlugin {
  const filter = createFilter(options.include ?? DEFAULT_INCLUDE_RE, options.exclude);

  const mdPromise = (async() => {
    const highlighter = await getHighlighter({});

    const md = Markdown({
      html: true,
      linkify: true,
      highlight(str: string, lang: string) {
        return highlighter.codeToHtml(str, { lang });
      },
    });

    md.use(markdownItClass, {
      h1: ['pf-c-title'],
      h2: ['pf-c-title'],
      h3: ['pf-c-title'],
      h4: ['pf-c-title'],
      h5: ['pf-c-title'],
      h6: ['pf-c-title'],
    });

    return md;
  })();

  return {
    name: PLUGIN_NAME,
    enforce: 'pre',

    async transform(code, id) {
      if (filter(id)) {
        const md = await mdPromise;
        const html = parse(code);

        traverse(html.childNodes, (el) => {
          if (el instanceof HTMLElement) {
            if (el.rawTagName === 'story-canvas') {
              addSourceToStoryCanvas(el);
            } else if (el.rawTagName === 'pre' && el.hasAttribute('v-md')) {
              replaceMarkdown(md, el);
            }
          }
          return el;
        });

        return html.toString();
      }

      return null;
    },
  };
}
