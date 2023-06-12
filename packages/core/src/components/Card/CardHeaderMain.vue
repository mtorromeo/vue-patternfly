<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfCardHeaderMain',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
