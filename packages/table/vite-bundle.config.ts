import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const globals = {
  vue: 'Vue',
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      fileName: format => format === 'iife' ? 'table.global.js' : 'table.[format].js',
    },
    rollupOptions: {
      external: Object.keys(globals),
      output: [{
        name: 'VuePatternFlyTable',
        format: 'umd',
        exports: 'named',
        globals,
      }, {
        name: 'VuePatternFlyTable',
        format: 'iife',
        exports: 'named',
        globals,
      }],
    },
  },
  plugins: [
    vue(),
  ],
});
