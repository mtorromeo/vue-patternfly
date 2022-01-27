import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vueCanvasPlugin } from 'vite-plugin-story-canvas-source';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueCanvasPlugin(),
    vue(),
  ],
});
