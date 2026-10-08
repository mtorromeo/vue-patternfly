import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import SortBy from '../../src/helpers/SortBy.vue';

describe('SortBy', () => {
  it('renders its default slot without wrapper elements', () => {
    const wrapper = mount(() => h('div', [h(SortBy, { weight: 1 }, { default: () => [h('span', 'a'), h('b', 'b')] })]));
    expect(wrapper.html({ raw: true })).toBe('<div><span>a</span><b>b</b></div>');
  });

  it('does not forward attributes', () => {
    const wrapper = mount(() => h('div', [h(SortBy, { weight: 1, class: 'foo', id: 'bar' }, { default: () => [h('span')] })]));
    expect(wrapper.find('span').attributes()).toEqual({});
  });

  it('exposes the weight prop', () => {
    const wrapper = mount(SortBy, { props: { weight: 5 }, slots: { default: () => h('span') } });
    expect(wrapper.props('weight')).toBe(5);
  });
});
