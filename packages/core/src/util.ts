import { isDefined } from '@vueuse/shared';
import { Fragment, Comment, type VNode, isVNode, type VNodeNormalizedChildren, type ComponentPublicInstance, type VNodeArrayChildren } from 'vue';

const camelize = (s: string) =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');

export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isComponentPublicInstance = (v: any): v is ComponentPublicInstance => v && typeof v === 'object' && '$' in v && '$options' in v && '$root' in v && '$el' in v;

/**
 *
 * @param {string} s string to make camelCased
 */
export function toCamelCase<S extends string>(s: S): ToCamelCase<S> {
  return s.replace(/([-_][a-z])/gi, camelize) as ToCamelCase<S>;
}

export const ucfirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export type ToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}` ?
  `${Lowercase<T>}${Capitalize<ToCamelCase<U>>}` :
  S extends `${infer T}-${infer U}` ?
  `${Lowercase<T>}${Capitalize<ToCamelCase<U>>}` :
  S;

export function debounce<T>(func: (args: T[]) => any, wait: number) {
  let timeout: number;
  return (...args: T[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(args), wait);
  };
}

export function findComponentVNode(vnodes: VNode[] | VNodeNormalizedChildren): VNode | undefined {
  if (!Array.isArray(vnodes)) {
    return;
  }

  for (const n of vnodes) {
    if (isVNode(n) && n.type !== Fragment) {
      return n;
    }
  }

  for (const n of vnodes) {
    if (isVNode(n) && n.type === Fragment) {
      const child = findComponentVNode(n.children);
      if (child !== null) {
        return child;
      }
    }
  }
}

export function findChildrenVNodes(vnodes: VNode[] | VNodeNormalizedChildren | undefined): VNode[] {
  if (!Array.isArray(vnodes)) {
    return [];
  }

  return vnodes
    .filter(n => isVNode(n) && n.type !== Comment)
    .map(n => isVNode(n) && n.type === Fragment ? findChildrenVNodes(n.children) : n)
    .flat() as VNode[];
}

export function walkChildrenVNodes<T extends VNode[] | VNodeNormalizedChildren | undefined>(vnodes: T, mapFn: (node: VNode, index: number) => VNode, startIndex?: number): T {
  if (!Array.isArray(vnodes)) {
    return vnodes;
  }

  return vnodes.map((n, index) => {
    if (!isVNode(n)) {
      return n;
    }
    if (n.type === Comment) {
      return n;
    }
    if (n.type === Fragment) {
      n.children = walkChildrenVNodes(n.children, mapFn, index + (startIndex ?? 0));
      return n;
    }
    return mapFn(n,  index+ (startIndex ?? 0));
  }) as T;
}

export function domFromRef(ref: ComponentPublicInstance | Element): HTMLElement {
  const el: HTMLElement = (ref as any).$el ? (ref as any).$el : ref;
  if (el.nodeType === Node.TEXT_NODE) {
    return el.nextElementSibling as HTMLElement;
  }
  return el;
}

// copied from react-core/src/helpers/util.ts
/** This function returns whether or not an element is within the viewable area of a container. If partial is true,
 * then this function will return true even if only part of the element is in view.
 *
 * @param {HTMLElement} container  The container to check if the element is in view of.
 * @param {HTMLElement} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 *
 * @returns { boolean } True if the component is in View.
 */
export function isElementInView(container: Element | null, element: Element | null, partial: boolean) {
  if (!container || !element) {
    return false;
  }
  const containerBounds = container.getBoundingClientRect();
  const elementBounds = element.getBoundingClientRect();
  const containerBoundsLeft = Math.floor(containerBounds.left);
  const containerBoundsRight = Math.floor(containerBounds.right);
  const elementBoundsLeft = Math.floor(elementBounds.left);
  const elementBoundsRight = Math.floor(elementBounds.right);

  // Check if in view
  const isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
  const isPartiallyInView =
    partial &&
    ((elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft) ||
      (elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight));

  // Return outcome
  return isTotallyInView || isPartiallyInView;
}

// copied from react-core/src/helpers/util.ts
/**
 * @param {string} prefix - String to prefix ID with
 */
export function getUniqueId(prefix = 'pf') {
  const uid =
    new Date().getTime() +
    Math.random()
      .toString(36)
      .slice(2);
  if (prefix) {
    prefix += '-';
  }
  return `${prefix}${uid}`;
}

// copied from react-core/src/helpers/util.ts
export function pluralize(i: number, singular: string, plural?: string) {
  if (!plural) {
    plural = `${singular}s`;
  }
  return `${i || 0} ${i === 1 ? singular : plural}`;
}

// copied from react-core/src/helpers/util.ts
/**
 * Calculate the width of the text
 * Example:
 * getTextWidth('my text', node)
 *
 * @param {string} text The text to calculate the width for
 * @param {HTMLElement} node The HTML element
 */
export function getTextWidth(text: string, node: HTMLElement) {
  const computedStyle = getComputedStyle(node);
  // Firefox returns the empty string for .font, so this function creates the .font property manually
  const getFontFromComputedStyle = () => {
    let computedFont = '';
    // Firefox uses percentages for font-stretch, but Canvas does not accept percentages
    // so convert to keywords, as listed at:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
    const fontStretchLookupTable = {
      '50%': 'ultra-condensed',
      '62.5%': 'extra-condensed',
      '75%': 'condensed',
      '87.5%': 'semi-condensed',
      '100%': 'normal',
      '112.5%': 'semi-expanded',
      '125%': 'expanded',
      '150%': 'extra-expanded',
      '200%': 'ultra-expanded',
    };
    // If the retrieved font-stretch percentage isn't found in the lookup table, use
    // 'normal' as a last resort.
    let fontStretch;
    if (computedStyle.fontStretch in fontStretchLookupTable) {
      fontStretch = (fontStretchLookupTable as any)[computedStyle.fontStretch];
    } else {
      fontStretch = 'normal';
    }
    computedFont =
      computedStyle.fontStyle +
      ' ' +
      computedStyle.fontVariant +
      ' ' +
      computedStyle.fontWeight +
      ' ' +
      fontStretch +
      ' ' +
      computedStyle.fontSize +
      '/' +
      computedStyle.lineHeight +
      ' ' +
      computedStyle.fontFamily;
    return computedFont;
  };

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context === null) {
    throw new Error('Unexpected null context');
  }
  context.font = computedStyle.font || getFontFromComputedStyle();

  return context.measureText(text).width;
}

// copied from react-core/src/helpers/util.ts
export function fillTemplate(templateString: string, templateVars: any) {
  return templateString.replace(/\${(.*?)}/g, (_, match) => templateVars[match] || '');
}

export function isRawSlots(children: VNodeNormalizedChildren | undefined): children is Exclude<VNodeNormalizedChildren, string | VNodeArrayChildren | null | undefined> {
  return isDefined(children) && typeof children === 'object' && !Array.isArray(children);
}
