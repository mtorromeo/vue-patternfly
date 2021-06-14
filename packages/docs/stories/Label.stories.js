import PfLabel from '../../core/src/components/Label.vue';

export default {
  title: "Components/Label",
  component: PfLabel,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "blue",
          "cyan",
          "green",
          "orange",
          "purple",
          "red",
          "grey",
        ],
      },
    },
    variant: { control: { type: "select", options: ["outline", "filled"] } },
    tooltipPosition: { control: { type: "select", options: ['auto', 'top', 'bottom', 'left', 'right'] } },
    onClose: {},
  },
};

const Template = ({label, ...args}) => ({
  components: { PfLabel },
  setup() {
    return { args, label };
  },
  template: '<pf-label v-bind="args">{{ label }}</pf-label>',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};

export const Truncated = Default.bind({});
Truncated.args = {
  ...Default.args,
  label: "Label is too long to fit in the label",
  truncated: true,
  tooltipPosition: "right",
};

export const WithClose = Default.bind({});
WithClose.args = {
  ...Default.args,
  close: true,
};
