import type { Component, ComputedRef, InjectionKey, InputHTMLAttributes, Slot } from 'vue';

/** Attributes of the checkbox of a tree view item */
export interface TreeViewCheckAttrs extends Omit<InputHTMLAttributes, 'checked'> {
  /** Checked state of the checkbox; null for the indeterminate state */
  checked?: boolean | null;
}

/** Properties that make up a tree view data item, passed in the data of the tree view. */
export interface TreeViewDataItem {
  /** Additional attributes of the tree view item badge. */
  badgeAttrs?: Record<string, unknown>;
  /** Attributes of the tree view item checkbox. */
  checkAttrs?: TreeViewCheckAttrs;
  /** Child nodes of a tree view item. */
  children?: TreeViewDataItem[];
  /** Custom content of the badge. */
  customBadgeContent?: string | number;
  /** Flag indicating if node is expanded by default. */
  defaultExpanded?: boolean;
  /** Expanded icon of a tree view item. */
  expandedIcon?: Component;
  /** Flag indicating if a tree view item has a badge. */
  badge?: boolean;
  /** Flag indicating if a tree view item has a checkbox. */
  checkbox?: boolean;
  /** Default icon of a tree view item. */
  icon?: Component;
  /** ID of a tree view item. */
  id?: string;
  /** Internal content of a tree view item. */
  name: string;
  /** Title of a tree view item. Only used in compact presentations. */
  title?: string;
  /** Flag indicating if the tree view item is disabled. */
  disabled?: boolean;
  /** Flag indicating if the tree view item toggle is disabled. */
  toggleDisabled?: boolean;
}

export type TreeViewItemEvent = (
  event: Event,
  item: TreeViewDataItem,
  parentItem: TreeViewDataItem | undefined,
) => void;

export interface TreeViewProvide {
  activeItems: ComputedRef<TreeViewDataItem[] | undefined>;
  compareItems: ComputedRef<(item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean>;
  allExpanded: ComputedRef<boolean | undefined>;
  defaultAllExpanded: ComputedRef<boolean>;
  checkboxes: ComputedRef<boolean>;
  badges: ComputedRef<boolean>;
  selectableNodes: ComputedRef<boolean>;
  compact: ComputedRef<boolean>;
  animations: ComputedRef<boolean>;
  icon: ComputedRef<Component | undefined>;
  expandedIcon: ComputedRef<Component | undefined>;
  /** The action slot of the tree view, rendered for every item */
  action: ComputedRef<Slot<{ item: TreeViewDataItem; parentItem: TreeViewDataItem | undefined }> | undefined>;
  select: TreeViewItemEvent;
  check: TreeViewItemEvent;
  expand: TreeViewItemEvent;
  collapse: TreeViewItemEvent;
}

export const TreeViewKey = Symbol('TreeViewKey') as InjectionKey<TreeViewProvide>;
