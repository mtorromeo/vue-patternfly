import {h, computed, mergeProps, Fragment} from 'vue';

export const breakpoints = ['', 'Sm', 'Md', 'Lg', 'Xl', '2xl'];

const camelize = s =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');

/**
 *
 * @param {string} s string to make camelCased
 */
export const toCamel = s => s.replace(/([-_][a-z])/gi, camelize);

export const ucfirst = s => s.charAt(0).toUpperCase() + s.slice(1);

export function classesFromBreakpointProps(props, baseNames, styles, {additional = [], short = false} = {}) {
  const c = [...additional];

  for (const baseName of baseNames) {
    for (let breakpointSuffix of breakpoints) {
      const prop = `${baseName}${breakpointSuffix}`;
      if (breakpointSuffix.match(/^[0-9]/)) {
        breakpointSuffix = `_${breakpointSuffix}`;
      }
      let value = props[prop];
      if (value) {
        if (value === true) {
          value = '';
        } else {
          value = toCamel(value);
          if (value.match(/^[0-9]/)) {
            value = `_${value}`;
          }
        }
        let mod = `${value}${breakpointSuffix ? `On${breakpointSuffix}` : ''}`;
        if (!short) {
          mod = `${toCamel(baseName)}${ucfirst(mod)}`;
        }
        c.push(styles.modifiers[mod]);
      }
    }
  }

  return c.filter(Boolean);
}

export function useBreakpointProp(...args) {
  return computed(() => classesFromBreakpointProps(...args));
}

export function breakpointProp(baseName, type, values) {
  return Object.fromEntries(breakpoints.map(b => {
    let _default = null;
    if (Array.isArray(values) && values.length) {
      _default = values[0]
    } else if (type === Boolean) {
      _default = false;
    }
    const definition = {
      type,
      default: _default,
    };
    if (Array.isArray(values)) {
      definition.validate = v => values.includes(v);
      definition._values = values;
    }
    return [`${baseName}${b}`, definition];
  }));
}

export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(args), wait);
  };
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
export function isElementInView(container, element, partial) {
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

/**
 * @param {string} prefix - String to prefix ID with
 */
export function getUniqueId(prefix = 'pf') {
  const uid =
    new Date().getTime() +
    Math.random()
      .toString(36)
      .slice(2);
  return `${prefix}-${uid}`;
}

export function findComponentVNode(vnodes) {
  for (const n of vnodes) {
    if (n.type !== Fragment) {
      return n
    }
  }

  for (const n of vnodes) {
    if (n.type === Fragment) {
      const child = findComponentVNode(n.children);
      if (child !== null) {
        return child;
      }
    }
  }

  return null;
}

export function findChildrenVNodes(vnodes) {
  if (vnodes.length === 1 && vnodes[0].type === Fragment) {
    return vnodes[0].children;
  }
  return vnodes;
}

export function domFromRef(ref) {
  return ref.$el ? ref.$el : ref;
}

export function cloneElement(e, props) {
  return h(e.type, mergeProps(e.props, props), e.children);
}

export function pluralize(i, singular, plural) {
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
export function getTextWidth(text, node) {
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
      fontStretch = fontStretchLookupTable[computedStyle.fontStretch];
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
  context.font = computedStyle.font || getFontFromComputedStyle();

  return context.measureText(text).width;
}
