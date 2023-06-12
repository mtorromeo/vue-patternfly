<template>
  <component :is="component" :class="[styles.stackItem, { [styles.modifiers.fill]: filled }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfStackItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;
  filled?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
