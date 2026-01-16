<template>
  <div v-bind="ouiaProps" :class="styles.overflowMenu">
    <slot />
  </div>
</template>

<script lang="ts">
export const OverflowMenuIsBelowBreakpointKey = Symbol('OverflowMenuIsBelowBreakpointKey') as InjectionKey<Ref<boolean> | boolean>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  breakpoint: keyof typeof globalWidthBreakpoints;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { watch, ref, provide, type HTMLAttributes, type InjectionKey, type Ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { globalWidthBreakpoints } from '../../constants';
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
  isBelowBreakpoint.value = width < globalWidthBreakpoints[props.breakpoint];
}, { immediate: true });
</script>
