import { describe, it, expect } from 'vitest';
import { defineComponent, h, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { useOUIAProps, useOUIAId, getDefaultOUIAId } from '../../src/helpers/ouia';

function mountWithOuia(name: string, options: Parameters<typeof useOUIAProps>[0] = {}) {
  let ouia!: ReturnType<typeof useOUIAProps>;
  const wrapper = mount(defineComponent({
    name,
    setup() {
      ouia = useOUIAProps(options);
      return () => h('div', ouia);
    },
  }));
  return { wrapper, ouia };
}

describe('useOUIAProps', () => {
  it('derives the component type from the component name, stripping the Pf prefix', () => {
    const { wrapper } = mountWithOuia('PfFooBar');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/FooBar');
  });

  it('strips the pf- prefix too', () => {
    const { wrapper } = mountWithOuia('pf-thing');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/thing');
  });

  it('uses an explicit name when given', () => {
    const { wrapper } = mountWithOuia('PfIgnored', { name: 'Custom' });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Custom');
  });

  it('generates unique ids per component type', () => {
    const a = mountWithOuia('PfOuiaGen');
    const b = mountWithOuia('PfOuiaGen');
    const idA = a.wrapper.attributes('data-ouia-component-id');
    const idB = b.wrapper.attributes('data-ouia-component-id');
    expect(idA).toMatch(/^OUIA-Generated-OuiaGen-\d+$/);
    expect(idB).toMatch(/^OUIA-Generated-OuiaGen-\d+$/);
    expect(idA).not.toBe(idB);
  });

  it('includes the variant in generated ids', () => {
    const { wrapper } = mountWithOuia('PfOuiaVariant', { variant: 'primary' });
    expect(wrapper.attributes('data-ouia-component-id')).toMatch(/^OUIA-Generated-OuiaVariant-primary-\d+$/);
  });

  it('uses the explicit id when provided', () => {
    const { wrapper } = mountWithOuia('PfOuiaExplicit', { id: 'my-id' });
    expect(wrapper.attributes('data-ouia-component-id')).toBe('my-id');
  });

  it('reacts to a ref id', async () => {
    const id = ref<string | number>('first');
    const { wrapper } = mountWithOuia('PfOuiaRef', { id });
    expect(wrapper.attributes('data-ouia-component-id')).toBe('first');
    id.value = 42;
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes('data-ouia-component-id')).toBe('42');
  });

  it('sets the safe flag, defaulting to false', async () => {
    expect(mountWithOuia('PfOuiaSafe').wrapper.attributes('data-ouia-safe')).toBe('false');
    expect(mountWithOuia('PfOuiaSafe', { safe: true }).wrapper.attributes('data-ouia-safe')).toBe('true');

    const safe = ref(false);
    const { wrapper } = mountWithOuia('PfOuiaSafe', { safe });
    safe.value = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });
});

describe('useOUIAId', () => {
  it('memoizes the generated id', () => {
    const id = useOUIAId('Memo');
    const first = id.value;
    expect(first).toMatch(/^OUIA-Generated-Memo-\d+$/);
    expect(id.value).toBe(first);
  });

  it('prefers the explicit id', () => {
    expect(useOUIAId('Memo', 'explicit').value).toBe('explicit');
  });
});

describe('getDefaultOUIAId', () => {
  it('increments the counter for the same type and variant', () => {
    const a = getDefaultOUIAId('Counter');
    const b = getDefaultOUIAId('Counter');
    const n = Number(a.split('-').pop());
    expect(b).toBe(`OUIA-Generated-Counter-${n + 1}`);
  });

  it('keeps separate counters per variant', () => {
    expect(getDefaultOUIAId('Separate', 'x')).toBe('OUIA-Generated-Separate-x-1');
    expect(getDefaultOUIAId('Separate', 'y')).toBe('OUIA-Generated-Separate-y-1');
    expect(getDefaultOUIAId('Separate', 'x')).toBe('OUIA-Generated-Separate-x-2');
  });
});
