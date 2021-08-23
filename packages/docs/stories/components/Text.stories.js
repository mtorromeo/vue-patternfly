import { PfText } from '@vue-patternfly/core/src/components/Text';
import { TextVariants } from '@vue-patternfly/core/src/components/Text/Text';

export default {
  title: 'Components/Text',
  component: PfText,
  argTypes: {
    component: {
      control: {
        type: 'select',
      },
      options: TextVariants,
    },
  },
};

export const Text = ({ sample_title, ...args }) => ({
  components: { PfText },
  setup() {
    return { args, sample_title };
  },
  template: `<pf-text v-bind="args">{{ sample_title }}</pf-text>`,
});
Text.args = {
  sample_title: 'Title text',
};
