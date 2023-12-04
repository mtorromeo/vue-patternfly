<template>
  <div :class="styles.menuSearch">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfMenuInput',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
