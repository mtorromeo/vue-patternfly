<template>
  <define-table>
    <table
      ref="tableRef"
      v-bind="{ ...ouiaProps, ...$attrs }"
      :role="treeTable ? 'treegrid' : role"
      :class="[
        styles.table,
        treeTable ? treeGrid : grid,
        {
          [styles.modifiers.compact]: compact,
          [styles.modifiers.noBorderRows]: noBorders,
          [styles.modifiers.stickyHeader]: stickyHeader,
          [styles.modifiers.stickyHeaderBase]: stickyHeaderBase,
          [styles.modifiers.stickyHeaderStuck]: stickyHeaderStuck,
          [styles.modifiers.stickyFooter]: stickyFooter,
          [styles.modifiers.stickyFooterBase]: stickyFooterBase,
          [styles.modifiers.stickyFooterStuck]: stickyFooterStuck,
          [stylesTreeView.modifiers.treeView]: treeTable,
          [styles.modifiers.striped]: striped,
          [styles.modifiers.expandable]: expandable,
          [styles.modifiers.plain]: plain,
          [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
          [stylesTreeView.modifiers.noInset]: noInset,
          'pf-m-nested': nested,
          [styles.modifiers.animateExpand]: animations,
        },
      ]"
      @keydown="handleKeys"
    >
      <caption v-if="hasSelectableRows && selectableRowCaptionText">
        {{
          selectableRowCaptionText
        }}
        <div class="pf-v6-screen-reader">{{ selectableRowsDescription }}</div>
      </caption>
      <caption v-else-if="hasSelectableRows" class="pf-v6-screen-reader">
        {{
          selectableRowsDescription
        }}
      </caption>

      <slot />
    </table>
  </define-table>

  <div v-if="autoWrap" :class="scrollStyles.scrollOuterWrapper">
    <div v-if="horizontalScroll" :class="scrollStyles.scrollInnerWrapper">
      <reuse-table />
    </div>
    <reuse-table v-else />
  </div>
  <reuse-table v-else />
</template>

