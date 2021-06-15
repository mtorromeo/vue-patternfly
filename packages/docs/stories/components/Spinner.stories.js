import PfSpinner from "../../../core/src/components/Spinner.vue";

export default {
  title: "Components/Spinner",
  component: PfSpinner,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
  },
};

const Template = (args) => ({
  components: { PfSpinner },
  setup() {
    return { args };
  },
  template: "<pf-spinner />",
});

export const Default = Template.bind({});
