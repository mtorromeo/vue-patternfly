import { App } from "vue";
import DocPage from './components/DocPage.vue';
import ComponentTitle from './components/ComponentTitle.vue';
import StoryCanvas from './components/StoryCanvas.vue';
import type CoreGlobals from '@vue-patternfly/core/global'; // eslint-disable-line @typescript-eslint/no-unused-vars

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
