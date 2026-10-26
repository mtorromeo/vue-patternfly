import type { ComputedRef, InjectionKey, MaybeRefOrGetter, Ref, VNodeChild, WritableComputedRef } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';

export type TabKey = number | string | symbol;

export type TabsProvide = {
  secondary: MaybeRefOrGetter<boolean>;
  nav: MaybeRefOrGetter<boolean>;
  activeKey: WritableComputedRef<TabKey | undefined>;
  idSuffix: MaybeRefOrGetter<string>;
  mountOnEnter: MaybeRefOrGetter<boolean>;
  unmountOnExit: MaybeRefOrGetter<boolean>;
  /** True when the tabs have a close button on every tab */
  closable: MaybeRefOrGetter<boolean>;
  contentTargetRef: Readonly<Ref<HTMLElement | null>>;
  /** Selects a tab, as when it is clicked */
  select: (event: Event, key: TabKey) => void;
  /** Closes a tab with the close button */
  close: (event: Event, key: TabKey) => void;
  /** Recomputes the position of the current tab accent */
  setAccentStyles: (initialize?: boolean) => void;
};

export const TabsProvideKey = Symbol('TabsProvide') as InjectionKey<TabsProvide>;

export type TabData = {
  key: ComputedRef<TabKey>;
  el: Ref<HTMLLIElement | undefined>;
  overflowing: Ref<boolean>;
  title: MaybeRefOrGetter<string | undefined>;
  /** Renders the title of the tab, for its overflow menu item */
  renderTitle: () => VNodeChild;
  href: MaybeRefOrGetter<string | undefined>;
  disabled: MaybeRefOrGetter<boolean>;
};

export const TabsKey = Symbol('TabsKey') as ChildrenTrackerInjectionKey<TabData>;
