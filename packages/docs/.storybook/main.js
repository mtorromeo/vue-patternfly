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
    return config;
  },
};
