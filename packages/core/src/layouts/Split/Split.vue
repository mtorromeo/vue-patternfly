<template>
  <component
    :is="component"
    :class="[styles.split, {
      [styles.modifiers.gutter]: gutter,
      [styles.modifiers.wrap]: wrappable,
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfSplit',
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;

  /** Adds space between children. */
  gutter?: boolean;
  /** Allows children to wrap */
  wrappable?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
