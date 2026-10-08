import { describe, it, expect } from 'vitest';
import { defineComponent, h } from 'vue';
import { mount, flushPromises, type VueWrapper } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import styles from '@patternfly/react-styles/css/components/Button/button';
import spinnerStyles from '@patternfly/react-styles/css/components/Spinner/spinner';
import PfButton from '../../src/components/Button.vue';

/** The button root is rendered inside a fragment, so look the element up by its base class */
const btn = (wrapper: VueWrapper) => wrapper.find<HTMLElement>(`.${styles.button}`);

describe('Button', () => {
  it('renders a primary button of type button by default', () => {
    const wrapper = mount(PfButton, { slots: { default: 'Click me' } });
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Click me');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('role')).toBeUndefined();
    expect(button.attributes('disabled')).toBeUndefined();
    expect(button.attributes('aria-disabled')).not.toBe('true');
    expect(button.classes()).toEqual(expect.arrayContaining([styles.button, styles.modifiers.primary]));
  });

  it('sets the OUIA attributes', () => {
    const wrapper = mount(PfButton, { props: { ouiaId: 'my-button' } });
    expect(btn(wrapper).attributes('data-ouia-component-type')).toBe('PF/Button');
    expect(btn(wrapper).attributes('data-ouia-component-id')).toBe('my-button');
  });

  it('sets aria-expanded only when expanded is provided', async () => {
    const wrapper = mount(PfButton);
    expect(btn(wrapper).attributes('aria-expanded')).toBeUndefined();
    await wrapper.setProps({ expanded: true });
    expect(btn(wrapper).attributes('aria-expanded')).toBe('true');
  });

  it('keeps an aria-expanded attribute passed by the parent', () => {
    const wrapper = mount(PfButton, { attrs: { 'aria-expanded': 'true' } });
    expect(btn(wrapper).attributes('aria-expanded')).toBe('true');
  });

  it('applies the type attribute', () => {
    const wrapper = mount(PfButton, { props: { type: 'submit' } });
    expect(btn(wrapper).attributes('type')).toBe('submit');
  });

  it.each(['secondary', 'tertiary', 'danger', 'warning', 'link', 'plain', 'control'] as const)('applies the %s variant class', (variant) => {
    const wrapper = mount(PfButton, { props: { variant } });
    expect(btn(wrapper).classes()).toContain(styles.modifiers[variant]);
    expect(btn(wrapper).classes()).not.toContain(styles.modifiers.primary);
  });

  it('applies the generic modifiers', () => {
    const wrapper = mount(PfButton, { props: { block: true, small: true, large: true, circle: true } });
    expect(btn(wrapper).classes()).toEqual(expect.arrayContaining([
      styles.modifiers.block,
      styles.modifiers.small,
      styles.modifiers.displayLg,
      styles.modifiers.circle,
    ]));
  });

  it('applies variant-specific modifiers only to the right variants', async () => {
    const wrapper = mount(PfButton, { props: { variant: 'link', inline: true, danger: true, noPadding: true } });
    expect(btn(wrapper).classes()).toContain(styles.modifiers.inline);
    expect(btn(wrapper).classes()).toContain(styles.modifiers.danger);
    expect(btn(wrapper).classes()).not.toContain(styles.modifiers.noPadding);

    await wrapper.setProps({ variant: 'plain' });
    expect(btn(wrapper).classes()).not.toContain(styles.modifiers.inline);
    expect(btn(wrapper).classes()).not.toContain(styles.modifiers.danger);
    expect(btn(wrapper).classes()).toContain(styles.modifiers.noPadding);

    await wrapper.setProps({ variant: 'stateful', state: 'attention' });
    expect(btn(wrapper).classes()).toContain(styles.modifiers.attention);
  });

  it('emits click events', async () => {
    const wrapper = mount(PfButton);
    await btn(wrapper).trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  describe('disabled', () => {
    it('disables the button and does not emit click', async () => {
      const wrapper = mount(PfButton, { props: { disabled: true } });
      expect(btn(wrapper).attributes('disabled')).toBeDefined();
      expect(btn(wrapper).attributes('aria-disabled')).toBe('true');
      expect(btn(wrapper).classes()).toContain(styles.modifiers.disabled);

      await btn(wrapper).trigger('click');
      expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('prevents navigation of disabled links and removes them from the tab order', () => {
      const wrapper = mount(PfButton, { props: { href: '/foo', disabled: true } });
      expect(btn(wrapper).element.tagName).toBe('A');
      expect(btn(wrapper).attributes('tabindex')).toBe('-1');

      const event = new MouseEvent('click', { cancelable: true, bubbles: true });
      btn(wrapper).element.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
      expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('marks aria-disabled buttons without the disabled attribute', () => {
      const wrapper = mount(PfButton, { props: { ariaDisabled: true } });
      expect(btn(wrapper).attributes('disabled')).toBeUndefined();
      expect(btn(wrapper).attributes('aria-disabled')).toBe('true');
      expect(btn(wrapper).classes()).toContain(styles.modifiers.ariaDisabled);
      expect(btn(wrapper).classes()).not.toContain(styles.modifiers.disabled);
    });

    // PatternFly prevents the `inoperableEvents` (click by default) on aria-disabled buttons,
    // but here the click is still emitted and the `inoperableEvents` prop is ignored.
    it.fails('does not emit click when aria-disabled', async () => {
      const wrapper = mount(PfButton, { props: { ariaDisabled: true } });
      await btn(wrapper).trigger('click');
      expect(wrapper.emitted('click')).toBeUndefined();
    });
  });

  describe('component', () => {
    it('renders a link with role button when href is set', () => {
      const wrapper = mount(PfButton, { props: { href: 'https://example.com' } });
      expect(btn(wrapper).element.tagName).toBe('A');
      expect(btn(wrapper).attributes('href')).toBe('https://example.com');
      expect(btn(wrapper).attributes('role')).toBe('button');
      expect(btn(wrapper).attributes('type')).toBeUndefined();
    });

    it('renders a custom element', () => {
      const wrapper = mount(PfButton, { props: { component: 'span' } });
      expect(btn(wrapper).element.tagName).toBe('SPAN');
      expect(btn(wrapper).attributes('role')).toBe('button');
      expect(btn(wrapper).attributes('tabindex')).toBe('0');
      expect(btn(wrapper).attributes('type')).toBeUndefined();
    });

    it('renders a custom component', () => {
      const Custom = defineComponent({ setup: (_, { slots }) => () => h('div', { class: 'custom' }, slots.default?.()) });
      const wrapper = mount(PfButton, { props: { component: Custom }, slots: { default: 'text' } });
      expect(wrapper.find('div.custom').text()).toBe('text');
      expect(wrapper.find('div.custom').classes()).toContain(styles.button);
    });

    it('honours an explicit tabindex', () => {
      const wrapper = mount(PfButton, { props: { tabindex: 3 } });
      expect(btn(wrapper).attributes('tabindex')).toBe('3');
    });
  });

  describe('loading', () => {
    it('shows a spinner and disables the button while loading', () => {
      const wrapper = mount(PfButton, { props: { loading: true, spinnerAriaValueText: 'Loading...' } });
      const spinner = wrapper.find(`.${styles.buttonProgress} [role="progressbar"]`);
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain(spinnerStyles.spinner);
      expect(spinner.attributes('aria-valuetext')).toBe('Loading...');
      expect(btn(wrapper).classes()).toEqual(expect.arrayContaining([styles.modifiers.progress, styles.modifiers.inProgress]));
      expect(btn(wrapper).attributes('disabled')).toBeDefined();
    });

    it('keeps the progress styling without a spinner when loading is false', () => {
      const wrapper = mount(PfButton, { props: { loading: false } });
      expect(wrapper.find('[role="progressbar"]').exists()).toBe(false);
      expect(btn(wrapper).classes()).toContain(styles.modifiers.progress);
      expect(btn(wrapper).classes()).not.toContain(styles.modifiers.inProgress);
      expect(btn(wrapper).attributes('disabled')).toBeUndefined();
    });

    it('has no progress styling when loading is not set', () => {
      const wrapper = mount(PfButton);
      expect(btn(wrapper).classes()).not.toContain(styles.modifiers.progress);
    });

    // spinnerAriaLabel / spinnerAriaLabelledBy are declared props but are never passed to the spinner.
    it.fails('forwards the spinner aria-label', () => {
      const wrapper = mount(PfButton, { props: { loading: true, spinnerAriaLabel: 'Saving' } });
      expect(wrapper.find('[role="progressbar"]').attributes('aria-label')).toBe('Saving');
    });
  });

  describe('slots', () => {
    it('renders the icon before the text by default', () => {
      const wrapper = mount(PfButton, { slots: { default: 'Text', icon: '<i class="my-icon"></i>' } });
      const icon = wrapper.find(`.${styles.buttonIcon}`);
      expect(icon.find('.my-icon').exists()).toBe(true);
      expect(icon.classes()).toContain(styles.modifiers.start);
      expect(wrapper.html({ raw: true }).indexOf('my-icon')).toBeLessThan(wrapper.html({ raw: true }).indexOf('Text'));
    });

    it('renders the icon after the text with iconPosition end', () => {
      const wrapper = mount(PfButton, { props: { iconPosition: 'end' }, slots: { default: 'Text', icon: '<i class="my-icon"></i>' } });
      const icon = wrapper.find(`.${styles.buttonIcon}`);
      expect(icon.classes()).toContain(styles.modifiers.end);
      expect(icon.classes()).not.toContain(styles.modifiers.start);
      expect(wrapper.html({ raw: true }).indexOf('my-icon')).toBeGreaterThan(wrapper.html({ raw: true }).indexOf('Text'));
    });

    it('does not render the icon container without an icon', () => {
      const wrapper = mount(PfButton, { slots: { default: 'Text' } });
      expect(wrapper.find(`.${styles.buttonIcon}`).exists()).toBe(false);
    });

    it('renders the badge slot in a count container', () => {
      const wrapper = mount(PfButton, { props: { badgeClass: 'extra' }, slots: { default: 'Text', badge: '7' } });
      const count = wrapper.find(`.${styles.buttonCount}`);
      expect(count.text()).toBe('7');
      expect(count.classes()).toContain('extra');
    });

    it('renders built-in icons for settings and hamburger buttons', async () => {
      const wrapper = mount(PfButton, { props: { settings: true } });
      expect(btn(wrapper).classes()).toContain(styles.modifiers.settings);
      expect(wrapper.find(`.${styles.buttonIcon} svg`).exists()).toBe(true);

      await wrapper.setProps({ settings: false, hamburger: true, hamburgerVariant: 'expand', expanded: false });
      expect(btn(wrapper).classes()).toEqual(expect.arrayContaining([styles.modifiers.hamburger, styles.modifiers.expand]));
      expect(wrapper.find(`.${styles.buttonHamburgerIcon}`).exists()).toBe(true);
      expect(btn(wrapper).attributes('aria-expanded')).toBe('false');
    });

    it('renders favorite icons', async () => {
      const wrapper = mount(PfButton, { props: { favorite: true } });
      expect(wrapper.find(`.${styles.buttonIconFavorite}`).exists()).toBe(true);
      expect(wrapper.find(`.${styles.buttonIconFavorited}`).exists()).toBe(true);
      expect(btn(wrapper).classes()).not.toContain(styles.modifiers.favorited);
      await wrapper.setProps({ favorited: true });
      expect(btn(wrapper).classes()).toContain(styles.modifiers.favorited);
    });
  });

  it('forwards aria-current', () => {
    const wrapper = mount(PfButton, { props: { href: '/', ariaCurrent: 'page' } });
    expect(btn(wrapper).attributes('aria-current')).toBe('page');
  });

  describe('router link', () => {
    function makeRouter() {
      const Page = defineComponent({ render: () => h('div') });
      return createRouter({
        history: createMemoryHistory(),
        routes: [
          { path: '/', component: Page },
          { path: '/about', name: 'about', component: Page },
        ],
      });
    }

    it('renders a link to the route and navigates on click', async () => {
      const router = makeRouter();
      await router.push('/');
      await router.isReady();

      const wrapper = mount(PfButton, {
        props: { to: { name: 'about' } },
        slots: { default: 'About' },
        global: { plugins: [router] },
      });

      const link = wrapper.find('a');
      expect(link.exists()).toBe(true);
      expect(link.attributes('href')).toBe('/about');
      expect(link.classes()).toContain(styles.button);
      expect(link.text()).toBe('About');

      await link.trigger('click');
      await flushPromises();
      expect(router.currentRoute.value.path).toBe('/about');
      expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('does not navigate when disabled', async () => {
      const router = makeRouter();
      await router.push('/');
      await router.isReady();

      const wrapper = mount(PfButton, {
        props: { to: '/about', disabled: true },
        global: { plugins: [router] },
      });

      await wrapper.find('a').trigger('click');
      await flushPromises();
      expect(router.currentRoute.value.path).toBe('/');
    });
  });
});
