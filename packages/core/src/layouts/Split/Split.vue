<template>
  <component :is="component" :class="[styles.split, { [styles.modifiers.gutter]: gutter }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfSplit',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;
  gutter?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
