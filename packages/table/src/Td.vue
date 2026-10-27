<template>
  <component
    :is="treeRow ? 'th' : component"
    ref="cellRef"
    :tabindex="(isSelectable || !truncated) && modifier !== 'truncate' ? -1 : 0"
    :data-label="treeRow ? undefined : dataLabel"
    :class="[
      styles.tableTd,
      width && styles.modifiers[`width_${width}`],
      modifier && styles.modifiers[modifier],
      breakpointClasses,
      {
        [styles.tableAction]: actionCell,
        [styles.modifiers.action]: action,
        [styles.modifiers.center]: textCenter,
        [styles.modifiers.noPadding]: noPadding,
        [scrollStyles.tableStickyCell]: sticky,
        [scrollStyles.modifiers.borderRight]: rightBorder,
        [scrollStyles.modifiers.borderLeft]: leftBorder,
        [styles.tableDraggable]: draggableRow,
        [styles.tableCheck]: isSelectable,
        [styles.tableToggle]: isExpandable && !compound,
        [styles.tableCompoundExpansionToggle]: isExpandable && compound,
        [styles.modifiers.expanded]: isExpandable && compound && expanded,
        [styles.tableFavorite]: isFavoritable,
        [styles.modifiers.favorited]: isFavoritable && favorited,
        [stylesTreeView.tableTreeViewTitleCell]: treeRow,
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
    v-bind="{ ...ouiaProps, ...$attrs }"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="showTooltip = false"
  >
    <template v-if="isSelectable">
      <pf-radio
        v-if="selectRadio"
        :id="rowIndex !== undefined ? `select-${rowIndex}` : undefined"
        :name="table?.radioName ?? 'radioGroup'"
        :checked="selected"
        :disabled="selectDisabled"
        :aria-label="messages.tdSelectRow(rowIndex)"
        v-bind="selectAttrs"
        @change="onSelect"
      />
      <pf-checkbox
        v-else
        :id="rowIndex !== undefined ? `select-${rowIndex}` : undefined"
        :name="rowIndex !== undefined ? `checkrow${rowIndex}` : undefined"
        :model-value="selected"
        :disabled="selectDisabled"
        :aria-label="messages.tdSelectRow(rowIndex)"
        v-bind="selectAttrs"
        @change="onSelect"
      />
      <slot />
    </template>

    <wrap v-else-if="treeRow" :disabled="tree?.level.value === undefined">
      <template #with>
        <div :class="stylesTreeView.tableTreeViewMain" />
      </template>
      <span
        v-if="tree && tree.level.value !== undefined && (tree.setsize.value ?? 0) > 0"
        :class="stylesTreeView.tableToggle"
      >
        <pf-button
          variant="plain"
          :class="{ [styles.modifiers.expanded]: tree.expanded.value }"
          :aria-expanded="tree.expanded.value"
          :aria-label="messages.tdTreeToggle(!!tree.expanded.value, rowIndex)"
          v-bind="toggleAttrs"
          @click="tree.expanded.value = !tree.expanded.value"
        >
          <template #icon>
            <div :class="stylesTreeView.tableToggleIcon"><angle-right-icon /></div>
          </template>
        </pf-button>
      </span>
      <span
        v-if="tree && tree.level.value !== undefined && tree.checked.value !== undefined"
        :class="stylesTreeView.tableCheck"
      >
        <label :for="treeCheckboxId">
          <pf-checkbox
            :id="treeCheckboxId"
            :aria-label="messages.tdTreeCheckbox(rowIndex)"
            :model-value="tree.checked.value"
            v-bind="selectAttrs"
            @update:model-value="tree.checked.value = $event"
          />
        </label>
      </span>
      <div :class="stylesTreeView.tableTreeViewText">
        <span v-if="$slots.icon" :class="stylesTreeView.tableTreeViewIcon"><slot name="icon" /></span>
        <span :class="styles.tableText"><slot /></span>
      </div>
      <span
        v-if="tree && tree.level.value !== undefined && tree.detailsExpanded.value !== undefined"
        :class="stylesTreeView.tableTreeViewDetailsToggle"
      >
        <pf-button
          variant="plain"
          :aria-expanded="tree.detailsExpanded.value"
          :aria-label="messages.tdShowDetails"
          v-bind="detailsToggleAttrs"
          @click="tree.detailsExpanded.value = !tree.detailsExpanded.value"
        >
          <template #icon>
            <span :class="`${styles.table}__details-toggle-icon`"><ellipsis-icon /></span>
          </template>
        </pf-button>
      </span>
    </wrap>

    <button
      v-else-if="isExpandable && compound"
      :id="`${expandId}-${rowIndex}-${columnIndex}`"
      type="button"
      :class="styles.tableButton"
      :aria-expanded="expanded"
      v-bind="toggleAttrs"
      @click="onCompoundToggle"
    >
      <span :class="styles.tableText"><slot /></span>
    </button>

    <template v-else-if="isExpandable">
      <pf-button
        :id="`${expandId}${rowIndex ?? -1}`"
        variant="plain"
        :class="{ [styles.modifiers.expanded]: expanded }"
        :small="table?.compact.value"
        :aria-labelledby="`simple-node${rowIndex ?? -1} ${expandId}${rowIndex ?? -1}`"
        :aria-label="messages.tdDetails"
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

    <pf-button
      v-else-if="isFavoritable"
      variant="plain"
      type="button"
      favorite
      :favorited="favorited"
      :aria-label="messages.tdFavorite(!!favorited)"
      v-bind="{
        ...(rowIndex !== undefined && {
          id: `favorites-button-${rowIndex}`,
          'aria-labelledby': `favorites-button-${rowIndex}`,
        }),
        ...favoriteAttrs,
      }"
      @click="onFavorite"
    />

    <pf-button
      v-else-if="draggableRow"
      variant="plain"
      type="button"
      :aria-label="messages.tdDragButton"
      v-bind="draggableAttrs"
    >
      <template #icon><grip-vertical-icon /></template>
    </pf-button>

    <slot v-else />
  </component>

  <pf-tooltip v-if="showTooltip" :trigger-ref="() => cellElement" :content="tooltipContent" visible />
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTd',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'td',
  selected: undefined,
  expanded: undefined,
  favorited: undefined,
  expandId: 'expand-toggle',
  stickyMinWidth: '120px',
});
const messages = usePfMessages();

