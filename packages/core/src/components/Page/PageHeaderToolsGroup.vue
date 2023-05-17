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

defineOptions({
  name: 'PfPageHeaderToolsGroup',
});

defineProps<VisibilityBreakpointProps>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
