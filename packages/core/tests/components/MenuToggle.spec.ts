import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import PfMenuToggle from '../../src/components/MenuToggle/MenuToggle.vue';

// the component renders a fragment (the reusable toggle-controls template adds a node), so look up the toggle itself
function root(wrapper: VueWrapper) {
  return wrapper.find(`.${styles.menuToggle}`);
}

describe('MenuToggle', () => {
  describe('default variant', () => {
    it('renders a button with text and toggle controls', () => {
      const wrapper = mount(PfMenuToggle, { slots: { default: () => 'Options' } });

      expect(root(wrapper).element.tagName).toBe('BUTTON');
      expect(root(wrapper).attributes('type')).toBe('button');
      expect(root(wrapper).classes()).toContain(styles.menuToggle);
      expect(wrapper.find(`.${styles.menuToggleText}`).text()).toBe('Options');
      expect(wrapper.find(`.${styles.menuToggleControls} .${styles.menuToggleToggleIcon} svg`).exists()).toBe(true);
    });

    // 9741d91c
    it('does not render an empty text span without a default slot', () => {
      const wrapper = mount(PfMenuToggle, { slots: { icon: () => h('i', { class: 'my-icon' }) } });

      expect(wrapper.find(`.${styles.menuToggleText}`).exists()).toBe(false);
      expect(wrapper.find(`.${styles.menuToggleIcon} .my-icon`).exists()).toBe(true);
    });

    it('renders the badge slot in a count container', () => {
      const wrapper = mount(PfMenuToggle, { slots: { default: () => 'Filters', badge: () => '4' } });
      expect(wrapper.find(`.${styles.menuToggleCount}`).text()).toBe('4');
    });

    it.each(['success', 'warning', 'danger'] as const)('applies the %s status modifier and icon', (status) => {
      const wrapper = mount(PfMenuToggle, { props: { status }, slots: { default: () => 'Status' } });

      expect(root(wrapper).classes()).toContain(styles.modifiers[status]);
      expect(wrapper.find(`.${styles.menuToggleStatusIcon} svg`).exists()).toBe(true);
    });

    it.each([
      ['primary', styles.modifiers.primary],
      ['secondary', styles.modifiers.secondary],
      ['plainText', styles.modifiers.text],
    ] as const)('applies the %s variant modifier', (variant, modifier) => {
      const wrapper = mount(PfMenuToggle, { props: { variant }, slots: { default: () => 'Text' } });
      expect(root(wrapper).classes()).toContain(modifier);
    });
  });

  describe('expanded', () => {
    it('reflects the expanded state with aria-expanded and the expanded modifier', () => {
      const collapsed = mount(PfMenuToggle, { slots: { default: () => 'Toggle' } });
      expect(root(collapsed).attributes('aria-expanded')).toBe('false');
      expect(root(collapsed).classes()).not.toContain(styles.modifiers.expanded);

      const expanded = mount(PfMenuToggle, { props: { expanded: true }, slots: { default: () => 'Toggle' } });
      expect(root(expanded).attributes('aria-expanded')).toBe('true');
      expect(root(expanded).classes()).toContain(styles.modifiers.expanded);
    });

    it('toggles on click and emits update:expanded', async () => {
      const wrapper = mount(PfMenuToggle, { slots: { default: () => 'Toggle' } });

      await root(wrapper).trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(root(wrapper).attributes('aria-expanded')).toBe('true');

      await root(wrapper).trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
      expect(root(wrapper).attributes('aria-expanded')).toBe('false');
    });

    it('also emits click events to listeners', async () => {
      const wrapper = mount(PfMenuToggle, { slots: { default: () => 'Toggle' } });
      await root(wrapper).trigger('click');
      expect(wrapper.emitted('click')).toHaveLength(1);
    });
  });

  describe('disabled', () => {
    it('disables the button and applies the disabled modifier', async () => {
      const wrapper = mount(PfMenuToggle, { props: { disabled: true }, slots: { default: () => 'Toggle' } });

      expect(root(wrapper).attributes('disabled')).toBeDefined();
      expect(root(wrapper).classes()).toContain(styles.modifiers.disabled);
    });

    it('disables the inner toggle button of the typeahead variant', () => {
      const wrapper = mount(PfMenuToggle, {
        props: { variant: 'typeahead', disabled: true },
        slots: { default: () => h('input', { class: 'typeahead-input' }) },
      });

      expect(root(wrapper).attributes('disabled')).toBeUndefined();
      expect(wrapper.find(`button.${styles.menuToggleButton}`).attributes('disabled')).toBeDefined();
    });
  });

  describe('plain variant', () => {
    it('renders the ellipsis icon and no toggle controls when there is no content', () => {
      const wrapper = mount(PfMenuToggle, { props: { variant: 'plain' }, attrs: { 'aria-label': 'Actions' } });

      expect(root(wrapper).classes()).toContain(styles.modifiers.plain);
      expect(wrapper.find(`.${styles.menuToggleIcon} svg`).exists()).toBe(true);
      expect(wrapper.find(`.${styles.menuToggleControls}`).exists()).toBe(false);
      expect(wrapper.find(`.${styles.menuToggleText}`).exists()).toBe(false);
      expect(root(wrapper).attributes('aria-label')).toBe('Actions');
    });

    it('renders the default slot in place of the ellipsis icon', () => {
      const wrapper = mount(PfMenuToggle, {
        props: { variant: 'plain' },
        slots: { default: () => h('i', { class: 'custom-content' }) },
      });

      expect(wrapper.find('.custom-content').exists()).toBe(true);
      expect(wrapper.find(`.${styles.menuToggleIcon}`).exists()).toBe(false);
    });

    it('renders only the icon slot when given an icon', () => {
      const wrapper = mount(PfMenuToggle, {
        props: { variant: 'plain' },
        slots: { icon: () => h('i', { class: 'my-icon' }) },
      });

      const icons = wrapper.findAll(`.${styles.menuToggleIcon}`);
      expect(icons).toHaveLength(1);
      expect(icons[0]?.find('.my-icon').exists()).toBe(true);
      expect(wrapper.find(`.${styles.menuToggleText}`).exists()).toBe(false);
    });
  });

  // 534b6aa7
  describe('circle', () => {
    it('applies the circle modifier to plain toggles', () => {
      const wrapper = mount(PfMenuToggle, { props: { variant: 'plain', circle: true } });
      expect(root(wrapper).classes()).toContain(styles.modifiers.circle);
    });

    it.each(['default', 'primary', 'secondary', 'plainText', 'typeahead'] as const)('does not apply the circle modifier to the %s variant', (variant) => {
      const wrapper = mount(PfMenuToggle, { props: { variant, circle: true }, slots: { default: () => 'Text' } });
      expect(root(wrapper).classes()).not.toContain(styles.modifiers.circle);
    });
  });

  describe('typeahead variant', () => {
    function mountTypeahead(props: Record<string, unknown> = {}) {
      return mount(PfMenuToggle, {
        props: { variant: 'typeahead', ...props },
        slots: { default: () => h('input', { class: 'typeahead-input' }) },
      });
    }

    it('renders a div container with a separate toggle button', () => {
      const wrapper = mountTypeahead();

      expect(root(wrapper).element.tagName).toBe('DIV');
      expect(root(wrapper).classes()).toContain(styles.modifiers.typeahead);
      expect(root(wrapper).attributes('aria-expanded')).toBeUndefined();
      expect(root(wrapper).attributes('type')).toBeUndefined();

      const button = wrapper.find(`button.${styles.menuToggleButton}`);
      expect(button.attributes('aria-label')).toBe('Menu toggle');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(button.find(`.${styles.menuToggleControls}`).exists()).toBe(true);
    });

    // 4f3a0e6a
    it('renders the default slot only once, outside of the toggle button', () => {
      const wrapper = mountTypeahead();

      const inputs = wrapper.findAll('.typeahead-input');
      expect(inputs).toHaveLength(1);
      expect(inputs[0]?.element.closest('button')).toBeNull();
      expect(wrapper.find(`button.${styles.menuToggleButton} .typeahead-input`).exists()).toBe(false);
    });

    it('does not wrap the default slot in a text span', () => {
      const wrapper = mountTypeahead();
      expect(wrapper.find(`.${styles.menuToggleText}`).exists()).toBe(false);
    });

    it('toggles only via the inner toggle button', async () => {
      const wrapper = mountTypeahead();

      await wrapper.find('.typeahead-input').trigger('click');
      expect(wrapper.emitted('update:expanded')).toBeUndefined();

      const button = wrapper.find(`button.${styles.menuToggleButton}`);
      await button.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(button.attributes('aria-expanded')).toBe('true');
      expect(root(wrapper).classes()).toContain(styles.modifiers.expanded);
    });
  });

  describe('split button', () => {
    it('renders split-buttons and wraps text inside the toggle button', () => {
      const wrapper = mount(PfMenuToggle, {
        slots: {
          'split-buttons': () => h('label', { class: 'split-check' }),
          default: () => 'Split',
        },
      });

      expect(root(wrapper).element.tagName).toBe('DIV');
      expect(root(wrapper).classes()).toContain(styles.modifiers.splitButton);
      expect(wrapper.find('.split-check').exists()).toBe(true);

      const button = wrapper.find(`button.${styles.menuToggleButton}`);
      expect(button.classes()).toContain(styles.modifiers.text);
      expect(button.find(`.${styles.menuToggleText}`).text()).toBe('Split');
      expect(wrapper.findAll(`.${styles.menuToggleText}`)).toHaveLength(1);
    });

    // 9741d91c
    it('does not render an empty text span in the toggle button without a default slot', () => {
      const wrapper = mount(PfMenuToggle, { slots: { 'split-buttons': () => h('label', { class: 'split-check' }) } });

      const button = wrapper.find(`button.${styles.menuToggleButton}`);
      expect(button.find(`.${styles.menuToggleText}`).exists()).toBe(false);
      expect(button.classes()).not.toContain(styles.modifiers.text);
    });
  });

  it('applies size and layout modifiers', () => {
    const wrapper = mount(PfMenuToggle, {
      props: { fullWidth: true, fullHeight: true, small: true, inForm: true, placeholder: true },
      slots: { default: () => 'Text' },
    });

    expect(root(wrapper).classes()).toEqual(expect.arrayContaining([
      styles.modifiers.fullWidth,
      styles.modifiers.fullHeight,
      styles.modifiers.small,
      styles.modifiers.form,
      styles.modifiers.placeholder,
    ]));
  });

  it('renders the gear icon for settings toggles', () => {
    const wrapper = mount(PfMenuToggle, { props: { settings: true, variant: 'plain' } });

    expect(root(wrapper).classes()).toContain(styles.modifiers.settings);
    expect(wrapper.findAll(`.${styles.menuToggleIcon}`)).toHaveLength(1);
    expect(wrapper.find(`.${styles.menuToggleIcon} svg`).exists()).toBe(true);
  });

  it('exposes a focus method', () => {
    const wrapper = mount(PfMenuToggle, { slots: { default: () => 'Focus me' }, attachTo: document.body });

    wrapper.vm.focus();
    expect(document.activeElement).toBe(root(wrapper).element);
    wrapper.unmount();
  });
});
