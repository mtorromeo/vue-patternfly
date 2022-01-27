import styles from '@patternfly/react-styles/css/components/Badge/badge';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfBadge',

  props: {
    read: Boolean,
  },

  render() {
    return h('span', {
      class: [styles.badge, {
        [styles.modifiers.read]: this.read,
        [styles.modifiers.unread]: !this.read,
      }],
    }, this.$slots);
  },
});
