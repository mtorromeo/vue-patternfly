import * as layouts from './layouts';
import * as components from './components';
export * from './layouts';
export * from './components';

const all = { ...layouts, ...components };

export function install(app) {
  for (const [name, component] of Object.entries(all)) {
    app.component(component.name || name, component);
  }
}

const plugin = {
  install,
};

export default plugin;
