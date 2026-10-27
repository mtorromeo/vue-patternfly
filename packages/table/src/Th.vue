<template>
  <define-content>
    <template v-if="sortable">
      <pf-action-list v-if="favorites && favorited !== undefined" icon-list>
        <pf-action-list-item>
          <pf-button variant="plain" favorite :favorited="favorited" v-bind="favoriteAttrs" @click="onFavorite" />
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button variant="plain" :aria-label="sortAriaLabel" v-bind="sortAttrs" @click="onSort">
            <template #icon>
              <span :class="styles.tableSortIndicator"><sort-icon /></span>
            </template>
          </pf-button>
        </pf-action-list-item>
      </pf-action-list>
      <button
        v-else
        type="button"
        :class="styles.tableButton"
        :aria-label="sortAriaLabel"
        v-bind="sortAttrs"
        @click="onSort"
        @focus="sortFocused = true"
        @blur="sortFocused = false"
      >
        <div :class="styles.tableButtonContent">
          <pf-table-text
            :tooltip="tooltip"
            :tooltip-attrs="tooltipAttrs"
            :tooltip-default-behavior="favorites"
            :focused="sortFocused"
          >
            <star-icon v-if="favorites" />
            <slot v-else />
          </pf-table-text>
          <span :class="styles.tableSortIndicator"><sort-icon /></span>
        </div>
      </button>
    </template>
    <template v-else-if="isSelectable">
      <pf-checkbox
        id="select-all"
        name="check-all"
        :model-value="selected"
        :disabled="selectDisabled"
        aria-label="Select all rows"
        v-bind="selectAttrs"
        @change="onSelect"
      />
      <slot />
    </template>
    <template v-else-if="isExpandable">
      <pf-button
        :id="`${expandId}-1`"
        variant="plain"
        :class="{ [styles.modifiers.expanded]: expanded }"
        :small="table?.compact.value"
        :aria-labelledby="`simple-node-1 ${expandId}-1`"
        aria-label="Expand all rows"
        :aria-expanded="expanded"
        v-bind="toggleAttrs"
        @click="onToggle"
      >
        <template #icon>
          <div :class="styles.tableToggleIcon"><angle-down-icon /></div>
        </template>
      </pf-button>
      <slot />
    </template>
    <slot v-else-if="$slots.default" />
    <span v-else-if="screenReaderText" :class="accessibilityStyles.screenReader">{{ screenReaderText }}</span>
  </define-content>

  <component
    :is="component"
    ref="cellRef"
    :tabindex="sortable || isSelectable || !truncated ? -1 : 0"
    :scope="component === 'th' ? scope : undefined"
    :data-label="dataLabel"
    :aria-sort="sortable && sorted ? `${direction}ending` : undefined"
    :class="[
      styles.tableTh,
      width && styles.modifiers[`width_${width}`],
      modifier && styles.modifiers[modifier],
      breakpointClasses,
      {
        [styles.tableSort]: sortable,
        [styles.modifiers.selected]: sortable && sorted,
        [styles.tableFavorite]: sortable && favorites,
        [styles.modifiers.favorited]: sortable && favorites && favorited,
        [styles.tableSubhead]: subheader,
        [styles.modifiers.center]: textCenter,
        [styles.tableCheck]: isSelectable,
        [styles.tableToggle]: isExpandable,
        [styles.modifiers.help]: hasInfo,
        [scrollStyles.tableStickyCell]: sticky,
        [scrollStyles.modifiers.borderRight]: rightBorder,
        [scrollStyles.modifiers.borderLeft]: leftBorder,
      },
    ]"
    :style="
      sticky
        ? {
            [stickyCellVars.minWidth]: stickyMinWidth || undefined,
            [stickyCellVars.insetInlineStart]: stickyLeftOffset || 0,
            [stickyCellVars.insetInlineEnd]: stickyRightOffset || 0,
          }
        : undefined
    "
    :aria-label="ariaLabel ?? (isSelectable ? 'Row select' : undefined)"
    v-bind="{ ...ouiaProps, ...$attrs }"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="showTooltip = false"
  >
    <pf-header-cell-info-wrapper
      v-if="hasInfo"
      :info="info"
      :popover="infoPopover"
      :tooltip-attrs="infoPopover ? undefined : infoAttrs"
      :popover-attrs="infoPopover ? infoAttrs : undefined"
      :ariaLabel="infoAriaLabel"
    >
      <template v-if="$slots.info" #info><slot name="info" /></template>
      <template v-if="$slots['info-header']" #popover-header><slot name="info-header" /></template>
      <template v-if="$slots['info-footer']" #popover-footer><slot name="info-footer" /></template>
      <pf-table-text v-if="!sortable && !isSelectable && !isExpandable && textContent(slots.default?.())">
        <slot />
      </pf-table-text>
      <reuse-content v-else />
    </pf-header-cell-info-wrapper>
    <reuse-content v-else />
    <slot name="additional-content" />
  </component>

  <pf-tooltip
    v-if="showTooltip"
    :trigger-ref="() => cellElement"
    :content="tooltipContent"
    visible
    v-bind="tooltipAttrs"
  />
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTh',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'th',
  scope: 'col',
  selected: undefined,
  expanded: undefined,
  favorited: undefined,
  expandId: 'expand-toggle',
  stickyMinWidth: '120px',
});

