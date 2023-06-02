<template>
  <component :is="component" :class="styles.bullseye">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import type { Component, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBullseye',
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
