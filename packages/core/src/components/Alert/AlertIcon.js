import styles from '@patternfly/react-styles/css/components/Alert/alert';

import {h, mergeProps} from 'vue';
import {CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InfoCircleIcon, BellIcon} from '@vue-patternfly4/icons';

const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon,
};

const PfAlertIcon = (props, {slots, attrs}) => h('div',
mergeProps({
  class: styles.alertIcon,
}, attrs), slots.default ? slots : h(variantIcons[props.variant]));

PfAlertIcon.props = {
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'success', 'danger', 'warning', 'info'].includes(v),
  },
};

PfAlertIcon.inheritAttrs = false;

export default PfAlertIcon;
