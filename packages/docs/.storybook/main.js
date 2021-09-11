const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, '..');
    config.resolve.alias['@vue-patternfly/core'] = path.resolve(__dirname, '../../core');

    // https://github.com/vueuse/vueuse/issues/718
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  features: {
    previewCsfV3: true,
  },
};
