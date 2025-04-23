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
import type { SpacerBreakpointProps, SpaceItemsBreakpointProps, GrowBreakpointProps, ShrinkBreakpointProps, FlexBreakpointProps, DirectionBreakpointProps, AlignItemsBreakpointProps, AlignContentBreakpointProps, AlignSelfBreakpointProps, AlignBreakpointProps, JustifyContentBreakpointProps, DisplayBreakpointProps, FullWidthBreakpointProps, FlexWrapBreakpointProps, GapBreakpointProps, RowGapBreakpointProps, ColumnGapBreakpointProps, OrderBreakpointProps } from '../../breakpoints';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFlex',
});

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
