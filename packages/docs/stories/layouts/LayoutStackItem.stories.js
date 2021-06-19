import { PfStack, PfStackItem } from "@vue-patternfly/core/src/layouts/Stack";

export default {
  title: "Layouts/Stack Item",
  component: PfStackItem,
  subcomponents: { PfStack },
};

export const Default = (args) => ({
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
Default.args = {
  filled: true,
};
