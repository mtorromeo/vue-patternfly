import { PfSplit, PfSplitItem } from '@vue-patternfly/core/src/layouts/Split';

export default {
  title: 'Layouts/Split',
  component: PfSplit,
  subcomponents: { PfSplitItem },
};

export const Split = (args) => ({
  components: { PfSplit, PfSplitItem },
  setup() {
    return { args };
  },
  template: `
    <pf-split v-bind="args">
      <pf-split-item>content</pf-split-item>
      <pf-split-item filled>
        pf-m-fill
      </pf-split-item>
      <pf-split-item>content</pf-split-item>
    </pf-split>
  `,
});
Split.args = {
  gutter: true,
};
