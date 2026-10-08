import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/List/list';
import PfList from '../../src/components/List/List.vue';
import PfListItem from '../../src/components/List/ListItem.vue';

describe('List', () => {
  it('renders an unordered list by default', () => {
    const wrapper = mount(PfList, { slots: { default: () => [h(PfListItem, () => 'One'), h(PfListItem, () => 'Two')] } });

    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.classes()).toEqual([styles.list]);
    expect(wrapper.attributes('type')).toBeUndefined();
    expect(wrapper.findAll('li').map(li => li.text())).toEqual(['One', 'Two']);
  });

  it('renders an ordered list with the numbering type', () => {
    const wrapper = mount(PfList, { props: { component: 'ol' } });
    expect(wrapper.element.tagName).toBe('OL');
    expect(wrapper.attributes('type')).toBe('1');
  });

  it('uses a custom numbering type for ordered lists only', async () => {
    const wrapper = mount(PfList, { props: { component: 'ol', type: 'a' } });
    expect(wrapper.attributes('type')).toBe('a');

    await wrapper.setProps({ component: 'ul' });
    expect(wrapper.attributes('type')).toBeUndefined();
  });

  it('applies the inline, bordered, plain and large icon modifiers', () => {
    const wrapper = mount(PfList, { props: { variant: 'inline', bordered: true, plain: true, iconSize: 'large' } });
    expect(wrapper.classes()).toContain(styles.modifiers.inline);
    expect(wrapper.classes()).toContain(styles.modifiers.bordered);
    expect(wrapper.classes()).toContain(styles.modifiers.plain);
    expect(wrapper.classes()).toContain(styles.modifiers.iconLg);
  });
});

describe('ListItem', () => {
  it('renders a plain list item without icon', () => {
    const wrapper = mount(PfListItem, { slots: { default: () => 'Item' } });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).not.toContain(styles.listItem);
    expect(wrapper.find(`.${styles.listItemIcon}`).exists()).toBe(false);
    expect(wrapper.text()).toBe('Item');
  });

  it('renders the icon slot', () => {
    const wrapper = mount(PfListItem, { slots: { icon: () => h('i', { class: 'my-icon' }), default: () => 'Item' } });
    expect(wrapper.classes()).toContain(styles.listItem);
    expect(wrapper.find(`.${styles.listItemIcon} .my-icon`).exists()).toBe(true);
    expect(wrapper.text()).toBe('Item');
  });
});
