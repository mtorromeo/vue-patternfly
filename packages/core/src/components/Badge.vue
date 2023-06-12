<template>
  <span
    :class="[styles.badge, {
      [styles.modifiers.read]: read,
      [styles.modifiers.unread]: !read,
    }]">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Badge/badge';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBadge',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  read?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
