import styles from '@patternfly/react-styles/css/layouts/Split/split';

import { h, mergeProps } from 'vue';

const PfSplitItem = (props, { slots, attrs }) => h('div', mergeProps({ class: [styles.splitItem, { [styles.modifiers.fill]: props.filled }] }, attrs), slots.default());

PfSplitItem.props = {
  filled: Boolean,
};

PfSplitItem.inheritAttrs = false;

export default PfSplitItem;
