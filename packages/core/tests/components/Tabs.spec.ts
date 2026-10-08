import { describe, expect, it } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import contentStyles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import PfTabs from '../../src/components/Tabs/Tabs.vue';
import PfTab from '../../src/components/Tabs/Tab.vue';
import type { TabKey } from '../../src/components/Tabs/common';

type TabDef = { key?: string | number; title: string; content: string; disabled?: boolean };

const defaultTabs: TabDef[] = [
  { key: 'users', title: 'Users', content: 'Users content' },
  { key: 'containers', title: 'Containers', content: 'Containers content' },
  { key: 'database', title: 'Database', content: 'Database content' },
];

async function mountTabs(tabsProps: Record<string, unknown> = {}, tabs: TabDef[] = defaultTabs) {
  const wrapper = mount(defineComponent({
    setup() {
      return () => h(PfTabs, tabsProps, {
        default: () => tabs.map(tab => h(PfTab, {
          ...(tab.key !== undefined ? { key: tab.key } : {}),
          title: tab.title,
          disabled: tab.disabled,
        }, () => tab.content)),
      });
    },
  }), { attachTo: document.body });
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
  return tabPanels(wrapper).filter(panel => (panel.element as HTMLElement).style.display !== 'none' && !panel.attributes('hidden'));
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
      const wrapper = mount(defineComponent({
        setup() {
          const tabSet = () => h(PfTabs, null, () => defaultTabs.map(tab => h(PfTab, { key: tab.key, title: tab.title }, () => tab.content)));
          return () => h('div', [tabSet(), tabSet()]);
        },
      }), { attachTo: document.body });
      await flushPromises();

      const ids = [...tabButtons(wrapper), ...tabPanels(wrapper)].map(e => e.attributes('id'));
      expect(ids).toHaveLength(12);
      expect(new Set(ids).size).toBe(12);
    });

    it('uses consistent ids for tabs without an explicit key', async () => {
      const wrapper = await mountTabs({}, defaultTabs.map(({ key: _key, ...tab }) => tab));

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
      const wrapper = mount(defineComponent({
        setup() {
          return () => h(PfTabs, {
            activeKey: activeKey.value,
            'onUpdate:activeKey': (value: TabKey | undefined) => (activeKey.value = value),
          }, () => defaultTabs.map(tab => h(PfTab, { key: tab.key, title: tab.title }, () => tab.content)));
        },
      }), { attachTo: document.body });
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
      const wrapper = await mountTabs({ defaultActiveKey: 1 }, defaultTabs.map((tab, i) => ({ ...tab, key: i })));

      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Containers content']);
      await tabButtons(wrapper)[0]!.trigger('click');
      expect(visiblePanels(wrapper).map(p => p.text())).toEqual(['Users content']);
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
