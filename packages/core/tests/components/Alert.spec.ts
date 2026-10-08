import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfAlert from '../../src/components/Alert/Alert.vue';
import PfAlertIcon from '../../src/components/Alert/AlertIcon.vue';
import PfAlertActionLink from '../../src/components/Alert/AlertActionLink.vue';

describe('Alert', () => {
  describe('rendering', () => {
    it('renders the title inside an h4 by default, with a screen-reader variant label', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Something happened', variant: 'success' } });

      const title = wrapper.find(`.${styles.alertTitle}`);
      expect(title.element.tagName).toBe('H4');
      expect(title.text()).toContain('Something happened');
      expect(title.find('.pf-v6-screen-reader').text()).toBe('Success alert:');
    });

    it('uses a custom title component when given', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', component: 'h2' } });
      expect(wrapper.find(`.${styles.alertTitle}`).element.tagName).toBe('H2');
    });

    it.each(['success', 'danger', 'warning', 'info', 'custom'] as const)('applies the %s variant modifier and renders its icon', (variant) => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', variant } });

      expect(wrapper.classes()).toContain(styles.alert);
      expect(wrapper.classes()).toContain(styles.modifiers[variant]);
      const icon = wrapper.find(`.${styles.alertIcon}`);
      expect(icon.exists()).toBe(true);
      expect(icon.find('svg').exists()).toBe(true);
    });

    it('defaults to the custom variant', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title' } });
      expect(wrapper.classes()).toContain(styles.modifiers.custom);
      expect(wrapper.find('.pf-v6-screen-reader').text()).toBe('Custom alert:');
    });

    it('uses a different icon for each variant', () => {
      const markup = (['success', 'danger', 'warning', 'info', 'custom'] as const).map(variant =>
        mount(PfAlertIcon, { props: { variant } }).find('svg').html(),
      );
      expect(new Set(markup).size).toBe(markup.length);
    });

    it('replaces the variant icon with the custom-icon slot', () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title', variant: 'info' },
        slots: { 'custom-icon': () => h('i', { class: 'my-icon' }) },
      });

      const icon = wrapper.find(`.${styles.alertIcon}`);
      expect(icon.find('.my-icon').exists()).toBe(true);
      expect(icon.find('svg').exists()).toBe(false);
    });

    it('applies inline and plain modifiers', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', inline: true, plain: true } });
      expect(wrapper.classes()).toContain(styles.modifiers.inline);
      expect(wrapper.classes()).toContain(styles.modifiers.plain);
    });

    it('renders description and action links slots', () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title' },
        slots: {
          default: () => 'Description text',
          'action-links': () => h('a', { href: '#' }, 'View details'),
        },
      });

      expect(wrapper.find(`.${styles.alertDescription}`).text()).toBe('Description text');
      expect(wrapper.find(`.${styles.alertActionGroup}`).text()).toBe('View details');
    });

    it('does not render empty description or action group containers', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title' } });
      expect(wrapper.find(`.${styles.alertDescription}`).exists()).toBe(false);
      expect(wrapper.find(`.${styles.alertActionGroup}`).exists()).toBe(false);
    });

    it('sets aria-live attributes only when liveRegion is set', () => {
      const plainAlert = mount(PfAlert, { props: { title: 'Title' } });
      expect(plainAlert.attributes('aria-live')).toBeUndefined();
      expect(plainAlert.attributes('aria-atomic')).toBeUndefined();

      const liveAlert = mount(PfAlert, { props: { title: 'Title', liveRegion: true } });
      expect(liveAlert.attributes('aria-live')).toBe('polite');
      expect(liveAlert.attributes('aria-atomic')).toBe('false');
    });
  });

  describe('close button', () => {
    it('is not rendered without an onClose handler', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title' } });
      expect(wrapper.find(`.${styles.alertAction}`).exists()).toBe(false);
    });

    it('calls the close handler when clicked', async () => {
      const onClose = vi.fn();
      const wrapper = mount(PfAlert, { props: { title: 'Title', onClose } });

      const button = wrapper.find(`.${styles.alertAction} button`);
      expect(button.attributes('aria-label')).toBe('Close');
      await button.trigger('click');

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose.mock.calls[0]?.[0]).toBeInstanceOf(Event);
    });
  });

  describe('timeout', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('is dismissed after 8000ms when timeout is true', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: true } });

      await vi.advanceTimersByTimeAsync(7999);
      expect(wrapper.emitted('timeout')).toBeUndefined();
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(true);

      await vi.advanceTimersByTimeAsync(1);
      expect(wrapper.emitted('timeout')).toHaveLength(1);
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(false);
    });

    it('is dismissed after the given number of milliseconds', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: 2000 } });

      await vi.advanceTimersByTimeAsync(1999);
      expect(wrapper.emitted('timeout')).toBeUndefined();

      await vi.advanceTimersByTimeAsync(1);
      expect(wrapper.emitted('timeout')).toHaveLength(1);
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(false);
    });

    it('is never dismissed without a timeout', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title' } });

      await vi.advanceTimersByTimeAsync(60000);
      expect(wrapper.emitted('timeout')).toBeUndefined();
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(true);
    });

    it('is not dismissed while hovered, and waits timeoutAnimation after mouse leave', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: 1000, timeoutAnimation: 500 } });

      await wrapper.trigger('mouseenter');
      expect(wrapper.emitted('mouseenter')).toHaveLength(1);

      await vi.advanceTimersByTimeAsync(5000);
      expect(wrapper.emitted('timeout')).toBeUndefined();
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(true);

      await wrapper.trigger('mouseleave');
      expect(wrapper.emitted('mouseleave')).toHaveLength(1);

      await vi.advanceTimersByTimeAsync(499);
      expect(wrapper.emitted('timeout')).toBeUndefined();
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(true);

      await vi.advanceTimersByTimeAsync(1);
      expect(wrapper.emitted('timeout')).toHaveLength(1);
      expect(wrapper.find(`.${styles.alert}`).exists()).toBe(false);
    });

    it('defaults timeoutAnimation to 3000ms after hovering', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: 1000 } });

      await wrapper.trigger('mouseenter');
      await vi.advanceTimersByTimeAsync(2000);
      await wrapper.trigger('mouseleave');

      await vi.advanceTimersByTimeAsync(2999);
      expect(wrapper.emitted('timeout')).toBeUndefined();

      await vi.advanceTimersByTimeAsync(1);
      expect(wrapper.emitted('timeout')).toHaveLength(1);
    });

    it('still honours the original timeout when hovered and left before it expires', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: 5000, timeoutAnimation: 500 } });

      await wrapper.trigger('mouseenter');
      await vi.advanceTimersByTimeAsync(100);
      await wrapper.trigger('mouseleave');

      await vi.advanceTimersByTimeAsync(4899);
      expect(wrapper.emitted('timeout')).toBeUndefined();

      await vi.advanceTimersByTimeAsync(1);
      expect(wrapper.emitted('timeout')).toHaveLength(1);
    });

    it('clears its timers when unmounted', async () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', timeout: 1000 } });
      wrapper.unmount();

      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe('expandable', () => {
    it('renders a toggle button inside the button icon slot and hides the description while collapsed', () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title', variant: 'info', expandable: true },
        slots: { default: () => 'Details' },
      });

      expect(wrapper.classes()).toContain(styles.modifiers.expandable);
      expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);

      const toggle = wrapper.find(`.${styles.alertToggle} button`);
      expect(toggle.attributes('aria-expanded')).toBe('false');
      expect(toggle.attributes('aria-label')).toBe('Toggle Info alert: Title');
      // b8b173b6: the toggle icon must be rendered in the pf-button icon slot
      expect(toggle.find(`.${buttonStyles.buttonIcon} .${styles.alertToggleIcon} svg`).exists()).toBe(true);

      expect(wrapper.find(`.${styles.alertDescription}`).exists()).toBe(false);
    });

    it('toggles the expanded state on click and emits update:expanded', async () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title', expandable: true },
        slots: { default: () => 'Details' },
      });

      const toggle = wrapper.find(`.${styles.alertToggle} button`);
      await toggle.trigger('click');

      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.classes()).toContain(styles.modifiers.expanded);
      expect(wrapper.find(`.${styles.alertDescription}`).text()).toBe('Details');

      await toggle.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
      expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
      expect(wrapper.find(`.${styles.alertDescription}`).exists()).toBe(false);
    });

    it('reflects the expanded state in the toggle aria-expanded attribute', async () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title', expandable: true },
        slots: { default: () => 'Details' },
      });

      const toggle = wrapper.find(`.${styles.alertToggle} button`);
      await toggle.trigger('click');
      expect(toggle.attributes('aria-expanded')).toBe('true');
    });

    it('can be controlled with the expanded prop', async () => {
      const wrapper = mount(PfAlert, {
        props: { title: 'Title', expandable: true, expanded: true },
        slots: { default: () => 'Details' },
      });
      expect(wrapper.find(`.${styles.alertDescription}`).exists()).toBe(true);

      await wrapper.setProps({ expanded: false });
      await nextTick();
      expect(wrapper.find(`.${styles.alertDescription}`).exists()).toBe(false);
    });

    it('uses toggleAriaLabel when provided', () => {
      const wrapper = mount(PfAlert, { props: { title: 'Title', expandable: true, toggleAriaLabel: 'Show details' } });
      expect(wrapper.find(`.${styles.alertToggle} button`).attributes('aria-label')).toBe('Show details');
    });
  });
});

