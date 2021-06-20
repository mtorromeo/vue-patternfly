import PfLabel from '@vue-patternfly/core/src/components/Label.vue';

export default {
  title: 'Components/Label',
  component: PfLabel,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['blue', 'cyan', 'green', 'orange', 'purple', 'red', 'grey'],
    },
    variant: { control: { type: 'select' }, options: ['outline', 'filled'] },
    tooltipPosition: {
      control: { type: 'select' },
      options: ['auto', 'top', 'bottom', 'left', 'right'],
    },
    onClose: {},
  },
};

const Template = ({ sample_label, ...args }) => ({
  components: { PfLabel },
  setup() {
    return { args, sample_label };
  },
  template: '<pf-label v-bind="args">{{ sample_label }}</pf-label>',
});

export const Default = Template.bind({});
Default.args = {
  sample_label: 'Label',
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Default.args,
  sample_label: 'Label is too long to fit in the label',
  truncated: true,
  tooltipPosition: 'right',
};

export const WithClose = Template.bind({});
WithClose.args = {
  ...Default.args,
  close: true,
};
