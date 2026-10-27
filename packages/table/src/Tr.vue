<template>
  <tr
    v-bind="ouiaProps"
    :class="[
      styles.tableTr,
      {
        [styles.tableExpandableRow]: expanded !== undefined,
        [styles.modifiers.expanded]: expanded || contentExpanded,
        [inlineStyles.modifiers.inlineEditable]: editable,
        [styles.modifiers.clickable]: clickable,
        [styles.modifiers.selected]: selected,
        [styles.modifiers.striped]: striped,
        [styles.modifiers.borderRow]: borderRow,
        [styles.tableControlRow]: controlRow,
        [styles.modifiers.firstCellOffsetReset]: resetOffset,
      },
    ]"
    :hidden="isHidden"
    :inert="table?.animations.value && isHidden ? true : undefined"
    :tabindex="clickable ? 0 : undefined"
    :aria-label="ariaLabel"
    @click="onClick?.($event as PointerEvent)"
    @keydown="onKeyDown"
  >
    <slot />
  </tr>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTr',
});

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
  ouiaSafe: true,
});
const messages = usePfMessages();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const table = inject(TableKey, undefined);
const isHidden = computed(() => props.hidden || (props.expanded !== undefined && !props.expanded));
const ariaLabel = computed(() => {
  if (props.ariaLabel) {
    return props.ariaLabel;
  }
  if (!props.selectable || isHidden.value) {
    return undefined;
  }
  return props.selected ? messages.value.trSelected : '';
});

useChildrenTracker(TableTrKey);

function onKeyDown(e: KeyboardEvent) {
  if (props.onClick && (e.key === 'Enter' || e.key === ' ')) {
    props.onClick(e);
    e.preventDefault();
  }
}
</script>

<script lang="ts">
import { computed, inject, type HTMLAttributes } from 'vue';
import { usePfMessages } from '@vue-patternfly/core/messages';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { useChildrenTracker } from '@vue-patternfly/core';
import { TableKey, TableTrKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
  /** Flag indicating the Tr is hidden */
  hidden?: boolean;
  /** Flag indicating whether an "expandable" Tr is expanded or not. Only applicable to a Tr within a Tbody.
   * To prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component
   */
  expanded?: boolean;
  /** Flag indicating that the "control row" Tr has an expandable sibling Tr that is expanded or not. Only applicable to
   * a Tr within a Tbody, and should have the same value as an expandable Tr's expanded prop.
   */
  contentExpanded?: boolean;
  /** Only applicable to Tr within the Tbody: Whether the row is editable */
  editable?: boolean;
  /** Flag which adds hover styles for the clickable table row */
  clickable?: boolean;
  /** Flag indicating the row is selected - adds selected styling */
  selected?: boolean;
  /** Flag indicating the row is striped */
  striped?: boolean;
  /** Flag indicating the row will act as a border. This is typically used for a table with a nested and sticky header. */
  borderRow?: boolean;
  /** Flag indicating the row is controlling the expansion of another row. */
  controlRow?: boolean;
  /** Flag indicating that the row is selectable */
  selectable?: boolean;
  /** Flag indicating the spacing offset of the first cell should be reset */
  resetOffset?: boolean;
  /** Accessible label of the row. Selectable rows default to the `trSelected` message when selected. */
  ariaLabel?: string;
  /** An event handler for the row, also triggered by Enter and Space */
  onClick?: (event?: PointerEvent | KeyboardEvent) => void;
}
</script>
