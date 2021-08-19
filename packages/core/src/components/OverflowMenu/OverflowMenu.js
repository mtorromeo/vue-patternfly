import { h, mergeProps, provide, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

import mdBreakpoint from '@patternfly/react-tokens/dist/js/global_breakpoint_md';
import lgBreakpoint from '@patternfly/react-tokens/dist/js/global_breakpoint_lg';
import xlBreakpoint from '@patternfly/react-tokens/dist/js/global_breakpoint_xl';
import xl2Breakpoint from '@patternfly/react-tokens/dist/js/global_breakpoint_2xl';

const breakpoints = {
  md: mdBreakpoint,
  lg: lgBreakpoint,
  xl: xlBreakpoint,
  '2xl': xl2Breakpoint,
};

export default {
  name: 'PfOverflowMenu',

  props: {
    breakpoint: {
      type: String,
      required: true,
      validator: v => v in breakpoints,
    },
  },

  setup() {
    const isBelowBreakpoint = ref(false);
    provide('isBelowBreakpoint', isBelowBreakpoint);

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
        const breakpointPx = breakpoints[this.breakpoint];
        const breakpointWidth = Number(breakpointPx.value.replace('px', ''));
        this.isBelowBreakpoint = width < breakpointWidth;
      },
      immediate: true,
    },
  },
};
