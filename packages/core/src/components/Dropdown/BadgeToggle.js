import {h} from 'vue';
import PfBadge from '../Badge';
import PfToggle from './Toggle';
import CaretDownIcon from '@vue-patternfly/icons/dist/esm/icons/caret-down-icon';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

const PfBadgeToggle = (props, {slots}) =>
  h(PfToggle, {
      plain: props.plain,
    },
    {
      default: () => h(PfBadge, props.badge, {
        default: () => [
          slots.default(),
          h('span', {class: styles.dropdownToggleIcon}, h(CaretDownIcon)),
        ],
      }),
    },
  );

PfBadgeToggle.props = {
  plain: {
    type: Boolean,
    default: true,
  },
  badge: {
    type: Object,
    default: () => {},
  },
};

export default PfBadgeToggle;
