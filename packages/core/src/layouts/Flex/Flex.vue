<template>
  <component
    :is="component"
    :class="[styles.flex, classesFromBreakpointProps($props, [
      'spacer',
      'spaceItems',
      'grow',
      'shrink',
      'flex',
      'direction',
      'alignItems',
      'alignContent',
      'alignSelf',
      'align',
      'justifyContent',
      'display',
      'fullWidth',
      'flexWrap',
    ], styles)]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { classesFromBreakpointProps } from '../../breakpoints';
import type { SpacerBreakpointProps, SpaceItemsBreakpointProps, GrowBreakpointProps, ShrinkBreakpointProps, FlexBreakpointProps, DirectionBreakpointProps, AlignItemsBreakpointProps, AlignContentBreakpointProps, AlignSelfBreakpointProps, AlignBreakpointProps, JustifyContentBreakpointProps, DisplayBreakpointProps, FullWidthBreakpointProps, FlexWrapBreakpointProps } from '../../breakpoints';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFlex',
});

export interface Props extends
  SpacerBreakpointProps,
  SpaceItemsBreakpointProps,
  GrowBreakpointProps,
  ShrinkBreakpointProps,
  FlexBreakpointProps,
  DirectionBreakpointProps,
  AlignItemsBreakpointProps,
  AlignContentBreakpointProps,
  AlignSelfBreakpointProps,
  AlignBreakpointProps,
  JustifyContentBreakpointProps,
  DisplayBreakpointProps,
  FullWidthBreakpointProps,
  FlexWrapBreakpointProps,
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
