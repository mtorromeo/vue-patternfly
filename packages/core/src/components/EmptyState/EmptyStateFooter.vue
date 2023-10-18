<template>
  <div :class="styles.emptyStateFooter">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfEmptyStateFooter',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
