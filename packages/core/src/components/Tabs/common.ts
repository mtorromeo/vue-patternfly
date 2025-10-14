import type { ComputedRef, InjectionKey, MaybeRefOrGetter, Ref, WritableComputedRef } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';
import PfMenuList from '../Menu/MenuList.vue';
import type { ComponentExposed } from 'vue-component-type-helpers';

export type TabsProvide = {
  secondary: boolean;
  activeKey: WritableComputedRef<TabKey | undefined>;
  idSuffix: MaybeRefOrGetter<string>;
  tabOverflowRef: Ref<ComponentExposed<typeof PfMenuList> | undefined>;
  contentTargetRef: Ref<HTMLElement | undefined>;
}

export const TabsProvideKey = Symbol('TabsProvide') as InjectionKey<TabsProvide>;

export type TabData = {
  key: ComputedRef<TabKey>;
  el: Ref<HTMLLIElement | undefined>;
  overflowing: Ref<boolean>;
}

export type TabKey = number | string | symbol;

export const TabsKey = Symbol("TabsKey") as ChildrenTrackerInjectionKey<TabData>;
