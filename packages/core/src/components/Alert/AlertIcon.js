import styles from '@patternfly/react-styles/css/components/Alert/alert';

import { h } from 'vue';
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

export default {
  name: 'PfAlertIcon',

  props: {
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'success', 'danger', 'warning', 'info'].includes(v),
    },
  },

  render() {
    return h('div', { class: styles.alertIcon }, this.$slots.default ? this.$slots : h(variantIcons[this.variant]));
  },
};
