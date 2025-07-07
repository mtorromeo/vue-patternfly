<template>
  <pf-divider v-if="variant == 'separator'" v-bind="$attrs" orientation="vertical" />
  <div
    v-else
    :class="[styles.toolbarItem, breakpointClasses, variantClass, {
      [styles.modifiers.pagination]: variant == 'pagination',
      [styles.modifiers.label]: variant == 'label',
      [styles.modifiers.labelGroup]: variant == 'label-group',
      [styles.modifiers.expanded]: allExpanded,
      [styles.modifiers.overflowContainer]: overflowContainer,
      [styles.modifiers.alignItemsStart]: alignItems === 'start',
      [styles.modifiers.alignItemsCenter]: alignItems === 'center',
      [styles.modifiers.alignItemsBaseline]: alignItems === 'baseline',
      [styles.modifiers.alignSelfStart]: alignSelf === 'start',
      [styles.modifiers.alignSelfCenter]: alignSelf === 'center',
      [styles.modifiers.alignSelfBaseline]: alignSelf === 'baseline',
    }]"
    :style="breakpointWidths"
    :aria-hidden="variant == 'label'"
    v-bind="{...ouiaProps, ...$attrs}"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import PfDivider from '../Divider.vue';
import { breakpoints, classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps, type WidthBreakpointProps, type GapBreakpointProps, type ColumnGapBreakpointProps, type RowGapBreakpointProps, type RowWrapBreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_toolbar__item_Width';
import { computed, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarItem',
});

export interface Props extends OUIAProps, VisibilityBreakpointProps, AlignBreakpointProps, WidthBreakpointProps, GapBreakpointProps, ColumnGapBreakpointProps, RowGapBreakpointProps, RowWrapBreakpointProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-hidden'> {
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant?: 'pagination' | 'label' | 'label-group' | 'separator' | 'expand-all';
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Vertical alignment */
  alignSelf?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Flag indicating if the expand-all variant is expanded or not */
  allExpanded?: boolean;
  /** Flag that modifies the toolbar item to hide overflow and respond to available space. Used for horizontal navigation. */
  overflowContainer?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'clearAllFilters'): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility', 'rowWrap'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['align', 'gap', 'columnGap', 'rowGap'], styles),
  ];
});

const breakpointWidths = computed(() => {
  const widths: Record<string, any> = {};
  for (const b of breakpoints) {
    const prop = `width${b}`;
    if (!props[prop as keyof Props]) {
      continue;
    }
    widths[`${cssWidth.name}${b ? `-on-${b.toLowerCase()}` : ''}`] = props[prop as keyof Props];
  }
  return widths;
});

const variantClass = computed(() => {
  return props.variant && props.variant !== 'separator' ? styles.modifiers[toCamelCase(props.variant)] : null;
});
</script>
