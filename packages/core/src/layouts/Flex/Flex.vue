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

import { type SpacerBreakpointProps, classesFromBreakpointProps, type SpaceItemsBreakpointProps, type GrowBreakpointProps, type ShrinkBreakpointProps, type FlexBreakpointProps, type DirectionBreakpointProps, type AlignItemsBreakpointProps, type AlignContentBreakpointProps, type AlignSelfBreakpointProps, type AlignBreakpointProps, type JustifyContentBreakpointProps, type DisplayBreakpointProps, type FullWidthBreakpointProps, type FlexWrapBreakpointProps } from '../../breakpoints';
import type { Component } from 'vue';

defineOptions({
  name: 'PfFlex',
});

withDefaults(defineProps<
  {
    component?: string | Component;
  }
  & SpacerBreakpointProps
  & SpaceItemsBreakpointProps
  & GrowBreakpointProps
  & ShrinkBreakpointProps
  & FlexBreakpointProps
  & DirectionBreakpointProps
  & AlignItemsBreakpointProps
  & AlignContentBreakpointProps
  & AlignSelfBreakpointProps
  & AlignBreakpointProps
  & JustifyContentBreakpointProps
  & DisplayBreakpointProps
  & FullWidthBreakpointProps
  & FlexWrapBreakpointProps
>(), {
  component: 'div',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
