import styles from '@patternfly/react-styles/css/components/Alert/alert';

import { defineComponent, h, PropType } from 'vue';
import CheckCircleIcon from '@vue-patternfly/icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@vue-patternfly/icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';

export const AlertVariantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon,
};

export default defineComponent({
  name: 'PfAlertIcon',

  props: {
    variant: {
      type: String as PropType<keyof typeof AlertVariantIcons>,
      default: 'default',
      validator: (v: any) => v in AlertVariantIcons,
    },
  },

  render() {
    return h('div', { class: styles.alertIcon }, this.$slots.default ? this.$slots : h(AlertVariantIcons[this.variant]));
  },
});
