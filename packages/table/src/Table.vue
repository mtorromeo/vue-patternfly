<template>
  <component :is="stickyHeader ? 'div' : PassThrough" :class="scrollStyles.scrollOuterWrapper">
    <component :is="horizontalScroll ? 'div' : PassThrough" :class="scrollStyles.scrollInnerWrapper">
      <table
        v-bind="{...$attrs, ouiaProps}"
        :role="treeTable ? 'treegrid' : role"
        :class="[styles.table, treeTable ? treeGrid : grid, {
          [styles.modifiers.compact]: compact,
          [styles.modifiers.noBorderRows]: noBorders,
          [styles.modifiers.stickyHeader]: stickyHeader,
          [stylesTreeView.modifiers.treeView]: treeTable,
          [styles.modifiers.striped]: striped,
          [styles.modifiers.expandable]: expandable,
          'pf-m-nested': nested,
        }]"
      >
        <caption v-if="false">
          {{ selectableRowCaptionText }}
          <div class="pf-v5-screen-reader">
            This table has selectable rows. It can be navigated by row using tab, and each row can be selected using
            space or enter.
          </div>
        </caption>

        <slot />
      </table>
    </component>
  </component>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTable',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  gridBreakPoint: 'grid-md',
  role: 'grid',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const grid =
  stylesGrid.modifiers?.[
    toCamelCase(props.gridBreakPoint || '').replace(/-?2xl/, '_2xl') as 'grid' | 'gridMd' | 'gridLg' | 'gridXl' | 'grid_2xl'
  ];
const breakPointPrefix = `treeView${props.gridBreakPoint.charAt(0).toUpperCase() + props.gridBreakPoint.slice(1)}`;
const treeGrid =
  stylesTreeView.modifiers?.[
    toCamelCase(breakPointPrefix || '').replace(/-?2xl/, '_2xl') as
      | 'treeViewGrid'
      | 'treeViewGridMd'
      | 'treeViewGridLg'
      | 'treeViewGridXl'
      | 'treeViewGrid_2xl'
  ];
</script>

<script lang="ts">
import PassThrough from '@vue-patternfly/core/helpers/PassThrough.vue';
import type { TableHTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { toCamelCase } from '@vue-patternfly/core/util';

export interface Props extends OUIAProps, /* @vue-ignore */ TableHTMLAttributes {
  /** Reduces spacing and makes the table more compact */
  compact?: boolean;
  /** Do not render borders */
  noBorders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** If set to true, the table header sticks to the top of its container */
  stickyHeader?: boolean;
  /** Flag indicating table is a tree table */
  treeTable?: boolean;
  /** Flag indicating this table is nested within another table */
  nested?: boolean;
  /** Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components. */
  striped?: boolean;
  /** Flag indicating this table contains expandable rows to maintain proper striping */
  expandable?: boolean;
  /** Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584 */
  nestedHeaderColumnSpans?: number[];
  /** Visible text to add alongside the hidden a11y caption for tables with selectable rows. */
  selectableRowCaptionText?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** Flag indicating this table can be scrolled horizontally */
  horizontalScroll?: boolean,
}
</script>
