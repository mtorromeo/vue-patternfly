<template>
  <component :is="component">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLevelItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
