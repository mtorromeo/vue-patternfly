import { describe, it, expect, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, createCommentVNode, Fragment, type VNode } from 'vue';
import { mount } from '@vue/test-utils';
import PassThrough from '../../src/helpers/PassThrough.vue';

describe('PassThrough', () => {
  it('renders the default slot without adding wrapper elements', () => {
    const wrapper = mount(() => h('div', [
      h(PassThrough, null, { default: () => [h('span', 'a'), h('b', 'b')] }),
    ]));
    expect(wrapper.html({ raw: true })).toBe('<div><span>a</span><b>b</b></div>');
  });

  it('does not forward attributes', () => {
    const wrapper = mount(() => h('div', [
      h(PassThrough, { class: 'foo', id: 'bar' }, { default: () => [h('span')] }),
    ]));
    expect(wrapper.find('span').attributes()).toEqual({});
    expect(wrapper.find('.foo').exists()).toBe(false);
  });

  it('renders nothing without a default slot', () => {
    const wrapper = mount(() => h('div', [h(PassThrough)]));
    expect(wrapper.find('div').element.children).toHaveLength(0);
  });

  it('applies the alter function to the rendered children', () => {
    const alter = (nodes: VNode[]) => [...nodes].reverse();
    const wrapper = mount(() => h('div', [
      h(PassThrough, { alter }, { default: () => [h('i', '1'), h('i', '2'), h('i', '3')] }),
    ]));
    expect(wrapper.findAll('i').map(i => i.text())).toEqual(['3', '2', '1']);
  });

  it('emits the rendered children on every render', async () => {
    const onChildren = vi.fn();
    const count = ref(1);
    mount(() => h('div', [
      h(PassThrough, { onChildren }, {
        default: () => Array.from({ length: count.value }, (_, i) => h('i', { key: i })),
      }),
    ]));

    expect(onChildren).toHaveBeenCalled();
    expect(onChildren.mock.lastCall![0]).toHaveLength(1);

    count.value = 3;
    await nextTick();
    expect(onChildren.mock.lastCall![0]).toHaveLength(3);
  });

  it('re-renders when reactive state used in the slot changes', async () => {
    const label = ref('one');
    const wrapper = mount(() => h('div', [h(PassThrough, null, { default: () => [h('span', label.value)] })]));
    expect(wrapper.text()).toBe('one');
    label.value = 'two';
    await nextTick();
    expect(wrapper.text()).toBe('two');
  });

  describe('capture slot', () => {
    it('passes an empty children array when there is no capture slot', () => {
      const defaultSlot = vi.fn(() => [h('span')]);
      mount(() => h(PassThrough, null, { default: defaultSlot }));
      expect(defaultSlot).toHaveBeenCalledWith({ children: [] });
    });

    it('passes the captured vnodes, flattened and without comments, to the default slot', () => {
      const wrapper = mount(() => h('ul', [
        h(PassThrough, null, {
          capture: () => [
            h('b', 'a'),
            createCommentVNode('v-if'),
            h(Fragment, [h('b', 'b'), h('b', 'c')]),
          ],
          default: ({ children }: { children: VNode[] }) => children.map((child, i) => h('li', { key: i, 'data-index': i }, [child])),
        }),
      ]));

      const items = wrapper.findAll('li');
      expect(items).toHaveLength(3);
      expect(items.map(li => li.text())).toEqual(['a', 'b', 'c']);
      expect(items.map(li => li.attributes('data-index'))).toEqual(['0', '1', '2']);
      expect(wrapper.findAll('ul > b')).toHaveLength(0);
    });

    it('does not render the captured nodes unless the default slot does', () => {
      const wrapper = mount(() => h('div', [
        h(PassThrough, null, {
          capture: () => [h('b', 'hidden')],
          default: ({ children }: { children: VNode[] }) => [h('span', `${children.length} captured`)],
        }),
      ]));
      expect(wrapper.html({ raw: true })).toBe('<div><span>1 captured</span></div>');
    });

    it('re-evaluates the captured nodes when they change', async () => {
      const items = ref(['a', 'b']);
      const wrapper = mount(() => h('ul', [
        h(PassThrough, null, {
          capture: () => items.value.map(i => h('b', { key: i }, i)),
          default: ({ children }: { children: VNode[] }) => [
            ...children.map((child, i) => h('li', { key: i }, [child])),
            h('li', { key: 'count', class: 'count' }, String(children.length)),
          ],
        }),
      ]));

      expect(wrapper.find('.count').text()).toBe('2');
      items.value = ['a', 'b', 'c'];
      await nextTick();
      expect(wrapper.find('.count').text()).toBe('3');
      expect(wrapper.findAll('li b').map(b => b.text())).toEqual(['a', 'b', 'c']);
    });
  });

  // `templateFn` is a plain `let` that is exposed by value at setup time, so it is always `undefined` on the
  // exposed instance and the `template` + `useRef` combination never renders the stored template.
  it.fails('renders the template stored by another PassThrough through useRef', async () => {
    const source = ref();
    const Host = defineComponent({
      setup() {
        return () => h('div', [
          h(PassThrough, { template: true, ref: source }, { default: () => [h('span', 'from template')] }),
          source.value ? h(PassThrough, { useRef: source.value }) : null,
        ]);
      },
    });
    const wrapper = mount(Host);
    await nextTick();
    expect(wrapper.find('span').exists()).toBe(true);
  });
});
