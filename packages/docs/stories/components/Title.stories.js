import PfTitle from '@vue-patternfly/core/src/components/Title.vue';

export default {
  title: 'Components/Title',
  component: PfTitle,
  argTypes: {
    h: { control: { type: 'select' }, options: [1, 2, 3, 4, 5, 6] },
    size: {
      control: {
        type: 'select',
      },
      options: ['', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
};

export const Title = ({ sample_title, ...args }) => ({
  components: { PfTitle },
  setup() {
    return { args, sample_title };
  },
  template: `<pf-title v-bind="args">{{ sample_title }}</pf-title>`,
});
Title.args = {
  sample_title: 'Title text',
};
