<template>
  <caption :class="styles.tableCaption">
    <slot />
  </caption>
</template>

<script setup lang="ts">
import styles from '@patternfly/react-styles/css/components/Table/table';

defineOptions({
  name: 'PfCaption',
});

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>

<script lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>
