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

defineOptions({
  name: 'PfPageHeaderToolsItem',
});

defineProps<{
  selected?: boolean;
} & VisibilityBreakpointProps>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
