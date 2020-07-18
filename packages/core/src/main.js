import * as layouts from './layouts';
import * as components from './components';

const all = { ...layouts, ...components };

// Declare install function executed by Vue.use()
export function install(app) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  for (const [name, component] of Object.entries(all)) {
    app.component(component.name || name, component);
  }
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export components
export * from './layouts';
export * from './components';

export default plugin;
