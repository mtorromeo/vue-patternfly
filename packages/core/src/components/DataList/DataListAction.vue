<template>
  <div v-bind="ouiaProps" :class="[styles.dataListItemAction, breakpointClasses]">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, VisibilityBreakpointProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { classesFromBreakpointProps, type VisibilityBreakpointProps } from '../../breakpoints';
import { computed, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListAction',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Actions of the item, such as pf-button or pf-dropdown elements */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['visibility'], styles, { short: true }));
</script>
