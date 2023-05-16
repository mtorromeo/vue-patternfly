<template>
  <div :class="[styles.dataListItemAction, breakpointClasses]">
    <div v-if="plainButton" :class="styles.dataListAction">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { classesFromBreakpointProps, type VisibilityBreakpointProps } from '../../breakpoints';

defineOptions({
  name: 'PfDataListAction',
});

const props = defineProps<{
  plainButton?: boolean;
} & VisibilityBreakpointProps>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });
</script>
