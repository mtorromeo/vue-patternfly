import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import backdropStyles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import PfModal from '../../src/components/Modal/Modal.vue';
import PfModalHeader from '../../src/components/Modal/ModalHeader.vue';
import PfModalBody from '../../src/components/Modal/ModalBody.vue';
import PfModalFooter from '../../src/components/Modal/ModalFooter.vue';
import PfDropdown from '../../src/components/Dropdown/Dropdown.vue';
import { PfDropdownItem } from '../../src/components/Dropdown';

type ModalProps = InstanceType<typeof PfModal>['$props'];

function mountModal(props: ModalProps = {}, slots: Record<string, string> = { default: 'Modal body' }) {
  return mount(PfModal, {
    props: { open: true, ...props },
    slots,
    attachTo: document.body,
  });
}

function dialog() {
  return document.body.querySelector<HTMLElement>('[role="dialog"]');
}

describe('Modal', () => {
  it('renders nothing while closed', () => {
    const wrapper = mountModal({ open: false });
    expect(dialog()).toBeNull();
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(false);
    wrapper.unmount();
  });

  it('teleports the dialog into document.body when open', () => {
    const wrapper = mountModal({ title: 'Title' });
    const el = dialog();
    expect(el).not.toBeNull();
    expect(el!.parentElement!.closest(`.${backdropStyles.backdrop}`)?.parentElement).toBe(document.body);
    expect(el!.classList.contains(styles.modalBox)).toBe(true);
    expect(el!.getAttribute('aria-modal')).toBe('true');
    expect(el!.querySelector(`.${styles.modalBoxBody}`)!.textContent).toBe('Modal body');
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(true);
    wrapper.unmount();
  });

  it('opens and closes following the open prop', async () => {
    const wrapper = mountModal({ open: false, noAnimations: true });
    expect(dialog()).toBeNull();

    await wrapper.setProps({ open: true });
    expect(dialog()).not.toBeNull();
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(true);

    await wrapper.setProps({ open: false });
    expect(dialog()).toBeNull();
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(false);
    wrapper.unmount();
  });

  it('removes the backdrop-open class from the target on unmount', () => {
    const wrapper = mountModal();
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(true);
    wrapper.unmount();
    expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(false);
  });

  it('emits update:open with false when the close button is clicked', async () => {
    const wrapper = mountModal();
    const close = dialog()!.querySelector<HTMLButtonElement>(`.${styles.modalBoxClose} button`)!;
    expect(close.getAttribute('aria-label')).toBe('Close');

    close.click();
    await nextTick();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    wrapper.unmount();
  });

  it('closes when bound with v-model:open', async () => {
    const open = ref(true);
    const wrapper = mount(
      defineComponent({
        components: { PfModal },
        setup: () => ({ open }),
        template: '<pf-modal v-model:open="open" title="Title" no-animations>Body</pf-modal>',
      }),
      { attachTo: document.body },
    );

    dialog()!.querySelector<HTMLButtonElement>(`.${styles.modalBoxClose} button`)!.click();
    await nextTick();
    expect(open.value).toBe(false);
    expect(dialog()).toBeNull();
    wrapper.unmount();
  });

  describe('animations', () => {
    const backdrop = () => document.body.querySelector<HTMLElement>(`.${backdropStyles.backdrop}`);

    it('applies the animation modifiers by default', () => {
      const wrapper = mountModal();
      expect(backdrop()!.classList).toContain(backdropStyles.modifiers.animate);
      expect(backdrop()!.classList).toContain(backdropStyles.modifiers.show);
      expect(dialog()!.classList).toContain(styles.modifiers.animate);
      expect(dialog()!.classList).toContain(styles.modifiers.open);
      expect(backdrop()!.hasAttribute('aria-hidden')).toBe(false);
      wrapper.unmount();
    });

    it('does not apply the animation modifiers when disabled', () => {
      const wrapper = mountModal({ noAnimations: true });
      expect(backdrop()!.classList).not.toContain(backdropStyles.modifiers.animate);
      expect(backdrop()!.classList).not.toContain(backdropStyles.modifiers.show);
      expect(dialog()!.classList).not.toContain(styles.modifiers.animate);
      expect(dialog()!.classList).not.toContain(styles.modifiers.open);
      wrapper.unmount();
    });

    it('keeps the modal mounted until the backdrop transition ends', async () => {
      const wrapper = mountModal();
      await wrapper.setProps({ open: false });

      expect(dialog()).not.toBeNull();
      expect(backdrop()!.classList).not.toContain(backdropStyles.modifiers.show);
      expect(dialog()!.classList).not.toContain(styles.modifiers.open);
      expect(backdrop()!.getAttribute('aria-hidden')).toBe('true');
      expect(backdrop()!.hasAttribute('hidden')).toBe(false);
      expect(document.body.classList.contains(backdropStyles.backdropOpen)).toBe(false);

      // transitions bubbling from the content do not unmount the modal
      dialog()!.dispatchEvent(new Event('transitionend', { bubbles: true }));
      await nextTick();
      expect(dialog()).not.toBeNull();

      backdrop()!.dispatchEvent(new Event('transitionend'));
      await nextTick();
      expect(dialog()).toBeNull();
      wrapper.unmount();
    });

    it('unmounts after a fallback delay when no transition ends', async () => {
      vi.useFakeTimers();
      try {
        const wrapper = mountModal();
        await wrapper.setProps({ open: false });
        expect(dialog()).not.toBeNull();

        await vi.advanceTimersByTimeAsync(300);
        expect(dialog()).toBeNull();
        wrapper.unmount();
      } finally {
        vi.useRealTimers();
      }
    });

    it('stays open when reopened during the exit transition', async () => {
      vi.useFakeTimers();
      try {
        const wrapper = mountModal();
        await wrapper.setProps({ open: false });
        await wrapper.setProps({ open: true });

        await vi.advanceTimersByTimeAsync(300);
        expect(dialog()).not.toBeNull();
        expect(dialog()!.classList).toContain(styles.modifiers.open);
        wrapper.unmount();
      } finally {
        vi.useRealTimers();
      }
    });
  });

  it('hides the close button with noClose', () => {
    const wrapper = mountModal({ noClose: true });
    expect(dialog()!.querySelector(`.${styles.modalBoxClose}`)).toBeNull();
    wrapper.unmount();
  });

  it('emits update:open with false when Escape is pressed', async () => {
    const wrapper = mountModal({ title: 'Title' });
    dialog()!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await nextTick();
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
    wrapper.unmount();
  });

  it('ignores Escape while closed', async () => {
    const wrapper = mountModal({ open: false });
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await nextTick();
    expect(wrapper.emitted('update:open')).toBeUndefined();
    wrapper.unmount();
  });

  it('renders the title in a heading', () => {
    const wrapper = mountModal({ title: 'My modal' });
    const title = dialog()!.querySelector(`h1.${styles.modalBoxTitle}`)!;
    expect(title).not.toBeNull();
    expect(title.querySelector(`.${styles.modalBoxTitleText}`)!.textContent).toBe('My modal');
    expect(dialog()!.querySelector(`header.${styles.modalBoxHeader}`)).not.toBeNull();
    wrapper.unmount();
  });

  it('labels the dialog with its title via aria-labelledby', () => {
    const wrapper = mountModal({ title: 'My modal' });
    const labelledby = dialog()!.getAttribute('aria-labelledby');
    expect(labelledby).toBeTruthy();
    expect(document.getElementById(labelledby!)!.textContent).toContain('My modal');
    wrapper.unmount();
  });

  it('keeps an explicit aria-labelledby or aria-label', () => {
    let wrapper = mountModal({ title: 'My modal', 'aria-labelledby': 'external' } as ModalProps);
    expect(dialog()!.getAttribute('aria-labelledby')).toBe('external');
    wrapper.unmount();

    wrapper = mountModal({ title: 'My modal', 'aria-label': 'Named' } as ModalProps);
    expect(dialog()!.getAttribute('aria-labelledby')).toBeNull();
    expect(dialog()!.getAttribute('aria-label')).toBe('Named');
    wrapper.unmount();
  });

  it('renders the title icon and screen reader label for alert variants', () => {
    const wrapper = mountModal({ title: 'Danger', titleIconVariant: 'danger' });
    const el = dialog()!;
    const title = el.querySelector(`.${styles.modalBoxTitle}`)!;
    // the alert modifier goes on the title heading, as upstream
    expect(title.classList.contains(styles.modifiers.danger)).toBe(true);
    expect(el.classList.contains(styles.modifiers.danger)).toBe(false);
    expect(title.classList.contains(styles.modifiers.icon)).toBe(true);
    expect(title.querySelector(`.${styles.modalBoxTitleIcon} svg`)).not.toBeNull();
    expect(title.querySelector('.pf-v6-screen-reader')!.textContent).toBe('Danger alert:');
    wrapper.unmount();
  });

  it('uses titleLabel for the screen reader label', () => {
    const wrapper = mountModal({ title: 'T', titleIconVariant: 'info', titleLabel: 'Information:' });
    expect(dialog()!.querySelector('.pf-v6-screen-reader')!.textContent).toBe('Information:');
    wrapper.unmount();
  });

  it('wires aria-describedby to the body via descriptorId', () => {
    const wrapper = mountModal({ descriptorId: 'modal-desc' });
    const el = dialog()!;
    expect(el.getAttribute('aria-describedby')).toBe('modal-desc');
    expect(el.querySelector('#modal-desc')!.classList.contains(styles.modalBoxBody)).toBe(true);
    wrapper.unmount();
  });

  it('wires aria-describedby to the description slot when provided', () => {
    const wrapper = mountModal(
      { title: 'T', descriptorId: 'modal-desc' },
      {
        default: 'Body',
        description: 'A description',
      },
    );
    const el = dialog()!;
    const description = el.querySelector('#modal-desc')!;
    expect(el.getAttribute('aria-describedby')).toBe('modal-desc');
    expect(description.classList.contains(styles.modalBoxDescription)).toBe(true);
    expect(description.textContent).toBe('A description');
    expect(el.querySelector(`.${styles.modalBoxBody}`)!.hasAttribute('id')).toBe(false);
    wrapper.unmount();
  });

  it('prefers an explicit ariaDescribedby', () => {
    const wrapper = mountModal({ ariaDescribedby: 'external', descriptorId: 'modal-desc' });
    const el = dialog()!;
    expect(el.getAttribute('aria-describedby')).toBe('external');
    expect(el.querySelector(`.${styles.modalBoxBody}`)!.hasAttribute('id')).toBe(false);
    wrapper.unmount();
  });

  it.each([
    ['small', styles.modifiers.sm],
    ['medium', styles.modifiers.md],
    ['large', styles.modifiers.lg],
  ] as const)('applies the %s variant class', (variant, cls) => {
    const wrapper = mountModal({ variant });
    expect(dialog()!.classList.contains(cls)).toBe(true);
    wrapper.unmount();
  });

  it('applies no size modifier for the default variant', () => {
    const wrapper = mountModal();
    const classes = dialog()!.classList;
    expect(classes.contains(styles.modifiers.sm)).toBe(false);
    expect(classes.contains(styles.modifiers.md)).toBe(false);
    expect(classes.contains(styles.modifiers.lg)).toBe(false);
    wrapper.unmount();
  });

  it('applies top position and width styles', () => {
    const wrapper = mountModal({ position: 'top', width: 400, maxWidth: '50%' });
    const el = dialog()!;
    expect(el.classList.contains(styles.modifiers.alignTop)).toBe(true);
    expect(el.style.getPropertyValue('--pf-v6-c-modal-box--Width')).toBe('400px');
    expect(el.style.getPropertyValue('--pf-v6-c-modal-box--MaxWidth')).toBe('50%');
    wrapper.unmount();
  });

  it('renders header, footer and help slots', () => {
    const wrapper = mountModal(
      {},
      {
        default: 'Body',
        header: '<h2 class="custom-header">Custom</h2>',
        footer: '<button class="ok">OK</button>',
        help: '<span class="help">?</span>',
      },
    );
    const el = dialog()!;
    const header = el.querySelector(`.${styles.modalBoxHeader}`)!;
    expect(header.classList.contains(styles.modifiers.help)).toBe(true);
    expect(header.querySelector('.custom-header')).not.toBeNull();
    expect(header.querySelector('.help')).not.toBeNull();
    expect(el.querySelector(`footer.${styles.modalBoxFooter} .ok`)).not.toBeNull();
    wrapper.unmount();
  });

  it('does not apply the help layout to the header without a help slot', () => {
    const wrapper = mountModal({ title: 'T' });
    const header = dialog()!.querySelector(`.${styles.modalBoxHeader}`)!;
    expect(header.classList.contains(styles.modifiers.help)).toBe(false);
    expect(header.querySelector(`.${styles.modalBoxHeader}-help`)).toBeNull();
    wrapper.unmount();
  });

  it('renders the content without a body wrapper when noBodyWrapper is set', () => {
    const wrapper = mountModal({ noBodyWrapper: true }, { default: '<p class="content">Body</p>' });
    const el = dialog()!;
    expect(el.querySelector(`.${styles.modalBoxBody}`)).toBeNull();
    expect(el.querySelector('pass-through')).toBeNull();
    expect(el.querySelector(':scope > p.content')).not.toBeNull();
    wrapper.unmount();
  });

  it('teleports into a custom appendTo target', () => {
    const target = document.createElement('div');
    target.id = 'modal-target';
    document.body.appendChild(target);

    const wrapper = mountModal({ appendTo: '#modal-target' });
    expect(target.querySelector('[role="dialog"]')).not.toBeNull();
    expect(target.classList.contains(backdropStyles.backdropOpen)).toBe(true);
    wrapper.unmount();
  });

  it('forwards attributes to the dialog element', () => {
    const wrapper = mount(PfModal, {
      props: { open: true },
      attrs: { 'data-test': 'modal' },
      attachTo: document.body,
    });
    expect(dialog()!.getAttribute('data-test')).toBe('modal');
    wrapper.unmount();
  });

  it('applies the custom title icon variant', () => {
    const wrapper = mountModal({ title: 'Custom', titleIconVariant: 'custom' });
    const title = dialog()!.querySelector(`.${styles.modalBoxTitle}`)!;
    expect(title.classList.contains(styles.modifiers.custom)).toBe(true);
    expect(title.querySelector(`.${styles.modalBoxTitleIcon} svg`)).not.toBeNull();
    expect(title.querySelector('.pf-v6-screen-reader')!.textContent).toBe('Custom alert:');
    wrapper.unmount();
  });

  // the title-icon slot was only reachable with a titleIconVariant outside of its type
  it('renders a custom icon from the title-icon slot', () => {
    const wrapper = mountModal({ title: 'Custom icon' }, { default: 'Body', 'title-icon': '<i class="my-icon"></i>' });
    const title = dialog()!.querySelector(`.${styles.modalBoxTitle}`)!;
    expect(title.classList.contains(styles.modifiers.icon)).toBe(true);
    expect(title.querySelector(`.${styles.modalBoxTitleIcon} .my-icon`)).not.toBeNull();
    expect(title.querySelector('.pf-v6-screen-reader')).toBeNull();
    wrapper.unmount();
  });

  // an empty header used to be rendered when the modal had no title
  it('renders no header without a title, header, description or help', () => {
    const wrapper = mountModal({ 'aria-label': 'No header' } as ModalProps);
    expect(dialog()!.querySelector(`.${styles.modalBoxHeader}`)).toBeNull();
    wrapper.unmount();
  });

  it('is labelled by its own content without a title or an aria-label', () => {
    const wrapper = mountModal({}, { default: 'modal content' });
    const el = dialog()!;
    expect(el.id).toBeTruthy();
    expect(el.getAttribute('aria-labelledby')).toBe(el.id);
    wrapper.unmount();
  });

  it('uses the id attribute as the modal box id', () => {
    const wrapper = mountModal({ id: 'my-modal' } as ModalProps);
    expect(dialog()!.id).toBe('my-modal');
    expect(dialog()!.getAttribute('aria-labelledby')).toBe('my-modal');
    wrapper.unmount();
  });

  it('defaults ouia-safe to true and derives the close button OUIA id', () => {
    const wrapper = mountModal({ ouiaId: 'basic' });
    expect(dialog()!.getAttribute('data-ouia-safe')).toBe('true');
    expect(dialog()!.querySelector(`.${styles.modalBoxClose} button`)!.getAttribute('data-ouia-component-id')).toBe(
      'basic-ModalBoxCloseButton',
    );
    wrapper.unmount();
  });

  it('sets the focus trap id and the backdrop class', () => {
    const wrapper = mountModal({ focusTrapId: 'focus-trap', backdropClass: 'my-backdrop' });
    const trap = dialog()!.parentElement!;
    expect(trap.id).toBe('focus-trap');
    expect(trap.className).toBe('pf-v6-l-bullseye');
    expect(trap.parentElement!.classList).toContain('my-backdrop');
    expect(trap.parentElement!.classList).toContain(backdropStyles.backdrop);
    wrapper.unmount();
  });

  it('calls onEscapePress in place of closing on Escape', async () => {
    const onEscapePress = vi.fn();
    const wrapper = mountModal({ onEscapePress });
    dialog()!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await nextTick();
    expect(onEscapePress).toHaveBeenCalledTimes(1);
    expect(onEscapePress.mock.calls[0]?.[0]).toBeInstanceOf(KeyboardEvent);
    expect(wrapper.emitted('update:open')).toBeUndefined();
    wrapper.unmount();
  });

  // the menu teleport used to look up the focus trap before it was in the document, breaking the render
  it('renders a dropdown appended to its focus trap', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const wrapper = mount(PfModal, {
        props: { open: true, title: 'Dropdown modal', focusTrapId: 'modal-focus-trap' },
        slots: {
          default: () =>
            h(PfDropdown, { open: true, text: 'Dropdown', appendTo: '#modal-focus-trap' }, () =>
              h(PfDropdownItem, { value: 0 }, () => 'Action'),
            ),
        },
        attachTo: document.body,
      });
      await nextTick();
      const trap = document.getElementById('modal-focus-trap')!;
      expect(trap.querySelector(':scope > .pf-v6-c-menu')).not.toBeNull();
      expect(warn.mock.calls.flat().join(' ')).not.toContain('Teleport');
      wrapper.unmount();
    } finally {
      warn.mockRestore();
    }
  });

  describe('composed with header, body and footer', () => {
    function mountComposed(props: ModalProps = {}) {
      return mount(PfModal, {
        props: { open: true, ...props },
        slots: {
          default: () => [
            h(PfModalHeader, { title: 'Composed', description: 'A description' }),
            h(PfModalBody, { class: 'my-body' }, () => 'Body'),
            h(PfModalFooter, () => h('button', { class: 'ok' }, 'OK')),
          ],
        },
        attachTo: document.body,
      });
    }

    it('renders the sub-components in order without wrapping them in a body', () => {
      const wrapper = mountComposed();
      const children = Array.from(dialog()!.children).map(c => c.className);
      expect(children).toEqual([
        styles.modalBoxClose,
        styles.modalBoxHeader,
        `${styles.modalBoxBody} my-body`,
        styles.modalBoxFooter,
      ]);
      expect(dialog()!.querySelectorAll(`.${styles.modalBoxBody}`)).toHaveLength(1);
      wrapper.unmount();
    });

    it('is labelled by the header title and described by the header description', async () => {
      const wrapper = mountComposed();
      await nextTick();
      const el = dialog()!;
      expect(document.getElementById(el.getAttribute('aria-labelledby')!)!.tagName).toBe('H1');
      expect(document.getElementById(el.getAttribute('aria-describedby')!)!.textContent).toBe('A description');
      wrapper.unmount();
    });

    it('keeps explicit aria-labelledby and aria-describedby attributes', () => {
      const wrapper = mountComposed({ 'aria-labelledby': 'label', 'aria-describedby': 'desc' } as ModalProps);
      expect(dialog()!.getAttribute('aria-labelledby')).toBe('label');
      expect(dialog()!.getAttribute('aria-describedby')).toBe('desc');
      wrapper.unmount();
    });

    it('wraps loose content in a body next to the sub-components', () => {
      const wrapper = mount(PfModal, {
        props: { open: true },
        slots: { default: () => [h(PfModalHeader, { title: 'T' }), 'Loose', h(PfModalFooter, () => 'F')] },
        attachTo: document.body,
      });
      const body = dialog()!.querySelector(`.${styles.modalBoxBody}`)!;
      expect(body.textContent).toBe('Loose');
      expect(body.previousElementSibling!.classList).toContain(styles.modalBoxHeader);
      expect(body.nextElementSibling!.classList).toContain(styles.modalBoxFooter);
      wrapper.unmount();
    });
  });

  describe('stacking', () => {
    function setup() {
      const target = document.createElement('div');
      const sibling = document.createElement('aside');
      target.appendChild(sibling);
      document.body.appendChild(target);
      return { target, sibling };
    }

    function mountOn(target: HTMLElement, props: ModalProps) {
      return mount(PfModal, { props: { appendTo: target, noAnimations: true, ...props }, slots: { default: 'Body' } });
    }

    const backdropOf = (target: HTMLElement, label: string) =>
      target.querySelector(`[aria-label="${label}"]`)!.closest<HTMLElement>(`.${backdropStyles.backdrop}`)!;

    it('hides the siblings of the open modal from screen readers', async () => {
      const { target, sibling } = setup();
      const wrapper = mountOn(target, { open: true, 'aria-label': 'Modal' } as ModalProps);
      expect(sibling.getAttribute('aria-hidden')).toBe('true');
      expect(backdropOf(target, 'Modal').hasAttribute('aria-hidden')).toBe(false);

      await wrapper.setProps({ open: false });
      expect(sibling.hasAttribute('aria-hidden')).toBe(false);

      await wrapper.setProps({ open: true });
      wrapper.unmount();
      expect(sibling.hasAttribute('aria-hidden')).toBe(false);
      target.remove();
    });

    it('keeps the backdrop-open class and hides the previous modal until all modals close', async () => {
      const { target, sibling } = setup();
      const first = mountOn(target, { open: true, 'aria-label': 'First' } as ModalProps);
      const second = mountOn(target, { open: false, 'aria-label': 'Second' } as ModalProps);

      await second.setProps({ open: true });
      expect(backdropOf(target, 'First').getAttribute('aria-hidden')).toBe('true');
      expect(backdropOf(target, 'Second').hasAttribute('aria-hidden')).toBe(false);

      await second.setProps({ open: false });
      expect(target.classList.contains(backdropStyles.backdropOpen)).toBe(true);
      expect(backdropOf(target, 'First').hasAttribute('aria-hidden')).toBe(false);
      expect(sibling.getAttribute('aria-hidden')).toBe('true');

      await first.setProps({ open: false });
      expect(target.classList.contains(backdropStyles.backdropOpen)).toBe(false);
      expect(sibling.hasAttribute('aria-hidden')).toBe(false);
      first.unmount();
      second.unmount();
      target.remove();
    });

    it('keeps independent stacks for different targets', async () => {
      const a = setup();
      const b = setup();
      const modalA = mountOn(a.target, { open: true, 'aria-label': 'A' } as ModalProps);
      const modalB = mountOn(b.target, { open: true, 'aria-label': 'B' } as ModalProps);

      await modalB.setProps({ open: false });
      expect(b.target.classList.contains(backdropStyles.backdropOpen)).toBe(false);
      expect(b.sibling.hasAttribute('aria-hidden')).toBe(false);
      expect(a.target.classList.contains(backdropStyles.backdropOpen)).toBe(true);
      expect(a.sibling.getAttribute('aria-hidden')).toBe('true');
      modalA.unmount();
      modalB.unmount();
      a.target.remove();
      b.target.remove();
    });

    it('leaves the target untouched when a never-opened modal unmounts', () => {
      const { target, sibling } = setup();
      const open = mountOn(target, { open: true, 'aria-label': 'Open' } as ModalProps);
      mountOn(target, { open: false }).unmount();
      expect(target.classList.contains(backdropStyles.backdropOpen)).toBe(true);
      expect(sibling.getAttribute('aria-hidden')).toBe('true');
      open.unmount();
      target.remove();
    });
  });

  it('focuses inside the modal when the focus trap is active', async () => {
    const wrapper = mountModal({}, { default: '<button class="first">First</button>' });
    await nextTick();
    // focus-trap delays the initial focus to the next macrotask
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(dialog()!.contains(document.activeElement)).toBe(true);
    wrapper.unmount();
  });
});

