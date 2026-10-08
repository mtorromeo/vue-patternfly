import { describe, expect, it } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import PfSimpleList from '../../src/components/SimpleList/SimpleList.vue';
import PfSimpleListItem from '../../src/components/SimpleList/SimpleListItem.vue';
import PfSimpleListGroup from '../../src/components/SimpleList/SimpleListGroup.vue';

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
  h(PfSimpleListItem, { value: 'one' }, () => 'One'),
  h(PfSimpleListItem, { value: 'two' }, () => 'Two'),
  h(PfSimpleListItem, { value: 'three' }, () => 'Three'),
];

const itemButtons = (wrapper: VueWrapper<any>) => wrapper.findAll(`.${styles.simpleListItemLink}`);
const currentIndexes = (wrapper: VueWrapper<any>) => itemButtons(wrapper)
  .map((b, i) => (b.classes().includes(styles.modifiers.current) ? i : -1))
  .filter(i => i >= 0);

describe('SimpleList', () => {
  it('renders the items inside a list', () => {
    const wrapper = mount(PfSimpleList, { props: { ariaLabel: 'My list' }, slots: { default: items } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.simpleList);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/SimpleList');

    const ul = wrapper.find('ul');
    expect(ul.attributes('role')).toBe('list');
    expect(ul.attributes('aria-label')).toBe('My list');
    expect(ul.findAll('li')).toHaveLength(3);
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('has no current item by default', () => {
    const wrapper = mount(PfSimpleList, { slots: { default: items } });
    expect(currentIndexes(wrapper)).toEqual([]);
  });

  it('marks the item matching modelValue as current', async () => {
    const wrapper = mount(PfSimpleList, { props: { modelValue: 'two' }, slots: { default: items } });
    expect(currentIndexes(wrapper)).toEqual([1]);

    await wrapper.setProps({ modelValue: 'three' });
    expect(currentIndexes(wrapper)).toEqual([2]);

    await wrapper.setProps({ modelValue: null });
    expect(currentIndexes(wrapper)).toEqual([]);
  });

  it('updates the model when an item is clicked', async () => {
    const wrapper = mountWithModel(PfSimpleList, 'modelValue', { modelValue: 'one' }, { slots: { default: items } });
    await itemButtons(wrapper)[2]!.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toEqual([['three']]);
    expect(wrapper.props('modelValue')).toBe('three');
    expect(currentIndexes(wrapper)).toEqual([2]);
  });

  it('tracks selection of items without a value without emitting', async () => {
    const wrapper = mount(PfSimpleList, {
      slots: { default: () => [h(PfSimpleListItem, () => 'A'), h(PfSimpleListItem, () => 'B')] },
    });
    await itemButtons(wrapper)[1]!.trigger('click');
    expect(currentIndexes(wrapper)).toEqual([1]);
    await itemButtons(wrapper)[0]!.trigger('click');
    expect(currentIndexes(wrapper)).toEqual([0]);
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });

  it('renders a hidden form input when name is set', async () => {
    const wrapper = mount(PfSimpleList, {
      props: { name: 'choice', modelValue: 'one', required: true },
      slots: { default: items },
    });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.attributes('type')).toBe('hidden');
    expect(input.attributes('name')).toBe('choice');
    expect(input.attributes('required')).toBeDefined();
    expect(input.element.value).toBe('one');

    await itemButtons(wrapper)[1]!.trigger('click');
    expect(input.element.value).toBe('two');
  });

  it('keeps the hidden input empty when selecting an item without a value', async () => {
    const wrapper = mount(PfSimpleList, {
      props: { name: 'choice' },
      slots: { default: () => [h(PfSimpleListItem, () => 'A')] },
    });
    await itemButtons(wrapper)[0]!.trigger('click');
    expect(wrapper.find<HTMLInputElement>('input').element.value).toBe('');
  });

  it('does not wrap groups in an extra list', async () => {
    const wrapper = mount(PfSimpleList, {
      slots: {
        default: () => [
          h(PfSimpleListGroup, { title: 'Group 1', id: 'g1' }, () => [h(PfSimpleListItem, { value: 'a' }, () => 'A')]),
          h(PfSimpleListGroup, { title: 'Group 2', id: 'g2' }, () => [h(PfSimpleListItem, { value: 'b' }, () => 'B')]),
        ],
      },
    });
    // grouping is detected while rendering the slot, so it takes effect on the next render
    await flushPromises();
    expect(wrapper.findAll('section')).toHaveLength(2);
    expect(wrapper.element.querySelector(':scope > ul')).toBeNull();
    expect(wrapper.findAll('ul')).toHaveLength(2);
  });

  it('shares the selection across groups', async () => {
    const wrapper = mount(PfSimpleList, {
      props: { modelValue: 'a' },
      slots: {
        default: () => [
          h(PfSimpleListGroup, { title: 'Group 1' }, () => [h(PfSimpleListItem, { value: 'a' }, () => 'A')]),
          h(PfSimpleListGroup, { title: 'Group 2' }, () => [h(PfSimpleListItem, { value: 'b' }, () => 'B')]),
        ],
      },
    });
    expect(currentIndexes(wrapper)).toEqual([0]);
    await itemButtons(wrapper)[1]!.trigger('click');
    expect(currentIndexes(wrapper)).toEqual([1]);
    expect(wrapper.emitted('update:modelValue')).toEqual([['b']]);
  });
});

describe('SimpleListItem', () => {
  it('renders a button by default', () => {
    const wrapper = mount(PfSimpleListItem, { slots: { default: () => 'Item' } });
    expect(wrapper.element.tagName).toBe('LI');
    const button = wrapper.find(`.${styles.simpleListItemLink}`);
    expect(button.element.tagName).toBe('BUTTON');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('href')).toBeUndefined();
    expect(button.attributes('tabindex')).toBeUndefined();
    expect(button.text()).toBe('Item');
  });

  it('renders an anchor with href when component is a', () => {
    const wrapper = mount(PfSimpleListItem, { props: { component: 'a', href: '#link' } });
    const link = wrapper.find(`.${styles.simpleListItemLink}`);
    expect(link.element.tagName).toBe('A');
    expect(link.attributes('href')).toBe('#link');
    expect(link.attributes('tabindex')).toBe('0');
    expect(link.attributes('type')).toBeUndefined();
  });

  it('exposes the interactive element to assistive technology', () => {
    const wrapper = mount(PfSimpleListItem, { slots: { default: () => 'Item' } });
    expect(wrapper.find('button').attributes('aria-hidden')).toBeUndefined();
  });

  it('applies componentClass and componentAttrs to the inner element', () => {
    const wrapper = mount(PfSimpleListItem, {
      props: { componentClass: 'extra', componentAttrs: { title: 'tip' } },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('extra');
    expect(button.attributes('title')).toBe('tip');
  });

  it('emits click and toggles its own current state when standalone', async () => {
    const wrapper = mount(PfSimpleListItem);
    const button = wrapper.find('button');
    expect(button.classes()).not.toContain(styles.modifiers.current);
    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(button.classes()).not.toContain(styles.modifiers.current);
  });
});

describe('SimpleListGroup', () => {
  it('renders a section with a title and a labelled list', () => {
    const wrapper = mount(PfSimpleListGroup, {
      props: { id: 'grp', title: 'Title', titleClass: 'title-extra' },
      attrs: { class: 'list-extra' },
      slots: { default: () => h(PfSimpleListItem, () => 'Item') },
    });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.simpleListSection);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/SimpleListGroup');

    const title = wrapper.find('h2');
    expect(title.attributes('id')).toBe('grp');
    expect(title.classes()).toContain(styles.simpleListTitle);
    expect(title.classes()).toContain('title-extra');
    expect(title.text()).toBe('Title');

    const ul = wrapper.find('ul');
    expect(ul.classes()).toContain('list-extra');
    expect(ul.attributes('role')).toBe('list');
    expect(ul.attributes('aria-labelledby')).toBe('grp');
    expect(ul.findAll('li')).toHaveLength(1);
  });

  it('renders the title slot over the title prop', () => {
    const wrapper = mount(PfSimpleListGroup, {
      props: { title: 'Prop' },
      slots: { title: () => h('em', 'Slot') },
    });
    expect(wrapper.find('h2 em').text()).toBe('Slot');
    expect(wrapper.find('h2').text()).toBe('Slot');
  });
});
