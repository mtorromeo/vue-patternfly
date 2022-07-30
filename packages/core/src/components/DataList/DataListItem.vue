<template>
  <li
    :class="[
      styles.dataListItem, {
        [styles.modifiers.expanded]: managedExpanded,
        [styles.modifiers.selectable]: selectable,
        [styles.modifiers.selected]: managedSelected,
      },
    ]"
    :tabindex="selectable ? 0 : undefined"
    :aria-selected="selectable && managedSelected ? 'true' : undefined"
    x-draggable
    x-on-drop
    x-on-drag-end
    x-on-drag-start
    @click="selectable && select()"
  >
    <input v-if="selectable" :name="name" :value="value" class="pf-screen-reader" :type="multiple ? 'checkbox' : 'radio'" tabindex="-1" :checked="managedSelected" @change="select">
    <overridable-wrapper :component="PfDataListItemRow" :exclude="PfDataListContent">
      <slot />
    </overridable-wrapper>
  </li>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { computed, ComputedRef, defineComponent, getCurrentInstance, inject, InjectionKey, markRaw, PropType, provide, ref, WritableComputedRef } from "vue";
import { DataListKey } from './DataList.vue';
import OverridableWrapper from '../OverridableWrapper';
import PfDataListItemRow from './DataListItemRow.vue';
import PfDataListContent from './DataListContent.vue';
import { useManagedProp } from '../../use';

export const DataListItemKey = Symbol('DataListItemKey') as InjectionKey<{
  expanded: WritableComputedRef<boolean>,
  expandable: ComputedRef<boolean>,
}>;

export default defineComponent({
  name: 'PfDataListItem',

  components: {
    OverridableWrapper,
  },

  props: {
    /** Name of the item inputs (radio or checkbox) when item selection is enabled */
    selectionInputName: String as PropType<string | undefined>,

    /** Defines the value for the inputs (radio or checkbox) of the pf-data-list-item */
    selectionInputValue: String,

    selected: {
      type: Boolean,
      default: undefined,
    },

    /** Flag indicating if the pf-data-list-item is expandable */
    expandable: {
      type: Boolean,
      default: undefined,
    },

    /** Flag to show if the expanded content of the pf-data-list-item is visible */
    expanded: {
      type: Boolean,
      default: undefined,
    },
  },

  emits: {
    'update:selected': (s: boolean) => typeof s === 'boolean',
    'update:expanded': (s: boolean) => typeof s === 'boolean',
  },

  setup(props, { emit }) {
    const uniqueId = Symbol();

    const selectable = computed(() => props.selected !== undefined);
    const datalist = inject(DataListKey);

    const managedSelected = (() => {
      const instance = getCurrentInstance();
      const innerSelected = ref(false);

      const getValue = () => {
        if (props.selectionInputValue !== undefined) {
          return props.selectionInputValue;
        } else if (instance.vnode.key !== null) {
          return instance.vnode.key;
        }
        return uniqueId;
      };

      return computed({
        get(): boolean {
          if (selectable.value) {
            return props.selected;
          }

          if (datalist.selectable.value) {
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
            if (datalist.selectable.value) {
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

    const isExpandable = computed(() => props.expandable !== undefined || datalist.expandable.value);

    const managedExpanded = useManagedProp('expanded', false);

    provide(DataListItemKey, {
      expanded: managedExpanded,
      expandable: isExpandable,
    });

    return {
      PfDataListItemRow,
      PfDataListContent,

      managedExpanded,
      managedSelected,
      multiple: datalist.multipleSelection,
      select() {
        managedSelected.value = !managedSelected.value;
      },
      isExpandable,
      selectable: computed(() => selectable.value || datalist.selectable.value),
      name: computed(() => props.selectionInputName || datalist.inputName.value),
      value: computed(() => props.selectionInputValue || datalist.inputValue.value),
      dragging: ref(false),
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
