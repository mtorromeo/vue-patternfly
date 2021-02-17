import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export default {
  name: 'PfOverflowMenuContent',

  props: {
    persistent: Boolean,
  },

  inject: {
    isBelowBreakpoint: {
      default: () => ({value: false}),
    },
  },

  render() {
    if (this.isBelowBreakpoint.value && !this.persistent) {
      return null;
    }

    return h('div', mergeProps({
      class: styles.overflowMenuContent,
    }, this.$attrs), {
      default: () => this.$slots.default(),
    });
  },
};
