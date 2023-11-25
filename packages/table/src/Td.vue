<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    role="cell"
    :class="[
      styles.tableTd,
      width && [styles.modifiers[`width_${width}`]],
      modifier && styles.modifiers[modifier],
      breakpointClasses, {
        [styles.tableAction]: actionCell,
        [styles.tableDraggable]: draggable,
        [styles.modifiers.center]: textCenter,
        [styles.modifiers.noPadding]: noPadding,
        [scrollStyles.tableStickyCell]: sticky,
        [scrollStyles.modifiers.borderRight]: rightBorder,
        [scrollStyles.modifiers.borderLeft]: leftBorder,
      }
    ]"
    :style="sticky ? {
      '--pf-c-table__sticky-cell--MinWidth': stickyMinWidth ? stickyMinWidth : undefined,
      '--pf-c-table__sticky-cell--Left': stickyLeftOffset ? stickyLeftOffset : 0,
      '--pf-c-table__sticky-cell--Right': stickyRightOffset ? stickyRightOffset : 0,
    } : undefined"
    :data-class="($attrs.class as string)?.includes('pf-c-table__tree-view-title-cell') || dataLabel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTd',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'td',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });
</script>

<script lang="ts">
import type { Component, TdHTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { classesFromBreakpointProps } from "@vue-patternfly/core/breakpoints";

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<TdHTMLAttributes, 'draggable'> {
  /** Element to render */
  component?: string | Component;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Width percentage modifier */
  width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;

  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Renders a checkbox or radio select */
  // select?: TdSelectType;
  /** Turns the cell into an actions cell. Recommended to use an ActionsColumn component as a child of the Td rather than this prop. */
  // actions?: TdActionsType;
  /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
  // expand?: TdExpandType;
  /** Turns the cell into a compound expansion toggle */
  // compoundExpand?: TdCompoundExpandType;
  /** Turns the cell into a favorites cell with a star button */
  // favorites?: TdFavoritesType;
  /** Turns the cell into the first cell in a tree table row */
  // treeRow?: TdTreeRowType;
  /** Turns the cell into the first cell in a draggable row*/
  draggable?: string | boolean;
  /** True to remove padding */
  noPadding?: boolean;
  /** Applies pf-c-table__action to td */
  actionCell?: boolean;
  /** Indicates the column should be sticky */
  sticky?: boolean;
  /** Adds a border to the right side of the cell */
  rightBorder?: boolean;
  /** Adds a border to the left side of the cell */
  leftBorder?: boolean;
  /** Minimum width for a sticky column */
  stickyMinWidth?: string;
  /** Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column. */
  stickyLeftOffset?: string;
  /** Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column. */
  stickyRightOffset?: string;
}
</script>
