import { afterEach, describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref, type VNode } from 'vue';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import contentStyles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import PfTabs from '../../src/components/Tabs/Tabs.vue';
import PfTab from '../../src/components/Tabs/Tab.vue';
import PfTabButton from '../../src/components/Tabs/TabButton.vue';
import PfTabContent from '../../src/components/Tabs/TabContent.vue';
import PfTabTitleIcon from '../../src/components/Tabs/TabTitleIcon.vue';
import PfTabTitleText from '../../src/components/Tabs/TabTitleText.vue';
import PfTabAction from '../../src/components/Tabs/TabAction.vue';
import PfTabContentBody from '../../src/components/Tabs/TabContentBody.vue';
import { TabsProvideKey, type TabKey, type TabsProvide } from '../../src/components/Tabs/common';

type TabDef = { key?: string | number; title: string; content: string; disabled?: boolean; href?: string };

const defaultTabs: TabDef[] = [
  { key: 'users', title: 'Users', content: 'Users content' },
  { key: 'containers', title: 'Containers', content: 'Containers content' },
  { key: 'database', title: 'Database', content: 'Database content' },
];

async function mountTabs(tabsProps: Record<string, unknown> = {}, tabs: TabDef[] = defaultTabs) {
  const wrapper = mount(
    defineComponent({
      setup() {
        return () =>
          h(PfTabs, tabsProps, {
            default: () =>
              tabs.map(tab =>
                h(
                  PfTab,
                  {
                    ...(tab.key !== undefined ? { key: tab.key } : {}),
                    title: tab.title,
                    disabled: tab.disabled,
                    href: tab.href,
                  },
                  () => tab.content,
                ),
              ),
          });
      },
    }),
    { attachTo: document.body },
  );
  await flushPromises();
  return wrapper;
}

function tabButtons(wrapper: VueWrapper) {
  return wrapper.findAll('[role="tab"]');
}

function tabPanels(wrapper: VueWrapper) {
  return wrapper.findAll('[role="tabpanel"]');
}

function visiblePanels(wrapper: VueWrapper) {
  return tabPanels(wrapper).filter(
    panel => (panel.element as HTMLElement).style.display !== 'none' && !panel.attributes('hidden'),
  );
}

