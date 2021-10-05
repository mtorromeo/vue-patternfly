import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h, mergeProps } from 'vue';
import { findChildrenVNodes } from '../../util.ts';

export default {
  name: 'PfEmptyStateIcon',

  props: {
    container: Boolean,
  },

  render() {
    if (!this.container) {
      if (!this.$slots.default) {
        return [];
      }

      const children = findChildrenVNodes(this.$slots.default());
      return children.map((e, index) => {
        e.props = mergeProps({
          class: styles.emptyStateIcon,
          'aria-hidden': 'true',
        }, e.props);
        return e;
      });
    }

    return h('div', { class: styles.emptyStateIcon }, this.$slots);
  },
};
