import { describe, it, expect } from 'vitest';
import { defineComponent, h, nextTick, ref, createCommentVNode, type VNode } from 'vue';
import { mount } from '@vue/test-utils';
import AutoWrap from '../../src/helpers/AutoWrap.vue';
import { isOverridableWrapper, resolveOverridableComponent } from '../../src/helpers';

const Item = defineComponent({ name: 'Item', render: () => h('i', 'item') });
const Group = defineComponent({ name: 'Group', setup: (_, { slots, attrs }) => () => h('section', attrs, slots.default?.()) });

function render(props: Record<string, unknown>, children: () => (VNode | null)[]) {
  return mount(() => h('div', [h(AutoWrap, props, { default: children })]));
}

describe('AutoWrap', () => {
  it('passes children through when no component is given', () => {
    const wrapper = render({}, () => [h('span'), h('b')]);
    expect(wrapper.html({ raw: true })).toBe('<div><span></span><b></b></div>');
  });

  it('wraps consecutive children in a single element', () => {
    const wrapper = render({ component: 'ul' }, () => [h('li', '1'), h('li', '2')]);
    expect(wrapper.html({ raw: true })).toBe('<div><ul><li>1</li><li>2</li></ul></div>');
  });

  it('wraps children in a component', () => {
    const wrapper = render({ component: Group }, () => [h(Item), h(Item)]);
    expect(wrapper.findAll('section')).toHaveLength(1);
    expect(wrapper.findAll('section > i')).toHaveLength(2);
  });

  it('does not wrap children that already are the wrapping component', () => {
    const wrapper = render({ component: Group }, () => [h(Group, null, () => [h(Item)])]);
    expect(wrapper.findAll('section')).toHaveLength(1);
  });

  it('wraps each child individually with the each flag', () => {
    const wrapper = render({ component: 'li', each: true }, () => [h('span', 'a'), h('span', 'b')]);
    expect(wrapper.html({ raw: true })).toBe('<div><li><span>a</span></li><li><span>b</span></li></div>');
  });

  it('only wraps children matching include and splits around the others', () => {
    const wrapper = render({ component: 'p', include: Item }, () => [h(Item), h(Item), h('hr'), h(Item)]);
    expect(wrapper.html({ raw: true })).toBe('<div><p><i>item</i><i>item</i></p><hr><p><i>item</i></p></div>');
  });

  it('does not wrap children matching exclude', () => {
    const wrapper = render({ component: 'p', exclude: ['hr'] }, () => [h('hr'), h('b'), h('i')]);
    expect(wrapper.html({ raw: true })).toBe('<div><hr><p><b></b><i></i></p></div>');
  });

  it('accepts filter functions', () => {
    const wrapper = render({ component: 'p', include: (v: VNode) => v.type === 'b' }, () => [h('b'), h('i')]);
    expect(wrapper.html({ raw: true })).toBe('<div><p><b></b></p><i></i></div>');
  });

  it('ignores comments and forwards attributes to the wrapper', () => {
    const wrapper = render({ component: 'ul', class: 'list' }, () => [createCommentVNode('x'), h('li')]);
    expect(wrapper.html({ raw: true })).toBe('<div><ul class="list"><li></li></ul></div>');
  });

  it('applies multiple wrapping groups in order', () => {
    const wrapper = render({
      options: [
        { component: 'li', each: true },
        { component: 'ul' },
      ],
    }, () => [h('span'), h('span')]);
    expect(wrapper.html({ raw: true })).toBe('<div><ul><li><span></span></li><li><span></span></li></ul></div>');
  });

  it('exposes the wrapping element and is resolved by resolveOverridableComponent', async () => {
    const autoWrap = ref();
    mount(defineComponent({
      setup: () => () => h('div', [h(AutoWrap, { component: 'ul', ref: autoWrap }, () => [h('li')])]),
    }));
    await nextTick();

    expect(isOverridableWrapper(autoWrap.value)).toBe(true);
    const el = resolveOverridableComponent(autoWrap.value) as unknown as Element;
    expect(el).toBeInstanceOf(HTMLUListElement);
    expect(isOverridableWrapper(document.createElement('div'))).toBe(false);
  });
});
