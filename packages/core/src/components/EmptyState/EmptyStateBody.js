import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h } from 'vue';

export default {
  name: 'PfEmptyStateBody',

  render() {
    return h('div', { class: styles.emptyStateBody }, this.$slots);
  },
};
