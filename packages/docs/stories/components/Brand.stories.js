import PfBrand from "../../../core/src/components/Brand";

export default {
  title: "Components/Brand",
  component: PfBrand,
};

const Template = ({ ...args }) => ({
  components: { PfBrand },
  setup() {
    return { args };
  },
  template: '<pf-brand v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://www.patternfly.org/assets/images/pf_logo.svg",
  alt: "Patternfly Logo",
};
