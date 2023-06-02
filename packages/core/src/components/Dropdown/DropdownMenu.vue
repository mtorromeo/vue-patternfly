<template>
  <component
    :is="grouped ? 'div' : component"
    role="menu"
    :class="[menuClass || styles.dropdownMenu, {
      [styles.modifiers.alignRight]: position === 'right',
    }]"
    :hidden="!open"
    @click="component === 'div' && $emit('select', $event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export const DropdownMenuItemsKey = Symbol("DropdownMenuItemsKey") as ChildrenTrackerInjectionKey;
export const DropdownMenuOnKeydownKey = Symbol('DropdownMenuOnKeydownKey') as InjectionKey<(event: KeyboardEvent, itemEl?: HTMLElement) => void>;

export interface Props {
  component?: string | Component;
  position?: 'left' | 'right';
  open?: boolean;
  autoFocus?: boolean;
  grouped?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { provide, computed, type Component, onMounted, inject, type InjectionKey } from 'vue';
import type PfDropdownItem from './DropdownItem.vue';
import { provideChildrenTracker, keyNavigation, type Disableable, type Focusable, type ChildrenTrackerInjectionKey } from '../../use';
import { DropdownMenuClassKey } from './Dropdown.vue';

defineOptions({
  name: 'PfDropdownMenu',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'ul',
  default: 'left',
  open: true,
  autoFocus: true,
});

defineEmits<{
  (name: 'select', e: Event): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const children = provideChildrenTracker<InstanceType<typeof PfDropdownItem> & Disableable & Focusable>(DropdownMenuItemsKey);
const items = computed(() => children.value.filter(
  c => Boolean(c.focusElement) && !c.disabled,
));

const onKeydown = keyNavigation(items);
provide(DropdownMenuOnKeydownKey, onKeydown);

const menuClass = inject(DropdownMenuClassKey, undefined);

onMounted(() => {
  if (props.autoFocus && items.value.length) {
    items.value[0].focused = true;
  }
});
</script>
