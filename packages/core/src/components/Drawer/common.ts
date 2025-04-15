import type { ComputedRef, InjectionKey, Ref } from "vue";

export enum DrawerColorVariant {
  default = 'default',
  light200 = 'light-200',
  noBackground = 'no-background',
}

export type DrawerProvide = {
  el: Readonly<Ref<HTMLDivElement | null>>;
  expanded: ComputedRef<boolean>;
  display: Ref<boolean>;
  inline: ComputedRef<boolean>;
  position: ComputedRef<'left' | 'right' | 'bottom'>;
}

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;
