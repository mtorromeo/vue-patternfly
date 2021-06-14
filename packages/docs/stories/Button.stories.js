import PfButton from '../../core/src/components/Button.vue';

export default {
  title: "Components/Button",
  component: PfButton,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "danger",
          "warning",
          "link",
          "plain",
          "control",
        ],
      },
    },
    iconPosition: { control: { type: "select", options: ["left", "right"] } },
  },
};

const Template = (args) => ({
  components: { PfButton },
  setup() {
    const {label, ...props} = args;
    return { args: props, label };
  },
  template: '<pf-button v-bind="args">{{ label }}</pf-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
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
