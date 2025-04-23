<template>
  <component :is="component" :class="[styles.level, { [styles.modifiers.gutter]: gutter }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Level/level';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLevel',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;

  /** Adds space between children. */
  gutter?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
