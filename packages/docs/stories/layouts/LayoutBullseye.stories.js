import PfBullseye from "../../../core/src/layouts/Bullseye";
import {argTypesFromProps} from '../../utils';

export default {
  title: "Layouts/Bullseye",
  component: PfBullseye,
  argTypes: argTypesFromProps(PfBullseye.props),
};

export const Default = (args) => ({
  components: { PfBullseye },
  setup() {
    return { args };
  },
  template: `
    <pf-bullseye>
      Bullseye ◎ layout
    </pf-bullseye>
  `,
});
