import {PfSplit, PfSplitItem} from "@vue-patternfly/core/src/layouts/Split";
import {argTypesFromProps} from '@/utils';

export default {
  title: "Layouts/Split Item",
  component: PfSplitItem,
  subcomponents: {PfSplit},
  argTypes: argTypesFromProps(PfSplitItem.props),
};

const Template = (args) => ({
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

export const Default = Template.bind({});
Default.args = {
  filled: true,
};
