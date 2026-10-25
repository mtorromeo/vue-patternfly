import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import PfAvatar from '../../src/components/Avatar.vue';

const colors = ['red', 'orangered', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'gray'] as const;

describe('Avatar', () => {
  it('renders an image with only the avatar class by default', () => {
    const wrapper = mount(PfAvatar, { props: { alt: 'avatar', src: 'test.png' } });

    expect(wrapper.element.tagName).toBe('IMG');
    expect(wrapper.classes()).toEqual([styles.avatar]);
    expect(wrapper.attributes('src')).toBe('test.png');
    expect(wrapper.attributes('alt')).toBe('avatar');
  });

  it('forwards class and attributes', () => {
    const wrapper = mount(PfAvatar, { props: { alt: 'avatar' }, attrs: { class: 'test-class', 'aria-label': 'Test' } });
    expect(wrapper.classes()).toEqual([styles.avatar, 'test-class']);
    expect(wrapper.attributes('aria-label')).toBe('Test');
  });

  it('applies the bordered modifier', () => {
    expect(mount(PfAvatar, { props: { alt: 'avatar', bordered: true } }).classes()).toContain(
      styles.modifiers.bordered,
    );
  });

  it.each(['sm', 'md', 'lg', 'xl'] as const)('applies the %s size modifier', size => {
    expect(mount(PfAvatar, { props: { alt: 'avatar', size } }).classes()).toContain(styles.modifiers[size]);
  });

  it('renders initials in a hidden span inside an img role div labelled by alt', () => {
    const wrapper = mount(PfAvatar, { props: { alt: 'User avatar', initials: 'AB', size: 'lg' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('role')).toBe('img');
    expect(wrapper.attributes('aria-label')).toBe('User avatar');
    expect(wrapper.attributes('aria-hidden')).toBeUndefined();
    expect(wrapper.attributes('alt')).toBeUndefined();
    expect(wrapper.classes()).toEqual([styles.avatar, styles.modifiers.lg]);

    const initials = wrapper.get(`.${styles.avatarInitials}`);
    expect(initials.text()).toBe('AB');
    expect(initials.attributes('aria-hidden')).toBe('true');
  });

  it('renders custom content from the default slot', () => {
    const wrapper = mount(PfAvatar, {
      props: { alt: 'User avatar', bordered: true },
      slots: { default: () => h('svg', { class: 'logo' }) },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('aria-label')).toBe('User avatar');
    expect(wrapper.classes()).toContain(styles.modifiers.bordered);
    expect(wrapper.find('svg.logo').exists()).toBe(true);
    expect(wrapper.find(`.${styles.avatarInitials}`).exists()).toBe(false);
  });

  it('hides an avatar with initials or content from assistive technologies with an empty alt', () => {
    const withInitials = mount(PfAvatar, { props: { alt: '', initials: 'AB' } });
    const withContent = mount(PfAvatar, { props: { alt: '' }, slots: { default: 'Test' } });
    for (const wrapper of [withInitials, withContent]) {
      expect(wrapper.attributes('aria-hidden')).toBe('true');
      expect(wrapper.attributes('aria-label')).toBeUndefined();
    }
  });

  it.each(colors)('applies the colorful and %s modifiers', color => {
    const wrapper = mount(PfAvatar, { props: { alt: 'avatar', color, initials: 'C' } });
    expect(wrapper.classes()).toContain(styles.modifiers.colorful);
    expect(wrapper.classes()).toContain(styles.modifiers[color]);
  });

  it('does not color an image avatar', () => {
    const wrapper = mount(PfAvatar, { props: { alt: 'avatar', color: 'red' } });
    expect(wrapper.element.tagName).toBe('IMG');
    expect(wrapper.classes()).toEqual([styles.avatar]);
  });
});
