import { PfChip } from "@vue-patternfly/core/src/components/ChipGroup";
import PfBadge from "@vue-patternfly/core/src/components/Badge";

export default {
  title: "Components/Chip",
  component: PfChip,
};

const Template = ({ text, ...args }) => ({
  components: { PfChip },
  setup() {
    return { args, text };
  },
  template: `
    <pf-chip v-bind="args">{{ text }}</pf-chip>
  `,
});

export const Simple = Template.bind({});
Simple.args = {
  text: 'Chip',
};

export const Long = Template.bind({});
Long.args = {
  text: 'Really long chip that goes on and on',
};

export const WithBadge = ({ text, ...args }) => ({
  components: { PfChip, PfBadge },
  setup() {
    return { args, text };
  },
  template: `
    <pf-chip v-bind="args">
      {{ text }}
      <pf-badge read>00</pf-badge>
    </pf-chip>
  `,
});
WithBadge.args = {
  text: 'Chip',
};
