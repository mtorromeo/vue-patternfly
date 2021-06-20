import styles from '@patternfly/react-styles/css/components/Select/select';

import { h, mergeProps } from 'vue';

export default {
  name: 'PfSelectGroup',

  props: {
    label: {
      type: String,
      default: '',
    },
  },

  inject: ['select'],

  render() {
    let children;
    if (this.select.variant === 'checkbox') {
      children = this.$slots.default();
    } else {
      children = h('ul', { role: 'listbox' }, this.$slots.default());
    }

    return h('div', mergeProps({
      class: styles.selectMenuGroup,
    }, this.$attrs), [
      h('div', { class: styles.selectMenuGroupTitle }, this.label),
      children,
    ]);
  },
};
