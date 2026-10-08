import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick, ref } from 'vue';
import Sort from '../../src/helpers/Sort.vue';
import SortBy from '../../src/helpers/SortBy.vue';

describe('Sort', () => {
  it('orders SortBy children by ascending weight', () => {
    const wrapper = mount(() => h('div', [h(Sort, null, {
      default: () => [
        h(SortBy, { weight: 3 }, { default: () => [h('i', 'c')] }),
        h(SortBy, { weight: 1 }, { default: () => [h('i', 'a')] }),
        h(SortBy, { weight: 2 }, { default: () => [h('i', 'b')] }),
      ],
    })]));
    expect(wrapper.findAll('i').map(n => n.text())).toEqual(['a', 'b', 'c']);
  });

  it('orders by descending weight when reversed', () => {
    const wrapper = mount(() => h('div', [h(Sort, { reverse: true }, {
      default: () => [
        h(SortBy, { weight: 1 }, { default: () => [h('i', 'a')] }),
        h(SortBy, { weight: 3 }, { default: () => [h('i', 'c')] }),
        h(SortBy, { weight: 2 }, { default: () => [h('i', 'b')] }),
      ],
    })]));
    expect(wrapper.findAll('i').map(n => n.text())).toEqual(['c', 'b', 'a']);
  });

  it('treats other children as weight 0 keeping their relative order', () => {
    const wrapper = mount(() => h('div', [h(Sort, null, {
      default: () => [
        h(SortBy, { weight: 1 }, { default: () => [h('i', 'last')] }),
        h('i', 'first'),
        h(SortBy, { weight: -1 }, { default: () => [h('i', 'negative')] }),
        h('i', 'second'),
      ],
    })]));
    expect(wrapper.findAll('i').map(n => n.text())).toEqual(['negative', 'first', 'second', 'last']);
  });

  it('reorders when weights change', async () => {
    const weight = ref(0);
    const wrapper = mount(() => h('div', [h(Sort, null, {
      default: () => [
        h(SortBy, { weight: weight.value }, { default: () => [h('i', 'a')] }),
        h(SortBy, { weight: 1 }, { default: () => [h('i', 'b')] }),
      ],
    })]));
    expect(wrapper.findAll('i').map(n => n.text())).toEqual(['a', 'b']);

    weight.value = 2;
    await nextTick();
    expect(wrapper.findAll('i').map(n => n.text())).toEqual(['b', 'a']);
  });

  it('does not add wrapper elements or forward attributes', () => {
    const wrapper = mount(() => h('div', [h(Sort, { class: 'foo' }, { default: () => [h('span')] })]));
    expect(wrapper.html({ raw: true })).toBe('<div><span></span></div>');
  });
});
