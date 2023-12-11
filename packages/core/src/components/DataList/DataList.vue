<template>
  <ul
    v-bind="(ouiaProps as any)"
    :class="[
      styles.dataList,
      gridBreackpointClass, {
        [styles.modifiers.compact]: compact,
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
        [styles.modifiers.dragOver]: dragging,
      },
    ]"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
export const DataListKey = Symbol('DataListSelectableKey') as InjectionKey<{
  emit: (event: 'update:selected', ...args: any[]) => void;
  selectable: Ref<boolean>,
  expandable: ComputedRef<boolean | undefined>,
  inputName: ComputedRef<string | undefined>,
  inputValue: ComputedRef<string | undefined>,
  itemSelection: WritableComputedRef<any>,
  multipleSelection: ComputedRef<boolean>,
}>;

export type DataListWrapModifier = 'nowrap' | 'truncate' | 'breakWord';

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
    /** Array for multiple selection, single value for single selection, undefined to disable selection */
  selected?: string | number | symbol | (string | number | symbol)[];
  /** Name of the item input (radio or checkbox) when item selection is enabled */
  selectionInputName?: string;
  /** Defines the value for the input (radio or checkbox) */
  selectionInputValue?: string;
  /** Flag indicating if multiple pf-data-list-items are selectable */
  selectionMultiple?: boolean;
  /** Flag indicating if pf-data-list should have compact styling */
  compact?: boolean;
  /** Flag indicating if pf-data-list-items should have expandable styling */
  expandable?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakpoint?: 'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Determines which wrapping modifier to apply to the pf-data-list */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
  // declared as prop instead of emit to be able to detect attached listeners
  'onUpdate:selected'?: (s: any) => void; // eslint-disable-line vue/prop-name-casing
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import stylesGrid from '@patternfly/react-styles/css/components/DataList/data-list-grid';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { computed, type ComputedRef, type InjectionKey, provide, type Ref, ref, type WritableComputedRef, type HTMLAttributes } from "vue";
import { useManagedProp } from '../../use';

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
  selected: undefined,
  expandable: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:selected', s: any): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedSelected = useManagedProp('selected', null);

const selectable = computed(() => !!props['onUpdate:selected'] || props.selected !== undefined || !!props.selectionInputName);

provide(DataListKey, {
  emit,
  selectable,
  expandable: computed(() => props.expandable),
  inputName: computed(() => props.selectionInputName),
  inputValue: computed(() => props.selectionInputValue),
  itemSelection: managedSelected,
  multipleSelection: computed(() => props.selectionMultiple),
});

const gridBreackpointClass = computed(() => gridBreakpointClasses[props.gridBreakpoint]);
const dragging = ref(false);
</script>
