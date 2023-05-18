<template>
  <render />
</template>

<script lang="ts" setup>
/**
 * Component that can reorder its children.
 * To determine the order of the children you have to wrap them with the `SortBy` component and assigning an appropriate `weight` prop.
 * Child node that are found to not be wrapper with `SortBy` are assigned a weight o `0`.
 */

import type { VNode } from 'vue';
import { vnodeTypeIsComponent } from "../util";

const props = defineProps<{
  reverse?: boolean;
}>();

const slots = defineSlots<{
  default: (props: Record<never, never>) => VNode[];
}>();

function render() {
  const children = slots.default({});

  children.sort((a, b) => {
    const aWeight = (vnodeTypeIsComponent(a.type) && (a.type.name || a.type.__name) === 'SortBy') ? (a.props?.weight ?? 0) : 0;
    const bWeight = (vnodeTypeIsComponent(b.type) && (b.type.name || b.type.__name) === 'SortBy') ? (b.props?.weight ?? 0) : 0;
    return (aWeight === bWeight
      ? 0
      : aWeight > bWeight
        ? 1
        : -1) * (props.reverse ? -1 : 1);
  });

  return children;
}
</script>
