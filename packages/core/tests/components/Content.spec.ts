import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Content/content';
import PfContent from '../../src/components/Content.vue';

describe('Content', () => {
  it('renders a div wrapper with the content class by default', () => {
    const wrapper = mount(PfContent, { slots: { default: () => [h('h1', 'Title'), h('p', 'Body')] } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.content);
    expect(wrapper.find('h1').text()).toBe('Title');
    expect(wrapper.find('p').text()).toBe('Body');
  });

  it.each([
    ['h1', styles.contentH1],
    ['h2', styles.contentH2],
    ['h3', styles.contentH3],
    ['h4', styles.contentH4],
    ['h5', styles.contentH5],
    ['h6', styles.contentH6],
    ['p', styles.contentP],
    ['a', styles.contentA],
    ['small', styles.contentSmall],
    ['blockquote', styles.contentBlockquote],
    ['pre', styles.contentPre],
    ['hr', styles.contentHr],
    ['ul', styles.contentUl],
    ['ol', styles.contentOl],
    ['dl', styles.contentDl],
    ['li', styles.contentLi],
    ['dt', styles.contentDt],
    ['dd', styles.contentDd],
  ] as const)('renders a %s element with its element class', (component, className) => {
    const wrapper = mount(PfContent, { props: { component } });
    expect(wrapper.element.tagName).toBe(component.toUpperCase());
    expect(wrapper.classes()).toContain(className);
  });

  it('does not apply the wrapper class to specific elements', () => {
    const wrapper = mount(PfContent, { props: { component: 'h1' } });
    expect(wrapper.classes()).not.toContain(styles.content);
  });

  it('applies plain only to lists', () => {
    expect(mount(PfContent, { props: { component: 'ul', plainList: true } }).classes()).toContain(styles.modifiers.plain);
    expect(mount(PfContent, { props: { component: 'dl', plainList: true } }).classes()).toContain(styles.modifiers.plain);
    expect(mount(PfContent, { props: { component: 'p', plainList: true } }).classes()).not.toContain(styles.modifiers.plain);
  });

  it('applies visited and editorial modifiers', () => {
    const wrapper = mount(PfContent, { props: { visited: true, editorial: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.visited);
    expect(wrapper.classes()).toContain(styles.modifiers.editorial);
  });

  it('forwards element attributes', () => {
    const wrapper = mount(PfContent, { props: { component: 'a' }, attrs: { href: '#here' }, slots: { default: () => 'Link' } });
    expect(wrapper.attributes('href')).toBe('#here');
    expect(wrapper.text()).toBe('Link');
  });
});