<script lang="ts">
import { computed, inject, onMounted, provide, useId, useTemplateRef, type TableHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { toCamelCase } from '@vue-patternfly/core/util';
import { provideChildrenTracker } from '@vue-patternfly/core';
import { TableKey, TableScrollContainerKey, TableTrKey } from './common';
import { createReusableTemplate } from '@vueuse/core';

interface Props extends OUIAProps, /* @vue-ignore */ TableHTMLAttributes {
  /** Reduces spacing and makes the table more compact */
  compact?: boolean;
  /** Do not render borders */
  noBorders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** Flag indicating if the table should have plain styling with a transparent background */
  plain?: boolean;
  /** Flag indicating if the table should not have plain styling when in the glass theme */
  noPlainOnGlass?: boolean;
  /**
   * If set to true, the table header sticks to the top of its container. This property applies both the sticky position and styling.
   * Unless the table is inside a pf-outer-scroll-container or pf-inner-scroll-container, it is wrapped in an outer scroll container.
   */
  stickyHeader?: boolean;
  /** Flag indicating the table header should have sticky positioning to the top of the parent inner scroll container. */
  stickyHeaderBase?: boolean;
  /** Flag indicating the table header should have stuck styling, when the header is not at the top of the scroll container. */
  stickyHeaderStuck?: boolean;
  /**
   * If set to true, the table footer sticks to the bottom of its container.
   * Unless the table is inside a pf-outer-scroll-container or pf-inner-scroll-container, it is wrapped in an outer scroll container.
   */
  stickyFooter?: boolean;
  /** Flag indicating the table footer should have sticky positioning to the bottom of its scroll container. */
  stickyFooterBase?: boolean;
  /** Flag indicating the table footer should have stuck styling, when the footer is not at the bottom of the scroll container. */
  stickyFooterStuck?: boolean;
  /** Flag indicating table is a tree table */
  treeTable?: boolean;
  /** Flag indicating this table is nested within another table */
  nested?: boolean;
  /** Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components. */
  striped?: boolean;
  /** Flag indicating this table contains expandable rows. */
  expandable?: boolean;
  /** Flag indicating whether expandable rows within the table have animations. Expandable rows cannot be dynamically rendered. */
  animations?: boolean;
  /** Flag indicating this table's rows will not have the inset typically reserved for expanding/collapsing rows in a tree table. Intended for use on tree tables with no visible rows with children. */
  noInset?: boolean;
  /** Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584 */
  nestedHeaderColumnSpans?: number[];
  /** Visible text to add alongside the hidden a11y caption for tables with selectable rows. */
  selectableRowCaptionText?: string;
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** Flag indicating this table can be scrolled horizontally, when it wraps itself in a scroll container */
  horizontalScroll?: boolean;
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
  ouiaSafe: true,
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const selectableRowsDescription =
  'This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space or enter.';

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const grid = computed(
  () =>
    stylesGrid.modifiers?.[
      toCamelCase(props.gridBreakPoint || '').replace(/-?2xl/, '_2xl') as
        | 'grid'
        | 'gridMd'
        | 'gridLg'
        | 'gridXl'
        | 'grid_2xl'
    ],
);
const treeGrid = computed(() => {
  const breakPointPrefix = `treeView${props.gridBreakPoint.charAt(0).toUpperCase() + props.gridBreakPoint.slice(1)}`;
  return stylesTreeView.modifiers?.[
    toCamelCase(breakPointPrefix).replace(/-?2xl/, '_2xl') as
      | 'treeViewGrid'
      | 'treeViewGridMd'
      | 'treeViewGridLg'
      | 'treeViewGridXl'
      | 'treeViewGrid_2xl'
  ];
});

const insideScrollContainer = inject(TableScrollContainerKey, false);
const autoWrap = computed(() => !insideScrollContainer && (props.stickyHeader || props.stickyFooter));

const rows = provideChildrenTracker(TableTrKey);
const hasSelectableRows = computed(() => rows.some(row => row.selectable && !row.hidden && row.expanded !== false));

provide(TableKey, {
  compact: computed(() => props.compact),
  animations: computed(() => props.animations),
  radioName: `${useId()}-radioGroup`,
});

const [DefineTable, ReuseTable] = createReusableTemplate();

const table = useTemplateRef('tableRef');

const focusableSelector = 'button, a, input';

// sets up roving tab-index to tree tables only
onMounted(() => {
  if (!props.treeTable) {
    return;
  }
  const tbody = table.value?.querySelector('tbody');
  const focusables = Array.from(tbody?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
  for (const el of focusables) {
    el.tabIndex = -1;
  }
  if (focusables[0]) {
    focusables[0].tabIndex = 0;
  }
});

function moveFocus(target: HTMLElement | undefined, active: HTMLElement) {
  if (!target) {
    return;
  }
  active.tabIndex = -1;
  target.tabIndex = 0;
  target.focus();
}

// implements roving tab-index to tree tables only
function handleKeys(event: KeyboardEvent) {
  const tableEl = table.value;
  if (
    props.nested ||
    !props.treeTable ||
    !tableEl ||
    !(event.target instanceof Element) ||
    tableEl !== event.target.closest(`.${styles.table}:not(.pf-m-nested)`)
  ) {
    return;
  }
  const active = document.activeElement;
  if (!(active instanceof HTMLElement)) {
    return;
  }

  if (event.key === ' ' || event.key === 'Enter') {
    active.click();
    event.preventDefault();
    return;
  }

  const rows = Array.from(tableEl.querySelectorAll<HTMLTableRowElement>('tbody tr')).filter(
    el => !el.classList.contains('pf-m-disabled') && !el.hidden,
  );
  const index = rows.findIndex(row => row === active.closest('tr'));
  if (index < 0) {
    return;
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    const increment = event.key === 'ArrowUp' ? -1 : 1;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[(index + i * increment + rows.length * i) % rows.length];
      const target = row.querySelector<HTMLElement>('button:not(:disabled), input:not(:disabled), a:not(:disabled)');
      if (target) {
        moveFocus(target, active);
        break;
      }
    }
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    const focusables = Array.from(rows[index].querySelectorAll<HTMLElement>(focusableSelector));
    const current = focusables.indexOf(active);
    if (current < 0) {
      return;
    }
    const increment = event.key === 'ArrowLeft' ? -1 : 1;
    moveFocus(focusables[(current + increment + focusables.length) % focusables.length], active);
  }
}

defineExpose({
  table,
});
</script>