describe('ModalHeader', () => {
  it('renders a header with the default slot', () => {
    const wrapper = mount(PfModalHeader, { slots: { default: 'Header' } });
    expect(wrapper.element.tagName).toBe('HEADER');
    expect(wrapper.classes()).toContain(styles.modalBoxHeader);
    expect(wrapper.classes()).not.toContain(styles.modifiers.help);
    expect(wrapper.text()).toBe('Header');
  });

  it('wraps the content and help areas when a help slot is provided', () => {
    const wrapper = mount(PfModalHeader, { slots: { default: 'Header', help: 'Help' } });
    expect(wrapper.classes()).toContain(styles.modifiers.help);
    expect(wrapper.get(`.${styles.modalBoxHeaderMain}`).text()).toBe('Header');
    expect(wrapper.get(`.${styles.modalBoxHeader}-help`).text()).toBe('Help');
  });
});

describe('ModalHeader props', () => {
  it('renders the title and the description with the given ids', () => {
    const wrapper = mount(PfModalHeader, {
      props: { title: 'Title', labelId: 'label', description: 'Description', descriptorId: 'desc' },
    });
    expect(wrapper.get(`h1.${styles.modalBoxTitle}`).attributes('id')).toBe('label');
    expect(wrapper.get(`.${styles.modalBoxTitleText}`).text()).toBe('Title');
    const description = wrapper.get(`.${styles.modalBoxDescription}`);
    expect(description.attributes('id')).toBe('desc');
    expect(description.text()).toBe('Description');
  });

  it('replaces the description prop with the description slot', () => {
    const wrapper = mount(PfModalHeader, {
      props: { title: 'T', description: 'Prop' },
      slots: { description: 'Slot' },
    });
    expect(wrapper.get(`.${styles.modalBoxDescription}`).text()).toBe('Slot');
  });

  it('ignores the title when the default slot replaces the content', () => {
    const wrapper = mount(PfModalHeader, {
      props: { title: 'Ignored' },
      slots: { default: '<span id="custom">Custom</span>' },
    });
    expect(wrapper.find(`.${styles.modalBoxTitle}`).exists()).toBe(false);
    expect(wrapper.find('#custom').exists()).toBe(true);
  });

  it.each(['success', 'danger', 'warning', 'info'] as const)('applies the %s title modifier', variant => {
    const wrapper = mount(PfModalHeader, { props: { title: 'T', titleIconVariant: variant } });
    expect(wrapper.get(`h1.${styles.modalBoxTitle}`).classes()).toEqual(
      expect.arrayContaining([styles.modifiers.icon, styles.modifiers[variant]]),
    );
  });

  it('puts the title and the help in their header areas', () => {
    const wrapper = mount(PfModalHeader, { props: { title: 'T' }, slots: { help: 'Help' } });
    expect(wrapper.find(`.${styles.modalBoxHeaderMain} h1`).exists()).toBe(true);
    expect(wrapper.get(`.${styles.modalBoxHeader}-help`).text()).toBe('Help');
  });

  it('forwards attributes to the header element', () => {
    const wrapper = mount(PfModalHeader, { props: { title: 'T' }, attrs: { class: 'my-header' } });
    expect(wrapper.element.tagName).toBe('HEADER');
    expect(wrapper.classes()).toContain('my-header');
  });
});

