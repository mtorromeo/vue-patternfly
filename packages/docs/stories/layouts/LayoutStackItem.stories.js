import {PfStack, PfStackItem} from "../../../core/src/layouts/Stack";
import {argTypesFromProps} from '../../utils';

export default {
  title: "Layouts/Stack Item",
  component: PfStackItem,
  subcomponents: {PfStack},
  argTypes: argTypesFromProps(PfStackItem.props),
};

const Template = (args) => ({
  components: { PfStack, PfStackItem },
  setup() {
    return { args };
  },
  template: `
    <pf-stack gutter style="height: 300px">
      <pf-stack-item>content</pf-stack-item>
      <pf-stack-item v-bind="args" style="border-color: var(--pf-global--palette--green-300)">
        pf-m-fill
      </pf-stack-item>
      <pf-stack-item>content</pf-stack-item>
    </pf-stack>
  `,
});

export const Default = Template.bind({});
Default.args = {
  filled: true,
};
