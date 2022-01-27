import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { defineComponent, h, mergeProps } from 'vue';

export default defineComponent({
  name: 'PfDropdownGroup',

  render() {
    return h('section', mergeProps({ class: styles.dropdownGroup }, this.$props), [
      this.$slots.label && h('h1', {
        class: styles.dropdownGroupTitle,
        'aria-hidden': '',
      }, this.$slots.label()),
      h('ul', { role: 'none' }, this.$slots.default()),
    ]);
  },
});
