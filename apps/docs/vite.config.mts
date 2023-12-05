import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vueCanvasPlugin } from './vite-plugins/story-canvas-source.mts';
import { vueDocgenInject } from './vite-plugins/docgen-inject.mts';



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vueDocgenInject(),
    vueCanvasPlugin(),
    vue(),
  ],
});
