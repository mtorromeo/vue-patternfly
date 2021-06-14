import {PfFlex, PfFlexItem} from "../../core/src/layouts/Flex";
import {argTypesFromProps} from '../utils';

export default {
  title: "Layouts/Flex",
  component: PfFlex,
  subcomponents: {PfFlexItem},
  argTypes: argTypesFromProps(PfFlex.props),
};

const Template = (args) => ({
  components: { PfFlex, PfFlexItem },
  setup() {
    return { args };
  },
  template: `
    <pf-flex v-bind="args">
      <pf-flex flex="1">
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
      <pf-flex flex="1">
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
      <pf-flex flex="1">
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
    </pf-flex>
  `,
});

export const Default = Template.bind({});
