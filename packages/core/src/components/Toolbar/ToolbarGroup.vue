<template>
  <div v-bind="ouiaProps" ref="elRef" :class="[styles.toolbarGroup, breakpointClasses, variantClass]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps, type SpacerBreakpointProps, type SpaceItemsBreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { computed, onMounted, type HTMLAttributes, useTemplateRef } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarGroup',
});

export interface Props extends OUIAProps, VisibilityBreakpointProps, AlignBreakpointProps, SpacerBreakpointProps, SpaceItemsBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  variant?: 'filter-group' | 'icon-button-group' | 'button-group';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'clear-all-filters'): void;
  (name: 'mounted', el: HTMLDivElement): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['spacer', 'spaceItems', 'align'], styles),
  ];
});

const variantClass = computed(() => {
  return props.variant ? styles.modifiers[toCamelCase(props.variant)] : null;
});

onMounted(() => {
  if (el.value) {
    emit('mounted', el.value);
  }
});
</script>
