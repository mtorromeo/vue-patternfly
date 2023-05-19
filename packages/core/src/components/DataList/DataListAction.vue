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
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDataListAction',
});

export interface Props extends VisibilityBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  plainButton?: boolean;
}

const props = defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });
</script>
