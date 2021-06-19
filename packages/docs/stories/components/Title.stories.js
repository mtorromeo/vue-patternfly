import PfTitle from "@vue-patternfly/core/src/components/Title.vue";

export default {
  title: "Components/Title",
  component: PfTitle,
  argTypes: {
    h: { control: { type: "select", options: [1, 2, 3, 4, 5, 6] } },
    size: {
      control: {
        type: "select",
        options: ["", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      },
    },
  },
};

const Template = ({ title, ...args }) => ({
  components: { PfTitle },
  setup() {
    return { args, title };
  },
  template: `<pf-title v-bind="args">{{ title }}</pf-title>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title text",
};
