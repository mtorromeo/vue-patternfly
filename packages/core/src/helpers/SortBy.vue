<template>
  <slot />
</template>

<script lang="ts" setup>
/**
 * Component that is used in combination with `Sort` to assign a weight to use as a sorting factor.
 */

import type { VNode } from 'vue';

defineProps<{
  weight: number;
}>();

defineSlots<{
  default: (props: Record<never, never>) => VNode[];
}>();
</script>
