import PfBrand from "@vue-patternfly/core/src/components/Brand";

export default {
  title: "Components/Brand",
  component: PfBrand,
};

export const Default = ({ ...args }) => ({
  components: { PfBrand },
  setup() {
    return { args };
  },
  template: `<pf-brand v-bind="args" />`,
});
Default.args = {
  src: "https://www.patternfly.org/assets/images/pf_logo.svg",
  alt: "Patternfly Logo",
};
