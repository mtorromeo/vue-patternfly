import styles from '@patternfly/react-styles/css/components/Alert/alert';

import { type Component, defineComponent, h, type PropType } from 'vue';
import CircleCheckIcon from '@vue-patternfly/icons/dist/esm/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/dist/esm/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';

export const AlertVariantIcons = {
  success: CircleCheckIcon as Component,
  danger: CircleExclamationIcon as Component,
  warning: TriangleExclamationIcon as Component,
  info: CircleInfoIcon as Component,
  default: BellIcon as Component,
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
