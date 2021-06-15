import {PfLevel, PfLevelItem} from "../../../core/src/layouts/Level";

export default {
  title: "Layouts/Level Item",
  component: PfLevelItem,
  subcomponents: {PfLevel},
};

export const Default = (args) => ({
  components: { PfLevel, PfLevelItem },
  setup() {
    return { args };
  },
  template: `
    <pf-level gutter>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item v-bind="args">
        Level Item
      </pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>
  `,
});
