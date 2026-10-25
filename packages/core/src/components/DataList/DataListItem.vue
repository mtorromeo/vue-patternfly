<template>
  <li
    v-bind="ouiaProps"
    :class="[
      styles.dataListItem,
      {
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.clickable]: isSelectable,
        [styles.modifiers.selected]: managedSelected,
      },
    ]"
    :tabindex="isSelectable ? 0 : undefined"
    :aria-selected="isSelectable && managedSelected ? 'true' : undefined"
    @click="handleClick($event as PointerEvent)"
    @keydown="handleKeydown"
  >
    <input
      v-if="isSelectable"
      :name="name"
      :value="value"
      class="pf-v6-screen-reader"
      :type="datalist?.multipleSelection.value ? 'checkbox' : 'radio'"
      tabindex="-1"
      :checked="managedSelected"
      :aria-label="selectableInputAriaLabel"
      :aria-labelledby="selectableInputAriaLabel ? undefined : ($attrs['aria-labelledby'] as string | undefined)"
      @change="select"
    />
    <auto-wrap :component="PfDataListItemRow" :exclude="PfDataListContent">
      <slot />
    </auto-wrap>
  </li>
</template>

<script lang="ts">
export { DataListItemKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'tabindex' | 'aria-selected' | 'onClick'> {
  selected?: boolean;
  /** Name of the item inputs (radio or checkbox) when item selection is enabled */
  selectionInputName?: string;
  /** Defines the value for the inputs (radio or checkbox) of the pf-data-list-item */
  selectionInputValue?: string;
  /** Flag indicating if the pf-data-list-item is expandable */
  expandable?: boolean;
  /** Aria label of the hidden selection input, which is otherwise labelled by the aria-labelledby of the item */
  selectableInputAriaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import {
  computed,
  getCurrentInstance,
  inject,
  provide,
  ref,
  type LiHTMLAttributes,
  toValue,
  useAttrs,
  type VNode,
} from 'vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfDataListItemRow from './DataListItemRow.vue';
import PfDataListContent from './DataListContent.vue';
import { DataListItemKey, DataListKey } from './common';

defineOptions({
  name: 'PfDataListItem',
});

const props = withDefaults(defineProps<Props>(), {
  selected: undefined,
  expandable: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag to show if the expanded content of the pf-data-list-item is visible */
const expanded = defineModel<boolean>('expanded', { default: false });

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
  (name: 'update:selected', s: boolean): void;
}>();

defineSlots<{
  /** pf-data-list-item-row and pf-data-list-content elements; other content is wrapped in a row */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const uniqueId = Symbol();

const selectable = computed(() => props.selected !== undefined);
const datalist = inject(DataListKey);
const instance = getCurrentInstance();

const managedSelected = (() => {
  const innerSelected = ref(false);

  const getValue = () => props.selectionInputValue ?? instance?.vnode.key ?? uniqueId;

  return computed({
    get(): boolean {
      if (selectable.value) {
        return !!props.selected;
      }

      if (datalist?.selectable.value) {
        const value = getValue();
        const itemSelection = toValue(datalist.itemSelection);
        if (Array.isArray(itemSelection)) {
          return itemSelection.includes(value);
        }
        return itemSelection === value;
      }

      return innerSelected.value;
    },

    set(s: boolean) {
      if (!selectable.value) {
        if (datalist?.selectable.value) {
          const value = getValue();
          let itemSelection = toValue(datalist.itemSelection);

          if (datalist.multipleSelection.value) {
            if (!Array.isArray(itemSelection)) {
              if (itemSelection) {
                itemSelection = [itemSelection];
              } else {
                itemSelection = [];
              }
            }
            const index = itemSelection.indexOf(value);
            if (s && index === -1) {
              itemSelection.push(value);
            } else if (!s && index !== -1) {
              itemSelection.splice(index, 1);
            }
          } else {
            itemSelection = s ? value : undefined;
          }

          datalist.emit('update:selected', itemSelection);
        } else {
          innerSelected.value = s;
        }
      }

      emit('update:selected', s);
    },
  });
})();

const isSelectable = computed(() => selectable.value || !!datalist?.selectable.value);
const isExpandable = computed(() => props.expandable ?? !!datalist?.expandable.value);
const name = computed(() => props.selectionInputName || datalist?.inputName.value);
const value = computed(() => props.selectionInputValue || datalist?.inputValue.value);

const attrs = useAttrs();

provide(DataListItemKey, {
  expanded,
  expandable: isExpandable,
  rowid: computed(() => attrs['aria-labelledby'] as string | undefined),
});

/** Clicks and key presses in actions and controls (checkboxes, toggles) do not select the item */
function fromActionOrControl(event: Event) {
  const target = event.target instanceof Element ? event.target : null;
  const container = target?.closest(`.${styles.dataListItemAction}, .${styles.dataListItemControl}`);
  return !!container && (event.currentTarget as Element).contains(container);
}

function select() {
  if (isSelectable.value) {
    managedSelected.value = !managedSelected.value;
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.target !== event.currentTarget || !isSelectable.value) {
    return;
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    select();
  }
}

function handleClick(event: PointerEvent) {
  if (!fromActionOrControl(event)) {
    select();
  }
  emit('click', event);
}
</script>
