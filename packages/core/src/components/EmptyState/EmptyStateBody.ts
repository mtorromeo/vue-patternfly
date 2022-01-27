import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfEmptyStateBody',

  render() {
    return h('div', { class: styles.emptyStateBody }, this.$slots);
  },
});
