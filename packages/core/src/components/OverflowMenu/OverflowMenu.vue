<template>
  <div v-bind="(ouiaProps as any)" :class="styles.overflowMenu">
    <slot />
  </div>
</template>

<script lang="ts">
export const OverflowMenuIsBelowBreakpointKey = Symbol('OverflowMenuIsBelowBreakpointKey') as InjectionKey<Ref<boolean> | boolean>;

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  breakpoint: keyof typeof globalBreakpoints;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { watch, ref, provide, type HTMLAttributes, type InjectionKey, type Ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { globalBreakpoints } from '../Toolbar/common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenu',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = ref(false);
provide(OverflowMenuIsBelowBreakpointKey, isBelowBreakpoint);

const { width: windowWidth } = useWindowSize();

watch(windowWidth, (width) => {
  const breakpointPx = globalBreakpoints[props.breakpoint];
  const breakpointWidth = Number(breakpointPx.toString().replace('px', ''));
  isBelowBreakpoint.value = width < breakpointWidth;
}, { immediate: true });
</script>
