import { h, mergeProps } from 'vue';
import PfDropdownItem from '../Dropdown/DropdownItem';

export default {
  name: 'PfOverflowMenuDropdownItem',

  props: {
    shared: Boolean,
    index: {
      type: Number,
      default: null,
    },
  },

  inject: {
    isBelowBreakpoint: {
      default: () => ({ value: false }),
    },
  },

  render() {
    if (!this.isBelowBreakpoint.value && this.shared) {
      return null;
    }

    return h(PfDropdownItem, mergeProps({
      component: 'button',
      index: this.index,
    }, this.$attrs), {
      default: () => this.$slots.default(),
    });
  },
};
