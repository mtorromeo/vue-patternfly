import type { ComputedRef, InjectionKey, Ref } from "vue";

export const DataListItemKey = Symbol("DataListItemKey") as InjectionKey<{
  expanded: Ref<boolean>;
  expandable: ComputedRef<boolean>;
}>;
