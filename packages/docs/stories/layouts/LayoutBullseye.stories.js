import PfBullseye from '@vue-patternfly/core/src/layouts/Bullseye';

export default {
  title: 'Layouts/Bullseye',
  component: PfBullseye,
};

export const Bullseye = (args) => ({
  components: { PfBullseye },
  setup() {
    return { args };
  },
  template: `
    <pf-bullseye v-bind="args" class="docs-layout-outline">
      Bullseye ◎ layout
    </pf-bullseye>
  `,
});
