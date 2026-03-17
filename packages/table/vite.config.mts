import { defineConfig } from 'vite';
import { globSync } from 'glob';
import vue from '@vitejs/plugin-vue';
import { inlineVueScriptModules } from '../../vite-plugins/inline-vue-script-modules.mts';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: globSync('src/**/*.{ts,vue}'),
      name: '',
      formats: ['es'],
    },
    rolldownOptions: {
      external: id => id === 'vue'
        || id.startsWith('@vue-patternfly/'),
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  plugins: [
    inlineVueScriptModules(),
    vue(),
  ],
});
