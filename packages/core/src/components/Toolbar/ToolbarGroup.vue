<template>
  <div
    v-bind="ouiaProps"
    ref="elRef"
    :class="[styles.toolbarGroup, breakpointClasses, variantClass, {
      [styles.modifiers.alignItemsStart]: alignItems === 'start',
      [styles.modifiers.alignItemsCenter]: alignItems === 'center',
      [styles.modifiers.alignItemsBaseline]: alignItems === 'baseline',
      [styles.modifiers.alignSelfStart]: alignSelf === 'start',
      [styles.modifiers.alignSelfCenter]: alignSelf === 'center',
      [styles.modifiers.alignSelfBaseline]: alignSelf === 'baseline',
      [styles.modifiers.overflowContainer]: overflowContainer,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export interface Props extends OUIAProps, VisibilityBreakpointProps, AlignBreakpointProps, GapBreakpointProps, ColumnGapBreakpointProps, RowGapBreakpointProps, RowWrapBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: 'filter-group' | 'action-group' | 'action-group-inline' | 'action-group-plain' | 'label-group';
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Vertical alignment */
  alignSelf?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Flag that modifies the toolbar group to hide overflow and respond to available space. Used for horizontal navigation. */
  overflowContainer?: boolean;
}
</script>

<script lang="ts" setup>
import { classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps, type GapBreakpointProps, type ColumnGapBreakpointProps, type RowGapBreakpointProps, type RowWrapBreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { computed, onMounted, type HTMLAttributes, useTemplateRef } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarGroup',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'clearAllFilters'): void;
  (name: 'mounted', el: HTMLDivElement): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility', 'rowWrap'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['align', 'gap', 'columnGap', 'rowGap'], styles),
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
