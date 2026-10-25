import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import PfDivider from '../../src/components/Divider.vue';

describe('Divider', () => {
  it('renders an hr with only the divider class and no role by default', () => {
    const wrapper = mount(PfDivider, { props: { role: 'presentation' } });
    expect(wrapper.element.tagName).toBe('HR');
    expect(wrapper.classes()).toEqual([styles.divider]);
    expect(wrapper.attributes('role')).toBeUndefined();
  });

  it.each(['li', 'div'] as const)('renders a %s separator', component => {
    // regression: li and div dividers had no role
    const wrapper = mount(PfDivider, { props: { component } });
    expect(wrapper.element.tagName).toBe(component.toUpperCase());
    expect(wrapper.attributes('role')).toBe('separator');
  });

  it('uses the given role when the component is not an hr', () => {
    expect(mount(PfDivider, { props: { component: 'li', role: 'none' } }).attributes('role')).toBe('none');
    expect(mount(PfDivider, { props: { component: 'div', role: 'presentation' } }).attributes('role')).toBe(
      'presentation',
    );
  });

  it('applies the orientation at every breakpoint', () => {
    const wrapper = mount(PfDivider, {
      props: {
        orientation: 'vertical',
        orientationSm: 'horizontal',
        orientationMd: 'vertical',
        orientationLg: 'horizontal',
        orientationXl: 'vertical',
        orientation2xl: 'horizontal',
      },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        styles.modifiers.vertical,
        styles.modifiers.horizontalOnSm,
        styles.modifiers.verticalOnMd,
        styles.modifiers.horizontalOnLg,
        styles.modifiers.verticalOnXl,
        styles.modifiers.horizontalOn_2xl,
      ]),
    );
  });

  it('applies the inset at every breakpoint', () => {
    const wrapper = mount(PfDivider, {
      props: { inset: 'md', insetMd: 'none', insetLg: '3xl', insetXl: 'lg' },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        styles.modifiers.insetMd,
        styles.modifiers.insetNoneOnMd,
        styles.modifiers.inset_3xlOnLg,
        styles.modifiers.insetLgOnXl,
      ]),
    );
  });

  it('is vertical with the vertical shorthand', () => {
    expect(mount(PfDivider, { props: { vertical: true } }).classes()).toContain(styles.modifiers.vertical);
  });

  it('adds custom classes and attributes', () => {
    const wrapper = mount(PfDivider, { attrs: { class: 'custom', id: 'divider' } });
    expect(wrapper.classes()).toEqual([styles.divider, 'custom']);
    expect(wrapper.attributes('id')).toBe('divider');
  });
});
