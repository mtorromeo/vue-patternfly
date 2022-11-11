import type { ComputedRef, InjectionKey, Ref } from "vue";

export enum DrawerColorVariant {
  default = 'default',
  light200 = 'light-200'
}

export type DrawerProvide = {
  el: Ref<HTMLDivElement | null>;
  expanded: ComputedRef<boolean>;
  inline: ComputedRef<boolean>;
  static: ComputedRef<boolean>;
  position: ComputedRef<'left' | 'right' | 'bottom'>;
}

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;
