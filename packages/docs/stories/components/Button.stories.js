import PfButton from '@vue-patternfly/core/src/components/Button';

export default {
  title: 'Components/Button',
  component: PfButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'danger',
        'warning',
        'link',
        'plain',
        'control',
      ],
    },
    iconPosition: { control: { type: 'select' }, options: ['left', 'right'] },
  },
};

const Template = ({ sample_label, ...args }) => ({
  components: { PfButton },
  setup() {
    return { args, sample_label };
  },
  template: `
    <pf-button v-bind="args">{{ sample_label }}</pf-button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  sample_label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  small: true,
};
