import styles from '@patternfly/react-styles/css/components/Alert/alert';

import { h, mergeProps } from 'vue';
import CheckCircleIcon from '@vue-patternfly/icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@vue-patternfly/icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';

const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon,
};

const PfAlertIcon = (props, { slots, attrs }) => h('div',
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
