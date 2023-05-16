<template>
  <img
    :class="[styles.avatar, {
      [styles.modifiers.light]: border === 'light',
      [styles.modifiers.dark]: border === 'dark',
    }]"
    :src="src"
    :alt="alt"
  >
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';

defineOptions({
  name: 'PfAvatar',
});

defineProps<{
  /** Attribute that specifies the URL of the image for the Avatar. */
  src?: string;
  /** Attribute that specifies the alternate text of the image for the Avatar. */
  alt: string;
  /** Border to add */
  border: 'light' | 'dark' | null;
}>();
</script>
