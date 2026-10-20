import type { ComputedRef, InjectionKey, Ref } from 'vue';

export type CardProvide = {
  cardId: ComputedRef<string | undefined>;
  clickable: ComputedRef<boolean>;
  selectable: ComputedRef<boolean>;
  disabled: ComputedRef<boolean>;
  expandable: ComputedRef<boolean>;
  expanded: Ref<boolean | undefined>;
  selectableAction: ComputedRef<CardSelectableAction | null>;
};

export interface CardSelectableAction {
  /** Renders a radio when true, a checkbox otherwise */
  single: boolean;
  name: string | undefined;
  hidden: boolean;
  checked: Ref<boolean>;
  attrs: Record<string, unknown>;
  to: string | undefined;
  external: boolean;
  onChange: (e: Event) => void;
}

/** Selected state of the single selectable cards, grouped by input name, so that selecting one deselects the others */
export const cardRadioGroups = new Map<string, Set<Ref<boolean>>>();

export const CardKey = Symbol('CardKey') as InjectionKey<CardProvide>;
