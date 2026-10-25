import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type AutoWrap from '../../helpers/AutoWrap.vue';

export type DrawerProvide = {
  el: Readonly<Ref<HTMLDivElement | null>>;
  expanded: ComputedRef<boolean>;
  display: Ref<boolean>;
  static: ComputedRef<boolean>;
  inline: ComputedRef<boolean>;
  viewport: ComputedRef<boolean>;
  position: ComputedRef<'start' | 'end' | 'bottom'>;
  /** Called by the panel when its expand transition ends */
  onExpand: (event: TransitionEvent) => void;
};

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;

export type DrawerContentRef = Readonly<Ref<HTMLDivElement | ComponentExposed<typeof AutoWrap> | null>>;
export const DrawerContentRefKey = Symbol('DrawerContentRefKey') as InjectionKey<DrawerContentRef>;
