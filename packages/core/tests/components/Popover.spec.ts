import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import PfPopover from '../../src/components/Popover.vue';

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

async function mountPopover(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = {}) {
  const wrapper = mountWithModel(PfPopover, 'open', { animationDuration: 0, ...props }, {
    slots: {
      default: () => h('button', { class: 'trigger' }, 'Trigger'),
      body: () => 'Popover body',
      ...slots,
    },
    attachTo: document.body,
  });
  await flushPromises();
  return wrapper;
}

function trigger() {
  return document.body.querySelector<HTMLButtonElement>('.trigger')!;
}

function dialog() {
  return document.body.querySelector<HTMLElement>('[role="dialog"]');
}

describe('Popover', () => {
  it('renders only the trigger while closed', async () => {
    await mountPopover();
    expect(trigger()).not.toBeNull();
    expect(dialog()).toBeNull();
  });

  it('renders the popover dialog in the body when open', async () => {
    await mountPopover({ open: true });

    const el = dialog()!;
    expect(el.parentElement).toBe(document.body);
    expect(el.classList.contains(styles.popover)).toBe(true);
    expect(el.classList.contains(styles.modifiers.top)).toBe(true);
    expect(el.getAttribute('aria-modal')).toBe('true');
    expect(el.getAttribute('data-ouia-component-type')).toBe('PF/Popover');
    expect(el.querySelector(`.${styles.popoverArrow}`)).not.toBeNull();
    expect(el.querySelector(`.${styles.popoverContent} .${styles.popoverBody}`)!.textContent).toBe('Popover body');
  });

  it('describes the dialog with its body', async () => {
    await mountPopover({ open: true });

    const el = dialog()!;
    const describedby = el.getAttribute('aria-describedby')!;
    expect(document.getElementById(describedby)!.classList.contains(styles.popoverBody)).toBe(true);
  });

  it('labels the dialog with ariaLabel without a header', async () => {
    await mountPopover({ open: true, ariaLabel: 'Info' });
    expect(dialog()!.getAttribute('aria-label')).toBe('Info');
    expect(dialog()!.getAttribute('aria-labelledby')).toBeNull();
  });

  it('labels the dialog with the header slot', async () => {
    await mountPopover({ open: true, ariaLabel: 'Info' }, { header: () => 'Header' });

    const el = dialog()!;
    expect(el.getAttribute('aria-label')).toBeNull();
    const header = document.getElementById(el.getAttribute('aria-labelledby')!)!;
    expect(header.tagName).toBe('H6');
    expect(header.textContent).toBe('Header');
  });

  it('renders the footer slot', async () => {
    await mountPopover({ open: true }, { footer: () => 'Footer' });
    const footer = dialog()!.querySelector(`footer.${styles.popoverFooter}`)!;
    expect(footer.textContent).toBe('Footer');
    expect(footer.id).toMatch(/-footer$/);
  });

  it('applies noPadding and autoWidth modifiers', async () => {
    await mountPopover({ open: true, noPadding: true, autoWidth: true });
    expect(dialog()!.classList.contains(styles.modifiers.noPadding)).toBe(true);
    expect(dialog()!.classList.contains(styles.modifiers.widthAuto)).toBe(true);
  });

  it('does not set min and max widths by default', async () => {
    await mountPopover({ open: true });
    expect(dialog()!.style.minWidth).toBe('');
    expect(dialog()!.style.maxWidth).toBe('');
  });

  it('applies custom min and max widths', async () => {
    await mountPopover({ open: true, minWidth: '100px', maxWidth: '400px' });
    expect(dialog()!.style.minWidth).toBe('100px');
    expect(dialog()!.style.maxWidth).toBe('400px');
  });

  it('applies the position modifier', async () => {
    await mountPopover({ open: true, position: 'right', flip: true });
    expect(dialog()!.classList.contains(styles.modifiers.right)).toBe(true);
    expect(dialog()!.getAttribute('data-popper-placement')).toBe('right');
  });

  it('forwards attributes to the dialog', async () => {
    await mountPopover({ open: true, 'data-test': 'pop' });
    expect(dialog()!.getAttribute('data-test')).toBe('pop');
  });

  it('toggles when the trigger is clicked', async () => {
    const wrapper = await mountPopover();

    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true]]);
    expect(dialog()).not.toBeNull();

    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true], [false]]);
    expect(dialog()).toBeNull();
  });

  it('closes with the close button', async () => {
    const wrapper = await mountPopover({ open: true, showClose: true, closeBtnAriaLabel: 'Dismiss' });

    const close = dialog()!.querySelector<HTMLButtonElement>('button[aria-label="Dismiss"]')!;
    close.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(dialog()).toBeNull();
  });

  it('does not render a close button by default', async () => {
    await mountPopover({ open: true });
    expect(dialog()!.querySelector('button')).toBeNull();
  });

  it('closes on outside click but not on clicks inside', async () => {
    const wrapper = await mountPopover({ open: true }, { body: () => h('span', { class: 'inside' }, 'Body') });

    dialog()!.querySelector<HTMLElement>('.inside')!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
  });

  it('stays open on outside click with noHideOnOutsideClick', async () => {
    const wrapper = await mountPopover({ open: true, noHideOnOutsideClick: true });

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();
  });

  it('closes on Escape', async () => {
    const wrapper = await mountPopover({ open: true });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, bubbles: true }));
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
  });

  it('ignores other keys', async () => {
    const wrapper = await mountPopover({ open: true });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true }));
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();
  });

  it('traps the focus inside the popover with focusTrap', async () => {
    await mountPopover({ open: true, focusTrap: true, showClose: true });
    // focus-trap delays the initial focus to the next macrotask
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(dialog()!.contains(document.activeElement)).toBe(true);
  });

  it('exposes the visible state', async () => {
    const wrapper = await mountPopover({ open: true });
    expect(wrapper.vm.visible).toBe(true);
  });
});
