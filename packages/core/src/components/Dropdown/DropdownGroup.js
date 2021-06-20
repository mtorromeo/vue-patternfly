import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { h, mergeProps } from 'vue';

export default {
  name: 'PfDropdownGroup',

  inheritAttrs: true,

  render() {
    return h('section', mergeProps({ class: styles.dropdownGroup }, this.$props), [
      this.$slots.label && h('h1', {
        class: styles.dropdownGroupTitle,
        'aria-hidden': '',
      }, this.$slots.label()),
      h('ul', { role: 'none' }, this.$slots.default()),
    ]);
  },
};
