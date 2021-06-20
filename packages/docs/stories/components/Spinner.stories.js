import PfSpinner from '@vue-patternfly/core/src/components/Spinner.vue';

export default {
  title: 'Components/Spinner',
  component: PfSpinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Spinner = (args) => ({
  components: { PfSpinner },
  setup() {
    return { args };
  },
  template: `<pf-spinner v-bind="args" />`,
});
