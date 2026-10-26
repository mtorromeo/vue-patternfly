import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import PfPopover from '../../src/components/Popover.vue';

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

async function mountPopover(
  props: Record<string, unknown> = {},
  slots: Record<string, (...args: any[]) => unknown> = {},
) {
  const wrapper = mountWithModel(
    PfPopover,
    'open',
    { animationDuration: 0, ...props },
    {
      slots: {
        default: () => h('button', { class: 'trigger' }, 'Trigger'),
        body: () => 'Popover body',
        ...slots,
      },
      attachTo: document.body,
    },
  );
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
    const title = document.getElementById(el.getAttribute('aria-labelledby')!)!;
    expect(title.classList.contains(styles.popoverTitle)).toBe(true);
    expect(title.textContent!.trim()).toBe('Header');
  });

  // the header was a title component rather than the popover header markup
  it('renders the header markup with the heading level and icon', async () => {
    await mountPopover(
      { open: true, headerComponent: 'h2' },
      { header: () => 'Header', 'header-icon': () => h('i', { class: 'my-icon' }) },
    );
    const header = dialog()!.querySelector(`header.${styles.popoverHeader}`)!;
    const title = header.querySelector(`:scope > .${styles.popoverTitle}`)!;
    expect(title.querySelector(`:scope > .${styles.popoverTitleIcon} .my-icon`)).not.toBeNull();
    const text = title.querySelector(`:scope > h2.${styles.popoverTitleText}`)!;
    expect(text.textContent).toBe('Header');
  });

  it('defaults the heading level to h6', async () => {
    await mountPopover({ open: true }, { header: () => 'Header' });
    expect(dialog()!.querySelector(`h6.${styles.popoverTitleText}`)).not.toBeNull();
  });

  it.each(['custom', 'info', 'success', 'warning', 'danger'] as const)(
    'applies the %s alert severity with screen reader text',
    async variant => {
      await mountPopover({ open: true, alertSeverityVariant: variant }, { header: () => 'Header' });
      expect(dialog()!.classList.contains(styles.modifiers[variant])).toBe(true);
      expect(dialog()!.querySelector(`.${styles.popoverTitleText} .pf-v6-screen-reader`)!.textContent!.trim()).toBe(
        `${variant} alert:`,
      );
    },
  );

  it('uses a custom alert severity screen reader text', async () => {
    await mountPopover(
      { open: true, alertSeverityVariant: 'danger', alertSeverityScreenReaderText: 'Error:' },
      { header: () => 'Header' },
    );
    expect(dialog()!.querySelector('.pf-v6-screen-reader')!.textContent!.trim()).toBe('Error:');
  });

  // start and end placements mapped to no modifier
  it.each([
    ['top-start', styles.modifiers.topLeft],
    ['bottom-end', styles.modifiers.bottomRight],
    ['left-start', styles.modifiers.leftTop],
    ['right-end', styles.modifiers.rightBottom],
  ] as const)('applies the %s position modifier', async (position, modifier) => {
    await mountPopover({ open: true, position, noFlip: true });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(dialog()!.classList.contains(modifier)).toBe(true);
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

  it('stops listening to clicks on a replaced trigger', async () => {
    const second = ref(false);
    const wrapper = await mountPopover(
      {},
      {
        default: () =>
          second.value
            ? h('button', { key: 'second' }, 'Second')
            : h('button', { key: 'first', class: 'trigger' }, 'Trigger'),
      },
    );
    const first = trigger();
    second.value = true;
    await flushPromises();

    first.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toBeUndefined();
  });

  it('closes with the close button', async () => {
    const wrapper = await mountPopover({ open: true, showClose: true, closeBtnAriaLabel: 'Dismiss' });

    const close = dialog()!.querySelector<HTMLButtonElement>('button[aria-label="Dismiss"]')!;
    close.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    expect(dialog()).toBeNull();
  });

  // the close button was hidden unless showClose was set
  it('renders a close button by default in the close wrapper', async () => {
    const wrapper = await mountPopover({ open: true, closeBtnAriaLabel: 'Dismiss' });
    const button = dialog()!.querySelector<HTMLButtonElement>(`.${styles.popoverClose} > button`)!;
    expect(button.getAttribute('aria-label')).toBe('Dismiss');
    button.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
  });

  it('hides the close button with noClose', async () => {
    await mountPopover({ open: true, noClose: true });
    expect(dialog()!.querySelector(`.${styles.popoverClose}`)).toBeNull();
  });

  it('passes a hide function to the content slots', async () => {
    const wrapper = await mountPopover(
      { open: true },
      { body: ({ hide }: { hide: () => void }) => h('button', { class: 'hide', onClick: hide }, 'Hide') },
    );
    dialog()!.querySelector<HTMLButtonElement>('.hide')!.click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
  });

  it('emits show and hide on user interactions', async () => {
    const wrapper = await mountPopover();
    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('show')?.[0]?.[0]).toBeInstanceOf(MouseEvent);
    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('hide')?.[0]?.[0]).toBeInstanceOf(MouseEvent);
  });

  it('uses a triggerRef selector or element in place of the slot', async () => {
    const button = document.createElement('button');
    button.id = 'popover-selector';
    document.body.appendChild(button);
    try {
      for (const triggerRef of ['#popover-selector', button, () => button]) {
        const wrapper = mountWithModel(
          PfPopover,
          'open',
          { triggerRef, animationDuration: 0 },
          {
            slots: { body: () => 'Body' },
            attachTo: document.body,
          },
        );
        await flushPromises();
        button.click();
        await flushPromises();
        expect(wrapper.emitted('update:open')).toEqual([[true]]);
        wrapper.unmount();
      }
    } finally {
      button.remove();
    }
  });

  it('opens on hover with hover, without close button nor focus trap', async () => {
    const wrapper = await mountPopover({ hover: true });
    trigger().dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true]]);
    expect(dialog()!.querySelector(`.${styles.popoverClose}`)).toBeNull();

    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('update:open')).toHaveLength(1);

    trigger().dispatchEvent(new MouseEvent('mouseleave'));
    await flushPromises();
    expect(wrapper.emitted('update:open')).toEqual([[true], [false]]);
  });

  it('defaults ouia-safe to true and applies the z-index', async () => {
    await mountPopover({ open: true, zIndex: 42 });
    expect(dialog()!.getAttribute('data-ouia-safe')).toBe('true');
    expect(dialog()!.style.zIndex).toBe('42');
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

  // focus stayed on the page unless focusTrap was set
  it('traps the focus inside the popover by default', async () => {
    await mountPopover({ open: true });
    // focus-trap delays the initial focus to the next macrotask
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(dialog()!.contains(document.activeElement)).toBe(true);
  });

  it('does not trap the focus with noFocusTrap', async () => {
    await mountPopover({ open: true, noFocusTrap: true });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(dialog()!.contains(document.activeElement)).toBe(false);
  });

  it('focuses elementToFocus when opened', async () => {
    await mountPopover(
      { open: true, elementToFocus: '#popover-target' },
      {
        body: () => [h('button', 'First'), h('button', { id: 'popover-target' }, 'Target')],
      },
    );
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(document.activeElement?.id).toBe('popover-target');
  });

  it('exposes the visible state', async () => {
    const wrapper = await mountPopover({ open: true });
    expect(wrapper.vm.visible).toBe(true);
  });
});
