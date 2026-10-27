import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import plugin from '../src/main';
import { defaultMessages, providePfMessages, usePfMessages, type PfMessages } from '../src/messages';
import PfDrawerCloseButton from '../src/components/Drawer/DrawerCloseButton.vue';
import PfPaginationNavigation from '../src/components/Pagination/PaginationNavigation.vue';
import PfAlert from '../src/components/Alert/Alert.vue';

function Provider(messages: Parameters<typeof providePfMessages>[0]) {
  return defineComponent({
    setup(_, { slots }) {
      providePfMessages(messages);
      return () => slots.default?.();
    },
  });
}

function closeLabel(wrapper: { find: (selector: string) => { attributes: (name: string) => string | undefined } }) {
  return wrapper.find('button').attributes('aria-label');
}

describe('messages', () => {
  it('uses the default messages without a provider', () => {
    let messages: PfMessages | undefined;
    mount(
      defineComponent({
        setup() {
          messages = usePfMessages().value;
          return () => null;
        },
      }),
    );
    expect(messages).toBe(defaultMessages);
    expect(closeLabel(mount(PfDrawerCloseButton))).toBe('Close drawer panel');
  });

  it('overrides the messages with the plugin option', () => {
    const wrapper = mount(PfDrawerCloseButton, {
      global: { plugins: [[plugin, { messages: { drawerClose: 'Chiudi pannello' } }]] },
    });
    expect(closeLabel(wrapper)).toBe('Chiudi pannello');
  });

  it('merges nested providers', () => {
    const Outer = Provider({ drawerClose: 'Outer', popoverClose: 'Outer popover' });
    const Inner = Provider({ drawerClose: 'Inner' });
    let messages: PfMessages | undefined;
    const Probe = defineComponent({
      setup() {
        messages = usePfMessages().value;
        return () => h(PfDrawerCloseButton);
      },
    });
    const wrapper = mount(Outer, { slots: { default: () => h(Inner, null, { default: () => h(Probe) }) } });

    expect(closeLabel(wrapper)).toBe('Inner');
    expect(messages?.popoverClose).toBe('Outer popover');
    expect(messages?.breadcrumb).toBe('Breadcrumb');
  });

  it('lets an explicit prop win over the message', () => {
    const wrapper = mount(Provider({ drawerClose: 'Message' }), {
      slots: { default: () => h(PfDrawerCloseButton, { ariaLabel: 'Prop' }) },
    });
    expect(closeLabel(wrapper)).toBe('Prop');
  });

  it('updates the components when reactive messages change', async () => {
    const messages = ref<Partial<PfMessages>>({ paginationNextPage: 'Pagina successiva' });
    const wrapper = mount(Provider(messages), {
      slots: { default: () => h(PfPaginationNavigation, { page: 1, lastPage: 3 }) },
    });
    const next = () => wrapper.find('button[aria-label^="Pag"], button[aria-label^="Página"]');
    expect(next().attributes('aria-label')).toBe('Pagina successiva');

    messages.value = { paginationNextPage: 'Página siguiente' };
    await nextTick();
    expect(next().attributes('aria-label')).toBe('Página siguiente');
  });

  it('formats the messages with arguments', () => {
    const wrapper = mount(
      Provider({
        alertVariantLabel: variant => `Avviso ${variant}:`,
        alertToggle: variant => `Dettagli avviso ${variant}`,
      }),
      { slots: { default: () => h(PfAlert, { title: 'Titolo', variant: 'danger', expandable: true }) } },
    );
    expect(wrapper.find('.pf-v6-screen-reader').text()).toBe('Avviso Danger:');
    expect(wrapper.find('button').attributes('aria-label')).toBe('Dettagli avviso Danger');
  });
});
