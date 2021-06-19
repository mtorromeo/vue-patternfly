import { PfChip } from "@vue-patternfly/core/src/components/ChipGroup";
import PfBadge from "@vue-patternfly/core/src/components/Badge";

export default {
  title: "Components/Chip",
  component: PfChip,
};

const Template = ({ sample_label, ...args }) => ({
  components: { PfChip },
  setup() {
    return { args, sample_label };
  },
  template: `
    <pf-chip v-bind="args">{{ sample_label }}</pf-chip>
  `,
});

export const Simple = Template.bind({});
Simple.args = {
  sample_label: "Chip",
};

export const Long = Template.bind({});
Long.args = {
  sample_label: "Really long chip that goes on and on",
};

export const WithBadge = ({ sample_label, ...args }) => ({
  components: { PfChip, PfBadge },
  setup() {
    return { args, sample_label };
  },
  template: `
    <pf-chip v-bind="args">
      {{ sample_label }}
      <pf-badge read>00</pf-badge>
    </pf-chip>
  `,
});
WithBadge.args = {
  sample_label: "Chip",
};
