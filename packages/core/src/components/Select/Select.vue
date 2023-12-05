<template>
  <div ref="$el">
    <slot name="toggle">
      <pf-menu-toggle v-model:expanded="managedOpen" :disabled="disabled" :variant="variant" :full-height="fullHeight" :full-width="fullWidth">
        <slot name="label">
          Select a value
        </slot>
      </pf-menu-toggle>
    </slot>

    <floating-ui :reference="$el" :z-index="zIndex" flip>
      <pf-menu
        v-if="managedOpen"
        ref="menuRef"
        v-model:selected="managedSelected"
        :plain="plain"
        :style="{'--pf-v5-c-menu--MinWidth': minWidth}"
        :contains-flyout="containsFlyout"
        :nav-flyout="navFlyout"
        :active-item-id="activeItemId"
        :root-menu="rootMenu"
        :scrollable="scrollable"
        :ouia-id="ouiaId"
        :ouia-safe="ouiaSafe"
        @action-click="onActionClick"
        @select="(event, itemId) => emit('select', event)"
        @search-input-change="(event, value) => emit('search-input-change', event, value)"
      >
        <slot />
      </pf-menu>
    </floating-ui>
  </div>
</template>

<script lang="ts" setup>
import PfMenu, { type MenuItemId } from '../Menu/Menu.vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { nextTick, ref, type Ref, type HTMLAttributes } from 'vue';
import { useManagedProp } from '../../use';
import { useEventListener } from '@vueuse/core';

defineOptions({
  name: 'PfSelect',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag to indicate if select is open */
  open?: boolean;
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the SelectOption. */
  selected?: MenuItemId | MenuItemId[] | null;
  /** Indicates if the select should be without the outer box-shadow */
  plain?: boolean;
  /** Minimum width of the select menu */
  minWidth?: string;
  /** z-index of the select menu */
  zIndex?: number;

  // PfMenuItem props

  /** @beta Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** @beta Indicating that the menu should have nav flyout styling */
  navFlyout?: boolean;
  // /** @beta Indicates if menu contains a drilldown menu */
  // containsDrilldown?: boolean;
  // /** @beta Indicates if a menu is drilled into */
  // menuDrilledIn?: boolean;
  // /** @beta Indicates the path of drilled in menu itemIds */
  // drilldownItemPath?: MenuItemId[];
  // /** @beta Array of menus that are drilled in */
  // drilledInMenus?: MenuItemId[];
  /** @beta itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: MenuItemId;
  /** Internal flag indicating if the Menu is the root of a menu tree */
  rootMenu?: boolean;
  /** Indicates if the menu should be srollable */
  scrollable?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  // /** @beta Callback for drilling into a submenu */
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // /** @beta Callback for drilling out of a submenu */
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;

  // MENU TOGGLE PROPS
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';

  /** @beta Keys that trigger menu close, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  closeOnKeys?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  open: undefined,
  selected: undefined,
  // drilldownItemPath: () => [],
  closeOnKeys: () => ['Escape', 'Tab'],
});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  toggle: (props?: Record<never, never>) => any;
  label: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** A callback for when the input value changes. */
  (name: 'search-input-change', event: Event, value: string): void;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  (name: 'select', event: Event, itemId?: MenuItemId | null | undefined): void;
  (name: 'update:open', value: boolean): void;
  (name: 'update:selected', value: MenuItemId | MenuItemId[] | null): void;
}>();

const managedSelected = useManagedProp<MenuItemId | MenuItemId[] | null>('selected', null);
const managedOpen = useManagedProp('open', false);
const $el: Ref<HTMLElement | undefined> = ref();
const menuRef: Ref<InstanceType<typeof PfMenu> | undefined> = ref();


const handleMenuKeys = (event: KeyboardEvent) => {
  // Close the menu on tab or escape
  if (
    managedOpen.value &&
    (menuRef.value?.el?.contains(event.target as Node) || $el.value?.contains(event.target as Node))
  ) {
    if (props.closeOnKeys.includes(event.key)) {
      event.preventDefault();
      managedOpen.value = false;
      $el.value?.focus();
    }
  }
};

const handleClick = (event: MouseEvent) => {
  // toggle was clicked open via keyboard, focus on first menu item
  if (managedOpen.value && $el.value?.contains(event.target as Node) && event.detail === 0) {
    nextTick(() => {
      const firstElement = menuRef.value?.el?.querySelector('li button:not(:disabled),li input:not(:disabled)');
      firstElement && (firstElement as HTMLElement).focus();
    });
  }

  // If the event is not on the toggle, close the menu
  if (managedOpen.value && !$el.value?.contains(event.target as Node) && !menuRef.value?.el?.contains(event.target as Node)) {
    managedOpen.value = false;
  }
};

useEventListener(window, 'keydown', handleMenuKeys);
useEventListener(window, 'click', handleClick);
</script>
