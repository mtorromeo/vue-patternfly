<template>
  <div
    :class="[
      styles.pageHeaderToolsGroup,
      classesFromBreakpointProps($props, ['visibility'], styles, { short: true }),
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
  name: 'PfPageHeaderToolsGroup',
});

export interface Props extends VisibilityBreakpointProps, /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
