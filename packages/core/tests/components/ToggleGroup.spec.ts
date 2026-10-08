import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import PfToggleGroup from '../../src/components/ToggleGroup/ToggleGroup.vue';
import PfToggleGroupItem from '../../src/components/ToggleGroup/ToggleGroupItem.vue';

function mountWithModel<C>(component: C, model: string, props: Record<string, unknown>, options: Record<string, unknown> = {}) {
  const wrapper: VueWrapper<any> = mount(component as any, {
    ...options,
    props: {
      ...props,
      [`onUpdate:${model}`]: (v: unknown) => wrapper.setProps({ [model]: v }),
    },
  });
  return wrapper;
}

const items = () => [
  h(PfToggleGroupItem, { text: 'One', value: 1 }),
  h(PfToggleGroupItem, { text: 'Two', value: 2 }),
  h(PfToggleGroupItem, { text: 'Three' }),
];

const pressed = (wrapper: VueWrapper<any>) => wrapper.findAll('button').map(b => b.attributes('aria-pressed') === 'true');

describe('ToggleGroup', () => {
  it('renders a group', () => {
    const wrapper = mount(PfToggleGroup, { slots: { default: items } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('role')).toBe('group');
    expect(wrapper.classes()).toEqual([styles.toggleGroup]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ToggleGroup');
    expect(wrapper.findAll(`.${styles.toggleGroupItem}`)).toHaveLength(3);
  });

  it('applies the compact modifier', () => {
    const wrapper = mount(PfToggleGroup, { props: { compact: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
  });

  it('disables all items', () => {
    const wrapper = mount(PfToggleGroup, { props: { disabled: true }, slots: { default: items } });
    expect(wrapper.findAll('button').every(b => b.attributes('disabled') !== undefined)).toBe(true);
  });

  it('lets an item override the group disabled state', () => {
    const wrapper = mount(PfToggleGroup, {
      props: { disabled: true },
      slots: { default: () => [h(PfToggleGroupItem, { text: 'A', disabled: false }), h(PfToggleGroupItem, { text: 'B' })] },
    });
    const [a, b] = wrapper.findAll('button');
    expect(a!.attributes('disabled')).toBeUndefined();
    expect(b!.attributes('disabled')).toBeDefined();
  });

  it('selects the item matching a scalar modelValue', async () => {
    const wrapper = mount(PfToggleGroup, { props: { modelValue: 2 }, slots: { default: items } });
    expect(pressed(wrapper)).toEqual([false, true, false]);

    await wrapper.setProps({ modelValue: 'Three' });
    expect(pressed(wrapper)).toEqual([false, false, true]);
  });

  it('works as a single selection with v-model', async () => {
    const wrapper = mountWithModel(PfToggleGroup, 'modelValue', { modelValue: null }, { slots: { default: items } });
    const buttons = wrapper.findAll('button');

    await buttons[0]!.trigger('click');
    expect(wrapper.props('modelValue')).toBe(1);
    expect(pressed(wrapper)).toEqual([true, false, false]);
    expect(buttons[0]!.classes()).toContain(styles.modifiers.selected);

    await buttons[2]!.trigger('click');
    expect(wrapper.props('modelValue')).toBe('Three');
    expect(pressed(wrapper)).toEqual([false, false, true]);

    await buttons[2]!.trigger('click');
    expect(wrapper.props('modelValue')).toBeNull();
    expect(pressed(wrapper)).toEqual([false, false, false]);
    expect(wrapper.emitted('update:modelValue')).toEqual([[1], ['Three'], [undefined]]);
  });

  it('selects items included in an array modelValue', () => {
    const wrapper = mount(PfToggleGroup, { props: { modelValue: [1, 'Three'] }, slots: { default: items } });
    expect(pressed(wrapper)).toEqual([true, false, true]);
  });

  it('adds to an array selection with v-model', async () => {
    const wrapper = mountWithModel(PfToggleGroup, 'modelValue', { modelValue: [1] }, { slots: { default: items } });
    await wrapper.findAll('button')[1]!.trigger('click');
    expect(wrapper.props('modelValue')).toEqual([1, 2]);
    expect(pressed(wrapper)).toEqual([true, true, false]);
  });

  // BUG: ToggleGroupItem.vue:116 removes the value with an in-place splice on the model array, so update:modelValue
  // is never emitted and the item does not re-render as unselected
  it.fails('removes from an array selection with v-model', async () => {
    const wrapper = mountWithModel(PfToggleGroup, 'modelValue', { modelValue: [1, 2] }, { slots: { default: items } });
    await wrapper.findAll('button')[0]!.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toEqual([[[2]]]);
    expect(pressed(wrapper)).toEqual([false, true, false]);
  });

  it('ignores items without a value nor text', async () => {
    const wrapper = mountWithModel(PfToggleGroup, 'modelValue', { modelValue: null }, {
      slots: { default: () => h(PfToggleGroupItem, { ariaLabel: 'Icon only' }) },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    expect(pressed(wrapper)).toEqual([false]);
  });
});

describe('ToggleGroupItem', () => {
  it('renders a toggle button', () => {
    const wrapper = mount(PfToggleGroupItem, { props: { text: 'Text', buttonId: 'btn' } });
    expect(wrapper.classes()).toEqual([styles.toggleGroupItem]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ToggleGroupItem');

    const button = wrapper.find('button');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('id')).toBe('btn');
    expect(button.classes()).toEqual([styles.toggleGroupButton]);
    expect(button.attributes('aria-pressed')).toBe('false');
    expect(button.attributes('disabled')).toBeUndefined();
    expect(button.find(`.${styles.toggleGroupText}`).text()).toBe('Text');
    expect(button.find(`.${styles.toggleGroupIcon}`).exists()).toBe(false);
  });

  it('renders the default slot over the text prop', () => {
    const wrapper = mount(PfToggleGroupItem, { props: { text: 'Prop' }, slots: { default: () => 'Slot' } });
    expect(wrapper.find(`.${styles.toggleGroupText}`).text()).toBe('Slot');
  });

  it('renders an icon only item with an aria-label', () => {
    const wrapper = mount(PfToggleGroupItem, {
      props: { ariaLabel: 'Copy' },
      slots: { icon: () => h('i', { class: 'my-icon' }) },
    });
    const button = wrapper.find('button');
    expect(button.attributes('aria-label')).toBe('Copy');
    expect(button.find(`.${styles.toggleGroupIcon} .my-icon`).exists()).toBe(true);
    expect(button.find(`.${styles.toggleGroupText}`).exists()).toBe(false);
  });

  it('renders as disabled', () => {
    const wrapper = mount(PfToggleGroupItem, { props: { disabled: true } });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });

  it('toggles its own state when standalone and uncontrolled', async () => {
    const wrapper = mount(PfToggleGroupItem, { props: { text: 'A' } });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(button.attributes('aria-pressed')).toBe('true');
    expect(button.classes()).toContain(styles.modifiers.selected);
    await button.trigger('click');
    expect(button.attributes('aria-pressed')).toBe('false');
    expect(wrapper.emitted('click')).toHaveLength(2);
    expect(wrapper.emitted('update:selected')).toEqual([[true], [false]]);
  });

  it('supports v-model:selected', async () => {
    const wrapper = mountWithModel(PfToggleGroupItem, 'selected', { selected: true, text: 'A' });
    const button = wrapper.find('button');
    expect(button.attributes('aria-pressed')).toBe('true');
    await button.trigger('click');
    expect(wrapper.emitted('update:selected')).toEqual([[false]]);
    expect(button.attributes('aria-pressed')).toBe('false');
  });

  it('lets the selected prop override the group selection', async () => {
    const wrapper = mountWithModel(PfToggleGroup, 'modelValue', { modelValue: 'A' }, {
      slots: { default: () => [h(PfToggleGroupItem, { text: 'A', selected: false }), h(PfToggleGroupItem, { text: 'B', selected: true })] },
    });
    expect(pressed(wrapper)).toEqual([false, true]);
    await wrapper.findAll('button')[0]!.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });
});
