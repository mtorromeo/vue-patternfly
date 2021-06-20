import {
  PfNavigation,
  PfPagination,
  PfPaginationOptionsMenu,
} from "@vue-patternfly/core/src/components/Pagination";
import { ref } from "vue";

export default {
  title: "Components/Pagination",
  component: PfPagination,
  subcomponents: { PfNavigation, PfPaginationOptionsMenu },
  // argTypes: {
  //   theme: {
  //     control: {
  //       type: "select",
  //       options: ["dark", "light"],
  //     },
  //   },
  //   variant: {
  //     control: {
  //       type: "select",
  //       options: ["default", "horizontal", "tertiary"],
  //     },
  //   },
  // },
};

export const Default = (args) => ({
  components: { PfPagination },
  setup() {
    const activeLink = ref("link1");
    return { args, activeLink };
  },
  template: `
    <pf-pagination v-bind="args" />
  `,
  methods: {
    selectLink(e, groupid, itemid) {
      this.activeLink = itemid;
    },
  },
});
Default.args = {
  count: 333,
};
