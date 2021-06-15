import { PfChip, PfChipGroup } from "../../../core/src/components/ChipGroup";
import { argTypesFromProps } from "../../utils";

export default {
  title: "Components/Chip Group",
  component: PfChipGroup,
  subcomponents: { PfChip },
  argTypes: argTypesFromProps(PfChipGroup.props),
};

const Template = ({ chip1, chip2, chip3, chip4, chip5, ...args }) => ({
  components: { PfChipGroup, PfChip },
  setup() {
    return { args, chip1, chip2, chip3, chip4, chip5 };
  },
  template: `
    <pf-chip-group v-bind="args">
      <pf-chip>{{ chip1 }}</pf-chip>
      <pf-chip>{{ chip2 }}</pf-chip>
      <pf-chip>{{ chip3 }}</pf-chip>
      <pf-chip>{{ chip4 }}</pf-chip>
      <pf-chip>{{ chip5 }}</pf-chip>
    </pf-chip-group>
  `,
});

const chips = {
  chip1: "Chip one",
  chip2: "Really long chip that goes on and on",
  chip3: "Chip three",
  chip4: "Chip four",
  chip5: "Chip five",
};

export const SimpleInline = Template.bind({});
SimpleInline.args = {
  ...chips,
};

export const SimpleCategory = Template.bind({});
SimpleCategory.args = {
  ...chips,
  category: "Category One",
};

export const CategoryRemovable = Template.bind({});
CategoryRemovable.args = {
  ...chips,
  category: "Category has a very long name",
  closable: true,
};
