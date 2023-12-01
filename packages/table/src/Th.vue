<template>
  <define-select-checkbox>
    <label v-if="isDefined(selected)">
      <input :checked="selected" type="checkbox" @change="handleSelect($event as InputEvent)">
    </label>
  </define-select-checkbox>

  <component
    v-bind="{...$attrs, ...ouiaProps}"
    :is="component"
    role="columnheader"
    :class="[
      styles.tableTh,
      width && [styles.modifiers[`width_${width}`]],
      modifier && styles.modifiers[modifier],
      breakpointClasses, {
        [styles.tableSort]: sortable,
        [styles.modifiers.selected]: sortable && sorted,
        [styles.tableSubhead]: subheader,
        [styles.modifiers.center]: textCenter,
        [styles.tableCheck]: isDefined(selected),
        [scrollStyles.tableStickyCell]: sticky,
        [scrollStyles.modifiers.borderRight]: rightBorder,
        [scrollStyles.modifiers.borderLeft]: leftBorder,
      }
    ]"
    :style="sticky ? {
      '--pf-v5-c-table__sticky-cell--MinWidth': stickyMinWidth ? stickyMinWidth : undefined,
      '--pf-v5-c-table__sticky-cell--Left': stickyLeftOffset ? stickyLeftOffset : 0,
      '--pf-v5-c-table__sticky-cell--Right': stickyRightOffset ? stickyRightOffset : 0,
    } : undefined"
    :data-label="dataLabel"
    :aria-sort="sortable ? (sorted ? `${direction}ending` : 'none') : undefined"
  >
    <button v-if="sortable" :class="styles.tableButton" @click="setSort">
      <div :class="styles.tableButtonContent">
        <span :class="styles.tableText">
          <select-checkbox />
          <slot />
        </span>
        <span :class="styles.tableSortIndicator">
          <arrows-up-down-icon v-if="!(sortable && sorted)" />
          <arrow-up-long-icon v-else-if="direction == 'asc'" />
          <arrow-down-long-icon v-else />
        </span>
      </div>
    </button>

    <template v-else>
      <select-checkbox />
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import ArrowUpLongIcon from '@vue-patternfly/icons/arrow-up-long-icon';
import ArrowDownLongIcon from '@vue-patternfly/icons/arrow-down-long-icon';
import ArrowsUpDownIcon from '@vue-patternfly/icons/arrows-up-down-icon';
import { createReusableTemplate, isDefined } from '@vueuse/core';

defineOptions({
  name: 'PfTh',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'th',
  scope: 'col',
  selected: undefined,
  stickyMinWidth: '120px',
});

const emit = defineEmits<{
  (name: 'sort'): void;
  /**
   * Event triggered on selection
   * @param {InputEvent} event
   * @param {boolean} value
   */
  (name: 'select', event: InputEvent, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:selected', value: boolean): void;
  /** @param {'asc' | 'desc'} value */
  (name: 'update:direction', value: 'asc' | 'desc'): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const [DefineSelectCheckbox, SelectCheckbox] = createReusableTemplate();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });

function setSort() {
  emit('sort');
  emit('update:direction', props.direction === 'desc' ? 'asc' : 'desc');
}

function handleSelect(event: InputEvent) {
  emit('select', event, (event.target as HTMLInputElement).checked);
  emit('update:selected', (event.target as HTMLInputElement).checked);
}
</script>

<script lang="ts">
import type { Component, ThHTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import { classesFromBreakpointProps } from "@vue-patternfly/core/breakpoints";
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<ThHTMLAttributes, 'onSelect'> {
  /** Element to render */
  component?: string | Component;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Width percentage modifier */
  width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;

  /**
   * The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Flag to indicate a selected cell/row. Renders a checkbox if true/false. */
  selected?: boolean;
  // select?: ThSelectType;
  /** Renders a chevron so that all row chevrons can be expanded/collapsed */
  // expand?: ThExpandType;
  /** Adds tooltip/popover info button */
  // info?: ThInfoType;
  /** Adds scope to the column to associate header cells with data cells*/
  scope?: string;
  /** Indicates the header column should be sticky */
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
  /** Indicates the <th> is part of a subheader of a nested header */
  subheader?: boolean;

  /** Indicates that the table can be sorted by this column */
  sortable?: boolean;
  /** Indicates that the table is sorted by this column */
  sorted?: boolean;
  /** Current sort direction */
  direction?: 'asc' | 'desc';
  /** Defaulting sorting direction. Defaults to "asc". */
  defaultDirection?: 'asc' | 'desc';
  /** True to make this a favoritable sorting cell */
  favorites?: boolean;
}
</script>
