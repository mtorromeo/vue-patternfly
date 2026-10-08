import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Button/button';
import PfNotificationBadge from '../../src/components/NotificationBadge.vue';

describe('NotificationBadge', () => {
  it('renders a stateful read button with a bell icon by default', () => {
    const wrapper = mount(PfNotificationBadge, { attrs: { 'aria-label': 'Notifications' } });
    const button = wrapper.find('button');
    expect(button.classes()).toContain(styles.button);
    expect(button.classes()).toContain(styles.modifiers.stateful);
    expect(button.classes()).toContain(styles.modifiers.read);
    expect(button.attributes('aria-label')).toBe('Notifications');
    expect(button.find(`.${styles.buttonIcon} svg`).exists()).toBe(true);
  });

  it.each(['unread', 'attention'] as const)('applies the %s state', (variant) => {
    const wrapper = mount(PfNotificationBadge, { props: { variant } });
    expect(wrapper.find('button').classes()).toContain(styles.modifiers.stateful);
    expect(wrapper.find('button').classes()).toContain(styles.modifiers[variant]);
  });

  it('uses a different icon for the attention variant', () => {
    const read = mount(PfNotificationBadge).find(`.${styles.buttonIcon}`).html();
    const attention = mount(PfNotificationBadge, { props: { variant: 'attention' } }).find(`.${styles.buttonIcon}`).html();
    expect(attention).not.toBe(read);
  });

  it('renders a plain button for the plain variant', () => {
    const button = mount(PfNotificationBadge, { props: { variant: 'plain' } }).find('button');
    expect(button.classes()).toContain(styles.modifiers.plain);
    expect(button.classes()).not.toContain(styles.modifiers.stateful);
  });

  it('renders the count, falling back to the default slot', () => {
    const withCount = mount(PfNotificationBadge, { props: { count: 5 }, slots: { default: () => 'ignored' } });
    expect(withCount.find('button').text()).toBe('5');

    const withSlot = mount(PfNotificationBadge, { slots: { default: () => 'New' } });
    expect(withSlot.find('button').text()).toBe('New');
  });

  it('renders a custom icon slot', () => {
    const wrapper = mount(PfNotificationBadge, { slots: { icon: () => h('i', { class: 'custom-icon' }) } });
    expect(wrapper.find(`.${styles.buttonIcon} i.custom-icon`).exists()).toBe(true);
  });

  it('animates when shouldNotify becomes true until the animation ends', async () => {
    const wrapper = mount(PfNotificationBadge, { props: { shouldNotify: false } });
    const button = wrapper.find('button');
    expect(button.classes()).not.toContain(styles.modifiers.notify);

    await wrapper.setProps({ shouldNotify: true });
    expect(button.classes()).toContain(styles.modifiers.notify);

    await button.trigger('animationend');
    expect(button.classes()).not.toContain(styles.modifiers.notify);
  });

  it('forwards click listeners', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfNotificationBadge, { attrs: { onClick } });
    await wrapper.find('button').trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // BUG: NotificationBadge.vue declares the `expanded` prop but never uses it, so it is swallowed
  // and neither aria-expanded nor the clicked modifier reach the button
  it.fails('sets aria-expanded and the clicked modifier when expanded', () => {
    const button = mount(PfNotificationBadge, { props: { expanded: true } }).find('button');
    expect(button.attributes('aria-expanded')).toBe('true');
    expect(button.classes()).toContain(styles.modifiers.clicked);
  });

  it('uses the given ouiaId', () => {
    const wrapper = mount(PfNotificationBadge, { attrs: { ouiaId: 'bell' } });
    expect(wrapper.find('button').attributes('data-ouia-component-id')).toBe('bell');
  });
});
