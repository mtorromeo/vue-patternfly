import PfCloseButton from '@vue-patternfly/core/src/components/CloseButton';

export default {
  title: 'Components/Close Button',
  component: PfCloseButton,
};

export const CloseButton = (args) => ({
  components: { PfCloseButton },
  setup() {
    return { args };
  },
  template: `<pf-close-button v-bind="args" />`,
});
