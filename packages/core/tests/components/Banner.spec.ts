import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import PfBanner from '../../src/components/Banner.vue';

describe('Banner', () => {
  it('renders a div with the banner class and the default slot', () => {
    const wrapper = mount(PfBanner, { slots: { default: () => 'Default banner' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.banner]);
    expect(wrapper.text()).toBe('Default banner');
    expect(wrapper.find('.pf-v6-screen-reader').exists()).toBe(false);
  });

  it('applies sticky and pill modifiers', () => {
    const wrapper = mount(PfBanner, { props: { sticky: true, pill: true }, slots: { default: () => 'x' } });
    expect(wrapper.classes()).toContain(styles.modifiers.sticky);
    expect(wrapper.classes()).toContain(styles.modifiers.pill);
  });

  it('applies the color modifier', () => {
    const wrapper = mount(PfBanner, { props: { color: 'teal' }, slots: { default: () => 'x' } });
    expect(wrapper.classes()).toContain(styles.modifiers.teal);
  });

  it('gives the status precedence over the color', () => {
    const wrapper = mount(PfBanner, { props: { color: 'teal', status: 'danger' }, slots: { default: () => 'x' } });
    expect(wrapper.classes()).toContain(styles.modifiers.danger);
    expect(wrapper.classes()).not.toContain(styles.modifiers.teal);
  });

  it('renders screen reader text from the prop', () => {
    const wrapper = mount(PfBanner, { props: { screenReaderText: 'Danger banner' }, slots: { default: () => 'x' } });
    expect(wrapper.find('.pf-v6-screen-reader').text()).toBe('Danger banner');
  });

  it('renders screen reader text from the slot', () => {
    const wrapper = mount(PfBanner, {
      slots: { default: () => 'x', 'screen-reader-text': () => h('em', 'Warning') },
    });
    expect(wrapper.find('.pf-v6-screen-reader em').text()).toBe('Warning');
  });

  it('forwards attributes and OUIA props to the root', () => {
    const wrapper = mount(PfBanner, { props: { ouiaId: 'b1' }, attrs: { id: 'banner', 'aria-label': 'Info' }, slots: { default: () => 'x' } });
    expect(wrapper.attributes('id')).toBe('banner');
    expect(wrapper.attributes('aria-label')).toBe('Info');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Banner');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('b1');
  });
});
