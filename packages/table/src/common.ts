import { Text, type ComputedRef, type InjectionKey, type Ref, type VNode } from 'vue';
import type { ChildrenTrackerInjectionKey } from '@vue-patternfly/core';
import type PfTr from './Tr.vue';

export const TableTrKey = Symbol('TableTrKey') as ChildrenTrackerInjectionKey<InstanceType<typeof PfTr>>;

export interface TableProvide {
  /** The table uses the compact variant */
  compact: ComputedRef<boolean>;
  /** Expandable rows are animated */
  animations: ComputedRef<boolean>;
  /** Name shared by the radio inputs of single selectable rows */
  radioName: string;
}

export const TableKey = Symbol('TableKey') as InjectionKey<TableProvide>;

/** Provided by the scroll containers, so that a sticky table does not wrap itself again */
export const TableScrollContainerKey = Symbol('TableScrollContainerKey') as InjectionKey<true>;

export interface TreeRowProvide {
  level: ComputedRef<number | undefined>;
  setsize: ComputedRef<number | undefined>;
  expanded: Ref<boolean | undefined>;
  detailsExpanded: Ref<boolean | undefined>;
  checked: Ref<boolean | null | undefined>;
}

export const TreeRowKey = Symbol('TreeRowKey') as InjectionKey<TreeRowProvide>;

export type CellModifier = 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
export type CellWidth = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;

export const stickyCellVars = {
  minWidth: '--pf-v6-c-table__sticky-cell--MinWidth',
  insetInlineStart: '--pf-v6-c-table__sticky-cell--InsetInlineStart',
  insetInlineEnd: '--pf-v6-c-table__sticky-cell--InsetInlineEnd',
} as const;

/** Text of slot content made only of text nodes, used as the default tooltip of truncated cells */
export function textContent(vnodes: VNode[] | undefined): string | undefined {
  if (!vnodes?.length) {
    return;
  }
  let text = '';
  for (const vnode of vnodes) {
    if (vnode.type !== Text || typeof vnode.children !== 'string') {
      return;
    }
    text += vnode.children;
  }
  return text.trim() || undefined;
}

/** Shows a tooltip on cells whose content overflows */
export function isOverflowing(el: Element | null | undefined): el is HTMLElement {
  return el instanceof HTMLElement && el.offsetWidth < el.scrollWidth;
}
