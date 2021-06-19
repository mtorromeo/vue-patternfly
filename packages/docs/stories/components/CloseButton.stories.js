import PfCloseButton from "@vue-patternfly/core/src/components/CloseButton";

export default {
  title: "Components/CloseButton",
  component: PfCloseButton,
};

export const Default = ({ ...args }) => ({
  components: { PfCloseButton },
  setup() {
    return { args };
  },
  template: '<pf-close-button v-bind="args" />',
});
