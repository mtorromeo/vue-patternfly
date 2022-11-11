import type { App } from "vue";
import DocPage from './components/DocPage.vue';
import ComponentTitle from './components/ComponentTitle.vue';
import StoryCanvas from './components/StoryCanvas.vue';

export function install(app: App) {
  app.component('DocPage', DocPage);
  app.component('ComponentTitle', ComponentTitle);
  app.component('StoryCanvas', StoryCanvas);
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DocPage: typeof DocPage;
    ComponentTitle: typeof ComponentTitle;
    StoryCanvas: typeof StoryCanvas;
  }
}

export default { install };
