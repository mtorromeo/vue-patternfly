import PfBadge from "@vue-patternfly/core/src/components/Badge";

export default {
  title: "Components/Badge",
  component: PfBadge,
};

export const Default = ({ sample_label, ...args }) => ({
  components: { PfBadge },
  setup() {
    return { args, sample_label };
  },
  template: `<pf-badge v-bind="args">{{ sample_label }}</pf-badge>`,
});
Default.args = {
  sample_label: "24",
};
