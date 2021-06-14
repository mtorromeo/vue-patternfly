import PfDivider from "../../core/src/components/Divider";
import {argTypesFromProps} from '../utils';

export default {
  title: "Components/Divider",
  component: PfDivider,
  argTypes: argTypesFromProps(PfDivider.props),
};

export const Default = (args) => ({
  components: { PfDivider },
  setup() {
    return { args };
  },
  template: '<pf-divider />',
});
