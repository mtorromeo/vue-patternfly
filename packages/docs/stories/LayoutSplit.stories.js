import {PfSplit, PfSplitItem} from "../../core/src/layouts/Split";
import {argTypesFromProps} from '../utils';

export default {
  title: "Layouts/Split",
  component: PfSplit,
  subcomponents: {PfSplitItem},
  argTypes: argTypesFromProps(PfSplit.props),
};

const Template = (args) => ({
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

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
