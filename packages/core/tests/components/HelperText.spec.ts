import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import PfHelperText from '../../src/components/HelperText/HelperText.vue';
import PfHelperTextItem from '../../src/components/HelperText/HelperTextItem.vue';

describe('HelperText', () => {
  it('renders a div with the helper text class', () => {
    const wrapper = mount(PfHelperText, { slots: { default: () => h(PfHelperTextItem, () => 'Help') } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.helperText);
    expect(wrapper.find(`.${styles.helperTextItem}`).element.tagName).toBe('DIV');
  });

  it('renders a list with list item children', () => {
    const wrapper = mount(PfHelperText, {
      props: { component: 'ul' },
      slots: { default: () => [h(PfHelperTextItem, () => 'One'), h(PfHelperTextItem, () => 'Two')] },
    });
    expect(wrapper.element.tagName).toBe('UL');
    const items = wrapper.findAll(`.${styles.helperTextItem}`);
    expect(items).toHaveLength(2);
    expect(items.every(i => i.element.tagName === 'LI')).toBe(true);
  });

  it('renders the list role only on a ul', async () => {
    const wrapper = mount(PfHelperText, { attrs: { 'aria-label': 'helper' } });
    expect(wrapper.attributes('role')).toBeUndefined();
    await wrapper.setProps({ component: 'ul' });
    expect(wrapper.attributes('role')).toBe('list');
    expect(wrapper.attributes('aria-label')).toBe('helper');
  });

  it('renders aria-live only with liveRegion', async () => {
    const wrapper = mount(PfHelperText);
    expect(wrapper.attributes('aria-live')).toBeUndefined();
    await wrapper.setProps({ liveRegion: true });
    expect(wrapper.attributes('aria-live')).toBe('polite');
  });

  it('updates the item elements when component changes', async () => {
    const wrapper = mount(PfHelperText, { slots: { default: () => h(PfHelperTextItem, () => 'One') } });
    await wrapper.setProps({ component: 'ul' });
    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.find(`.${styles.helperTextItem}`).element.tagName).toBe('LI');
  });
});

describe('HelperTextItem', () => {
  it('renders a default item without icon', () => {
    const wrapper = mount(PfHelperTextItem, { slots: { default: () => 'Help' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.helperTextItem]);
    expect(wrapper.find(`.${styles.helperTextItemIcon}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.helperTextItemText}`).text()).toBe('Help');
  });

  it.each(['warning', 'success', 'error', 'indeterminate'] as const)('applies the %s variant with an icon', variant => {
    const wrapper = mount(PfHelperTextItem, { props: { variant } });
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
    expect(wrapper.find(`.${styles.helperTextItemIcon} svg`).exists()).toBe(true);
  });

  it('renders a distinct icon for every variant', () => {
    const icons = (['warning', 'success', 'error', 'indeterminate'] as const).map(variant =>
      mount(PfHelperTextItem, { props: { variant } }).find(`.${styles.helperTextItemIcon} svg`).html(),
    );
    expect(new Set(icons).size).toBe(icons.length);
  });

  it('renders a custom icon slot', () => {
    const wrapper = mount(PfHelperTextItem, {
      slots: { icon: () => h('i', { class: 'my-icon' }), default: () => 'Help' },
    });
    const icon = wrapper.find(`.${styles.helperTextItemIcon}`);
    expect(icon.find('.my-icon').exists()).toBe(true);
    expect(icon.find('svg').exists()).toBe(false);
  });

  it('hides the icon from assistive technologies', () => {
    const wrapper = mount(PfHelperTextItem, { props: { variant: 'error' } });
    expect(wrapper.find(`.${styles.helperTextItemIcon}`).attributes('aria-hidden')).toBe('true');
  });

  it('does not render screen reader text for the default variant', () => {
    const wrapper = mount(PfHelperTextItem, { slots: { default: () => 'Help' } });
    expect(wrapper.find('.pf-v6-screen-reader').exists()).toBe(false);
  });

  it.each(['warning', 'success', 'error', 'indeterminate'] as const)(
    'renders the default screen reader text for the %s variant inside the item text',
    variant => {
      const wrapper = mount(PfHelperTextItem, { props: { variant }, slots: { default: () => 'text' } });
      const sr = wrapper.get(`.${styles.helperTextItemText} .pf-v6-screen-reader`);
      expect(sr.text()).toBe(`: ${variant} status;`);
    },
  );

  it('renders custom screen reader text, or none when empty', async () => {
    const wrapper = mount(PfHelperTextItem, { props: { variant: 'error', screenReaderText: 'danger' } });
    expect(wrapper.get('.pf-v6-screen-reader').text()).toBe(': danger;');
    await wrapper.setProps({ screenReaderText: '' });
    expect(wrapper.find('.pf-v6-screen-reader').exists()).toBe(false);
  });

  it('renders the element passed to component, overriding the parent', () => {
    expect(mount(PfHelperTextItem, { props: { component: 'li' } }).element.tagName).toBe('LI');
    const wrapper = mount(PfHelperText, {
      props: { component: 'ul' },
      slots: { default: () => h(PfHelperTextItem, { component: 'div' }, () => 'One') },
    });
    expect(wrapper.get(`.${styles.helperTextItem}`).element.tagName).toBe('DIV');
  });

  it('forwards id and class to the item', () => {
    const wrapper = mount(PfHelperTextItem, { attrs: { id: 'text-item', class: 'custom' } });
    expect(wrapper.attributes('id')).toBe('text-item');
    expect(wrapper.classes()).toContain('custom');
  });
});
