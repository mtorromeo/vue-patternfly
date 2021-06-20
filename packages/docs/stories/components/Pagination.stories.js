import { PfPagination } from '@vue-patternfly/core/src/components/Pagination';
import { ref } from 'vue';

export default {
  title: 'Components/Pagination',
  component: PfPagination,
  args: {
    count: 333,
  },
  argTypes: {
    page: {
      control: null,
    },
  },
};

export const Pagination = (args) => ({
  components: { PfPagination },
  setup() {
    delete args.page;
    const page = ref(1);
    return { args, page };
  },
  template: `
    <div>
      <pf-pagination v-model:page="page" v-bind="args" />
    </div>
  `,
});
