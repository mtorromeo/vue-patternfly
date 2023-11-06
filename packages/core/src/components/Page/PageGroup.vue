<template>
  <div
    :class="[
      styles.pageMainGroup,
      ...classesFromBreakpointProps($props, [
        'sticky',
      ], styles, { vertical: true }),
      {
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
      }
    ]"
    :tabindex="overflowScroll ? 0 : undefined"
    :role="overflowScroll ? 'region' : undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPageGroup',
});

export interface Props extends StickyBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  shadowTop?: boolean;
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
  overflowScroll?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
