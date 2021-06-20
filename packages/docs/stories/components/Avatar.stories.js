import PfAvatar from '@vue-patternfly/core/src/components/Avatar.vue';
import avatarImg from '../../examples/avatar.svg';

export default {
  title: 'Components/Avatar',
  component: PfAvatar,
};

export const Avatar = (args) => ({
  components: { PfAvatar },
  setup() {
    return { args };
  },
  template: `<pf-avatar v-bind="args" />`,
});
Avatar.args = {
  src: avatarImg,
  alt: 'avatar',
};
