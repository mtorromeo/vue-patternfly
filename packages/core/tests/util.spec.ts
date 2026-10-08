import { describe, it, expect, vi } from 'vitest';
import { h, Fragment, Comment, createCommentVNode, createTextVNode, defineComponent, type VNode } from 'vue';
import { mount } from '@vue/test-utils';
import {
  toCamelCase,
  ucfirst,
  debounce,
  findComponentVNode,
  findFirstChildVNode,
  findChildrenVNodes,
  vnodeTypeIsComponent,
  walkChildrenVNodes,
  fragment,
  pluralize,
  fillTemplate,
  isRawSlots,
  isElementInView,
  domFromRef,
  getBreakpoint,
  getVerticalBreakpoint,
} from '../src/util';
import { globalWidthBreakpoints, globalHeightBreakpoints } from '../src/constants';

const Comp = defineComponent({ name: 'Comp', render: () => h('div') });
const OtherComp = defineComponent({ name: 'OtherComp', render: () => h('span') });

describe('toCamelCase', () => {
  it('converts kebab-case and snake_case to camelCase', () => {
    expect(toCamelCase('foo-bar')).toBe('fooBar');
    expect(toCamelCase('foo_bar')).toBe('fooBar');
    expect(toCamelCase('foo-bar_baz-qux')).toBe('fooBarBazQux');
  });

  it('leaves strings without separators untouched', () => {
    expect(toCamelCase('foo')).toBe('foo');
    expect(toCamelCase('')).toBe('');
  });
});

describe('ucfirst', () => {
  it('uppercases only the first character', () => {
    expect(ucfirst('hello world')).toBe('Hello world');
    expect(ucfirst('a')).toBe('A');
    expect(ucfirst('')).toBe('');
  });
});