describe('ModalBody', () => {
  it('renders a body div', () => {
    const wrapper = mount(PfModalBody, { attrs: { id: 'id', class: 'test-box-class' }, slots: { default: 'Body' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual(expect.arrayContaining([styles.modalBoxBody, 'test-box-class']));
    expect(wrapper.attributes('id')).toBe('id');
    expect(wrapper.attributes('role')).toBeUndefined();
  });

  it('gets the region role when it has an aria-label', () => {
    const wrapper = mount(PfModalBody, { attrs: { 'aria-label': 'modal body aria label' } });
    expect(wrapper.attributes('role')).toBe('region');
    expect(wrapper.attributes('aria-label')).toBe('modal body aria label');
  });

  it('keeps an explicit role', () => {
    const wrapper = mount(PfModalBody, { attrs: { 'aria-label': 'label', role: 'article' } });
    expect(wrapper.attributes('role')).toBe('article');
  });
});

describe('ModalFooter', () => {
  it('renders a footer', () => {
    const wrapper = mount(PfModalFooter, { attrs: { class: 'test-box-footer-class' }, slots: { default: 'Footer' } });
    expect(wrapper.element.tagName).toBe('FOOTER');
    expect(wrapper.classes()).toEqual(expect.arrayContaining([styles.modalBoxFooter, 'test-box-footer-class']));
    expect(wrapper.text()).toBe('Footer');
  });
});
