import { PfFlex, PfFlexItem } from '@vue-patternfly/core/src/layouts/Flex';

export default {
  title: 'Layouts/Flex',
  component: PfFlex,
  subcomponents: { PfFlexItem },
};

export const Flex = (args) => ({
  components: { PfFlex, PfFlexItem },
  setup() {
    return { args };
  },
  template: `
    <pf-flex v-bind="args" class="docs-layout-outline">
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
