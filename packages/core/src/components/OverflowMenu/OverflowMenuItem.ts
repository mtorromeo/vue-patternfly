import { defineComponent, h, inject, mergeProps } from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu';

export default defineComponent({
  name: 'PfOverflowMenuItem',

  props: {
    persistent: Boolean,
  },

  setup() {
    return {
      isBelowBreakpoint: inject(OverflowMenuIsBelowBreakpointKey, false),
    };
  },

  render() {
    if (this.isBelowBreakpoint && !this.persistent) {
      return null;
    }

    return h('div', mergeProps({
      class: styles.overflowMenuItem,
    }, this.$attrs), this.$slots);
  },
});
