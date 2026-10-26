import { describe, expect, it } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import PfMasthead from '../../src/components/Masthead/Masthead.vue';
import PfMastheadBrand from '../../src/components/Masthead/MastheadBrand.vue';
import PfMastheadContent from '../../src/components/Masthead/MastheadContent.vue';
import PfMastheadLogo from '../../src/components/Masthead/MastheadLogo.vue';
import PfMastheadMain from '../../src/components/Masthead/MastheadMain.vue';
import PfMastheadToggle from '../../src/components/Masthead/MastheadToggle.vue';

describe('Masthead', () => {
  it('applies the docked modifier', () => {
    expect(mount(PfMasthead, { props: { variant: 'docked' } }).classes()).toContain(styles.modifiers.docked);
    expect(mount(PfMasthead).classes()).not.toContain(styles.modifiers.docked);
  });

  it('renders a header stacked on mobile and inline from md by default', () => {
    const wrapper = mount(PfMasthead, {
      slots: {
        default: () => [
          h(PfMastheadMain, () => [h(PfMastheadToggle, () => 'Toggle'), h(PfMastheadBrand, () => 'Brand')]),
          h(PfMastheadContent, () => 'Content'),
        ],
      },
    });

    expect(wrapper.element.tagName).toBe('HEADER');
    expect(wrapper.classes()).toContain(styles.masthead);
    expect(wrapper.classes()).toContain(styles.modifiers.displayInlineOnMd);
    expect(wrapper.classes()).not.toContain(styles.modifiers.displayInline);
    expect(wrapper.find(`.${styles.mastheadMain} .${styles.mastheadToggle}`).text()).toBe('Toggle');
    expect(wrapper.find(`.${styles.mastheadMain} .${styles.mastheadBrand}`).text()).toBe('Brand');
    expect(wrapper.find(`.${styles.mastheadContent}`).text()).toBe('Content');
  });

  it('applies display breakpoint modifiers', () => {
    const wrapper = mount(PfMasthead, { props: { display: 'stack', displayMd: 'inline', displayLg: 'stack' } });
    expect(wrapper.classes()).toContain(styles.modifiers.displayStack);
    expect(wrapper.classes()).toContain(styles.modifiers.displayInlineOnMd);
    expect(wrapper.classes()).toContain(styles.modifiers.displayStackOnLg);
    expect(wrapper.classes()).not.toContain(styles.modifiers.displayInline);
  });

  it('replaces the default display with the display props', () => {
    const wrapper = mount(PfMasthead, { props: { display: 'stack' } });
    expect(wrapper.classes()).toContain(styles.modifiers.displayStack);
    expect(wrapper.classes()).not.toContain(styles.modifiers.displayInlineOnMd);
  });

  it('applies inset breakpoint modifiers', () => {
    const wrapper = mount(PfMasthead, { props: { inset: 'md' } });
    expect(wrapper.classes()).toContain(styles.modifiers.insetMd);
  });
});

describe('MastheadMain', () => {
  it('renders a div with the main class', () => {
    const wrapper = mount(PfMastheadMain, { slots: { default: () => 'Main' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.mastheadMain);
    expect(wrapper.text()).toBe('Main');
  });
});

describe('MastheadContent', () => {
  it('renders a div with the content class', () => {
    const wrapper = mount(PfMastheadContent, { slots: { default: () => 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.mastheadContent);
    expect(wrapper.text()).toBe('Content');
  });
});

describe('MastheadToggle', () => {
  it('renders a span with the toggle class', () => {
    const wrapper = mount(PfMastheadToggle, { slots: { default: () => h('button', 'Menu') } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(styles.mastheadToggle);
    expect(wrapper.find('button').text()).toBe('Menu');
  });
});

describe('MastheadBrand', () => {
  it('renders a div with the brand class', () => {
    const wrapper = mount(PfMastheadBrand, { attrs: { class: 'custom' }, slots: { default: () => 'Brand' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual(expect.arrayContaining([styles.mastheadBrand, 'custom']));
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    expect(wrapper.text()).toBe('Brand');
  });
});

describe('MastheadLogo', () => {
  const logo = (wrapper: VueWrapper) => wrapper.get(`.${styles.mastheadLogo}`);

  it('renders a span without href', () => {
    const wrapper = mount(PfMastheadLogo, { slots: { default: () => h('img', { alt: 'Logo' }) } });
    expect(logo(wrapper).element.tagName).toBe('SPAN');
    expect(logo(wrapper).classes()).not.toContain(styles.modifiers.compact);
    expect(logo(wrapper).attributes('tabindex')).toBeUndefined();
    expect(logo(wrapper).find('img').exists()).toBe(true);
  });

  it('renders a focusable link with href', () => {
    const wrapper = mount(PfMastheadLogo, { props: { href: '/home' }, attrs: { id: 'logo' } });
    expect(logo(wrapper).element.tagName).toBe('A');
    expect(logo(wrapper).attributes('href')).toBe('/home');
    expect(logo(wrapper).attributes('tabindex')).toBe('0');
    expect(logo(wrapper).attributes('id')).toBe('logo');
  });

  it('applies the compact modifier', () => {
    const wrapper = mount(PfMastheadLogo, { props: { compact: true } });
    expect(logo(wrapper).classes()).toContain(styles.modifiers.compact);
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfMastheadLogo, { props: { component: 'a' } });
    expect(logo(wrapper).element.tagName).toBe('A');
    expect(logo(wrapper).attributes('tabindex')).toBe('0');
  });

  it('renders a router link and navigates on click', async () => {
    const Page = defineComponent({ render: () => h('div') });
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: Page },
        { path: '/about', component: Page },
      ],
    });
    await router.push('/');
    await router.isReady();

    const wrapper = mount(PfMastheadLogo, { props: { to: '/about' }, global: { plugins: [router] } });
    const link = wrapper.get('a');
    expect(link.attributes('href')).toBe('/about');
    expect(link.classes()).toContain(styles.mastheadLogo);

    await link.trigger('click');
    await flushPromises();
    expect(router.currentRoute.value.path).toBe('/about');
  });
});
