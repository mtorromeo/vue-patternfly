import type { ComputedRef, InjectionKey, Ref } from 'vue';

export interface DualListSelectorProvide {
  tree: ComputedRef<boolean>;
  animations: ComputedRef<boolean>;
}

export interface DualListSelectorPaneProvide {
  chosen: ComputedRef<boolean>;
  disabled: ComputedRef<boolean>;
  /** Id of the pane status, labelling its list */
  statusId: ComputedRef<string>;
  /** Id of the option focused last, the active descendant of the list */
  focusedOption: Ref<string>;
}

export interface DualListSelectorTreeItemData {
  /** Child options of the option */
  children?: DualListSelectorTreeItemData[];
  /** Flag indicating this option is expanded by default */
  defaultExpanded?: boolean;
  /** Flag indicating this option has a badge with the number of its descendant leaves */
  badge?: boolean;
  /** ID of the option */
  id: string;
  /** Text of the option */
  text: string;
  /** Checked state of the option, `null` for indeterminate */
  checked: boolean | null;
  /** Additional attributes of the option checkbox */
  checkAttrs?: Record<string, unknown>;
  /** Additional attributes of the option badge, e.g. `{ read: true }` */
  badgeAttrs?: Record<string, unknown>;
  /** Flag indicating whether the option is disabled */
  disabled?: boolean;
}

export const DualListSelectorKey = Symbol('DualListSelectorKey') as InjectionKey<DualListSelectorProvide>;
export const DualListSelectorPaneKey = Symbol('DualListSelectorPaneKey') as InjectionKey<DualListSelectorPaneProvide>;

/** Ids of the leaves of a tree */
export function flattenTree(tree: DualListSelectorTreeItemData[]): string[] {
  return tree.flatMap(item => (item.children ? flattenTree(item.children) : [item.id]));
}
