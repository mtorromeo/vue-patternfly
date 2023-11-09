import type { App, HTMLAttributes } from "vue";
import DocPage from './components/DocPage.vue';
import ComponentTitle from './components/ComponentTitle.vue';
import StoryCanvas from './components/StoryCanvas.vue';

export function install(app: App) {
  app.component('DocPage', DocPage);
  app.component('ComponentTitle', ComponentTitle);
  app.component('StoryCanvas', StoryCanvas);
}

type AriaAttribues = {
  [K in keyof HTMLAttributes as K extends `aria-${string}` ? K : never]: HTMLAttributes[K];
};

declare module 'vue' {
  export interface GlobalComponents {
    DocPage: typeof DocPage;
    ComponentTitle: typeof ComponentTitle;
    StoryCanvas: typeof StoryCanvas;
  }

  export interface AllowedComponentProps extends AriaAttribues {
  }
}

export default { install };
