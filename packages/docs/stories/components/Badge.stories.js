import PfBadge from '@vue-patternfly/core/src/components/Badge';

export default {
  title: "Components/Badge",
  component: PfBadge,
};

const Template = ({label, ...args}) => ({
  components: { PfBadge },
  setup() {
    return { args, label };
  },
  template: `<pf-badge v-bind="args">{{ label }}</pf-badge>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "24",
};
