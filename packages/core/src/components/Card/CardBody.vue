<template>
  <component :is="component" :class="[styles.cardBody, { [styles.modifiers.noFill]: !filled }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfCardBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. */
  component?: string | Component;

  /** Enables the body Content to fill the height of the card. */
  filled?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
