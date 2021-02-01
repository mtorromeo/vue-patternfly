import styles from '@patternfly/react-styles/css/components/Badge/badge';

import {h, mergeProps} from 'vue';

const PfBadge = (props, {slots, attrs}) => h('span', mergeProps({
  class: [styles.badge, {
    [styles.modifiers.read]: props.read,
    [styles.modifiers.unread]: !props.read,
  }],
}, attrs), slots.default());

PfBadge.props = {
  read: Boolean,
};

PfBadge.inheritAttrs = false;

export default PfBadge;
