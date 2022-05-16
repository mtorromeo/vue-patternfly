import { defineComponent, h, InjectionKey, mergeProps, PropType, provide, Ref, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { globalBreakpoints } from '../Toolbar/ToolbarUtils';

export const OverflowMenuIsBelowBreakpointKey = Symbol('OverflowMenuIsBelowBreakpointKey') as InjectionKey<Ref<boolean> | boolean>;

export default defineComponent({
  name: 'PfOverflowMenu',

  props: {
    breakpoint: {
      type: String as PropType<keyof typeof globalBreakpoints>,
      required: true,
      validator: (v: any) => v in globalBreakpoints,
    },
  },

  setup() {
    const isBelowBreakpoint = ref(false);
    provide(OverflowMenuIsBelowBreakpointKey, isBelowBreakpoint);

    const { width: windowWidth } = useWindowSize();

    return {
      windowWidth,
      isBelowBreakpoint,
    };
  },

  render() {
    return h('div', mergeProps({
      class: styles.overflowMenu,
    }, this.$attrs), this.$slots);
  },

  watch: {
    windowWidth: {
      handler(width) {
        const breakpointPx = globalBreakpoints[this.breakpoint];
        const breakpointWidth = Number(breakpointPx.toString().replace('px', ''));
        this.isBelowBreakpoint = width < breakpointWidth;
      },
      immediate: true,
    },
  },
});