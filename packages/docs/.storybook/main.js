const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite"
  },
  features: {
    previewCsfV3: true,
  },
  async viteFinal(config, { configType }) {
    config.base = './';

    config.plugins.push({
      name: 'resolve-core',
      resolveId: id => {
        if (id.startsWith('@core/')) {
          return path.resolve(__dirname, '../../core/src/', id.substr(6));
        }
      },
    });

    // remove requires of css from react-styles to prevent dynamic import errors
    config.plugins.push({
      name: 'remove-react-styles-css',
      transform: (src, id) => {
        if (!id.match(/\/@patternfly\/react-styles\/css\/.*\.js$|\/@patternfly_react-styles_css_.*\.js/)) {
          return;
        }
        const code = src.replace(/^\s*(?:__)?require\(['"][^'"]+\.css['"]\);$/m, '');
        return {
          code,
        };
      },
    });

    if (configType === "DEVELOPMENT") {
      config.server.port = 6001;
      config.server.https = false;
      config.server.host = true;
      config.server.hmr = {
        port: 10443,
        protocol: "ws",
      };
    }

    return config;
  },
}
