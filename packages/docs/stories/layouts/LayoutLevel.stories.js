import { PfLevel, PfLevelItem } from "@vue-patternfly/core/src/layouts/Level";

export default {
  title: "Layouts/Level",
  component: PfLevel,
  subcomponents: { PfLevelItem },
};

export const Default = (args) => ({
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
Default.args = {
  gutter: true,
};
