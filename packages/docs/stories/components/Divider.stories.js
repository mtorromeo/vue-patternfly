import PfDivider from "@vue-patternfly/core/src/components/Divider";

export default {
  title: "Components/Divider",
  component: PfDivider,
};

export const Default = (args) => ({
  components: { PfDivider },
  setup() {
    return { args };
  },
  template: `<pf-divider v-bind="args" />`,
});
