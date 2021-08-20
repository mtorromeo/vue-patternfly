import { PfFlex, PfFlexItem } from '@vue-patternfly/core/src/layouts/Flex';

export default {
  title: 'Layouts/Flex Item',
  component: PfFlexItem,
  subcomponents: { PfFlex },
};

export const FlexItem = (args) => ({
  components: { PfFlex, PfFlexItem },
  setup() {
    return { args };
  },
  template: `
    <pf-flex class="docs-layout-outline">
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
