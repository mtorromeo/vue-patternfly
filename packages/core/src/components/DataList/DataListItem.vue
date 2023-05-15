<template>
  <li
    :class="[
      styles.dataListItem, {
        [styles.modifiers.expanded]: managedExpanded,
        [styles.modifiers.selectable]: isSelectable,
        [styles.modifiers.selected]: managedSelected,
      },
    ]"
    :tabindex="isSelectable ? 0 : undefined"
    :aria-selected="isSelectable && managedSelected ? 'true' : undefined"
    @click="isSelectable && select()"
  >
    <input v-if="isSelectable" :name="name" :value="value" class="pf-screen-reader" :type="datalist?.multipleSelection ? 'checkbox' : 'radio'" tabindex="-1" :checked="managedSelected" @change="select">
    <overridable-wrapper :component="PfDataListItemRow" :exclude="PfDataListContent">
      <slot />
    </overridable-wrapper>
  </li>
</template>

<script lang="ts">
export const DataListItemKey = Symbol('DataListItemKey') as InjectionKey<{
  expanded: WritableComputedRef<boolean>,
  expandable: ComputedRef<boolean>,
}>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { computed, type ComputedRef, getCurrentInstance, inject, type InjectionKey, provide, ref, type WritableComputedRef } from "vue";
import { DataListKey } from './DataList.vue';
import OverridableWrapper from '../../helpers/OverridableWrapper';
import PfDataListItemRow from './DataListItemRow.vue';
import PfDataListContent from './DataListContent.vue';
import { useManagedProp } from '../../use';

defineOptions({
  name: 'PfDataListItem',
});


const props = withDefaults(defineProps<{
  selected?: boolean;
  /** Name of the item inputs (radio or checkbox) when item selection is enabled */
  selectionInputName?: string;
  /** Defines the value for the inputs (radio or checkbox) of the pf-data-list-item */
  selectionInputValue?: string;
  /** Flag indicating if the pf-data-list-item is expandable */
  expandable?: boolean;
  /** Flag to show if the expanded content of the pf-data-list-item is visible */
  expanded?: boolean;
}>(), {
  selected: undefined,
  expanded: undefined,
  expandable: undefined,
});

const emit = defineEmits<{
  (name: 'update:selected', s: boolean): void;
  (name: 'update:expanded', s: boolean): void;
}>();

const uniqueId = Symbol();

const selectable = computed(() => props.selected !== undefined);
const datalist = inject(DataListKey);
const instance = getCurrentInstance();

const managedSelected = (() => {
  const innerSelected = ref(false);

  const getValue = () =>
    props.selectionInputValue ?? instance?.vnode.key ?? uniqueId;

  return computed({
    get(): boolean {
      if (selectable.value) {
        return !!props.selected;
      }

      if (datalist?.selectable.value) {
        const value = getValue();
        if (Array.isArray(datalist.itemSelection.value)) {
          return datalist.itemSelection.value.includes(value);
        }
        return datalist.itemSelection.value === value;
      }

      return innerSelected.value;
    },

    set(s: boolean) {
      if (!selectable.value) {
        if (datalist?.selectable.value) {
          const value = getValue();

          if (datalist.multipleSelection.value) {
            if (!Array.isArray(datalist.itemSelection.value)) {
              if (datalist.itemSelection.value) {
                datalist.itemSelection.value = [datalist.itemSelection.value];
              } else {
                datalist.itemSelection.value = [];
              }
            }
            const index = datalist.itemSelection.value.indexOf(value);
            if (s && index === -1) {
              datalist.itemSelection.value.push(value);
            } else if (!s && index !== -1) {
              datalist.itemSelection.value.splice(index, 1);
            }
          } else {
            datalist.itemSelection.value = s ? value : null;
          }
          datalist.$emit(`update:selected`, datalist.itemSelection.value);

        } else {
          innerSelected.value = s;
        }
      }

      emit(`update:selected`, s);
    },
  });
})();

const isSelectable = computed(() => selectable.value || !!datalist?.selectable.value);
const isExpandable = computed(() => props.expandable !== undefined || !!datalist?.expandable.value);
const managedExpanded = useManagedProp('expanded', false);
const name = computed(() => props.selectionInputName || datalist?.inputName.value);
const value = computed(() => props.selectionInputValue || datalist?.inputValue.value);

provide(DataListItemKey, {
  expanded: managedExpanded,
  expandable: isExpandable,
});

function select() {
  managedSelected.value = !managedSelected.value;
}
</script>