describe('AlertActionLink', () => {
  it('renders an inline link button with the default slot', () => {
    const wrapper = mount(PfAlertActionLink, { slots: { default: () => 'View details' } });
    const button = wrapper.find('button');
    expect(button.classes()).toContain(buttonStyles.button);
    expect(button.classes()).toContain(buttonStyles.modifiers.link);
    expect(button.classes()).toContain(buttonStyles.modifiers.inline);
    expect(button.text()).toBe('View details');
  });

  it('forwards button props, attributes and listeners', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfAlertActionLink, { props: { href: '#details' }, attrs: { onClick, id: 'action' }, slots: { default: () => 'Details' } });
    const link = wrapper.find('a');
    expect(link.attributes('href')).toBe('#details');
    expect(link.attributes('id')).toBe('action');
    await link.trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets its own OUIA type', () => {
    const wrapper = mount(PfAlertActionLink);
    expect(wrapper.find('button').attributes('data-ouia-component-type')).toBe('PF/AlertActionLink');
  });

  // BUG: AlertActionLink.vue only declares props via a @vue-ignore'd type, so ouiaId is not a real prop,
  // props.ouiaId is undefined and the generated id bound via ouiaProps overrides the Button's own one
  it.fails('uses the given ouiaId', () => {
    const wrapper = mount(PfAlertActionLink, { attrs: { ouiaId: 'link' } });
    expect(wrapper.find('button').attributes('data-ouia-component-id')).toBe('link');
  });

  it('renders inside the alert action group', () => {
    const wrapper = mount(PfAlert, {
      props: { title: 'Title' },
      slots: { 'action-links': () => [h(PfAlertActionLink, null, () => 'One'), h(PfAlertActionLink, null, () => 'Two')] },
    });
    const links = wrapper.findAll(`.${styles.alertActionGroup} button`);
    expect(links.map(l => l.text())).toEqual(['One', 'Two']);
  });
});
