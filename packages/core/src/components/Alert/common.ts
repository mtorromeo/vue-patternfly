import type { ComputedRef, InjectionKey } from 'vue';

export type AlertProvide = {
  title: ComputedRef<string | undefined>;
  variantLabel: ComputedRef<string>;
};

export type AlertGroupProvide = {
  animations: ComputedRef<boolean>;
};

export type AlertGroupItemProvide = {
  /** Calls the callback right away, or once the item slid out when the group is animated */
  dismiss: (callback: () => void) => void;
};

export const AlertKey = Symbol('AlertKey') as InjectionKey<AlertProvide>;
export const AlertGroupKey = Symbol('AlertGroupKey') as InjectionKey<AlertGroupProvide>;
export const AlertGroupItemKey = Symbol('AlertGroupItemKey') as InjectionKey<AlertGroupItemProvide>;
