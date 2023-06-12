<template>
  <div :class="styles.tooltipArrow">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTooltipArrow',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
