import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import styles from '@patternfly/react-styles/css/components/Badge/badge';
import PfBadge from '../../src/components/Badge.vue';

describe('Badge', () => {
  it('renders an unread span with its content', () => {
    const wrapper = mount(PfBadge, { slots: { default: 'Test' } });

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toEqual([styles.badge, styles.modifiers.unread]);
    expect(wrapper.text()).toBe('Test');
    expect(wrapper.find('.pf-v6-screen-reader').exists()).toBe(false);
  });

  it('applies the read modifier instead of unread', () => {
    const wrapper = mount(PfBadge, { props: { read: true } });
    expect(wrapper.classes()).toEqual([styles.badge, styles.modifiers.read]);
  });

  it('applies the disabled modifier', () => {
    expect(mount(PfBadge, { props: { disabled: true } }).classes()).toContain(styles.modifiers.disabled);
  });

  it('renders screenReaderText after the content', () => {
    const wrapper = mount(PfBadge, {
      props: { screenReaderText: 'Unread messages' },
      slots: { default: '7' },
    });
    const sr = wrapper.get('.pf-v6-screen-reader');
    expect(sr.text()).toBe('Unread messages');
    expect(wrapper.element.lastElementChild).toBe(sr.element);
  });

  it('renders the screen-reader-text slot instead of the prop', () => {
    const wrapper = mount(PfBadge, {
      props: { screenReaderText: 'Ignored' },
      slots: { 'screen-reader-text': '<em>Custom</em>' },
    });
    expect(wrapper.get('.pf-v6-screen-reader').html()).toContain('<em>Custom</em>');
  });

  it('forwards class and attributes', () => {
    const wrapper = mount(PfBadge, { attrs: { class: 'custom-class', 'aria-label': 'Test label' } });
    expect(wrapper.classes()).toContain('custom-class');
    expect(wrapper.attributes('aria-label')).toBe('Test label');
  });
});
