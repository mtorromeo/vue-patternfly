import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import toggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import PfDropdown from '../../src/components/Dropdown/Dropdown.vue';
import { PfDropdownItem } from '../../src/components/Dropdown';

type DropdownProps = InstanceType<typeof PfDropdown>['$props'];

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

const defaultItems = () => [
  h(PfDropdownItem, { value: 'a' }, () => 'Action A'),
  h(PfDropdownItem, { value: 'b' }, () => 'Action B'),
];

async function mountDropdown(props: DropdownProps & Record<string, unknown> = {}, slots: Record<string, () => unknown> = { default: defaultItems }) {
  const wrapper = mountWithModel(PfDropdown, 'open', { text: 'Actions', ...props }, { slots, attachTo: document.body });
  await flushPromises();
  return wrapper;
}

function toggle() {
  return document.body.querySelector<HTMLButtonElement>(`.${toggleStyles.menuToggle}`)!;
}

function menu() {
  return document.body.querySelector<HTMLElement>(`.${styles.menu}`);
}

function menuItems() {
  return [...document.body.querySelectorAll<HTMLButtonElement>(`.${styles.menuItem}`)];
}

describe('Dropdown', () => {
  it('renders a menu toggle with text and a generated id', async () => {
    const wrapper = await mountDropdown();

    expect(toggle().tagName).toBe('BUTTON');
    expect(toggle().querySelector(`.${toggleStyles.menuToggleText}`)!.textContent).toBe('Actions');
    expect(toggle().id).toMatch(/^pf-dropdown-toggle-id-\d+$/);
    expect(toggle().getAttribute('aria-haspopup')).toBe('true');
    expect(toggle().getAttribute('aria-expanded')).toBe('false');
    expect(toggle().getAttribute('data-ouia-component-type')).toBe('PF/Dropdown');
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it('uses an explicit id', async () => {
    const wrapper = await mountDropdown({ id: 'my-dropdown' });
    expect(toggle().id).toBe('my-dropdown');
    wrapper.unmount();
  });

  it('passes variant and disabled to the toggle', async () => {
    const wrapper = await mountDropdown({ variant: 'primary', disabled: true });
    expect(toggle().classList.contains(toggleStyles.modifiers.primary)).toBe(true);
    expect(toggle().disabled).toBe(true);
    wrapper.unmount();
  });

  it('opens on toggle click and teleports the menu to the body', async () => {
    const wrapper = await mountDropdown();

    toggle().click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true]]);
    expect(toggle().getAttribute('aria-expanded')).toBe('true');
    expect(menu()).not.toBeNull();
    expect(menu()!.parentElement).toBe(document.body);
    expect(menu()!.querySelector(`.${styles.menuContent} ul.${styles.menuList}`)).not.toBeNull();
    expect(menuItems().map(i => i.textContent!.trim())).toEqual(['Action A', 'Action B']);
    wrapper.unmount();
  });

  it('renders the menu when open is set and hides it when closed', async () => {
    const wrapper = await mountDropdown({ open: true });
    expect(menu()).not.toBeNull();

    await wrapper.setProps({ open: false });
    await flushPromises();
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it('renders the menu inline with appendTo="inline"', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const wrapper = mount(PfDropdown, {
      props: { open: true, appendTo: 'inline', text: 'Actions' },
      slots: { default: defaultItems },
      attachTo: container,
    });
    await flushPromises();
    expect(container.querySelector(`.${styles.menu}`)).not.toBeNull();
    wrapper.unmount();
  });

  it('emits select and closes when an item is selected', async () => {
    const wrapper = await mountDropdown({ open: true });

    menuItems()[1]!.click();
    await flushPromises();
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(wrapper.emitted('select')![0]![1]).toBe('b');
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(document.activeElement).toBe(toggle());
    expect(menu()).toBeNull();
    wrapper.unmount();
  });

  it('stays open on select with noCloseOnSelect', async () => {
    const wrapper = await mountDropdown({ open: true, noCloseOnSelect: true });

    menuItems()[0]!.click();
    await flushPromises();
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(wrapper.emitted('update:open')).toBeUndefined();
    expect(menu()).not.toBeNull();
    wrapper.unmount();
  });

  it('does not focus the toggle after select when autoFocus is false', async () => {
    const wrapper = await mountDropdown({ open: true, autoFocus: false });

    menuItems()[0]!.focus();
    menuItems()[0]!.click();
    await flushPromises();
    expect(document.activeElement).not.toBe(toggle());
    wrapper.unmount();
  });

  it('closes when clicking outside', async () => {
    const wrapper = await mountDropdown({ open: true });

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    wrapper.unmount();
  });

  it('does not close when clicking inside the menu', async () => {
    const wrapper = await mountDropdown({ open: true }, {
      default: () => [h('div', { class: 'inside' }, 'Inside'), ...defaultItems()],
    });

    document.body.querySelector<HTMLElement>('.inside')!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();
    wrapper.unmount();
  });

  it.each(['Escape', 'Tab'])('closes on %s and focuses the toggle', async (key) => {
    const wrapper = await mountDropdown({ open: true });

    menuItems()[0]!.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(document.activeElement).toBe(toggle());
    wrapper.unmount();
  });

  it('navigates items with arrow keys from the toggle', async () => {
    const wrapper = await mountDropdown({ open: true });

    toggle().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await nextTick();
    expect(document.activeElement).toBe(menuItems()[0]);

    menuItems()[0]!.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await nextTick();
    expect(document.activeElement).toBe(menuItems()[1]);
    wrapper.unmount();
  });

  it('focuses the first item on open with shouldFocusFirstItemOnOpen', async () => {
    const wrapper = await mountDropdown({ shouldFocusFirstItemOnOpen: true });

    toggle().click();
    await flushPromises();
    expect(document.activeElement).toBe(menuItems()[0]);
    wrapper.unmount();
  });

  it('skips disabled items when focusing the first item on open', async () => {
    const wrapper = await mountDropdown({ shouldFocusFirstItemOnOpen: true }, {
      default: () => [
        h(PfDropdownItem, { value: 'a', disabled: true }, () => 'Action A'),
        h(PfDropdownItem, { value: 'b' }, () => 'Action B'),
      ],
    });

    toggle().click();
    await flushPromises();
    expect(document.activeElement).toBe(menuItems()[1]);
    wrapper.unmount();
  });

  it('applies the scrollable modifier and height variables', async () => {
    const wrapper = await mountDropdown({ open: true, maxMenuHeight: '100px' });

    expect(menu()!.classList.contains(styles.modifiers.scrollable)).toBe(true);
    expect(menu()!.querySelector<HTMLElement>(`.${styles.menuContent}`)!.getAttribute('style')).toContain('100px');
    wrapper.unmount();
  });

  it('forwards attributes to the menu', async () => {
    const wrapper = await mountDropdown({ open: true, 'data-test': 'dd' });
    expect(menu()!.getAttribute('data-test')).toBe('dd');
    wrapper.unmount();
  });

  it('uses a custom toggle slot and binds the toggle props to it', async () => {
    const wrapper = await mountDropdown({}, {
      toggle: () => [h('button', { class: 'custom-toggle' }, 'Custom')],
      default: defaultItems,
    });

    const custom = document.body.querySelector<HTMLButtonElement>('.custom-toggle')!;
    expect(custom.id).toMatch(/^pf-dropdown-toggle-id-\d+$/);
    expect(custom.getAttribute('aria-haspopup')).toBe('true');
    expect(document.body.querySelector(`.${toggleStyles.menuToggle}`)).toBeNull();
    wrapper.unmount();
  });
});
