import { defineComponent, h, inject, mergeProps } from 'vue';
import PfDropdownItem from '../Dropdown/DropdownItem.vue';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu';

export default defineComponent({
  name: 'PfOverflowMenuDropdownItem',

  props: {
    shared: Boolean,
    index: {
      type: Number,
      default: null,
    },
  },

  setup() {
    return {
      isBelowBreakpoint: inject(OverflowMenuIsBelowBreakpointKey, false),
    };
  },

  render() {
    if (!this.isBelowBreakpoint && this.shared) {
      return null;
    }

    return h(PfDropdownItem, mergeProps({
      component: 'button',
      index: this.index,
    }, this.$attrs), this.$slots);
  },
});
