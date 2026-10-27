<template>
  <div ref="containerRef" :class="styles.scrollOuterWrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, useTemplateRef } from 'vue';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { TableScrollContainerKey } from './common';

defineOptions({
  name: 'PfOuterScrollContainer',
});

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(TableScrollContainerKey, true);

const container = useTemplateRef('containerRef');

defineExpose({
  container,
});
</script>

<script lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>
