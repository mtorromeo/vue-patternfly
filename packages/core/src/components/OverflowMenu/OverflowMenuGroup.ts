import { defineComponent, h, inject, mergeProps, PropType } from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu';

export default defineComponent({
  name: 'PfOverflowMenuGroup',

  props: {
    persistent: Boolean,
    type: {
      type: String as PropType<'button' | 'icon' | null>,
      default: '',
      validator: (v: any) => [null, '', 'button', 'icon'].includes(v),
    },
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
      class: [
        styles.overflowMenuGroup, {
          [styles.modifiers.buttonGroup]: this.type === 'button',
          [styles.modifiers.iconButtonGroup]: this.type === 'icon',
        },
      ],
    }, this.$attrs), {
      default: () => this.$slots.default(),
    });
  },
});
