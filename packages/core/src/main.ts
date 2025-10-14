import type { App } from 'vue';

import * as layouts from './layouts';
import * as components from './components';
export * from './layouts';
export * from './components';
export * from './use';

const all = { ...layouts, ...components };

export function install(app: App) {
  for (const [name, component] of Object.entries(all)) {
    app.component(name, component);
  }
}

const plugin = {
  install,
};

declare module 'vue' {}

export default plugin;
