import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import toggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import PfSelect from '../../src/components/Select/Select.vue';
import { PfSelectOption } from '../../src/components/Select';

enableAutoUnmount(afterEach);

function mountWithModel<C>(component: C, model: string, props: Record<string, unknown>, options: Record<string, unknown> = {}) {
  const wrapper: VueWrapper<any> = mount(component as any, {
    ...options,
    props: {
      ...props,
      [`onUpdate:${model}`]: (v: unknown) => wrapper.setProps({ [model]: v }),
    },
  });
  return wrapper;
}

const defaultOptions = () => [
  h(PfSelectOption, { value: 'one' }, () => 'One'),
  h(PfSelectOption, { value: 'two' }, () => 'Two'),
];

async function mountSelect(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = { default: defaultOptions }) {
  const wrapper = mountWithModel(PfSelect, 'open', props, { slots, attachTo: document.body });
  await flushPromises();
  return wrapper;
}

function toggle() {
  return document.body.querySelector<HTMLButtonElement>(`.${toggleStyles.menuToggle}`)!;
}

function menu() {
  return document.body.querySelector<HTMLElement>(`.${styles.menu}`);
}

function options() {
  return [...document.body.querySelectorAll<HTMLButtonElement>(`.${styles.menuItem}`)];
}

function keydown(target: EventTarget, key: string) {
  target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
}

describe('Select', () => {
  it('renders a menu toggle with the default label', async () => {
    const wrapper = await mountSelect();

    expect(toggle().querySelector(`.${toggleStyles.menuToggleText}`)!.textContent!.trim()).toBe('Select a value');
    expect(toggle().getAttribute('aria-expanded')).toBe('false');
    expect(toggle().getAttribute('data-ouia-component-type')).toBe('PF/Select');
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it('renders the label prop, label slot and icon slot', async () => {
    let wrapper = await mountSelect({ label: 'Pick one' });
    expect(toggle().textContent).toContain('Pick one');
    wrapper.unmount();

    wrapper = await mountSelect({}, {
      default: defaultOptions,
      label: () => h('b', 'Bold'),
      icon: () => h('i', { class: 'my-icon' }),
    });
    expect(toggle().querySelector(`.${toggleStyles.menuToggleText} b`)!.textContent).toBe('Bold');
    expect(toggle().querySelector(`.${toggleStyles.menuToggleIcon} .my-icon`)).not.toBeNull();
    wrapper.unmount();
  });

  it('passes toggle props to the menu toggle', async () => {
    const wrapper = await mountSelect({ disabled: true, variant: 'secondary', fullWidth: true, fullHeight: true });

    expect(toggle().disabled).toBe(true);
    expect(toggle().classList.contains(toggleStyles.modifiers.secondary)).toBe(true);
    expect(toggle().classList.contains(toggleStyles.modifiers.fullWidth)).toBe(true);
    expect(toggle().classList.contains(toggleStyles.modifiers.fullHeight)).toBe(true);
    wrapper.unmount();
  });

  it('opens on toggle click and teleports the menu to the body', async () => {
    const wrapper = await mountSelect();

    toggle().click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true]]);
    expect(menu()!.parentElement).toBe(document.body);
    expect(options().map(o => o.textContent!.trim())).toEqual(['One', 'Two']);
    wrapper.unmount();
  });

  it('applies the minWidth style and forwards attributes to the menu', async () => {
    const wrapper = await mountSelect({ open: true, minWidth: '300px', 'data-test': 'sel' });

    expect(menu()!.style.getPropertyValue('--pf-v6-c-menu--MinWidth')).toBe('300px');
    expect(menu()!.getAttribute('data-test')).toBe('sel');
    wrapper.unmount();
  });

  it('focuses the first option after opening', async () => {
    const wrapper = await mountSelect();

    toggle().click();
    await flushPromises();
    expect(menu()).not.toBeNull();
    expect(document.activeElement).toBe(options()[0]);
    wrapper.unmount();
  });

  it('does not focus the first option with noFocusFirstItemOnOpen', async () => {
    const wrapper = await mountSelect({ noFocusFirstItemOnOpen: true });

    toggle().click();
    await flushPromises();
    expect(document.activeElement).not.toBe(options()[0]);
    wrapper.unmount();
  });

  it('closes when clicking outside but not when clicking inside the menu', async () => {
    const wrapper = await mountSelect({ open: true }, {
      default: () => [h('div', { class: 'inside' }), ...defaultOptions()],
    });

    document.body.querySelector<HTMLElement>('.inside')!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it.each(['Escape', 'Tab'])('closes on %s and focuses the toggle', async (key) => {
    const wrapper = await mountSelect({ open: true });

    keydown(options()[0]!, key);
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(document.activeElement).toBe(toggle());
    wrapper.unmount();
  });

  it('only closes on closeOnKeys', async () => {
    const wrapper = await mountSelect({ open: true, closeOnKeys: ['Escape'] });

    keydown(options()[0]!, 'Tab');
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();

    keydown(toggle(), 'Escape');
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    wrapper.unmount();
  });

  it('ignores keys outside the toggle and menu', async () => {
    const wrapper = await mountSelect({ open: true });
    keydown(document.body, 'Escape');
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();
    wrapper.unmount();
  });

  it('navigates options with arrow keys', async () => {
    const wrapper = await mountSelect({ open: true });

    keydown(options()[0]!, 'ArrowDown');
    await nextTick();
    expect(document.activeElement).toBe(options()[1]);
    wrapper.unmount();
  });

  it('emits select and updates the selected model without closing', async () => {
    const onUpdateSelected = vi.fn();
    const wrapper = await mountSelect({ open: true, selected: 'one', 'onUpdate:selected': onUpdateSelected });

    expect(options()[0]!.classList.contains(styles.modifiers.selected)).toBe(true);

    options()[1]!.click();
    await flushPromises();
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(onUpdateSelected).toHaveBeenCalledWith('two');
    expect(wrapper.emitted('update:open')).toBeUndefined();
    wrapper.unmount();
  });

  it('emits select with the selected item id', async () => {
    const wrapper = await mountSelect({ open: true });

    options()[1]!.click();
    await flushPromises();
    expect(wrapper.emitted('select')![0]![1]).toBe('two');
    wrapper.unmount();
  });

  it('focuses the toggle on select with focusToggleOnSelect', async () => {
    const wrapper = await mountSelect({ open: true, focusToggleOnSelect: true });

    options()[1]!.click();
    await flushPromises();
    expect(document.activeElement).toBe(toggle());
    wrapper.unmount();
  });

  it('uses a custom toggle slot', async () => {
    const wrapper = await mountSelect({}, {
      default: defaultOptions,
      toggle: () => h('button', { class: 'custom-toggle' }, 'Custom'),
    });

    expect(document.body.querySelector('.custom-toggle')).not.toBeNull();
    expect(document.body.querySelector(`.${toggleStyles.menuToggle}`)).toBeNull();
    wrapper.unmount();
  });
});
