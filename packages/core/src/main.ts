import type { App, MaybeRefOrGetter } from 'vue';
import { providePfAppMessages, type PfMessages } from './messages';

import * as layouts from './layouts';
import * as components from './components';
export * from './layouts';
export * from './components';
export * from './use';
export * from './messages';

const all = { ...layouts, ...components };

export interface PluginOptions {
  /** Messages replacing the default texts of the components, like the accessible names */
  messages?: MaybeRefOrGetter<Partial<PfMessages>>;
}

export function install(app: App, options: PluginOptions = {}) {
  for (const [name, component] of Object.entries(all)) {
    app.component(name, component);
  }
  if (options.messages) {
    providePfAppMessages(app, options.messages);
  }
}

const plugin = {
  install,
};

declare module 'vue' {}

export default plugin;
