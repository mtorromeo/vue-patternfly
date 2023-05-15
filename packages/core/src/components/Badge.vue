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

defineOptions({
  name: 'PfBadge',
});

defineProps<{
  read?: boolean;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
