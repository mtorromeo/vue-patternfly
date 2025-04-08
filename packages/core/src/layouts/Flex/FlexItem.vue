<template>
  <component
    :is="component"
    :class="[
      classesFromBreakpointProps($props, ['spacer', 'shrink', 'flex', 'alignSelf', 'grow', 'align', 'fullWidth'], styles),
      classesFromBreakpointProps($props, ['alignSelf'], styles, { short: true })
    ]"
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
import type { SpacerBreakpointProps, GrowBreakpointProps, ShrinkBreakpointProps, FlexBreakpointProps, AlignSelfBreakpointProps, FullWidthBreakpointProps, OrderBreakpointProps } from '../../breakpoints';
import type { Component, HTMLAttributes } from 'vue';
import type { AlignBreakpointProps } from './Flex.vue';

defineOptions({
  name: 'PfFlexItem',
});

export interface Props extends
  AlignBreakpointProps,
  AlignSelfBreakpointProps,
  FlexBreakpointProps,
  FullWidthBreakpointProps,
  GrowBreakpointProps,
  OrderBreakpointProps,
  ShrinkBreakpointProps,
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
