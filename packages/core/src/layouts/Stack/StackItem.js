import styles from '@patternfly/react-styles/css/layouts/Stack/stack';

import {h, mergeProps} from 'vue';

const StackItem = (props, {slots, attrs}) => h('div', mergeProps({class: [styles.stackItem, {[styles.modifiers.fill]: props.filled}]}, attrs), slots.default());

StackItem.props = {
  filled: Boolean,
};

StackItem.inheritAttrs = false;

export default StackItem;
