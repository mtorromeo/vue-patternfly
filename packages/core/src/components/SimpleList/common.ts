import type { InjectionKey, WritableComputedRef } from 'vue';

export type SimpleListValue = string | number;

export interface SimpleListProvide {
  /** Value of the current item, or a symbol for an item without a value */
  value: WritableComputedRef<SimpleListValue | symbol | null>;
  /** Called by an item when it gets selected */
  select: (event: Event, value: SimpleListValue | undefined) => void;
}

export const SimpleListKey = Symbol('SimpleListKey') as InjectionKey<SimpleListProvide>;
