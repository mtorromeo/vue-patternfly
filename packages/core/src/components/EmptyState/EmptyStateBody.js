import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h, mergeProps } from 'vue';

const PfEmptyStateBody = (props, { slots, attrs }) => h('div', mergeProps({
  class: [styles.emptyStateBody],
}, attrs), slots);

PfEmptyStateBody.inheritAttrs = false;

export default PfEmptyStateBody;
