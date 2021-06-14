import {PfStack, PfStackItem} from "../../core/src/layouts/Stack";
import {argTypesFromProps} from '../utils';

export default {
  title: "Layouts/Stack",
  component: PfStack,
  subcomponents: {PfStackItem},
  argTypes: argTypesFromProps(PfStack.props),
};

const Template = (args) => ({
  components: { PfStack, PfStackItem },
  setup() {
    return { args };
  },
  template: `
    <pf-stack v-bind="args" style="height: 300px">
      <pf-stack-item>content</pf-stack-item>
      <pf-stack-item filled>
        pf-m-fill
      </pf-stack-item>
      <pf-stack-item>content</pf-stack-item>
    </pf-stack>
  `,
});

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
