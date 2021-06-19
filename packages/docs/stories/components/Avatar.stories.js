import PfAvatar from "@vue-patternfly/core/src/components/Avatar.vue";
import avatarImg from "../../examples/avatar.svg";

export default {
  title: "Components/Avatar",
  component: PfAvatar,
};

export const Default = (args) => ({
  components: { PfAvatar },
  setup() {
    return { args };
  },
  template: `<pf-avatar v-bind="args" />`,
});
Default.args = {
  src: avatarImg,
  alt: "avatar",
};
