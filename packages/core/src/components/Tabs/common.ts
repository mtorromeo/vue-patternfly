import type { ComputedRef, InjectionKey, Ref, WritableComputedRef } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';
import PfMenuList from '../Menu/MenuList.vue';

export type TabsProvide = {
  secondary: boolean;
  activeKey: WritableComputedRef<TabKey | undefined>;
  idSuffix: ComputedRef<string>;
  tabOverflowRef: Ref<InstanceType<typeof PfMenuList> | undefined>;
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
