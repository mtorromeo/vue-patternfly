<template>
  <div ref="el" :class="[styles.menu, {
    [styles.modifiers.plain]: plain,
    [styles.modifiers.scrollable]: scrollable,
    [styles.modifiers.flyout]: containsFlyout,
    [styles.modifiers.nav]: navFlyout,
    // [styles.modifiers.drilldown]: containsDrilldown,
    // [styles.modifiers.drilledIn]: effectiveMenuDrilledIn,
  }]">
    <slot />
  </div>
</template>

<script lang="ts">
export type MenuProvide = {
  parentMenu: MenuProvide | undefined;
  // drilldownItemPath: MenuItemId[];
  activeItemId?: MenuItemId;
  state: MenuState;
  flyout: Ref<ComponentInternalInstance | null>;
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  onSelect?: (event: MouseEvent, itemId?: MenuItemId | null) => void;
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;
};

export const MenuInjectionKey = Symbol('MenuInjectionKey') as InjectionKey<MenuProvide>;

export interface MenuState {
  searchInputValue: string | null;
  // ouiaStateId: string;
  transitionMoveTarget: HTMLElement | null;
  // flyoutRef: React.Ref<HTMLLIElement> | null;
  disableHover: boolean;
}

export type MenuItemId = string | number | symbol;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject, provide, reactive, ref, type ComponentInternalInstance, type InjectionKey, type Ref } from 'vue';

const props = withDefaults(defineProps<{
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected?: any | any[];
  /** Search input of menu */
  searchInput?: boolean;
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
  /** Indicates if the menu should be without the outer box-shadow */
  plain?: boolean;
  /** Indicates if the menu should be srollable */
  scrollable?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect?: (event: MouseEvent, itemId?: MenuItemId | null) => void;
  // /** @beta Callback for drilling into a submenu */
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // /** @beta Callback for drilling out of a submenu */
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;
}>(), {
  // drilldownItemPath: () => [],
});

defineEmits({
  /** A callback for when the input value changes. */
  searchInputChange: (
    event: Event,
    value: string
  ) => true,
});

// const instance = getCurrentInstance();

const el: Ref<HTMLDivElement | undefined> = ref();

const state: MenuState = reactive({
  // ouiaStateId: getDefaultOUIAId(Menu.displayName),
  searchInputValue: '',
  transitionMoveTarget: null,
  disableHover: false,
});

const flyout: Ref<ComponentInternalInstance | null> = ref(null);

// const effectiveMenuDrilledIn = computed(() => props.menuDrilledIn || (instance?.vnode.key && props.drilledInMenus?.includes(instance?.vnode.key)));

const parentMenu = inject(MenuInjectionKey, undefined);

provide(MenuInjectionKey, {
  parentMenu,
  // drilldownItemPath: props.drilldownItemPath,
  activeItemId: props.activeItemId,
  state,
  flyout,
  onActionClick: props.onActionClick,
  onSelect: props.onSelect,
  // onDrillIn: props.onDrillIn,
  // onDrillOut: props.onDrillOut,
});
</script>
