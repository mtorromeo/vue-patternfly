<template>
  <pf-divider v-if="variant == 'separator'" :class="styles.modifiers.vertical" v-bind="$attrs" />
  <div
    v-else
    :class="[styles.toolbarItem, breakpointClasses, variantClass, {
      [styles.modifiers.expanded]: allExpanded,
    }]"
    :style="breakpointWidths"
    :aria-hidden="variant == 'label'"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import PfDivider from '../Divider.vue';
import { breakpoints, classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps, type SpacerBreakpointProps, type WidthBreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { computed, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfToolbarItem',
});

export interface Props extends VisibilityBreakpointProps, AlignBreakpointProps, SpacerBreakpointProps, WidthBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  variant?: 'separator' | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter' | 'label' | 'chip-group' | 'expand-all';
  allExpanded?: boolean;
}

const props = defineProps<Props>();

defineEmits<{
  (name: 'clear-all-filters'): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['spacer', 'align'], styles),
  ];
});

const breakpointWidths = computed(() => {
  const widths: Record<string, any> = {};
  for (const b of breakpoints) {
    const prop = `width${b}`;
    if (!props[prop as keyof Props]) {
      continue;
    }
    widths[`--pf-c-toolbar__item--Width${b ? `-on-${b.toLowerCase()}` : ''}`] = props[prop as keyof Props];
  }
  return widths;
});

const variantClass = computed(() => {
  return props.variant && props.variant !== 'separator' ? styles.modifiers[toCamelCase(props.variant)] : null;
});
</script>
