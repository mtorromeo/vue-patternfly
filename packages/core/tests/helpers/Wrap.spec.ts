import { describe, it, expect, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, createCommentVNode } from 'vue';
import { mount } from '@vue/test-utils';
import Wrap from '../../src/helpers/Wrap.vue';

const Box = defineComponent({
  props: { color: String },
  setup: (props, { slots }) => () => h('section', { 'data-color': props.color }, slots.default?.()),
});

describe('Wrap', () => {
  it('renders the default slot unwrapped without a with slot', () => {
    const wrapper = mount(() => h('div', [h(Wrap, null, { default: () => [h('span', 'content')] })]));
    expect(wrapper.html({ raw: true })).toBe('<div><span>content</span></div>');
  });

  it('wraps the content with the element in the with slot', () => {
    const wrapper = mount(() => h('div', [h(Wrap, null, {
      default: () => [h('span', 'content')],
      with: () => [createCommentVNode('c'), h('p', { class: 'wrapper' })],
    })]));
    expect(wrapper.html({ raw: true })).toBe('<div><p class="wrapper"><span>content</span></p></div>');
  });

  it('wraps the content with a component, keeping its props', () => {
    const wrapper = mount(() => h('div', [h(Wrap, null, {
      default: () => [h('span', 'content')],
      with: () => [h(Box, { color: 'red' })],
    })]));
    expect(wrapper.find('section').attributes('data-color')).toBe('red');
    expect(wrapper.find('section > span').text()).toBe('content');
  });

  it('does not wrap when disabled', async () => {
    const disabled = ref(true);
    const wrapper = mount(() => h('div', [h(Wrap, { disabled: disabled.value }, {
      default: () => [h('span', 'content')],
      with: () => [h('p')],
    })]));
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('span').exists()).toBe(true);

    disabled.value = false;
    await nextTick();
    expect(wrapper.find('p > span').exists()).toBe(true);
  });

  it('throws when the with slot contains more than one node', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(() => mount(() => h(Wrap, null, {
      default: () => [h('span')],
      with: () => [h('p'), h('p')],
    }))).toThrow(/single child node/);
  });
});
