<template>
  <div :class="`${styles.menuSearch}-input`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';

/** Wraps the search input inside a pf-menu-search */
defineOptions({
  name: 'PfMenuSearchInput',
});

interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  /** The search input, like a pf-search-input */
  default?: (props?: Record<never, never>) => any;
}>();
</script>
