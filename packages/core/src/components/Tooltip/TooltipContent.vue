<template>
  <div
    :class="[styles.tooltipContent, {
      [styles.modifiers.textAlignLeft]: leftAligned,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTooltipContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  leftAligned?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
