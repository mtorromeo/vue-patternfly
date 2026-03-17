<template>
  <define-table>
    <table
      v-bind="{...ouiaProps, ...$attrs}"
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
      <caption v-if="hasSelectableRows">
        {{ selectableRowCaptionText }}
        <div class="pf-v6-screen-reader">
          This table has selectable rows. It can be navigated by row using tab, and each row can be selected using
          space or enter.
        </div>
      </caption>

      <slot />
    </table>
  </define-table>

  <div v-if="stickyHeader" :class="scrollStyles.scrollOuterWrapper">
    <div v-if="horizontalScroll" :class="scrollStyles.scrollInnerWrapper">
      <reuse-table />
    </div>
    <reuse-table v-else />
  </div>
  <reuse-table v-else />
</template>

<script lang="ts">
import { computed, type TableHTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { toCamelCase } from '@vue-patternfly/core/util';
import { provideChildrenTracker } from '@vue-patternfly/core';
import { TableTrKey } from './common';
import { createReusableTemplate } from '@vueuse/core';

interface Props extends OUIAProps, /* @vue-ignore */ TableHTMLAttributes {
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
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** Flag indicating this table can be scrolled horizontally */
  horizontalScroll?: boolean,
}
</script>

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

const rows = provideChildrenTracker(TableTrKey);
const hasSelectableRows = computed(() => rows.some(row => row.selectable));

const [ DefineTable, ReuseTable ] = createReusableTemplate();
</script>
