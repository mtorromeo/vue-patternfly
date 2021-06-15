import {PfLevel, PfLevelItem} from "../../../core/src/layouts/Level";
import {argTypesFromProps} from '../../utils';

export default {
  title: "Layouts/Level",
  component: PfLevel,
  subcomponents: {PfLevelItem},
  argTypes: argTypesFromProps(PfLevel.props),
};

const Template = (args) => ({
  components: { PfLevel, PfLevelItem },
  setup() {
    return { args };
  },
  template: `
    <pf-level v-bind="args">
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>
  `,
});

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
