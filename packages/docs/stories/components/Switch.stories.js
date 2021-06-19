import PfSwitch from "@vue-patternfly/core/src/components/Switch.vue";

export default {
  title: "Components/Switch",
  component: PfSwitch,
};

const Template = (args) => ({
  components: { PfSwitch },
  setup() {
    return { args };
  },
  template: '<pf-switch v-bind="args" />',
});

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  label: "Switch ON",
  labelOff: "Switch OFF",
};
