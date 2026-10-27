<template>
  <div :class="[styles.tableExpandableRowContent, { [styles.modifiers.noBackground]: noBackground }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfExpandableRowContent',
});

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>

<script lang="ts">
import type { HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Table/table';

interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating whether the expandable row content has no background. This should be passed in when the parent Td is passed the noPadding prop. */
  noBackground?: boolean;
}
</script>