describe('debounce', () => {
  it('calls the function once after the wait time with the last arguments', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce<number>(fn, 100);

    debounced(1);
    debounced(2);
    vi.advanceTimersByTime(99);
    expect(fn).not.toHaveBeenCalled();

    debounced(3, 4);
    vi.advanceTimersByTime(99);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith([3, 4]);
  });

  it('can be triggered again after it fired', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 50);

    debounced();
    vi.advanceTimersByTime(50);
    debounced();
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe('vnodeTypeIsComponent', () => {
  it('detects component definitions', () => {
    expect(vnodeTypeIsComponent(Comp)).toBe(true);
  });

  it('rejects elements, fragments, comments and text', () => {
    expect(vnodeTypeIsComponent('div')).toBe(false);
    expect(vnodeTypeIsComponent(Fragment)).toBe(false);
    expect(vnodeTypeIsComponent(Comment)).toBe(false);
    expect(vnodeTypeIsComponent(createTextVNode('x').type)).toBe(false);
  });
});

describe('findComponentVNode', () => {
  it('returns undefined for non-array children', () => {
    expect(findComponentVNode('text')).toBeUndefined();
    expect(findComponentVNode(null)).toBeUndefined();
  });

  it('returns the first top-level component vnode', () => {
    const a = h(Comp);
    const b = h(OtherComp);
    expect(findComponentVNode([h('div'), a, b])).toBe(a);
  });

  it('prefers top-level components over the ones nested in fragments', () => {
    const nested = h(Comp);
    const top = h(OtherComp);
    expect(findComponentVNode([h(Fragment, [nested]), top])).toBe(top);
  });

  it('searches inside fragments', () => {
    const nested = h(Comp);
    expect(findComponentVNode([h('div'), h(Fragment, [h('span'), nested])])).toBe(nested);
  });

  it('returns undefined when there is no component', () => {
    expect(findComponentVNode([h('div'), h(Fragment, [h('span')])])).toBeUndefined();
  });

  it('searches all fragments, not only the first one', () => {
    const nested = h(Comp);
    expect(findComponentVNode([h(Fragment, [h('div')]), h(Fragment, [nested])])).toBe(nested);
  });
});

describe('findFirstChildVNode', () => {
  it('returns undefined for non-array children', () => {
    expect(findFirstChildVNode(undefined)).toBeUndefined();
    expect(findFirstChildVNode('text')).toBeUndefined();
  });

  it('skips comments and returns the first vnode', () => {
    const div = h('div');
    expect(findFirstChildVNode([createCommentVNode('c'), div, h('span')])).toBe(div);
  });

  it('descends into fragments', () => {
    const span = h('span');
    expect(findFirstChildVNode([createCommentVNode('c'), h(Fragment, [createCommentVNode('d'), span])])).toBe(span);
  });

  it('uses the match function when given', () => {
    const comp = h(Comp);
    expect(findFirstChildVNode([h('div'), h('span'), comp], v => v.type === Comp)).toBe(comp);
    expect(findFirstChildVNode([h('div')], v => v.type === Comp)).toBeUndefined();
  });
});

describe('findChildrenVNodes', () => {
  it('flattens fragments and removes comments', () => {
    const a = h('a');
    const b = h('b');
    const c = h('i');
    const result = findChildrenVNodes([a, createCommentVNode('x'), h(Fragment, [b, h(Fragment, [c])])]);
    expect(result).toEqual([a, b, c]);
  });

  it('returns an empty array for non-array children', () => {
    expect(findChildrenVNodes(undefined)).toEqual([]);
    expect(findChildrenVNodes('text')).toEqual([]);
  });
});

describe('walkChildrenVNodes', () => {
  it('maps every non-comment vnode, including those inside fragments', () => {
    const comment = createCommentVNode('x');
    const nodes = [h('a'), comment, h(Fragment, [h('b')])];
    const visited: string[] = [];
    const result = walkChildrenVNodes(nodes, (n) => {
      visited.push(n.type as string);
      return h('span', { 'data-original': n.type as string });
    });

    expect(visited).toEqual(['a', 'b']);
    expect(result[0].type).toBe('span');
    expect(result[0].props).toEqual({ 'data-original': 'a' });
    expect(result[1]).toBe(comment);
    expect(result[2].type).toBe(Fragment);
    expect((result[2].children as VNode[])[0].props).toEqual({ 'data-original': 'b' });
  });

  it('returns non-array children unchanged', () => {
    const fn = vi.fn();
    expect(walkChildrenVNodes('text', fn)).toBe('text');
    expect(fn).not.toHaveBeenCalled();
  });
});

describe('fragment', () => {
  it('wraps nodes in a Fragment vnode', () => {
    const div = h('div');
    expect(fragment(div).type).toBe(Fragment);
    expect(fragment(div).children).toEqual([div]);
    expect(fragment([div, div]).children).toHaveLength(2);
    expect(fragment(null).children).toEqual([]);
    expect(fragment(undefined).children).toEqual([]);
  });

  it('re-evaluates the render function together with the parent', async () => {
    const Parent = defineComponent({
      props: { label: { type: String, required: true } },
      setup(props) {
        const render = () => h('span', props.label);
        return () => h('div', [h(fragment(render()))]);
      },
    });

    const wrapper = mount(Parent, { props: { label: 'one' } });
    expect(wrapper.text()).toBe('one');
    await wrapper.setProps({ label: 'two' });
    expect(wrapper.text()).toBe('two');
  });
});

describe('pluralize', () => {
  it('uses the singular form for exactly one', () => {
    expect(pluralize(1, 'item')).toBe('1 item');
  });

  it('uses the default or custom plural form otherwise', () => {
    expect(pluralize(0, 'item')).toBe('0 items');
    expect(pluralize(2, 'item')).toBe('2 items');
    expect(pluralize(3, 'child', 'children')).toBe('3 children');
  });
});

describe('fillTemplate', () => {
  it('replaces template variables', () => {
    expect(fillTemplate('${remaining} more of ${total}', { remaining: 3, total: 10 })).toBe('3 more of 10');
  });

  it('replaces missing variables with an empty string', () => {
    expect(fillTemplate('a${missing}b', {})).toBe('ab');
  });
});

describe('isRawSlots', () => {
  it('is true only for slot objects', () => {
    expect(isRawSlots({ default: () => [] })).toBe(true);
    expect(isRawSlots([])).toBe(false);
    expect(isRawSlots('text')).toBe(false);
    expect(isRawSlots(null)).toBe(false);
    expect(isRawSlots(undefined)).toBe(false);
  });
});

describe('isElementInView', () => {
  function el(left: number, right: number) {
    const e = document.createElement('div');
    e.getBoundingClientRect = () => ({ left, right } as DOMRect);
    return e;
  }

  it('returns false for missing elements', () => {
    expect(isElementInView(null, el(0, 10), false)).toBe(false);
    expect(isElementInView(el(0, 10), null, false)).toBe(false);
  });

  it('detects fully visible elements', () => {
    expect(isElementInView(el(0, 100), el(10, 50), false)).toBe(true);
  });

  it('detects partially visible elements only when partial is allowed', () => {
    expect(isElementInView(el(0, 100), el(80, 150), false)).toBe(false);
    expect(isElementInView(el(0, 100), el(80, 150), true)).toBe(true);
    expect(isElementInView(el(50, 100), el(0, 60), true)).toBe(true);
  });

  it('returns false for elements entirely out of view', () => {
    expect(isElementInView(el(0, 100), el(200, 300), true)).toBe(false);
  });
});

describe('domFromRef', () => {
  it('returns elements as-is', () => {
    const div = document.createElement('div');
    expect(domFromRef(div)).toBe(div);
  });

  it('returns the root element of a component instance', () => {
    const wrapper = mount(Comp);
    expect(domFromRef(wrapper.vm)).toBe(wrapper.element);
  });

  it('skips the leading text node of fragment components', () => {
    const parent = document.createElement('div');
    const text = document.createTextNode('');
    const sibling = document.createElement('span');
    parent.append(text, sibling);
    expect(domFromRef({ $el: text } as any)).toBe(sibling);
  });
});

describe('breakpoints', () => {
  it('getBreakpoint maps widths to breakpoint names', () => {
    expect(getBreakpoint(0)).toBe('default');
    expect(getBreakpoint(globalWidthBreakpoints.sm - 1)).toBe('default');
    expect(getBreakpoint(globalWidthBreakpoints.sm)).toBe('sm');
    expect(getBreakpoint(globalWidthBreakpoints.md)).toBe('md');
    expect(getBreakpoint(globalWidthBreakpoints.lg)).toBe('lg');
    expect(getBreakpoint(globalWidthBreakpoints.xl)).toBe('xl');
    expect(getBreakpoint(globalWidthBreakpoints['2xl'] + 1000)).toBe('2xl');
  });

  it('getVerticalBreakpoint maps heights to breakpoint names', () => {
    expect(getVerticalBreakpoint(globalHeightBreakpoints.sm - 1)).toBe('default');
    expect(getVerticalBreakpoint(globalHeightBreakpoints.sm)).toBe('sm');
    expect(getVerticalBreakpoint(globalHeightBreakpoints.md)).toBe('md');
    expect(getVerticalBreakpoint(globalHeightBreakpoints.lg)).toBe('lg');
    expect(getVerticalBreakpoint(globalHeightBreakpoints.xl)).toBe('xl');
    expect(getVerticalBreakpoint(globalHeightBreakpoints['2xl'])).toBe('2xl');
  });
});
