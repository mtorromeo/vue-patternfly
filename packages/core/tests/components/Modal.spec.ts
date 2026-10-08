import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import backdropStyles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import PfModal from '../../src/components/Modal/Modal.vue';
import PfModalHeader from '../../src/components/Modal/ModalHeader.vue';

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
    const wrapper = mountModal({ open: false });
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
    const wrapper = mount(defineComponent({
      components: { PfModal },
      setup: () => ({ open }),
      template: `<pf-modal v-model:open="open" title="Title">Body</pf-modal>`,
    }), { attachTo: document.body });

    dialog()!.querySelector<HTMLButtonElement>(`.${styles.modalBoxClose} button`)!.click();
    await nextTick();
    expect(open.value).toBe(false);
    expect(dialog()).toBeNull();
    wrapper.unmount();
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
    expect(el.classList.contains(styles.modifiers.danger)).toBe(true);
    const title = el.querySelector(`.${styles.modalBoxTitle}`)!;
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
    const wrapper = mountModal({ title: 'T', descriptorId: 'modal-desc' }, {
      default: 'Body',
      description: 'A description',
    });
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
    const wrapper = mountModal({}, {
      default: 'Body',
      header: '<h2 class="custom-header">Custom</h2>',
      footer: '<button class="ok">OK</button>',
      help: '<span class="help">?</span>',
    });
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
