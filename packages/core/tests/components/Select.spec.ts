import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import toggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import PfSelect from '../../src/components/Select/Select.vue';
import { PfSelectList, PfSelectOption } from '../../src/components/Select';
import PfMenuToggle from '../../src/components/MenuToggle/MenuToggle.vue';

enableAutoUnmount(afterEach);

function mountWithModel<C>(
  component: C,
  model: string,
  props: Record<string, unknown>,
  options: Record<string, unknown> = {},
) {
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

async function mountSelect(
  props: Record<string, unknown> = {},
  slots: Record<string, () => unknown> = { default: defaultOptions },
) {
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
    expect(toggle().getAttribute('aria-haspopup')).toBe('listbox');
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it('renders the label prop, label slot and icon slot', async () => {
    let wrapper = await mountSelect({ label: 'Pick one' });
    expect(toggle().textContent).toContain('Pick one');
    wrapper.unmount();

    wrapper = await mountSelect(
      {},
      {
        default: defaultOptions,
        label: () => h('b', 'Bold'),
        icon: () => h('i', { class: 'my-icon' }),
      },
    );
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

  it('does not focus the first option after opening by default, like upstream', async () => {
    const wrapper = await mountSelect();

    toggle().click();
    await flushPromises();
    await new Promise(r => setTimeout(r));
    expect(menu()).not.toBeNull();
    expect(document.activeElement).not.toBe(options()[0]);
    wrapper.unmount();
  });

  it('focuses the first enabled option after opening with shouldFocusFirstItemOnOpen', async () => {
    const wrapper = await mountSelect(
      { shouldFocusFirstItemOnOpen: true },
      {
        default: () => [
          h(PfSelectOption, { value: 'one', disabled: true }, () => 'One'),
          h(PfSelectOption, { value: 'two' }, () => 'Two'),
        ],
      },
    );

    toggle().click();
    await flushPromises();
    await new Promise(r => setTimeout(r));
    expect(document.activeElement).toBe(options()[1]);
    wrapper.unmount();
  });

  it('waits focusTimeoutDelay before focusing the first option', async () => {
    vi.useFakeTimers();
    const wrapper = await mountSelect({ shouldFocusFirstItemOnOpen: true, focusTimeoutDelay: 100 });

    toggle().click();
    await nextTick();
    vi.advanceTimersByTime(50);
    expect(document.activeElement).not.toBe(options()[0]);
    vi.advanceTimersByTime(50);
    expect(document.activeElement).toBe(options()[0]);
    vi.useRealTimers();
    wrapper.unmount();
  });

  it.each([
    [false, true],
    [true, false],
  ])('focuses the first option on open with scrollOnItemFocus %s', async (scrollOnItemFocus, preventScroll) => {
    const focus = vi.spyOn(HTMLElement.prototype, 'focus');
    const wrapper = await mountSelect({ shouldFocusFirstItemOnOpen: true, scrollOnItemFocus });

    toggle().click();
    await flushPromises();
    await new Promise(r => setTimeout(r));
    expect(focus).toHaveBeenCalledWith({ preventScroll });
    focus.mockRestore();
    wrapper.unmount();
  });

  it('closes when clicking outside but not when clicking inside the menu', async () => {
    const wrapper = await mountSelect(
      { open: true },
      {
        default: () => [h('div', { class: 'inside' }), ...defaultOptions()],
      },
    );

    document.body.querySelector<HTMLElement>('.inside')!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it.each(['Escape', 'Tab'])('closes on %s and focuses the toggle', async key => {
    const wrapper = await mountSelect({ open: true });

    keydown(options()[0]!, key);
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(document.activeElement).toBe(toggle());
    wrapper.unmount();
  });

  it('only closes on openChangeKeys', async () => {
    const wrapper = await mountSelect({ open: true, openChangeKeys: ['Escape'] });

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

  it('keeps the selection without a selected model and emits null on deselect', async () => {
    const wrapper = await mountSelect({ open: true });

    options()[1]!.click();
    await flushPromises();
    expect(options()[1]!.classList.contains(styles.modifiers.selected)).toBe(true);

    options()[1]!.click();
    await flushPromises();
    expect(options()[1]!.classList.contains(styles.modifiers.selected)).toBe(false);
    expect(wrapper.emitted('update:selected')).toEqual([['two'], [null]]);
    wrapper.unmount();
  });

  it('emits select with the selected item id', async () => {
    const wrapper = await mountSelect({ open: true });

    options()[1]!.click();
    await flushPromises();
    expect(wrapper.emitted('select')![0]![1]).toBe('two');
    wrapper.unmount();
  });

  it('focuses the toggle on select with shouldFocusToggleOnSelect', async () => {
    const wrapper = await mountSelect({ open: true, shouldFocusToggleOnSelect: true });

    options()[1]!.click();
    await flushPromises();
    expect(document.activeElement).toBe(toggle());
    wrapper.unmount();
  });

  it('puts the OUIA attributes on the menu, safe by default', async () => {
    const wrapper = await mountSelect({ open: true });

    expect(menu()!.getAttribute('data-ouia-component-type')).toBe('PF/Select');
    expect(menu()!.getAttribute('data-ouia-safe')).toBe('true');
    expect(toggle().getAttribute('data-ouia-component-type')).not.toBe('PF/Select');
    wrapper.unmount();
  });

  it('renders a listbox by default and accepts another role', async () => {
    const list = { default: () => h(PfSelectList, null, defaultOptions) };
    let wrapper = await mountSelect({ open: true }, list);
    expect(menu()!.querySelector(`.${styles.menuList}`)!.getAttribute('role')).toBe('listbox');
    expect(options()[0]!.getAttribute('role')).toBe('option');
    wrapper.unmount();

    wrapper = await mountSelect({ open: true, role: 'menu' }, list);
    expect(menu()!.querySelector(`.${styles.menuList}`)!.getAttribute('role')).toBe('menu');
    expect(options()[0]!.getAttribute('role')).toBe('menuitem');
    wrapper.unmount();
  });

  it('wraps the options in the menu content, with the height variables and scrollable modifier', async () => {
    const wrapper = await mountSelect({ open: true, maxMenuHeight: '200px' });

    const content = menu()!.querySelector<HTMLElement>(`:scope > .${styles.menuContent}`)!;
    expect(content.querySelector(`.${styles.menuItem}`)).not.toBeNull();
    expect(content.style.getPropertyValue('--pf-v6-c-menu__content--MaxHeight')).toBe('200px');
    expect(menu()!.classList.contains(styles.modifiers.scrollable)).toBe(true);
    wrapper.unmount();
  });

  it('is not scrollable without a menu height', async () => {
    const wrapper = await mountSelect({ open: true });
    expect(menu()!.classList.contains(styles.modifiers.scrollable)).toBe(false);
    wrapper.unmount();
  });

  it('moves the focus from the toggle to the menu with the arrow keys', async () => {
    const wrapper = await mountSelect({ open: true });

    keydown(toggle(), 'ArrowDown');
    await nextTick();
    expect(document.activeElement).toBe(options()[0]);
    wrapper.unmount();
  });

  it('keeps the focus on the toggle with the typeahead variant', async () => {
    const wrapper = await mountSelect({ open: true, variant: 'typeahead' });

    toggle().focus();
    keydown(toggle(), 'ArrowDown');
    await nextTick();
    expect(document.activeElement).not.toBe(options()[0]);
    wrapper.unmount();
  });

  it('overrides the toggle arrow keys with a toggle-keydown listener', async () => {
    const onToggleKeydown = vi.fn();
    const wrapper = await mountSelect({ open: true, onToggleKeydown });

    keydown(toggle(), 'ArrowDown');
    await nextTick();
    expect(onToggleKeydown).toHaveBeenCalledOnce();
    expect(document.activeElement).not.toBe(options()[0]);
    wrapper.unmount();
  });

  it('closes on select with closeOnSelect', async () => {
    const wrapper = await mountSelect({ open: true, closeOnSelect: true });

    options()[1]!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    wrapper.unmount();
  });

  it('gives its OUIA id to the toggle', async () => {
    const wrapper = await mountSelect({ open: true, ouiaId: 'my-select' });
    expect(menu()!.getAttribute('data-ouia-component-id')).toBe('my-select');
    expect(toggle().getAttribute('data-ouia-component-id')).toBe('my-select');
    wrapper.unmount();

    const custom = await mountSelect(
      { ouiaId: 'my-select' },
      { default: defaultOptions, toggle: () => h(PfMenuToggle, null, () => 'Custom') },
    );
    expect(toggle().getAttribute('data-ouia-component-id')).toBe('my-select');
    custom.unmount();

    const own = await mountSelect(
      { ouiaId: 'my-select' },
      { default: defaultOptions, toggle: () => h(PfMenuToggle, { 'ouia-id': 'own' }, () => 'Custom') },
    );
    expect(toggle().getAttribute('data-ouia-component-id')).toBe('own');
    own.unmount();
  });

  it('keeps the disabled state of a custom toggle unless the select is disabled', async () => {
    const slots = {
      default: defaultOptions,
      toggle: () =>
        h(PfMenuToggle, { class: 'custom-toggle', disabled: true, 'aria-haspopup': 'menu' }, () => 'Custom'),
    };
    let wrapper = await mountSelect({}, slots);
    const custom = () => document.body.querySelector<HTMLButtonElement>('.custom-toggle')!;
    expect(custom().disabled).toBe(true);
    expect(custom().getAttribute('aria-haspopup')).toBe('menu');
    wrapper.unmount();

    wrapper = await mountSelect(
      { disabled: true },
      { default: defaultOptions, toggle: () => h(PfMenuToggle, { class: 'custom-toggle' }, () => 'Custom') },
    );
    expect(custom().disabled).toBe(true);
    expect(custom().getAttribute('aria-haspopup')).toBe('listbox');
    wrapper.unmount();
  });

  it('binds the open state to a custom toggle', async () => {
    const wrapper = await mountSelect(
      {},
      {
        default: defaultOptions,
        toggle: () => h(PfMenuToggle, { class: 'custom-toggle' }, () => 'Custom'),
      },
    );

    const custom = document.body.querySelector<HTMLButtonElement>('.custom-toggle')!;
    expect(custom.getAttribute('aria-expanded')).toBe('false');
    custom.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true]]);
    expect(custom.getAttribute('aria-expanded')).toBe('true');
    expect(menu()).not.toBeNull();
    wrapper.unmount();
  });

  it('uses a custom toggle slot', async () => {
    const wrapper = await mountSelect(
      {},
      {
        default: defaultOptions,
        toggle: () => h('button', { class: 'custom-toggle' }, 'Custom'),
      },
    );

    expect(document.body.querySelector('.custom-toggle')).not.toBeNull();
    expect(document.body.querySelector(`.${toggleStyles.menuToggle}`)).toBeNull();
    wrapper.unmount();
  });
});
