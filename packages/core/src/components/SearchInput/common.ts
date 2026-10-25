import type { InjectionKey, Ref } from 'vue';

/** Properties for adding search attributes to an advanced search input. These properties must
 * be passed in as an object within an array to the search input component's attribute property.
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
  /** Element wrapping the whole search input. */
  $el: Readonly<Ref<HTMLElement | null>>;
};

export const SearchInputKey = Symbol('SearchInputKey') as InjectionKey<SearchInputProvide>;

/** Splits a query string on spaces, except inside single or double quotes. */
function splitStringExceptInQuotes(str: string) {
  let quoteType: string | undefined;
  let quoted = false;
  const parts = [''];

  for (const c of str.match(/\\?.|^$/g) ?? []) {
    if (c === "'" || c === '"') {
      quoteType ??= c;
      if (c === quoteType) {
        quoted = !quoted;
      }
    } else if (!quoted && c === ' ') {
      parts.push('');
    } else {
      parts[parts.length - 1] += c.replace(/\\(.)/, '$1');
    }
  }

  return parts;
}

/** Builds an attribute-value map by parsing the query string of a search input. Words not
 * paired with an attribute are collected under the `haswords` key.
 */
export function getAttrValueMap(value: string, delimiter?: string) {
  const attrValue: Record<string, string> = {};
  for (const pair of splitStringExceptInQuotes(value)) {
    const splitPair = delimiter ? pair.split(delimiter) : [pair];
    if (splitPair.length === 2) {
      attrValue[splitPair[0]!] = splitPair[1]!.replace(/(^'|'$)/g, '');
    } else if (splitPair.length === 1) {
      attrValue.haswords = 'haswords' in attrValue ? `${attrValue.haswords} ${splitPair[0]}` : splitPair[0]!;
    }
  }
  return attrValue;
}

/** Builds the query string of a search input from an attribute-value map, quoting values that contain spaces. */
export function buildQueryString(attrValueMap: Record<string, string>, delimiter?: string) {
  let query = '';
  for (const [k, v] of Object.entries(attrValueMap)) {
    if (v.trim() !== '') {
      const quoteWrappedValue = v.includes(' ') ? `'${v.replace(/(^'|'$)/g, '')}'` : v;
      query = k !== 'haswords' ? `${query} ${k}${delimiter}${quoteWrappedValue}` : `${query} ${quoteWrappedValue}`;
    }
  }
  return query.replace(/^\s+/g, '');
}
