import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h, mergeProps } from 'vue';

const PfEmptyStateSecondaryActions = (props, { slots, attrs }) => h('div', mergeProps({
  class: [styles.emptyStateSecondary],
}, attrs), slots);

PfEmptyStateSecondaryActions.inheritAttrs = false;

export default PfEmptyStateSecondaryActions;
