<template>
  <div v-bind="ouiaProps" :class="[styles.overflowMenu, { [styles.modifiers.vertical]: vertical }]">
    <slot :below-breakpoint="isBelowBreakpoint" />
  </div>
</template>

<script lang="ts">
export { OverflowMenuIsBelowBreakpointKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Indicates breakpoint at which to switch between expanded and collapsed states. The "sm" breakpoint does not apply to vertical overflow menus. */
  breakpoint: keyof typeof globalWidthBreakpoints;
  /** A container to base the specified breakpoint on instead of the viewport: an element, a ref or a function returning it */
  breakpointReference?: MaybeRefOrGetter<HTMLElement | null | undefined>;
  /** Indicates the overflow menu orientation is vertical and should respond to height changes instead of width. */
  vertical?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { devError, devWarn } from '../../helpers/dev';
import {
  computed,
  onMounted,
  provide,
  ref,
  shallowRef,
  toValue,
  watch,
  watchEffect,
  type HTMLAttributes,
  type MaybeRefOrGetter,
  type VNode,
} from 'vue';
import { useResizeObserver, useWindowSize } from '@vueuse/core';
import { globalHeightBreakpoints, globalWidthBreakpoints } from '../../constants';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { OverflowMenuIsBelowBreakpointKey } from './common';

defineOptions({
  name: 'PfOverflowMenu',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content and control of the overflow menu */
  default?: (props: { belowBreakpoint: boolean }) => VNode[];
}>();

// the breakpoint reference element, resolved once mounted since a function may look it up in the document
const reference = shallowRef<HTMLElement | null>(null);
function resolveReference() {
  reference.value = toValue(props.breakpointReference) ?? null;
}
onMounted(resolveReference);
watch(() => toValue(props.breakpointReference), resolveReference);

const referenceSize = ref({ width: 0, height: 0 });
useResizeObserver(reference, () => {
  if (reference.value) {
    referenceSize.value = { width: reference.value.clientWidth, height: reference.value.clientHeight };
  }
});
watch(reference, el => {
  if (el) {
    referenceSize.value = { width: el.clientWidth, height: el.clientHeight };
  }
});

const windowSize = useWindowSize();

const breakpointSize = computed(
  () => (props.vertical ? globalHeightBreakpoints : globalWidthBreakpoints)[props.breakpoint],
);

watchEffect(() => {
  if (props.vertical && breakpointSize.value === 0) {
    devWarn('The "sm" breakpoint does not apply to vertical overflow menus.');
  } else if (!breakpointSize.value) {
    devError('OverflowMenu will not be visible without a valid breakpoint.');
  }
});

const isBelowBreakpoint = computed(() => {
  if (!breakpointSize.value) {
    return false;
  }
  const size = reference.value
    ? referenceSize.value
    : { width: windowSize.width.value, height: windowSize.height.value };
  return (props.vertical ? size.height : size.width) < breakpointSize.value;
});
provide(OverflowMenuIsBelowBreakpointKey, isBelowBreakpoint);
</script>
