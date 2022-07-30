<template>
  <ul
    :class="[
      styles.dataList,
      gridBreackpointClass, {
        [styles.modifiers.compact]: compact,
        [styles.modifiers[wrapModifier]]: wrapModifier,
        [styles.modifiers.dragOver]: dragging,
      },
    ]"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import stylesGrid from '@patternfly/react-styles/css/components/DataList/data-list-grid';

import { computed, ComputedRef, defineComponent, InjectionKey, markRaw, PropType, provide, Ref, ref, WritableComputedRef } from "vue";
import { useManagedProp } from '../../use';

export type DataListWrapModifier = 'nowrap' | 'truncate' | 'breakWord';

export const DataListKey = Symbol('DataListSelectableKey') as InjectionKey<{
  $emit: (event: 'update:selected', ...args: any[]) => void;
  selectable: Ref<boolean>,
  expandable: ComputedRef<boolean>,
  inputName: ComputedRef<string | undefined>,
  inputValue: ComputedRef<string | undefined>,
  itemSelection: WritableComputedRef<any>,
  multipleSelection: ComputedRef<boolean>,
}>;

const gridBreakpointClasses = {
  none: stylesGrid.modifiers.gridNone,
  always: 'pf-m-grid', // Placeholder per https://github.com/patternfly/patternfly-react/issues/4965#issuecomment-704984236
  sm: stylesGrid.modifiers.gridSm,
  md: stylesGrid.modifiers.gridMd,
  lg: stylesGrid.modifiers.gridLg,
  xl: stylesGrid.modifiers.gridXl,
  '2xl': stylesGrid.modifiers.grid_2xl,
};

export default defineComponent({
  name: 'PfDataList',

  props: {
    /** Flag indicating if pf-data-list should have compact styling */
    compact: Boolean,

    /** Flag indicating if pf-data-list-items are expandable */
    expandable: Boolean,

    /** Determines which wrapping modifier to apply to the DataList */
    wrapModifier: String as PropType<DataListWrapModifier>,

    /** Name of the item input (radio or checkbox) when item selection is enabled */
    selectionInputName: String,

    /** Defines the value for the input (radio or checkbox) */
    selectionInputValue: String,

    /** Flag indicating if multiple pf-data-list-items are selectable */
    selectionMultiple: Boolean,

    /** Array for multiple selection, single value for single selection, undefined to disable selection */
    selected: [String, Number, Symbol, Array] as PropType<any>,

    // declared as prop instead of emit to be able to detect attached listeners
    'onUpdate:selected': Function as PropType<(s: any) => void>, // eslint-disable-line vue/prop-name-casing

    /** Specifies the grid breakpoints  */
    gridBreakpoint: {
      type: String as PropType<'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
      default: 'md',
    },
  },

  emits: {
    'update:selected': (s: any) => s !== undefined,
  },

  setup(props, { emit }) {
    const managedSelected = useManagedProp('selected', null);

    const selectable = computed(() => !!props['onUpdate:selected'] || props.selected !== undefined || !!props.selectionInputName);

    provide(DataListKey, {
      $emit: emit,
      selectable,
      expandable: computed(() => props.expandable),
      inputName: computed(() => props.selectionInputName),
      inputValue: computed(() => props.selectionInputValue),
      itemSelection: managedSelected,
      multipleSelection: computed(() => props.selectionMultiple),
    });

    return {
      gridBreackpointClass: computed(() => gridBreakpointClasses[props.gridBreakpoint]),
      dragging: ref(false),
      styles: markRaw(styles) as typeof styles,
      stylesGrid: markRaw(stylesGrid) as typeof stylesGrid,
    };
  },
});
</script>
