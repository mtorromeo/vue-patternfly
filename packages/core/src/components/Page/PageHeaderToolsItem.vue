<template>
  <div
    :class="[
      styles.pageHeaderToolsItem,
      classesFromBreakpointProps($props, ['visibility'], styles, { short: true }),
      {
        [styles.modifiers.selected]: selected,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { type VisibilityBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPageHeaderToolsItem',
});

export interface Props extends VisibilityBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  selected?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
