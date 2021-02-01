import styles from '@patternfly/react-styles/css/layouts/Split/split';

import {h, mergeProps} from 'vue';

const SplitItem = (props, {slots, attrs}) => h('div', mergeProps({class: [styles.splitItem, {[styles.modifiers.fill]: props.filled}]}, attrs), slots.default());

SplitItem.props = {
  filled: Boolean,
};

SplitItem.inheritAttrs = false;

export default SplitItem;
