import {
  PfChip,
  PfChipGroup,
} from '@vue-patternfly/core/src/components/ChipGroup';

export default {
  title: 'Components/Chip Group',
  component: PfChipGroup,
  subcomponents: { PfChip },
};

const Template = ({
  sample_chip1,
  sample_chip2,
  sample_chip3,
  sample_chip4,
  sample_chip5,
  ...args
}) => ({
  components: { PfChipGroup, PfChip },
  setup() {
    return {
      args,
      sample_chip1,
      sample_chip2,
      sample_chip3,
      sample_chip4,
      sample_chip5,
    };
  },
  template: `
    <pf-chip-group v-bind="args">
      <pf-chip>{{ sample_chip1 }}</pf-chip>
      <pf-chip>{{ sample_chip2 }}</pf-chip>
      <pf-chip>{{ sample_chip3 }}</pf-chip>
      <pf-chip>{{ sample_chip4 }}</pf-chip>
      <pf-chip>{{ sample_chip5 }}</pf-chip>
    </pf-chip-group>
  `,
});

const chips = {
  sample_chip1: 'Chip one',
  sample_chip2: 'Really long chip that goes on and on',
  sample_chip3: 'Chip three',
  sample_chip4: 'Chip four',
  sample_chip5: 'Chip five',
};

export const SimpleInline = Template.bind({});
SimpleInline.args = {
  ...chips,
};

export const SimpleCategory = Template.bind({});
SimpleCategory.args = {
  ...chips,
  category: 'Category One',
};

export const CategoryRemovable = Template.bind({});
CategoryRemovable.args = {
  ...chips,
  category: 'Category has a very long name',
  closable: true,
};
