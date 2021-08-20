import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h, mergeProps } from 'vue';
import { findChildrenVNodes } from '../../util';

const PfEmptyStateIcon = (props, { slots, attrs }) => {
  if (!props.container) {
    if (!slots.default) {
      return [];
    }

    const children = findChildrenVNodes(slots.default());
    return children.map((e, index) => {
      e.props = mergeProps({
        class: styles.emptyStateIcon,
        'aria-hidden': 'true',
      }, e.props);
      return e;
    });
  }

  return h('div', mergeProps({
    class: [styles.emptyStateIcon],
  }, attrs), slots);
};

PfEmptyStateIcon.props = {
  container: Boolean,
};

PfEmptyStateIcon.inheritAttrs = false;

export default PfEmptyStateIcon;
