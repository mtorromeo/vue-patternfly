import styles from '@patternfly/react-styles/css/layouts/Stack/stack';

import {h, mergeProps} from 'vue';

const PfStackItem = (props, {slots, attrs}) => h('div', mergeProps({class: [styles.stackItem, {[styles.modifiers.fill]: props.filled}]}, attrs), slots.default());

PfStackItem.props = {
  filled: Boolean,
};

PfStackItem.inheritAttrs = false;

export default PfStackItem;
