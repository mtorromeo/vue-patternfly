<template>
  <component
    :is="component"
    :class="classesFromBreakpointProps($props, [
      'spacer',
      'shrink',
      'flex',
      'alignSelf',
      'grow',
      'align',
      'fullWidth',
    ], styles)"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { classesFromBreakpointProps } from '../../breakpoints';
import type { SpacerBreakpointProps, GrowBreakpointProps, ShrinkBreakpointProps, FlexBreakpointProps, DirectionBreakpointProps, AlignSelfBreakpointProps, AlignBreakpointProps, FullWidthBreakpointProps } from '../../breakpoints';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFlexItem',
});

export interface Props extends
  SpacerBreakpointProps,
  GrowBreakpointProps,
  ShrinkBreakpointProps,
  FlexBreakpointProps,
  DirectionBreakpointProps,
  AlignSelfBreakpointProps,
  AlignBreakpointProps,
  FullWidthBreakpointProps,
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
