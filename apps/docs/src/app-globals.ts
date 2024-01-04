import type { App, HTMLAttributes } from "vue";
import DocPage from './components/DocPage.vue';
import ComponentInfo from './components/ComponentInfo.vue';
import ComponentTitle from './components/ComponentTitle.vue';
import StoryCanvas from './components/StoryCanvas.vue';

export function install(app: App) {
  app.component('DocPage', DocPage);
  app.component('ComponentInfo', ComponentInfo);
  app.component('ComponentTitle', ComponentTitle);
  app.component('StoryCanvas', StoryCanvas);
}

type AriaAttribues = {
  [K in keyof HTMLAttributes as K extends `aria-${string}` ? K : never]: HTMLAttributes[K];
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DocPage: typeof DocPage;
    ComponentInfo: typeof ComponentInfo;
    ComponentTitle: typeof ComponentTitle;
    StoryCanvas: typeof StoryCanvas;
  }

  export interface AllowedComponentProps extends AriaAttribues {
  }
}

export default { install };
