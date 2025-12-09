<template>
  <tr
    v-bind="ouiaProps"
    :class="[styles.tableTr, {
      [styles.tableExpandableRow]: expanded !== undefined,
      [styles.modifiers.expanded]: expanded,
      [inlineStyles.modifiers.inlineEditable]: editable,
      [styles.modifiers.clickable]: clickable,
      [styles.modifiers.selected]: selected,
      [styles.modifiers.striped]: striped,
      [styles.modifiers.borderRow]: borderRow,
      [styles.modifiers.firstCellOffsetReset]: resetOffset,
    }]"
    :hidden="isHidden"
    :tabindex="clickable ? 0 : ($attrs.tabindex as any)"
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
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const isHidden = computed(() => props.hidden || (props.expanded !== undefined && !props.expanded));
const ariaLabel = computed(() => {
  if (props.ariaLabel) {
    return props.ariaLabel;
  }
  if (!props.selectable || isHidden.value) {
    return undefined;
  }
  return props.selected ? 'Row selected' : '';
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
import { computed, type HTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { useChildrenTracker } from "@vue-patternfly/core";
import { TableTrKey } from "./common";

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
  /** Flag indicating the Tr is hidden */
  hidden?: boolean;
  /** Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not.
   * To prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component
   */
  expanded?: boolean;
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
  /** Flag indicating that the row is selectable */
  selectable?: boolean;
  /** Flag indicating the spacing offset of the first cell should be reset */
  resetOffset?: boolean;
  ariaLabel?: string;
  /** An event handler for the row */
  onClick?: (event?: PointerEvent | KeyboardEvent) => void;
}
</script>
