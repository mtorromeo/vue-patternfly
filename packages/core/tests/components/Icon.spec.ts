import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import spinnerStyles from '@patternfly/react-styles/css/components/Spinner/spinner';
import PfIcon, { type IconSize } from '../../src/components/Icon.vue';

const sizes: IconSize[] = [
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'headingSm',
  'headingMd',
  'headingLg',
  'headingXl',
  'heading_2xl',
  'heading_3xl',
  'bodySm',
  'bodyDefault',
  'bodyLg',
];

describe('Icon', () => {
  it('renders the icon in the content wrapper without modifiers', () => {
    const wrapper = mount(PfIcon, { slots: { default: () => h('svg', { class: 'my-icon' }) } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toEqual([styles.icon]);
    const content = wrapper.get(`.${styles.iconContent}`);
    expect(content.classes()).toEqual([styles.iconContent]);
    expect(content.find('.my-icon').exists()).toBe(true);
    expect(wrapper.find(`.${styles.iconProgress}`).exists()).toBe(false);
  });

  it('forwards class and attributes to the root', () => {
    const wrapper = mount(PfIcon, { attrs: { class: 'test', title: 'Title' } });
    expect(wrapper.classes()).toContain('test');
    expect(wrapper.attributes('title')).toBe('Title');
  });

  it.each(sizes)('sets the size modifier on the container - %s', size => {
    const wrapper = mount(PfIcon, { props: { size } });
    expect(wrapper.classes()).toContain(styles.modifiers[size]);
  });

  it.each(sizes)('sets the icon size modifier on the content - %s', iconSize => {
    const wrapper = mount(PfIcon, { props: { iconSize } });
    expect(wrapper.get(`.${styles.iconContent}`).classes()).toContain(styles.modifiers[iconSize]);
  });

  it.each(sizes)('sets the progress icon size modifier - %s', progressIconSize => {
    const wrapper = mount(PfIcon, { props: { progressIconSize, inProgress: true } });
    expect(wrapper.get(`.${styles.iconProgress}`).classes()).toContain(styles.modifiers[progressIconSize]);
  });

  it.each(['custom', 'info', 'success', 'warning', 'danger'] as const)('sets the %s status on the content', status => {
    const wrapper = mount(PfIcon, { props: { status } });
    expect(wrapper.get(`.${styles.iconContent}`).classes()).toContain(styles.modifiers[status]);
  });

  it('sets the inline modifier', () => {
    const wrapper = mount(PfIcon, { props: { inline: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.inline);
  });

  it('shows the default spinner when in progress', () => {
    const wrapper = mount(PfIcon, { props: { inProgress: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.inProgress);
    const spinner = wrapper.get(`.${styles.iconProgress} .${spinnerStyles.spinner}`);
    expect(spinner.attributes('aria-label')).toBe('Loading...');
  });

  it('uses defaultProgressArialabel and the progress-icon slot', () => {
    const labelled = mount(PfIcon, { props: { inProgress: true, defaultProgressArialabel: 'Working' } });
    expect(labelled.get(`.${spinnerStyles.spinner}`).attributes('aria-label')).toBe('Working');

    const custom = mount(PfIcon, {
      props: { inProgress: true },
      slots: { 'progress-icon': () => h('i', { class: 'custom-progress' }) },
    });
    expect(custom.find(`.${styles.iconProgress} .custom-progress`).exists()).toBe(true);
    expect(custom.find(`.${spinnerStyles.spinner}`).exists()).toBe(false);
  });

  it('mirrors the content for RTL with shouldMirrorRTL', () => {
    const wrapper = mount(PfIcon, { props: { shouldMirrorRTL: true } });
    expect(wrapper.get(`.${styles.iconContent}`).classes()).toContain('pf-v6-m-mirror-inline-rtl');
  });
});
