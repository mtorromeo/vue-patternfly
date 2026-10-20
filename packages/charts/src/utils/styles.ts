/**
 * Copied from exenv
 *
 * @private Not intended as public API and subject to change
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Class applied to the outermost element of every chart. PatternFly core ships no CSS for it (so there is
 * no react-styles object to import): like patternfly-react, it only serves as a hook for custom styles.
 */
export const chartClass = 'pf-v6-c-chart';

let styleSource: CSSStyleDeclaration | undefined;

/**
 * Runs `fn` reading the token values (see getComputedStyleValue) from the computed style of `element` rather than
 * `document.body`, so chart variables overridden on a part of the page apply to the charts in it.
 *
 * @private Not intended as public API and subject to change
 */
export function withStyleSource<T>(element: Element | null | undefined, fn: () => T): T {
  const previous = styleSource;
  styleSource = canUseDOM && element ? window.getComputedStyle(element) : undefined;
  try {
    return fn();
  } finally {
    styleSource = previous;
  }
}

/** A design token, as exported by @patternfly/react-tokens */
interface Token {
  name: string;
  value: string | number;
  var: string;
}

/**
 * Get computed style value -- see https://github.com/apache/echarts/issues/19743
 *
 * Note that Victory uses the style property to apply CSS variables. However, ECharts' LineChart uses `fill` and
 * `stroke` attributes, which doesn't work with CSS variables. In addition, using CSS variables with Sankey
 * causes sever flashing during mouse hover. Therefore, we will obtain the CSS computed value from the DOM.
 *
 * @param token The token to read
 * @param element The element to read the value from; defaults to `document.body`
 * @public
 * @beta
 */
export function getComputedStyleValue(token: Token, element?: Element) {
  if (canUseDOM) {
    const style = element ? window.getComputedStyle(element) : (styleSource ?? window.getComputedStyle(document.body));
    const value = style.getPropertyValue(token.name);
    if (value !== '') {
      return value;
    }
  }
  return String(token.value);
}

/**
 * Get the computed style value of a numeric token, e.g. a width -- see getComputedStyleValue
 *
 * @public
 * @beta
 */
export const getComputedStyleNumber = (token: Token, element?: Element) =>
  Number(getComputedStyleValue(token, element));

/**
 * Get the computed style value of a boolean token, e.g. `chart_echarts_line_Smooth` -- see getComputedStyleValue
 *
 * @public
 * @beta
 */
export const getComputedStyleBoolean = (token: Token, element?: Element) =>
  getComputedStyleValue(token, element).trim() === 'true';
