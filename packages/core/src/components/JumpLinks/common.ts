import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';

export interface JumpLinksItemRegistration {
  /** The li element of the item, used to sort the items in document order */
  el(): HTMLElement | null;
  /** Resolves the element the item scrolls to and spies on */
  resolveTarget(): HTMLElement | null;
}

export const JumpLinksKey = Symbol('JumpLinksKey') as ChildrenTrackerInjectionKey<JumpLinksItemRegistration>;

export interface JumpLinksProvide {
  /** Whether a scrollable element is spied on */
  spying: ComputedRef<boolean>;
  /** Resolved scrollable element */
  scrollableHTMLElement: Readonly<Ref<HTMLElement | undefined>>;
  /** Whether the item is the active one */
  isActive(item: JumpLinksItemRegistration): boolean;
  /** Scrolls to the target of the clicked item and makes it active */
  onItemClick(item: JumpLinksItemRegistration, event: MouseEvent, href: string | undefined): void;
}

export const JumpLinkInjectionKey = Symbol('JumpLinkInjectionKey') as InjectionKey<JumpLinksProvide>;