describe('Tabs', () => {
  it('renders a tablist with a tab button for every tab', async () => {
    const wrapper = await mountTabs();

    expect(wrapper.find(`.${styles.tabs}`).exists()).toBe(true);
    expect(wrapper.find('ul').attributes('role')).toBe('tablist');

    const buttons = tabButtons(wrapper);
    expect(buttons.map(b => b.text())).toEqual(['Users', 'Containers', 'Database']);
    for (const button of buttons) {
      expect(button.element.tagName).toBe('BUTTON');
      expect(button.classes()).toContain(styles.tabsLink);
    }
  });

  it('renders one tab panel per tab', async () => {
    const wrapper = await mountTabs();

    const panels = tabPanels(wrapper);
    expect(panels.map(p => p.text())).toEqual(['Users content', 'Containers content', 'Database content']);
    for (const panel of panels) {
      expect(panel.element.tagName).toBe('SECTION');
      expect(panel.classes()).toContain(contentStyles.tabContent);
    }
  });

  // ffa328fd
  describe('ids', () => {
    it('links every tab button to its tab panel with aria-controls', async () => {
      const wrapper = await mountTabs({ id: 'my-tabs' });

      const buttons = tabButtons(wrapper);
      const panels = tabPanels(wrapper);
      expect(buttons).toHaveLength(3);

      buttons.forEach((button, i) => {
        const panel = panels[i]!;
        expect(button.attributes('id')).toBe(`pf-tab-${defaultTabs[i]!.key}-my-tabs`);
        expect(panel.attributes('id')).toBe(`pf-tab-section-${defaultTabs[i]!.key}-my-tabs`);
        expect(button.attributes('aria-controls')).toBe(panel.attributes('id'));
      });
    });

    it('generates unique, consistent ids when no id is given', async () => {
      const wrapper = await mountTabs();

      const buttons = tabButtons(wrapper);
      const panels = tabPanels(wrapper);
      const ids = buttons.map(b => b.attributes('id'));

      expect(new Set(ids).size).toBe(ids.length);
      for (const id of ids) {
        expect(id).not.toMatch(/undefined/);
        expect(document.querySelectorAll(`[id="${id}"]`)).toHaveLength(1);
      }
      buttons.forEach((button, i) => {
        expect(button.attributes('aria-controls')).toBe(panels[i]!.attributes('id'));
        expect(document.getElementById(button.attributes('aria-controls')!)).toBe(panels[i]!.element);
      });
    });

    it('does not generate colliding ids for two tab sets with the same keys', async () => {
      const wrapper = mount(
        defineComponent({
          setup() {
            const tabSet = () =>
              h(PfTabs, null, () =>
                defaultTabs.map(tab => h(PfTab, { key: tab.key, title: tab.title }, () => tab.content)),
              );
            return () => h('div', [tabSet(), tabSet()]);
          },
        }),
        { attachTo: document.body },
      );
      await flushPromises();

      const ids = [...tabButtons(wrapper), ...tabPanels(wrapper)].map(e => e.attributes('id'));
      expect(ids).toHaveLength(12);
      expect(new Set(ids).size).toBe(12);
    });

    it('uses consistent ids for tabs without an explicit key', async () => {
      const wrapper = await mountTabs(
        {},
        defaultTabs.map(({ key: _key, ...tab }) => tab),
      );

      const buttons = tabButtons(wrapper);
      const panels = tabPanels(wrapper);
      const ids = buttons.map(b => b.attributes('id'));
      expect(new Set(ids).size).toBe(3);
      buttons.forEach((button, i) => {
        expect(button.attributes('aria-controls')).toBe(panels[i]!.attributes('id'));
      });
    });

    it('labels every tab panel with its tab button via aria-labelledby', async () => {
      const wrapper = await mountTabs({ id: 'my-tabs' });

      const buttons = tabButtons(wrapper);
      tabPanels(wrapper).forEach((panel, i) => {
        expect(panel.attributes('aria-labelledby')).toBe(buttons[i]!.attributes('id'));
      });
    });
  });

  describe('active tab', () => {
    it('activates the first tab by default', async () => {
      const wrapper = await mountTabs();

      const buttons = tabButtons(wrapper);
      expect(buttons.map(b => b.attributes('aria-selected'))).toEqual(['true', 'false', 'false']);
      expect(wrapper.findAll(`.${styles.tabsItem}`)[0]?.classes()).toContain(styles.modifiers.current);
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Users content']);
    });

    it('honours defaultActiveKey', async () => {
      const wrapper = await mountTabs({ defaultActiveKey: 'containers' });

      expect(tabButtons(wrapper).map(b => b.attributes('aria-selected'))).toEqual(['false', 'true', 'false']);
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Containers content']);
    });

    it('switches the active tab on click', async () => {
      const wrapper = await mountTabs();

      await tabButtons(wrapper)[2]!.trigger('click');

      const items = wrapper.findAll(`.${styles.tabsItem}`);
      expect(tabButtons(wrapper).map(b => b.attributes('aria-selected'))).toEqual(['false', 'false', 'true']);
      expect(items[0]?.classes()).not.toContain(styles.modifiers.current);
      expect(items[2]?.classes()).toContain(styles.modifiers.current);
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Database content']);
    });

    it('emits click and enter/leave events on the tabs', async () => {
      const wrapper = await mountTabs();
      const [users, containers] = wrapper.findAllComponents(PfTab);

      expect(users!.emitted('enter')).toHaveLength(1);

      await tabButtons(wrapper)[1]!.trigger('click');
      expect(containers!.emitted('click')).toHaveLength(1);
      expect(containers!.emitted('enter')).toHaveLength(1);
      expect(users!.emitted('leave')).toHaveLength(1);
    });

    it('supports v-model:activeKey', async () => {
      const activeKey = ref<TabKey | undefined>('containers');
      const wrapper = mount(
        defineComponent({
          setup() {
            return () =>
              h(
                PfTabs,
                {
                  activeKey: activeKey.value,
                  'onUpdate:activeKey': (value: TabKey | undefined) => (activeKey.value = value),
                },
                () => defaultTabs.map(tab => h(PfTab, { key: tab.key, title: tab.title }, () => tab.content)),
              );
          },
        }),
        { attachTo: document.body },
      );
      await flushPromises();

      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Containers content']);

      await tabButtons(wrapper)[0]!.trigger('click');
      expect(activeKey.value).toBe('users');
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Users content']);

      activeKey.value = 'database';
      await nextTick();
      expect(tabButtons(wrapper).map(b => b.attributes('aria-selected'))).toEqual(['false', 'false', 'true']);
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Database content']);
    });

    it('falls back to the first tab when activeKey does not match any tab', async () => {
      const wrapper = await mountTabs({ activeKey: 'missing' });
      const tabs = wrapper.findComponent(PfTabs);

      const updates = tabs.emitted('update:activeKey') ?? [];
      expect(updates[updates.length - 1]).toEqual(['users']);
    });

    it('works with numeric keys', async () => {
      const wrapper = await mountTabs(
        { defaultActiveKey: 1 },
        defaultTabs.map((tab, i) => ({ ...tab, key: i })),
      );

      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Containers content']);
      await tabButtons(wrapper)[0]!.trigger('click');
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Users content']);
    });
  });

  describe('hash-linked nav tabs', () => {
    const linkedTabs: TabDef[] = defaultTabs.map(tab => ({ ...tab, href: `/page#${tab.key}` }));

    afterEach(() => {
      window.history.replaceState(null, '', '/');
    });

    it('activates the nav tab matching the location hash', async () => {
      window.history.replaceState(null, '', '/page#database');
      const wrapper = await mountTabs({ component: 'nav' }, linkedTabs);

      expect(tabButtons(wrapper).map(b => b.attributes('aria-selected'))).toEqual(['false', 'false', 'true']);
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Database content']);
    });

    it('overrides activeKey and defaultActiveKey until a tab is selected', async () => {
      window.history.replaceState(null, '', '/page#database');
      const controlled = await mountTabs({ component: 'nav', activeKey: 'users' }, linkedTabs);
      expect(tabButtons(controlled).map(b => b.attributes('aria-selected'))).toEqual(['false', 'false', 'true']);

      const uncontrolled = await mountTabs({ component: 'nav', defaultActiveKey: 'users' }, linkedTabs);
      expect(tabButtons(uncontrolled).map(b => b.attributes('aria-selected'))).toEqual(['false', 'false', 'true']);

      await tabButtons(uncontrolled)[1]!.trigger('click');
      expect(tabButtons(uncontrolled).map(b => b.attributes('aria-selected'))).toEqual(['false', 'true', 'false']);
    });

    it('ignores the hash for disabled tabs and non-nav tabs', async () => {
      window.history.replaceState(null, '', '/page#database');
      const disabled = await mountTabs(
        { component: 'nav' },
        linkedTabs.map(tab => ({ ...tab, disabled: tab.key === 'database' })),
      );
      expect(tabButtons(disabled).map(b => b.attributes('aria-selected'))).toEqual(['true', 'false', 'false']);

      const notNav = await mountTabs({}, linkedTabs);
      expect(tabButtons(notNav).map(b => b.attributes('aria-selected'))).toEqual(['true', 'false', 'false']);
    });

    it('pushes the tab href to the history when a nav tab is selected', async () => {
      const wrapper = await mountTabs({ component: 'nav' }, linkedTabs);
      const event = new MouseEvent('click', { bubbles: true, cancelable: true });

      tabButtons(wrapper)[1]!.element.dispatchEvent(event);
      await nextTick();
      expect(event.defaultPrevented).toBe(true);
      expect(window.location.hash).toBe('#containers');
      expect(tabButtons(wrapper).map(b => b.attributes('aria-selected'))).toEqual(['false', 'true', 'false']);
    });

    it('prevents link navigation without touching the history for non-nav tabs', async () => {
      const pushState = vi.spyOn(window.history, 'pushState');
      const wrapper = await mountTabs({}, linkedTabs);
      const event = new MouseEvent('click', { bubbles: true, cancelable: true });

      tabButtons(wrapper)[1]!.element.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
      expect(pushState).not.toHaveBeenCalled();
      pushState.mockRestore();
    });
  });

  it('renders a disabled tab button', async () => {
    const wrapper = await mountTabs({}, [
      { key: 'a', title: 'A', content: 'A content' },
      { key: 'b', title: 'B', content: 'B content', disabled: true },
    ]);

    const button = tabButtons(wrapper)[1]!;
    expect(button.attributes('disabled')).toBeDefined();
    expect(button.attributes('aria-disabled')).toBe('true');
  });

  it('applies layout modifiers', async () => {
    const wrapper = await mountTabs({ filled: true, box: true, vertical: true, secondary: true });

    const classes = wrapper.find(`.${styles.tabs}`).classes();
    expect(classes).toContain(styles.modifiers.fill);
    expect(classes).toContain(styles.modifiers.box);
    expect(classes).toContain(styles.modifiers.vertical);
    expect(classes).toContain(styles.modifiers.secondary);
  });
});

