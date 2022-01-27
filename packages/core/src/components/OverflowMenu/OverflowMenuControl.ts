import { defineComponent, h, inject } from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu';

export default defineComponent({
  name: 'PfOverflowMenuControl',

  props: {
    additionalOptions: Boolean,
  },

  setup() {
    return {
      isBelowBreakpoint: inject(OverflowMenuIsBelowBreakpointKey, false),
    };
  },

  render() {
    if (!this.isBelowBreakpoint && !this.additionalOptions) {
      return null;
    }

    return h('div', { class: styles.overflowMenuControl }, this.$slots);
  },
});
