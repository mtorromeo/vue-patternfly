import {PfFlex, PfFlexItem} from "../../../core/src/layouts/Flex";
import {argTypesFromProps} from '../../utils';

export default {
  title: "Layouts/Flex Item",
  component: PfFlexItem,
  subcomponents: {PfFlex},
  argTypes: argTypesFromProps(PfFlexItem.props),
};

export const Default = (args) => ({
  components: { PfFlex, PfFlexItem },
  setup() {
    return { args };
  },
  template: `
    <pf-flex>
      <pf-flex flex="1">
        <pf-flex-item v-bind="args" style="border-color: var(--pf-global--palette--green-300)">
          Flex item
        </pf-flex-item>
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
