import { defineConfig } from 'vite';
import { globSync } from 'glob';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: globSync(path.resolve(__dirname, 'src/**/*.{ts,vue}')),
      name: '',
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core', '@vueuse/integrations', 'focus-trap'],
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  plugins: [
    {
      name: 'ignore-css-imports',
      load: id => /\.css$/.test(id) ? '' : null,
    },
    vue(),
  ],
});
