import type { ComponentInternalInstance, ComputedRef, InjectionKey, ModelRef, Ref } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ChildrenTrackerInjectionKey } from '../../use';
import type PfMenuList from './MenuList.vue';

export type MenuItemId = string | number | symbol;

export interface MenuState {
  /** Element focused after the next drilldown transition */
  transitionMoveTarget: HTMLElement | null;
  disableHover: boolean;
}

export type MenuProvide = {
  parentMenu: MenuProvide | undefined;
  /** Id of the menu */
  menuId: ComputedRef<string>;
  /** Id of the parent menu of a drilldown menu, or of the menu itself */
  parentMenuId: ComputedRef<string>;
  favoriteList: Ref<ComponentExposed<typeof PfMenuList> | null>;
  selected?: Ref<MenuItemId | MenuItemId[] | null>;
  /** Accessible role of the menu, "menu" or "listbox" */
  role: ComputedRef<string>;
  activeItemId: () => MenuItemId | undefined;
  state: MenuState;
  flyout: Ref<ComponentInternalInstance | null>;
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: unknown) => void;
  onSelect?: (event: Event, itemId: MenuItemId | null | undefined) => void;
  /** Path of the drilled in item ids */
  drilldownItemPath: ComputedRef<MenuItemId[]>;
  /** Ids of the drilled in menus */
  drilledInMenus: ComputedRef<string[]>;
  onDrillIn: (event: Event, fromMenuId: string, toMenuId: string, itemId: MenuItemId | null | undefined) => void;
  onDrillOut: (event: Event, toMenuId: string, itemId: MenuItemId | null | undefined) => void;
  onGetMenuHeight: (menuId: string, height: number) => void;
  /** Height of the menu content of the root drilldown menu, following the active menu */
  drilldownMenuHeight: ComputedRef<string | undefined>;
};

export type MenuItemTrack = {
  element: Readonly<Ref<HTMLLIElement | null>>;
  disabled: ComputedRef<boolean>;
  focused: Ref<boolean>;
  favorited: ModelRef<boolean | undefined>;
  focus: () => void;
};

export type MenuItemProvide = {
  disabled: boolean;
  itemId: ComputedRef<MenuItemId | null | undefined>;
  /** Registers the id of the drilldown menu of the item */
  setDrilldownMenuId: (id: string | undefined) => void;
};

export const MenuItemsKey = Symbol('MenuItemsKey') as ChildrenTrackerInjectionKey<MenuItemTrack>;
export const MenuInjectionKey = Symbol('MenuInjectionKey') as InjectionKey<MenuProvide>;
export const MenuItemInjectionKey = Symbol('MenuItemInjectionKey') as InjectionKey<MenuItemProvide>;
/** Horizontal direction of the flyout menus, inherited by nested flyouts */
export const FlyoutDirectionKey = Symbol('FlyoutDirectionKey') as InjectionKey<Ref<'left' | 'right'>>;
