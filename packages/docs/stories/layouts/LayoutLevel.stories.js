import {PfLevel, PfLevelItem} from "@vue-patternfly/core/src/layouts/Level";

export default {
  title: "Layouts/Level",
  component: PfLevel,
  subcomponents: {PfLevelItem},
};

const Template = (args) => ({
  components: { PfLevel, PfLevelItem },
  setup() {
    return { args };
  },
  template: `
    <pf-level v-bind="args">
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>
  `,
});

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
