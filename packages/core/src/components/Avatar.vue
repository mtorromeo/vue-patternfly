<template>
  <img
    :class="[styles.avatar, {
      [styles.modifiers.light]: border === 'light',
      [styles.modifiers.dark]: border === 'dark',
    }]"
  >
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import type { ImgHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfAvatar',
});

export interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
  /** Border to add */
  border: 'light' | 'dark' | null;
}

defineProps<Props>();
</script>
