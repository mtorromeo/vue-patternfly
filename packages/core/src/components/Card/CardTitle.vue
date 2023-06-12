<template>
  <component :is="component" :class="styles.cardTitle">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfCardTitle',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. */
  component?: string | Component;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
