<template>
  <li
    v-bind="ouiaProps"
    :class="[
      styles.dataListItem, {
        [styles.modifiers.expanded]: managedExpanded,
        [styles.modifiers.clickable]: isSelectable,
        [styles.modifiers.selected]: managedSelected,
      },
    ]"
    :tabindex="isSelectable ? 0 : undefined"
    :aria-selected="isSelectable && managedSelected ? 'true' : undefined"
    @click="handleClick($event as PointerEvent)"
  >
    <input v-if="isSelectable" :name="name" :value="value" class="pf-v5-screen-reader" :type="datalist?.multipleSelection ? 'checkbox' : 'radio'" tabindex="-1" :checked="managedSelected" @change="select">
    <auto-wrap :component="PfDataListItemRow" :exclude="PfDataListContent">
      <slot />
    </auto-wrap>
  </li>
</template>

<script lang="ts">
export const DataListItemKey = Symbol('DataListItemKey') as InjectionKey<{
  expanded: WritableComputedRef<boolean>,
  expandable: ComputedRef<boolean>,
}>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'tabindex' | 'aria-selected' | 'onClick'> {
  selected?: boolean;
  /** Name of the item inputs (radio or checkbox) when item selection is enabled */
  selectionInputName?: string;
  /** Defines the value for the inputs (radio or checkbox) of the pf-data-list-item */
  selectionInputValue?: string;
  /** Flag indicating if the pf-data-list-item is expandable */
  expandable?: boolean;
  /** Flag to show if the expanded content of the pf-data-list-item is visible */
  expanded?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { computed, type ComputedRef, getCurrentInstance, inject, type InjectionKey, provide, ref, type WritableComputedRef, type LiHTMLAttributes } from "vue";
import { DataListKey } from './DataList.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfDataListItemRow from './DataListItemRow.vue';
import PfDataListContent from './DataListContent.vue';
import { useManagedProp } from '../../use';

defineOptions({
  name: 'PfDataListItem',
});

const props = withDefaults(defineProps<Props>(), {
  selected: undefined,
  expanded: undefined,
  expandable: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
  (name: 'update:selected', s: boolean): void;
  (name: 'update:expanded', s: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
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
          datalist.emit(`update:selected`, datalist.itemSelection.value);

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

function select()  {
  if (isSelectable.value) {
    managedSelected.value = !managedSelected.value;
  }
}

function handleClick(event: PointerEvent)  {
  select();
  emit('click', event);
}
</script>
