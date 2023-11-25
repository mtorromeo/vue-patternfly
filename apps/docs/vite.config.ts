import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vueCanvasPlugin } from './vite-plugins/story-canvas-source';
import { vueDocgenInject } from './vite-plugins/docgen-inject';



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vueDocgenInject(),
    vueCanvasPlugin(),
    vue(),
  ],
});
