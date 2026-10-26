import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export type NavId = string | number;

export const NavScrollableKey = Symbol('NavScrollableKey') as InjectionKey<Ref<boolean>>;
export const NavHorizontalKey = Symbol('NavHorizontalKey') as InjectionKey<ComputedRef<boolean>>;
export const NavOnSelectKey = Symbol('NavOnSelectKey') as InjectionKey<
  (event: Event, groupId: NavId | undefined, itemId: NavId | undefined, to: RouteLocationRaw | undefined) => void
>;
export const NavOnToggleKey = Symbol('NavOnToggleKey') as InjectionKey<
  (event: Event, groupId: NavId | undefined, expanded: boolean) => void
>;
export const NavFlyoutRefKey = Symbol('NavFlyoutRefKey') as InjectionKey<Ref<HTMLElement | null>>;
/** The nav element, where the flyouts of its items are rendered */
export const NavElementKey = Symbol('NavElementKey') as InjectionKey<Readonly<Ref<HTMLElement | null>>>;
