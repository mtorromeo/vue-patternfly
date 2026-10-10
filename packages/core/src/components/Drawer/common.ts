import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { ComponentExposed } from "vue-component-type-helpers";
import type AutoWrap from "../../helpers/AutoWrap.vue";

export type DrawerProvide = {
  el: Readonly<Ref<HTMLDivElement | null>>;
  expanded: ComputedRef<boolean>;
  display: Ref<boolean>;
  inline: ComputedRef<boolean>;
  position: ComputedRef<'start' | 'end' | 'bottom'>;
}

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;

export type DrawerContentRef = Readonly<Ref<HTMLDivElement | ComponentExposed<typeof AutoWrap> | null>>;
export const DrawerContentRefKey = Symbol('DrawerContentRefKey') as InjectionKey<DrawerContentRef>;
