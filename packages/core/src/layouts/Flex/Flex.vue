<template>
  <component
    :is="component"
    :class="[styles.flex, classesFromBreakpointProps($props, [
      'align',
      'alignContent',
      'alignItems',
      'alignSelf',
      'columnGap',
      'flex',
      'fullWidth',
      'gap',
      'grow',
      'justifyContent',
      'rowGap',
      'shrink',
      'spaceItems',
      'spacer',
    ], styles), classesFromBreakpointProps($props, [
      'direction',
      'display',
      'flexWrap',
    ], styles, { short: true })]"
    :style="{
      ...cssVarsFromBreakpointProps($props, 'order', flexToken.l_flex_item_Order.name),
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';
import * as flexToken from '@patternfly/react-tokens/dist/esm/l_flex_item_Order';

import { classesFromBreakpointProps, cssVarsFromBreakpointProps } from '../../breakpoints';
import type { SpacerBreakpointProps, SpaceItemsBreakpointProps, GrowBreakpointProps, ShrinkBreakpointProps, FlexBreakpointProps, DirectionBreakpointProps, AlignItemsBreakpointProps, AlignContentBreakpointProps, AlignSelfBreakpointProps, JustifyContentBreakpointProps, DisplayBreakpointProps, FullWidthBreakpointProps, FlexWrapBreakpointProps, GapBreakpointProps, RowGapBreakpointProps, ColumnGapBreakpointProps, OrderBreakpointProps } from '../../breakpoints';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFlex',
});

export type AlignBreakpointProps = {
  /** Value to use for margin: auto */
  align?: 'left' | 'right';
  /** Value to use for margin: auto at Sm breakpoint */
  alignSm?: 'left' | 'right';
  /** Value to use for margin: auto at Md breakpoint */
  alignMd?: 'left' | 'right';
  /** Value to use for margin: auto at Lg breakpoint */
  alignLg?: 'left' | 'right';
  /** Value to use for margin: auto at Xl breakpoint */
  alignXl?: 'left' | 'right';
  /** Value to use for margin: auto at 2Xl breakpoint */
  alignXl2?: 'left' | 'right';
}

export interface Props extends
  AlignBreakpointProps,
  AlignContentBreakpointProps,
  AlignItemsBreakpointProps,
  AlignSelfBreakpointProps,
  ColumnGapBreakpointProps,
  DirectionBreakpointProps,
  DisplayBreakpointProps,
  FlexBreakpointProps,
  FlexWrapBreakpointProps,
  FullWidthBreakpointProps,
  GapBreakpointProps,
  GrowBreakpointProps,
  JustifyContentBreakpointProps,
  OrderBreakpointProps,
  RowGapBreakpointProps,
  ShrinkBreakpointProps,
  SpaceItemsBreakpointProps,
  SpacerBreakpointProps,
  /* @vue-ignore */ HTMLAttributes {
    component?: string | Component;
  }

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