const emit = defineEmits<{
  /**
   * Event triggered on selection
   * @param {Event} event
   * @param {boolean} value
   */
  (name: 'select', event: Event, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:selected', value: boolean): void;
  /**
   * Event triggered when the expansion toggle is clicked
   * @param {MouseEvent} event
   * @param {boolean} value the new expanded state
   */
  (name: 'toggle', event: MouseEvent, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:expanded', value: boolean): void;
  /**
   * Event triggered when the favorite button is clicked
   * @param {MouseEvent} event
   * @param {boolean} value the new favorited state
   */
  (name: 'favorite', event: MouseEvent, value: boolean): void;
  /** @param {boolean} value */
  (name: 'update:favorited', value: boolean): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Icon displayed before the title of a tree row */
  icon?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['visibility'], styles, { short: true }));

const table = inject(TableKey, undefined);
const tree = inject(TreeRowKey, undefined);

const isSelectable = computed(() => props.selected !== undefined);
const isExpandable = computed(() => props.expanded !== undefined);
const isFavoritable = computed(() => props.favorited !== undefined);
const treeCheckboxId = computed(() =>
  typeof props.selectAttrs?.id === 'string' ? props.selectAttrs.id : `checkbox_${props.rowIndex}`,
);

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
  if (props.noTooltip || !tooltipContent.value) {
    return;
  }
  showTooltip.value = isOverflowing(event.target as Element);
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

function updateAnimationClass() {
  const cell = cellElement.value;
  const controlRow = cell?.closest(`.${styles.tableTr}.${styles.tableControlRow}`);
  if (!cell || !controlRow?.classList.contains(styles.modifiers.expanded)) {
    return;
  }
  controlRow.classList.toggle(styles.modifiers.noAnimateExpand, !cell.classList.contains(styles.modifiers.expanded));
}

function onCompoundToggle(event: MouseEvent) {
  if (table?.animations.value) {
    updateAnimationClass();
  }
  onToggle(event);
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
  useTemplateRef,
  type Component,
  type ComponentPublicInstance,
  type TdHTMLAttributes,
} from 'vue';
import { usePfMessages } from '@vue-patternfly/core/messages';
import { unrefElement } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import { classesFromBreakpointProps, type VisibilityBreakpointProps } from '@vue-patternfly/core/breakpoints';
import { PfButton, PfCheckbox, PfRadio, PfTooltip } from '@vue-patternfly/core';
import Wrap from '@vue-patternfly/core/helpers/Wrap.vue';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import EllipsisIcon from '@vue-patternfly/icons/ellipsis-icon';
import GripVerticalIcon from '@vue-patternfly/icons/grip-vertical-icon';
import {
  TableKey,
  TreeRowKey,
  isOverflowing,
  stickyCellVars,
  textContent,
  type CellModifier,
  type CellWidth,
} from './common';

interface Props
  extends OUIAProps, VisibilityBreakpointProps, /* @vue-ignore */ Omit<TdHTMLAttributes, 'draggable' | 'onSelect'> {
  /** Element to render */
  component?: string | Component;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: CellModifier;
  /** Width percentage modifier */
  width?: CellWidth;
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Index of the row, used to build the ids and accessible labels of the cell controls */
  rowIndex?: number;
  /** Index of the column, used to build the id of a compound expansion toggle */
  columnIndex?: number;

  /** Flag to indicate a selected row. Renders a checkbox (or a radio) if true/false. */
  selected?: boolean;
  /** Renders a radio instead of a checkbox for single row selection */
  selectRadio?: boolean;
  /** Disables the selection checkbox/radio */
  selectDisabled?: boolean;
  /** Additional attributes for the selection checkbox/radio, or the checkbox of a tree row */
  selectAttrs?: Record<string, unknown>;

  /** Turns the cell into an expansion toggle if true/false, and determines if the corresponding expansion row is open */
  expanded?: boolean;
  /** Turns the expansion toggle into a compound expansion toggle, wrapping the cell content */
  compound?: boolean;
  /** Id prefix of the expansion toggle */
  expandId?: string;
  /** Additional attributes for the expansion toggle, or the expand toggle of a tree row */
  toggleAttrs?: Record<string, unknown>;

  /** Turns the cell into a favorites cell with a star button if true/false */
  favorited?: boolean;
  /** Additional attributes for the favorite button */
  favoriteAttrs?: Record<string, unknown>;

  /** Turns the cell into the first cell in a tree table row. Its state comes from the parent pf-tree-row-wrapper. */
  treeRow?: boolean;
  /** Additional attributes for the details toggle of a tree row */
  detailsToggleAttrs?: Record<string, unknown>;

  /** Turns the cell into the first cell in a draggable row, with a drag button */
  draggableRow?: boolean;
  /** Additional attributes for the drag button, such as its id */
  draggableAttrs?: Record<string, unknown>;

  /** True to remove padding */
  noPadding?: boolean;
  /** Applies pf-v6-c-table__action to td */
  actionCell?: boolean;
  /** Indicates the cell contains an interactive element and prevents that element's padding from increasing row height. Recommended when other cells in the same row contains text. */
  action?: boolean;
  /**
   * Tooltip to show on the cell when its content is truncated.
   * Cells with simple text content already show their text.
   */
  tooltip?: string;
  /** Disables the tooltip shown when the content is truncated */
  noTooltip?: boolean;
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
