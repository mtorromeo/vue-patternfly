import type { ComponentInternalInstance, ComputedRef, InjectionKey, ModelRef, Ref } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ChildrenTrackerInjectionKey } from '../../use';
import type PfMenuList from './MenuList.vue';

export type MenuItemId = string | number | symbol;

export interface MenuState {
  // ouiaStateId: string;
  transitionMoveTarget: HTMLElement | null;
  // flyoutRef: React.Ref<HTMLLIElement> | null;
  disableHover: boolean;
}

export type MenuProvide = {
  parentMenu: MenuProvide | undefined;
  favoriteList: Ref<ComponentExposed<typeof PfMenuList> | null>;
  selected?: Ref<MenuItemId | MenuItemId[] | null>;
  // drilldownItemPath: MenuItemId[];
  activeItemId: () => MenuItemId | undefined;
  state: MenuState;
  flyout: Ref<ComponentInternalInstance | null>;
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  onSelect?: (event: Event, itemId: MenuItemId | null | undefined) => void;
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;
};

export type MenuItemTrack = {
  element: Readonly<Ref<HTMLLIElement | null>>;
  disabled: ComputedRef<boolean>;
  focused: Ref<boolean>;
  favorited: ModelRef<boolean | undefined>;
  focus: () => void;
}

export type MenuItemProvide = {
  disabled: boolean;
  itemId: ComputedRef<MenuItemId | null | undefined>;
};

export const MenuItemsKey = Symbol("MenuItemsKey") as ChildrenTrackerInjectionKey<MenuItemTrack>;
export const MenuInjectionKey = Symbol('MenuInjectionKey') as InjectionKey<MenuProvide>;
export const MenuItemInjectionKey = Symbol('MenuItemInjectionKey') as InjectionKey<MenuItemProvide>;
