import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import {h, mergeProps} from 'vue';

const PfDropdownGroup = (props, {slots}) =>
  h('section', mergeProps({class: styles.dropdownGroup}, props), [
    slots.label && h('h1', {
      class: styles.dropdownGroupTitle,
      'aria-hidden': '',
    }, slots.label()),
    h('ul', {role: 'none'}, slots.default()),
  ]);

export default PfDropdownGroup;
