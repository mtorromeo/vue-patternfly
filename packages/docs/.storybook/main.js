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
    if (configType === "DEVELOPMENT") {
      // customize the Vite config here
      config.server.port = 6001;
      config.server.https = false;
      config.server.host = true;
      config.server.hmr = {
        port: 10443,
        protocol: "ws",
      };
    }

    // return the customized config
    return config;
  },
}
