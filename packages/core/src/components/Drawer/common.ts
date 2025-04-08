import type { ComputedRef, InjectionKey, Ref } from "vue";

export type DrawerProvide = {
  el: Readonly<Ref<HTMLDivElement | null>>;
  expanded: ComputedRef<boolean>;
  display: Ref<boolean>;
  inline: ComputedRef<boolean>;
  position: ComputedRef<'start' | 'end' | 'bottom'>;
}

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;
