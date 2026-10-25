<template>
  <ul
    v-bind="ouiaProps"
    role="list"
    :class="[
      styles.dataList,
      gridBreakpointClass,
      {
        [styles.modifiers.compact]: compact,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
      },
    ]"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
export { DataListKey, type DataListWrapModifier, type DataListItemValue, type DataListSelection } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Name of the item input (radio or checkbox) when item selection is enabled */
  selectionInputName?: string;
  /** Defines the value for the input (radio or checkbox) */
  selectionInputValue?: string;
  /** Flag indicating if multiple pf-data-list-items are selectable */
  selectionMultiple?: boolean;
  /** Flag indicating if pf-data-list should have compact styling */
  compact?: boolean;
  /** @beta Flag indicating if pf-data-list should have plain styling with a transparent background */
  plain?: boolean;
  /** @beta Flag to prevent the data list from automatically applying plain styling when glass theme is enabled. */
  noPlainOnGlass?: boolean;
  /** Flag indicating if pf-data-list-items should have expandable styling */
  expandable?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakpoint?: 'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Determines which wrapping modifier to apply to the pf-data-list */
  wrapModifier?: DataListWrapModifier;
  // declared as prop instead of emit to be able to detect attached listeners
  'onUpdate:selected'?: (selected: DataListSelection | undefined) => void; // eslint-disable-line vue/prop-name-casing
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import stylesGrid from '@patternfly/react-styles/css/components/DataList/data-list-grid';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { computed, provide, type HTMLAttributes, type VNode } from 'vue';
import { DataListKey, type DataListSelection, type DataListWrapModifier } from './common';

const gridBreakpointClasses = {
  none: stylesGrid.modifiers.gridNone,
  always: 'pf-m-grid', // Placeholder per https://github.com/patternfly/patternfly-react/issues/4965#issuecomment-704984236
  sm: stylesGrid.modifiers.gridSm,
  md: stylesGrid.modifiers.gridMd,
  lg: stylesGrid.modifiers.gridLg,
  xl: stylesGrid.modifiers.gridXl,
  '2xl': stylesGrid.modifiers.grid_2xl,
};

defineOptions({
  name: 'PfDataList',
});

const props = withDefaults(defineProps<Props>(), {
  gridBreakpoint: 'md',
  expandable: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

// untyped: the only event is update:selected, already declared by defineModel
// oxlint-disable-next-line vue/valid-define-emits
const emit = defineEmits();

defineSlots<{
  /** pf-data-list-item elements */
  default?: (props?: Record<never, never>) => VNode[];
}>();

/** Array for multiple selection, single value for single selection, undefined to disable selection */
const selected = defineModel<DataListSelection>('selected');

const selectable = computed(
  () => !!props['onUpdate:selected'] || selected.value !== undefined || !!props.selectionInputName,
);

provide(DataListKey, {
  emit,
  selectable,
  expandable: computed(() => props.expandable),
  inputName: computed(() => props.selectionInputName),
  inputValue: computed(() => props.selectionInputValue),
  itemSelection: selected,
  multipleSelection: computed(() => props.selectionMultiple),
});

const gridBreakpointClass = computed(() => gridBreakpointClasses[props.gridBreakpoint]);
</script>
