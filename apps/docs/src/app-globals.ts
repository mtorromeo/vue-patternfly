import type { App } from "vue";
import type { AriaAttributes } from 'vue';
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

declare module 'vue' {
  export interface GlobalComponents {
    DocPage: typeof DocPage;
    ComponentInfo: typeof ComponentInfo;
    ComponentTitle: typeof ComponentTitle;
    StoryCanvas: typeof StoryCanvas;
  }

  export interface GlobalDirectives {
    vMd: boolean;
  }

  export interface AllowedComponentProps extends AriaAttributes {
  }
}

export default { install };
