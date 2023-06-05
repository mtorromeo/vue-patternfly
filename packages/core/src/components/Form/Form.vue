<template>
  <component
    :is="component"
    :class="[styles.form, {
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.limitWidth]: widthLimited,
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfForm',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;
  horizontal?: boolean;
  widthLimited?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'form',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
