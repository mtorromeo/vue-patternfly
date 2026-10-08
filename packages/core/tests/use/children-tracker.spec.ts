import { describe, it, expect } from 'vitest';
import { defineComponent, h, nextTick, ref, type ComponentPublicInstance, type Reactive } from 'vue';
import { mount } from '@vue/test-utils';
import { provideChildrenTracker, useChildrenTracker, type ChildrenTrackerInjectionKey } from '../../src/use/children-tracker';

const InstanceKey = Symbol('instance') as ChildrenTrackerInjectionKey<ComponentPublicInstance>;
const ItemKey = Symbol('item') as ChildrenTrackerInjectionKey<string>;

const Child = defineComponent({
  name: 'Child',
  props: { label: { type: String, default: '' } },
  setup(props) {
    useChildrenTracker(InstanceKey);
    return () => h('li', props.label);
  },
});

const ItemChild = defineComponent({
  props: { item: { type: String, required: true } },
  setup(props) {
    useChildrenTracker(ItemKey, props.item);
    return () => h('li', props.item);
  },
});

function mountParent<T>(key: ChildrenTrackerInjectionKey<T>, render: () => any) {
  let items!: Reactive<T[]>;
  const Parent = defineComponent({
    setup(_, { slots }) {
      items = provideChildrenTracker(key);
      return () => h('ul', slots.default?.());
    },
  });
  const wrapper = mount(Parent, { slots: { default: render } });
  return { wrapper, items: () => items };
}

describe('children tracker', () => {
  it('registers child component instances on mount, in order', () => {
    const { items, wrapper } = mountParent(InstanceKey, () => [
      h(Child, { label: 'a' }),
      h(Child, { label: 'b' }),
      h(Child, { label: 'c' }),
    ]);

    const children = wrapper.findAllComponents(Child);
    expect(items()).toHaveLength(3);
    expect(items().map(i => (i.$props as { label: string }).label)).toEqual(['a', 'b', 'c']);
    expect(items()[0]).toBe(children[0].vm);
  });

  it('unregisters children when they are unmounted', async () => {
    const show = ref(true);
    const { items } = mountParent(InstanceKey, () => [
      h(Child, { label: 'a' }),
      show.value ? h(Child, { label: 'b' }) : null,
      h(Child, { label: 'c' }),
    ]);

    expect(items()).toHaveLength(3);
    show.value = false;
    await nextTick();
    expect(items().map(i => (i.$props as { label: string }).label)).toEqual(['a', 'c']);
  });

  it('empties the list when the parent unmounts the children', async () => {
    const show = ref(true);
    const { items } = mountParent(InstanceKey, () => show.value ? [h(Child), h(Child)] : []);
    expect(items()).toHaveLength(2);
    show.value = false;
    await nextTick();
    expect(items()).toHaveLength(0);
  });

  it('registers an explicit item instead of the instance', async () => {
    const show = ref(true);
    const { items } = mountParent(ItemKey, () => [
      h(ItemChild, { item: 'x' }),
      show.value ? h(ItemChild, { item: 'y' }) : null,
    ]);

    expect([...items()]).toEqual(['x', 'y']);
    show.value = false;
    await nextTick();
    expect([...items()]).toEqual(['x']);
  });

  it('does not mix up trackers with different keys', () => {
    const { items } = mountParent(ItemKey, () => [h(Child), h(ItemChild, { item: 'x' })]);
    expect([...items()]).toEqual(['x']);
  });

  it('returns null when there is no provider', () => {
    let tracker: unknown = 'unset';
    mount(defineComponent({
      setup() {
        tracker = useChildrenTracker(InstanceKey);
        return () => h('div');
      },
    }));
    expect(tracker).toBeNull();
  });

  it('returns the tracker when a provider exists', () => {
    let tracker: { register: unknown; unregister: unknown } | null = null;
    const Probe = defineComponent({
      setup() {
        tracker = useChildrenTracker(InstanceKey);
        return () => h('li');
      },
    });
    mountParent(InstanceKey, () => [h(Probe)]);
    expect(tracker).not.toBeNull();
    expect(tracker!.register).toBeTypeOf('function');
    expect(tracker!.unregister).toBeTypeOf('function');
  });
});