describe('TabButton', () => {
  it('renders a button by default', () => {
    const wrapper = mount(PfTabButton, { attrs: { 'aria-controls': 'panel' }, slots: { default: () => 'Tab' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.attributes('aria-controls')).toBe('panel');
    expect(wrapper.text()).toBe('Tab');
  });

  it('renders a link when href is set', () => {
    const wrapper = mount(PfTabButton, { props: { href: '#users' } });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('href')).toBe('#users');
    expect(wrapper.attributes('type')).toBeUndefined();
  });

  it('sets OUIA attributes', () => {
    const wrapper = mount(PfTabButton, { props: { ouiaId: 'tb' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/TabButton');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('tb');
  });
});

describe('TabContent', () => {
  it('renders an accessible focusable tab panel', () => {
    const wrapper = mount(PfTabContent, {
      attrs: { id: 'panel', 'aria-labelledby': 'tab' },
      slots: { default: () => 'Panel' },
    });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(contentStyles.tabContent);
    expect(wrapper.classes()).not.toContain(contentStyles.modifiers.secondary);
    expect(wrapper.attributes('role')).toBe('tabpanel');
    expect(wrapper.attributes('tabindex')).toBe('0');
    expect(wrapper.attributes('hidden')).toBeUndefined();
    expect(wrapper.attributes('id')).toBe('panel');
    expect(wrapper.attributes('aria-labelledby')).toBe('tab');
    expect(wrapper.text()).toBe('Panel');
  });

  it('can be hidden through the exposed hidden ref', async () => {
    const wrapper = mount(PfTabContent);
    wrapper.vm.hidden = true;
    await nextTick();
    expect(wrapper.attributes('hidden')).toBeDefined();

    wrapper.vm.hidden = false;
    await nextTick();
    expect(wrapper.attributes('hidden')).toBeUndefined();
  });

  it('applies the secondary modifier from the parent tabs', () => {
    const wrapper = mount(PfTabContent, {
      global: { provide: { [TabsProvideKey as symbol]: { secondary: true } as Partial<TabsProvide> } },
    });
    expect(wrapper.classes()).toContain(contentStyles.modifiers.secondary);
  });

  it('is secondary inside secondary Tabs', async () => {
    const wrapper = await mountTabs({ secondary: true });
    expect(tabPanels(wrapper)[0].classes()).toContain(contentStyles.modifiers.secondary);
  });

  it('follows changes of the Tabs secondary prop', async () => {
    const secondary = ref(false);
    const wrapper = mount(
      defineComponent({
        setup: () => () =>
          h(PfTabs, { secondary: secondary.value }, { default: () => [h(PfTab, { key: 'a', title: 'A' }, () => 'A')] }),
      }),
      { attachTo: document.body },
    );
    await flushPromises();
    secondary.value = true;
    await flushPromises();
    expect(tabPanels(wrapper)[0].classes()).toContain(contentStyles.modifiers.secondary);
  });
});

describe('TabTitleText', () => {
  it('renders a span with the tab item text class', () => {
    const wrapper = mount(PfTabTitleText, { slots: { default: () => 'Users' } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(styles.tabsItemText);
    expect(wrapper.text()).toBe('Users');
  });
});

describe('TabTitleIcon', () => {
  it('renders a span with the tab item icon class', () => {
    const wrapper = mount(PfTabTitleIcon, { slots: { default: () => h('svg', { class: 'icon' }) } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(`${styles.tabsItem}-icon`);
    expect(wrapper.find('svg.icon').exists()).toBe(true);
  });
});

async function mountWith(tabsProps: Record<string, unknown>, tabs: () => VNode[]) {
  const wrapper = mount(
    defineComponent({
      setup() {
        return () => h(PfTabs, tabsProps, { default: tabs });
      },
    }),
    { attachTo: document.body },
  );
  await flushPromises();
  return wrapper;
}

describe('Tabs parity with patternfly-react', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('identifies tabs by eventKey', async () => {
    const onSelect = vi.fn();
    const wrapper = await mountWith({ activeKey: 1, onSelect }, () => [
      h(PfTab, { eventKey: 0, title: 'A' }, () => 'A content'),
      h(PfTab, { eventKey: 1, title: 'B' }, () => 'B content'),
    ]);
    expect(tabButtons(wrapper)[1]!.attributes('aria-selected')).toBe('true');
    expect(tabButtons(wrapper)[0]!.attributes('id')).toMatch(/^pf-tab-0-/);

    await tabButtons(wrapper)[0]!.trigger('click');
    expect(onSelect).toHaveBeenCalledWith(expect.any(Event), 0);
  });

  it('renders presentation list items with the action and disabled modifiers', async () => {
    const wrapper = await mountWith({ onClose: () => {} }, () => [
      h(PfTab, { eventKey: 'a', title: 'A' }),
      h(PfTab, { eventKey: 'b', title: 'B', ariaDisabled: true }),
    ]);
    const items = wrapper.findAll(`.${styles.tabsItem}`);
    expect(items[0]!.attributes('role')).toBe('presentation');
    expect(items[0]!.classes()).toContain(styles.modifiers.action);
    expect(items[1]!.classes()).toContain(styles.modifiers.disabled);
  });

  it('does not select an aria-disabled tab, which stays focusable', async () => {
    const wrapper = await mountWith({}, () => [
      h(PfTab, { eventKey: 'a', title: 'A' }),
      h(PfTab, { eventKey: 'b', title: 'B', ariaDisabled: true }),
    ]);
    const button = tabButtons(wrapper)[1]!;
    expect(button.attributes('disabled')).toBeUndefined();
    expect(button.attributes('tabindex')).toBeUndefined();
    expect(button.classes()).toContain(styles.modifiers.ariaDisabled);
    await button.trigger('click');
    expect(button.attributes('aria-selected')).toBe('false');
  });

  it('puts the OUIA attributes on the tab button and marks the tabs safe', async () => {
    const wrapper = await mountWith({}, () => [h(PfTab, { eventKey: 'a', title: 'A', ouiaId: 'tab-a' })]);
    expect(tabButtons(wrapper)[0]!.attributes('data-ouia-component-id')).toBe('tab-a');
    expect(wrapper.find(`.${styles.tabsItem}`).attributes('data-ouia-component-id')).toBeUndefined();
    expect(wrapper.find(`.${styles.tabs}`).attributes('data-ouia-safe')).toBe('true');
  });

  it('labels the tablist', async () => {
    const wrapper = await mountWith({ tabListAriaLabel: 'Primary', tabListAriaLabelledby: 'lbl' }, () => [
      h(PfTab, { eventKey: 'a', title: 'A' }),
    ]);
    const list = wrapper.find('[role="tablist"]');
    expect(list.attributes('aria-label')).toBe('Primary');
    expect(list.attributes('aria-labelledby')).toBe('lbl');
  });

  it('renders a nav element with the nav modifier', async () => {
    const wrapper = await mountWith({ nav: true }, () => [h(PfTab, { eventKey: 'a', title: 'A', href: '#a' })]);
    const tabs = wrapper.find(`.${styles.tabs}`);
    expect(tabs.element.tagName).toBe('NAV');
    expect(tabs.classes()).toContain(styles.modifiers.nav);
  });

  it('animates the current tab accent', async () => {
    const wrapper = await mountWith({}, () => [h(PfTab, { eventKey: 'a', title: 'A' })]);
    expect(wrapper.find(`.${styles.tabs}`).classes()).toContain(styles.modifiers.animateCurrent);
  });

  it('closes tabs with the close button and adds tabs with the add button', async () => {
    const onClose = vi.fn();
    const onAdd = vi.fn();
    const wrapper = await mountWith({ onClose, onAdd, addButtonAriaLabel: 'Add new tab' }, () => [
      h(PfTab, { eventKey: 'a', title: 'A', closeButtonAriaLabel: 'Close A' }),
      h(PfTab, { eventKey: 'b', title: 'B', closeDisabled: true }),
    ]);
    const closeButtons = wrapper.findAll(`.${styles.tabsItemAction} button`);
    expect(closeButtons).toHaveLength(2);
    expect(closeButtons[0]!.attributes('aria-label')).toBe('Close A');
    expect(closeButtons[1]!.attributes('aria-label')).toBe('Close tab');
    expect(closeButtons[1]!.attributes('disabled')).toBeDefined();

    await closeButtons[0]!.trigger('click');
    expect(onClose).toHaveBeenCalledWith(expect.any(Event), 'a');

    const add = wrapper.find(`.${styles.tabsAdd} button`);
    expect(add.attributes('aria-label')).toBe('Add new tab');
    await add.trigger('click');
    expect(onAdd).toHaveBeenCalledOnce();
  });

  it('renders no close or add buttons without listeners', async () => {
    const wrapper = await mountWith({}, () => [h(PfTab, { eventKey: 'a', title: 'A' })]);
    expect(wrapper.find(`.${styles.tabsItemAction}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.tabsAdd}`).exists()).toBe(false);
  });

  it('renders tab actions', async () => {
    const onClick = vi.fn();
    const wrapper = await mountWith({}, () => [
      h(
        PfTab,
        { eventKey: 'a', title: 'A' },
        { actions: () => h(PfTabAction, { ariaLabel: 'Help', onClick }, () => h('i', { class: 'icon' })) },
      ),
    ]);
    const item = wrapper.find(`.${styles.tabsItem}`);
    expect(item.classes()).toContain(styles.modifiers.action);
    const action = item.find(`.${styles.tabsItemAction}`);
    expect(action.find(`.${styles.tabsItemActionIcon} .icon`).exists()).toBe(true);
    const button = action.find('button');
    expect(button.attributes('aria-label')).toBe('Help');
    await button.trigger('click');
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('omits aria-controls of tabs whose panel is not mounted', async () => {
    const wrapper = await mountWith({ mountOnEnter: true }, () => [
      h(PfTab, { eventKey: 'a', title: 'A' }, () => 'A content'),
      h(PfTab, { eventKey: 'b', title: 'B' }, () => 'B content'),
    ]);
    expect(tabButtons(wrapper)[0]!.attributes('aria-controls')).toBeTruthy();
    expect(tabButtons(wrapper)[1]!.attributes('aria-controls')).toBeUndefined();
    expect(tabPanels(wrapper)).toHaveLength(1);
  });

  it('points aria-controls at a separate content by contentId', async () => {
    const wrapper = await mountWith({}, () => [
      h(PfTab, { eventKey: 'a', title: 'A', contentId: 'sep', contentRef: { hidden: false } }),
    ]);
    expect(tabButtons(wrapper)[0]!.attributes('aria-controls')).toBe('sep');
  });

  it('renders the expandable toggle of vertical tabs', async () => {
    const wrapper = await mountWith({ vertical: true, expandable: 'expandable', toggleText: 'Containers' }, () => [
      h(PfTab, { eventKey: 'a', title: 'A' }),
    ]);
    const tabs = wrapper.find(`.${styles.tabs}`);
    const toggle = tabs.find(`.${styles.tabsToggle} button`);
    expect(toggle.text()).toBe('Containers');
    expect(toggle.attributes('aria-expanded')).toBe('false');
    expect(tabs.classes()).toContain(styles.modifiers.expandable);

    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');
    expect(tabs.classes()).toContain(styles.modifiers.expanded);
  });

  it('warns about an expandable toggle without a label', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    await mountWith({ vertical: true, expandable: 'expandable' }, () => [h(PfTab, { eventKey: 'a', title: 'A' })]);
    expect(error).toHaveBeenCalledWith(
      'Tabs:',
      'toggleAriaLabel or the toggleText prop is required to make the toggle button accessible',
    );
    error.mockRestore();
  });

  it('renders a tooltip on a tab', async () => {
    const wrapper = await mountWith({}, () => [
      h(PfTab, { eventKey: 'a', title: 'A', ariaDisabled: true, tooltip: 'Tip' }),
    ]);
    expect(tabButtons(wrapper)).toHaveLength(1);
    expect(wrapper.findComponent({ name: 'PfTooltip' }).exists()).toBe(true);
  });
});

describe('Tabs dynamic changes', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('keeps a newly added tab active when activeKey changes with the tabs', async () => {
    const tabsList = ref(['A', 'B']);
    const active = ref<TabKey>(0);
    const wrapper = mount(
      defineComponent({
        setup() {
          return () =>
            h(
              PfTabs,
              { activeKey: active.value, 'onUpdate:activeKey': (v: TabKey) => (active.value = v) } as Record<
                string,
                unknown
              >,
              {
                default: () => tabsList.value.map((t, i) => h(PfTab, { key: t, eventKey: i, title: t })),
              },
            );
        },
      }),
      { attachTo: document.body },
    );
    await flushPromises();

    tabsList.value = [...tabsList.value, 'C'];
    active.value = 2;
    await flushPromises();
    expect(active.value).toBe(2);
    expect(wrapper.find('[aria-selected="true"]').text()).toBe('C');
  });

  it('moves overflowing tabs into the overflow menu and selects them from it', async () => {
    // fake a 300px wide tab list with 100px wide tabs
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (this: Element) {
      if (this.getAttribute('role') === 'tablist') {
        return { left: 0, right: 300, top: 0, bottom: 40, width: 300, height: 40 } as DOMRect;
      }
      const index = this.parentElement ? Array.from(this.parentElement.children).indexOf(this) : 0;
      return { left: index * 100, right: index * 100 + 100, top: 0, bottom: 40, width: 100, height: 40 } as DOMRect;
    });
    const onSelect = vi.fn();
    const wrapper = await mountWith({ overflowHorizontal: true, overflowShowTabCount: true, onSelect }, () =>
      ['A', 'B', 'C', 'D', 'E'].map((t, i) => h(PfTab, { eventKey: i, title: t })),
    );
    await new Promise(r => setTimeout(r, 150));
    await flushPromises();

    const overflow = wrapper.find(`.${styles.tabsItem}.${styles.modifiers.overflow}`);
    expect(overflow.exists()).toBe(true);
    const toggle = overflow.find('button');
    expect(toggle.text()).toBe('More (3)');
    expect(wrapper.findAll(`.${styles.tabsItem}:not(.${styles.modifiers.overflow})`)).toHaveLength(2);

    await toggle.trigger('click');
    await flushPromises();
    const items = document.body.querySelectorAll<HTMLElement>('.pf-v6-c-menu__item');
    expect(Array.from(items).map(i => i.textContent!.trim())).toEqual(['C', 'D', 'E']);

    items[1]!.click();
    await flushPromises();
    expect(onSelect).toHaveBeenCalledWith(expect.any(Event), 3);
    expect(toggle.text()).toBe('D');
    expect(overflow.classes()).toContain(styles.modifiers.current);
    expect(toggle.attributes('aria-expanded')).toBe('false');
  });
});

describe('TabContentBody', () => {
  it('renders a body with optional padding', () => {
    const wrapper = mount(PfTabContentBody, { slots: { default: () => 'Body' } });
    expect(wrapper.classes()).toEqual([contentStyles.tabContentBody]);
    expect(wrapper.text()).toBe('Body');
    expect(mount(PfTabContentBody, { props: { padding: true } }).classes()).toContain(contentStyles.modifiers.padding);
  });
});

describe('TabAction', () => {
  it('renders a plain button inside the action span', () => {
    const wrapper = mount(PfTabAction, { attrs: { class: 'extra' }, slots: { default: () => h('i') } });
    expect(wrapper.classes()).toEqual([styles.tabsItemAction, 'extra']);
    const button = wrapper.find('button');
    expect(button.attributes('aria-label')).toBe('Tab action');
    expect(button.classes()).not.toContain('extra');
  });
});