const emit = defineEmits<{
  /**
   * Event triggered when the sort button is clicked
   * @param {MouseEvent} event
   * @param {'asc' | 'desc'} direction the new sort direction
   */
  (name: 'sort', event: MouseEvent, direction: 'asc' | 'desc'): void;
  /** @param {'asc' | 'desc'} value */
  (name: 'update:direction', value: 'asc' | 'desc'): void;
  /**
   * Event triggered on selection
   * @param {Event} event
   * @param {boolean} value
   */
  (name: 'select', event: Event, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:selected', value: boolean): void;
  /**
   * Event triggered when the expand all toggle is clicked
   * @param {MouseEvent} event
   * @param {boolean} value the new expanded state
   */
  (name: 'toggle', event: MouseEvent, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:expanded', value: boolean): void;
  /**
   * Event triggered when the favorite button of a favorites sort cell is clicked
   * @param {MouseEvent} event
   * @param {boolean} value the new favorited state
   */
  (name: 'favorite', event: MouseEvent, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:favorited', value: boolean): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Information presented in the info tooltip/popover, replacing the info prop */
  info?: (props?: Record<never, never>) => any;
  /** Header of the info popover */
  'info-header'?: (props?: Record<never, never>) => any;
  /** Footer of the info popover */
  'info-footer'?: (props?: Record<never, never>) => any;
  /** Additional content appended to the end of the header content */
  'additional-content'?: (props?: Record<never, never>) => any;
}>();

const [DefineContent, ReuseContent] = createReusableTemplate();

const attrs = useAttrs();
// a selection header gets a default aria-label, an aria-hidden one needs no name
const ariaHidden = attrs['aria-hidden'];
const hidden = ariaHidden !== undefined && ariaHidden !== false && ariaHidden !== 'false';
if (!slots.default && !props.screenReaderText && !props.ariaLabel && props.selected === undefined && !hidden) {
  devWarn(
    'Th: Table headers must have an accessible name. If the Th is intended to be visually empty, pass in screenReaderText. If the Th contains only non-text, interactive content such as a checkbox or expand toggle, pass in an aria-label.',
  );
}

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['visibility'], styles, { short: true }));

const table = inject(TableKey, undefined);

const isSelectable = computed(() => props.selected !== undefined);
const isExpandable = computed(() => props.expanded !== undefined);
const hasInfo = computed(() => !!(props.info || slots.info));
const sortAriaLabel = computed(() => (props.favorites ? 'Sort favorites' : undefined));
const sortFocused = ref(false);

const SortIcon = computed(() => {
  if (!props.sorted) {
    return ArrowsUpDownIcon;
  }
  return props.direction === 'asc' ? ArrowUpLongIcon : ArrowDownLongIcon;
});

const cellRef = useTemplateRef<ComponentPublicInstance | HTMLElement>('cellRef');
const cellElement = computed(() => {
  const el = unrefElement(cellRef);
  return el instanceof HTMLElement ? el : undefined;
});

const truncated = ref(false);
const updateTruncated = () => (truncated.value = isOverflowing(cellElement.value));
onMounted(updateTruncated);
onUpdated(updateTruncated);

const showTooltip = ref(false);
const tooltipContent = computed(() => props.tooltip || textContent(slots.default?.()));

function onMouseEnter(event: Event) {
  // sortable headers show the tooltip of their table text
  if (props.noTooltip || props.sortable || isSelectable.value || !tooltipContent.value) {
    return;
  }
  showTooltip.value = isOverflowing(event.target as Element);
}

function onSort(event: MouseEvent) {
  let direction: 'asc' | 'desc';
  if (!props.sorted || !props.direction) {
    direction = props.defaultDirection ?? 'asc';
  } else {
    direction = props.direction === 'asc' ? 'desc' : 'asc';
  }
  emit('sort', event, direction);
  emit('update:direction', direction);
}

function onSelect(event: Event) {
  const value = (event.target as HTMLInputElement).checked;
  emit('select', event, value);
  emit('update:selected', value);
}

function onToggle(event: MouseEvent) {
  emit('toggle', event, !props.expanded);
  emit('update:expanded', !props.expanded);
}

function onFavorite(event: MouseEvent) {
  emit('favorite', event, !props.favorited);
  emit('update:favorited', !props.favorited);
}
</script>

<script lang="ts">
import {
  computed,
  inject,
  onMounted,
  onUpdated,
  ref,
  useAttrs,
  useTemplateRef,
  type Component,
  type ComponentPublicInstance,
  type ThHTMLAttributes,
} from 'vue';
import { devWarn } from '@vue-patternfly/core/helpers/dev';
import type { ComponentProps } from 'vue-component-type-helpers';
import { createReusableTemplate, unrefElement } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import { classesFromBreakpointProps, type VisibilityBreakpointProps } from '@vue-patternfly/core/breakpoints';
import { PfActionList, PfActionListItem, PfButton, PfCheckbox, PfTooltip } from '@vue-patternfly/core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import accessibilityStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import ArrowUpLongIcon from '@vue-patternfly/icons/arrow-up-long-icon';
import ArrowDownLongIcon from '@vue-patternfly/icons/arrow-down-long-icon';
import ArrowsUpDownIcon from '@vue-patternfly/icons/arrows-up-down-icon';
import StarIcon from '@vue-patternfly/icons/star-icon';
import PfHeaderCellInfoWrapper from './HeaderCellInfoWrapper.vue';
import PfTableText from './TableText.vue';
import { TableKey, isOverflowing, stickyCellVars, textContent, type CellModifier, type CellWidth } from './common';

interface Props extends OUIAProps, VisibilityBreakpointProps, /* @vue-ignore */ Omit<ThHTMLAttributes, 'onSelect'> {
  /** Element to render */
  component?: string | Component;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: CellModifier;
  /** Width percentage modifier */
  width?: CellWidth;
  /**
   * The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;

  /** Renders a checkbox so that all row checkboxes can be selected/deselected if true/false, null for the indeterminate state */
  selected?: boolean | null;
  /** Disables the select all checkbox */
  selectDisabled?: boolean;
  /** Additional attributes for the select all checkbox */
  selectAttrs?: Record<string, unknown>;

  /** Renders a chevron so that all row chevrons can be expanded/collapsed if true/false, reflecting whether all rows are expanded */
  expanded?: boolean;
  /** Id prefix of the expand all toggle */
  expandId?: string;
  /** Additional attributes for the expand all toggle */
  toggleAttrs?: Record<string, unknown>;

  /** Adds a tooltip/popover info button with this text */
  info?: string;
  /** Shows the info in a popover instead of a tooltip */
  infoPopover?: boolean;
  /** Additional props for the info tooltip/popover */
  infoAttrs?: Record<string, unknown>;
  /** Aria label of the info button. Defaults to the info text. */
  infoAriaLabel?: string;

  /**
   * Tooltip to show on the header cell when its content is truncated.
   * Header cells with simple text content already show their text.
   */
  tooltip?: string;
  /** Disables the tooltip shown when the content is truncated */
  noTooltip?: boolean;
  /** Additional props for the tooltip */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;

  /** Accessible name of the th, for a th with only non-text content. Defaults to "Row select" with selected. */
  ariaLabel?: string;
  /** Visually hidden text accessible only via assistive technologies. This must be passed in if the th is intended to be visually empty, and must be conveyed as a column header text. */
  screenReaderText?: string;
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
  /** Additional attributes for the sort button */
  sortAttrs?: Record<string, unknown>;
  /** Makes a sortable column a favorites column, sorted by a star button */
  favorites?: boolean;
  /** Renders a favorite button beside the sort button of a favorites column if true/false */
  favorited?: boolean;
  /** Additional attributes for the favorite button of a favorites column */
  favoriteAttrs?: Record<string, unknown>;
}
</script>
