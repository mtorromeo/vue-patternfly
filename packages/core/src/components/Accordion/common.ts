import type { ComputedRef, InjectionKey, Ref } from 'vue';

export type AccordionHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 1 | 2 | 3 | 4 | 5 | 6;

export type AccordionProvide = {
  /** Element wrapping the toggle of each item */
  toggleContainer: ComputedRef<string>;
  /** Element wrapping the content of each item */
  contentContainer: ComputedRef<string>;
  togglePosition: ComputedRef<'start' | 'end'>;
};

export type AccordionItemProvide = {
  expanded: Ref<boolean>;
};

export const AccordionKey = Symbol('AccordionKey') as InjectionKey<AccordionProvide>;
export const AccordionItemKey = Symbol('AccordionItemKey') as InjectionKey<AccordionItemProvide>;
