import { defineConfig } from 'vite';
import { globSync } from 'glob';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: globSync(path.resolve(__dirname, 'src/**/*.{ts,vue}')),
      name: '',
    },
    rollupOptions: {
      external: ['vue', '@vue-patternfly/core'],
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  plugins: [
    vue(),
  ],
});
