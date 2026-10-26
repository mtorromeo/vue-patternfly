import type { ComputedRef, InjectionKey, Ref } from 'vue';

export const ToggleGroupDisabledKey = Symbol('ToggleGroupDisabledKey') as InjectionKey<
  ComputedRef<boolean | undefined>
>;
export const ToggleGroupSelectionKey = Symbol('ToggleGroupSelectionKey') as InjectionKey<Ref<unknown>>;
