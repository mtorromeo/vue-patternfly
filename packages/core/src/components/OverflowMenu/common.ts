import type { InjectionKey, Ref } from 'vue';

/** Whether the overflow menu is below its breakpoint, collapsing its content into the control */
export const OverflowMenuIsBelowBreakpointKey = Symbol('OverflowMenuIsBelowBreakpointKey') as InjectionKey<
  Readonly<Ref<boolean>>
>;
