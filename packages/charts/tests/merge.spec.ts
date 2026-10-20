import { describe, expect, it } from 'vitest';
import { cloneDeep, defaultsDeep, merge } from '../src/utils/merge';

describe('cloneDeep', () => {
  it('clones plain objects and arrays, keeping functions by reference', () => {
    const formatter = () => '';
    const date = new Date();
    const value = { a: [{ b: 1 }], formatter, date };
    const clone = cloneDeep(value);
    expect(clone).toEqual(value);
    expect(clone.a).not.toBe(value.a);
    expect(clone.a[0]).not.toBe(value.a[0]);
    expect(clone.formatter).toBe(formatter);
    expect(clone.date).toBe(date);
  });
});

describe('defaultsDeep', () => {
  it('fills only undefined properties, recursively', () => {
    expect(defaultsDeep({ a: 1, b: { c: 2 } }, { a: 2, b: { c: 3, d: 4 }, e: 5 })).toEqual({
      a: 1,
      b: { c: 2, d: 4 },
      e: 5,
    });
  });

  it('merges arrays index by index', () => {
    const data = [{ name: 'a' }, { name: 'b', itemStyle: { color: 'blue' } }];
    const defaults = [{ itemStyle: { color: 'red' } }, { itemStyle: { color: 'green' } }];
    expect(defaultsDeep({ data }, { data: defaults })).toEqual({
      data: [
        { name: 'a', itemStyle: { color: 'red' } },
        { name: 'b', itemStyle: { color: 'blue' } },
      ],
    });
  });

  it('does not mutate its arguments', () => {
    const value = { a: { b: 1 } };
    const defaults = { a: { c: 2 } };
    defaultsDeep(value, defaults);
    expect(value).toEqual({ a: { b: 1 } });
    expect(defaults).toEqual({ a: { c: 2 } });
  });

  it('accepts an undefined value', () => {
    expect(defaultsDeep(undefined, { a: 1 })).toEqual({ a: 1 });
  });
});

describe('merge', () => {
  it('overrides with later values, skipping undefined ones', () => {
    expect(merge({ a: 1, b: { c: 2, d: 3 } }, { a: 2, b: { c: undefined, d: 4 } }, { e: 5 })).toEqual({
      a: 2,
      b: { c: 2, d: 4 },
      e: 5,
    });
  });

  it('ignores non mergeable sources', () => {
    expect(merge({ a: 1 }, undefined, null)).toEqual({ a: 1 });
  });

  it('does not mutate its arguments', () => {
    const value = { a: { b: 1 } };
    merge(value, { a: { b: 2 } });
    expect(value).toEqual({ a: { b: 1 } });
  });
});
