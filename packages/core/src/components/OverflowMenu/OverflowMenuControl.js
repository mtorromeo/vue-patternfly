import { h, mergeProps } from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export default {
  name: 'PfOverflowMenuControl',

  props: {
    additionalOptions: Boolean,
  },

  inject: {
    isBelowBreakpoint: {
      default: () => ({ value: false }),
    },
  },

  render() {
    if (!this.isBelowBreakpoint.value && !this.additionalOptions) {
      return null;
    }

    return h('div', mergeProps({
      class: styles.overflowMenuControl,
    }, this.$attrs), this.$slots);
  },
};
