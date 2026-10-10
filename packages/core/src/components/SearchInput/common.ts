import type { InjectionKey, Ref } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type PfTextInputGroupMain from '../TextInputGroup/TextInputGroupMain.vue';

/** Properties for adding search attributes to an advanced search input. These properties must
 * be passed in as an object within an array to the search input component's attribute properrty.
 */
export interface SearchAttribute {
  /** The search attribute's value to be provided in the search input's query string.
   * It should have no spaces and be unique for every attribute.
   */
  attr: string;
  /** The search attribute's display name. It is used to label the field in the advanced
   * search menu.
   */
  display: string;
}

export type SearchInputProvide = {
  $el: Readonly<Ref<HTMLDivElement | null>>;
  input: Ref<ComponentExposed<typeof PfTextInputGroupMain> | null>;
}

export const SearchInputKey = Symbol('SearchInputKey') as InjectionKey<SearchInputProvide>;
