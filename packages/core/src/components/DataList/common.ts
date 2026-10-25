import type { ComputedRef, InjectionKey, Ref } from 'vue';

export type DataListWrapModifier = 'nowrap' | 'truncate' | 'breakWord';

export type DataListItemValue = string | number | symbol;
/** Array for multiple selection, single value for single selection */
export type DataListSelection = DataListItemValue | DataListItemValue[];

export const DataListKey = Symbol('DataListSelectableKey') as InjectionKey<{
  emit: (event: 'update:selected', item: DataListSelection | undefined) => void;
  selectable: Ref<boolean>;
  expandable: ComputedRef<boolean | undefined>;
  inputName: ComputedRef<string | undefined>;
  inputValue: ComputedRef<string | undefined>;
  itemSelection: Ref<DataListSelection | undefined>;
  multipleSelection: ComputedRef<boolean>;
}>;

export const DataListItemKey = Symbol('DataListItemKey') as InjectionKey<{
  expanded: Ref<boolean>;
  expandable: ComputedRef<boolean>;
  /** Id labelling the item, used to label its toggle */
  rowid: ComputedRef<string | undefined>;
}>;
