import { h } from 'vue';
import PfBadge from '../Badge';
import PfToggle from './Toggle';
import CaretDownIcon from '@vue-patternfly/icons/dist/esm/icons/caret-down-icon';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

export default {
  name: 'PfBadgeToggle',

  props: {
    plain: {
      type: Boolean,
      default: true,
    },

    badge: {
      type: Object,
      default: () => ({
        read: true,
      }),
    },
  },

  render() {
    return h(
      PfToggle,
      {
        plain: this.plain,
      },
      {
        default: () => h(PfBadge, this.badge, {
          default: () => [
            this.$slots.default(),
            h('span', { class: styles.dropdownToggleIcon }, h(CaretDownIcon)),
          ],
        }),
      },
    );
  },
};
