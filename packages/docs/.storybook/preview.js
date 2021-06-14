import '@patternfly/patternfly/patternfly.css';
import '@vue-patternfly/core/dist/core.umd.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
