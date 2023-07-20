import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const globals = {
  vue: 'Vue',
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      fileName: format => format === 'iife' ? 'core.global.js' : 'core.[format].js',
    },
    rollupOptions: {
      external: Object.keys(globals),
      output: [{
        name: 'VuePatternflyCore',
        format: 'umd',
        exports: 'named',
        globals,
      }, {
        name: 'VuePatternflyCore',
        format: 'iife',
        exports: 'named',
        globals,
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
