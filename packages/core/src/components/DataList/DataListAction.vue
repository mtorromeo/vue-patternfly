<template>
  <div v-bind="(ouiaProps as any)" :class="[styles.dataListItemAction, breakpointClasses]">
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
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListAction',
});

export interface Props extends OUIAProps, VisibilityBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  plainButton?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });
</script>
