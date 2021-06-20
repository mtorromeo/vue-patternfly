import { PfSplit, PfSplitItem } from '@vue-patternfly/core/src/layouts/Split';

export default {
  title: 'Layouts/Split Item',
  component: PfSplitItem,
  subcomponents: { PfSplit },
};

export const SplitItem = (args) => ({
  components: { PfSplit, PfSplitItem },
  setup() {
    return { args };
  },
  template: `
    <pf-split gutter>
      <pf-split-item>content</pf-split-item>
      <pf-split-item v-bind="args" style="border-color: var(--pf-global--palette--green-300)">
        pf-m-fill
      </pf-split-item>
      <pf-split-item>content</pf-split-item>
    </pf-split>
  `,
});
SplitItem.args = {
  filled: true,
};
