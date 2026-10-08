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
  it('renders an inline header by default', () => {
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
    expect(wrapper.classes()).toContain(styles.modifiers.displayInline);
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
  const brand = (wrapper: VueWrapper) => wrapper.find(`.${styles.mastheadBrand}`);

  it('renders a span without href', () => {
    const wrapper = mount(PfMastheadBrand, { slots: { default: () => 'Brand' } });
    expect(brand(wrapper).element.tagName).toBe('SPAN');
    expect(brand(wrapper).classes()).toContain(styles.mastheadBrand);
    expect(brand(wrapper).attributes('tabindex')).toBeUndefined();
    expect(brand(wrapper).attributes('href')).toBeUndefined();
    expect(brand(wrapper).text()).toBe('Brand');
  });

  it('renders a focusable link with href', () => {
    const wrapper = mount(PfMastheadBrand, { props: { href: '/home' }, attrs: { id: 'brand' } });
    expect(brand(wrapper).element.tagName).toBe('A');
    expect(brand(wrapper).attributes('href')).toBe('/home');
    expect(brand(wrapper).attributes('tabindex')).toBe('0');
    expect(brand(wrapper).attributes('id')).toBe('brand');
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfMastheadBrand, { props: { component: 'div' } });
    expect(brand(wrapper).element.tagName).toBe('DIV');
    expect(brand(wrapper).classes()).toContain(styles.mastheadBrand);
  });

  it('renders a router link and navigates on click', async () => {
    const Page = defineComponent({ render: () => h('div') });
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: Page }, { path: '/about', component: Page }],
    });
    await router.push('/');
    await router.isReady();

    const wrapper = mount(PfMastheadBrand, { props: { to: '/about' }, global: { plugins: [router] } });
    const link = wrapper.find('a');
    expect(link.attributes('href')).toBe('/about');
    expect(link.classes()).toContain(styles.mastheadBrand);

    await link.trigger('click');
    await flushPromises();
    expect(router.currentRoute.value.path).toBe('/about');
  });
});

describe('MastheadLogo', () => {
  it('renders a span without href', () => {
    const wrapper = mount(PfMastheadLogo, { slots: { default: () => h('img', { alt: 'Logo' }) } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(styles.mastheadLogo);
    expect(wrapper.classes()).not.toContain(styles.modifiers.compact);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('renders a link with href', () => {
    const wrapper = mount(PfMastheadLogo, { props: { href: '/home' } });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('href')).toBe('/home');
  });

  it('applies the compact modifier', () => {
    const wrapper = mount(PfMastheadLogo, { props: { compact: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfMastheadLogo, { props: { component: 'a' } });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('tabindex')).toBe('0');
  });
});
