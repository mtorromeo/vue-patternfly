// Small replacements for lodash's cloneDeep, merge and defaultsDeep, which the patternfly-react
// implementation relies on. They follow lodash's semantics for plain objects and arrays (arrays are
// merged index by index, which is how Sankey node colors are applied) but never mutate their
// arguments. Anything that is not a plain object or array (functions, dates, DOM nodes, ECharts
// graphic objects) is copied by reference.

type Mergeable = Record<PropertyKey, unknown> | unknown[];

export function isMergeable(value: unknown): value is Mergeable {
  if (Array.isArray(value)) {
    return true;
  }
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/**
 * Deep clones plain objects and arrays, keeping functions and other objects by reference
 */
export function cloneDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(cloneDeep) as T;
  }
  if (isMergeable(value)) {
    const result: Record<PropertyKey, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      result[key] = cloneDeep(item);
    }
    return result as T;
  }
  return value;
}

function mergeInto(target: Mergeable, source: Mergeable, defaults: boolean) {
  // Arrays are merged index by index, like objects
  const entries = target as Record<PropertyKey, unknown>;
  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = entries[key];
    if (isMergeable(targetValue) && isMergeable(sourceValue)) {
      entries[key] = mergeInto(targetValue, sourceValue, defaults);
    } else if (defaults ? targetValue === undefined : sourceValue !== undefined) {
      entries[key] = cloneDeep(sourceValue);
    }
  }
  return target;
}

/**
 * Returns a deep merge of the given values, later values taking precedence (like lodash `merge`)
 */
export function merge<T>(value: T, ...sources: unknown[]): T {
  let result: unknown = cloneDeep(value);
  for (const source of sources) {
    if (isMergeable(source)) {
      result = isMergeable(result) ? mergeInto(result, source, false) : cloneDeep(source);
    }
  }
  return result as T;
}

/**
 * Returns `value` with the properties that resolve to `undefined` filled in from `defaults`,
 * recursively (like lodash `defaultsDeep`)
 */
export function defaultsDeep<T>(value: T | undefined, ...defaults: unknown[]): T {
  let result: unknown = cloneDeep(value) ?? {};
  for (const source of defaults) {
    if (isMergeable(source) && isMergeable(result)) {
      result = mergeInto(result, source, true);
    }
  }
  return result as T;
}
