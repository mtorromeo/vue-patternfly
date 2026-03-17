import type { Plugin } from 'vite';

/**
 * Rolldown (Vite 8) with preserveModules writes vite:vue's internal virtual
 * modules (e.g. `Button.vue?vue&type=script&setup=true&lang.js`) as real files
 * to disk. Any downstream Vite 8 build that consumes the library then triggers
 * the vite:vue plugin on those filenames (because they contain `?vue`), which
 * tries to parse compiled JS as a Vue SFC and fails.
 *
 * This plugin inlines each virtual-module file back into its `.vue.js` wrapper,
 * removes the virtual-module file from the output bundle, and rewrites any
 * leftover virtual import specifiers to `.vue.js` wrappers.
 */
export function inlineVueScriptModules(): Plugin {
  return {
    name: 'inline-vue-script-modules',
    generateBundle(_, bundle) {
      for (const [name, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'chunk' || chunk.fileName.startsWith('node_modules/') || !name.includes('?vue')) {
          continue;
        }

        // "components/Button.vue?vue&type=script&setup=true&lang.js"
        //   -> "components/Button.vue.js"
        const wrapperName = name.replace(/\?vue&[a-z&=]+\.js$/, '.js');

        const wrapper = bundle[wrapperName];
        if (wrapper?.type !== 'chunk') {
          continue;
        }

        // Replace the wrapper (which just re-exports the virtual module) with
        // the actual compiled component code, with all virtual import specifiers
        // rewritten to .vue.js wrappers, and then drop the virtual module file.
        wrapper.code = chunk.code.replace(
          /\.vue\?vue&[a-z&=]+\.js\b/g,
          '.vue.js',
        );
        delete bundle[name];
      }
    },
  };
}
