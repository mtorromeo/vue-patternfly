import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'VuePatternfly4',
      fileName: format => `core.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: [{
        format: 'es',
        assetFileNames: 'core.[ext]',
        esModule: true,
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      }, {
        format: 'umd',
        assetFileNames: 'core.[ext]',
        inlineDynamicImports: true,
        interop: 'esModule',
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      }],
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
