import { PfLevel, PfLevelItem } from '@vue-patternfly/core/src/layouts/Level';

export default {
  title: 'Layouts/Level',
  component: PfLevel,
  subcomponents: { PfLevelItem },
};

export const Level = (args) => ({
  components: { PfLevel, PfLevelItem },
  setup() {
    return { args };
  },
  template: `
    <pf-level v-bind="args" class="docs-layout-outline">
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>
  `,
});
Level.args = {
  gutter: true,
};
