import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import PfNav from '../../src/components/Nav/Nav.vue';
import PfNavList from '../../src/components/Nav/NavList.vue';
import PfNavGroup from '../../src/components/Nav/NavGroup.vue';
import PfNavItem from '../../src/components/Nav/NavItem.vue';
import PfNavItemSeparator from '../../src/components/Nav/NavItemSeparator.vue';
import PfNavExpandable from '../../src/components/Nav/NavExpandable.vue';
import { SidebarOpenKey } from '../../src/components/Page/PageSidebar.vue';

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

describe('Nav', () => {
  it('renders a nav element with the global label', () => {
    const wrapper = mount(PfNav, { slots: { default: () => 'Content' } });

    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.classes()).toContain(styles.nav);
    expect(wrapper.attributes('aria-label')).toBe('Global');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Nav');
    expect(wrapper.text()).toBe('Content');
  });

  it('applies the horizontal modifier', () => {
    const wrapper = mount(PfNav, { props: { variant: 'horizontal' } });
    expect(wrapper.classes()).toContain(styles.modifiers.horizontal);
    expect(wrapper.classes()).not.toContain(styles.modifiers.subnav);
  });

  it('applies the subnav modifiers and local label for horizontal-subnav', () => {
    const wrapper = mount(PfNav, { props: { variant: 'horizontal-subnav' } });
    expect(wrapper.classes()).toContain(styles.modifiers.horizontal);
    expect(wrapper.classes()).toContain(styles.modifiers.subnav);
    expect(wrapper.attributes('aria-label')).toBe('Local');
  });

  it('applies docked and expanded modifiers', () => {
    const wrapper = mount(PfNav, { props: { variant: 'docked', expanded: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.docked);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);

    const notDocked = mount(PfNav, { props: { expanded: true } });
    expect(notDocked.classes()).not.toContain(styles.modifiers.expanded);
  });

  it('uses a custom aria-label', () => {
    const wrapper = mount(PfNav, { props: { ariaLabel: 'Main' } });
    expect(wrapper.attributes('aria-label')).toBe('Main');
  });

  it('emits select when a nested item is clicked', async () => {
    const wrapper = mount(PfNav, {
      slots: {
        default: () => h(PfNavList, () => h(PfNavItem, { groupId: 'g1', itemId: 'i1', href: '#' }, () => 'Item')),
      },
    });

    await wrapper.find(`.${styles.navLink}`).trigger('click');
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(wrapper.emitted('select')![0]!.slice(1)).toEqual(['g1', 'i1', undefined]);
  });

  it('emits select with numeric ids and the item location', async () => {
    const wrapper = mount(PfNav, {
      slots: {
        default: () => h(PfNavList, () => h(PfNavItem, { itemId: 0, to: '/home', linkComponent: 'a' }, () => 'Item')),
      },
    });

    await wrapper.find(`.${styles.navLink}`).trigger('click');
    expect(wrapper.emitted('select')![0]!.slice(1)).toEqual([undefined, 0, '/home']);
  });

  it('emits toggle when a nested expandable is toggled', async () => {
    const wrapper = mount(PfNav, {
      slots: {
        default: () => h(PfNavList, () => h(PfNavExpandable, { title: 'Section', groupId: 'grp' })),
      },
    });

    await wrapper.find(`button.${styles.navLink}`).trigger('click');
    const [event, groupId, expanded] = wrapper.emitted('toggle')![0]!;
    expect(event).toBeInstanceOf(MouseEvent);
    expect([groupId, expanded]).toEqual(['grp', true]);
  });

  it('defaults ouia-safe to true', () => {
    expect(mount(PfNav).attributes('data-ouia-safe')).toBe('true');
  });

  // the horizontal flag was computed once, ignoring a later variant change
  it('follows a variant change', async () => {
    const wrapper = mount(PfNav, { props: { variant: 'default' } });
    await wrapper.setProps({ variant: 'horizontal' });
    expect(wrapper.classes()).toContain(styles.modifiers.horizontal);
  });
});

describe('NavList', () => {
  it('renders a list with forwarded attributes', () => {
    const wrapper = mount(PfNav, {
      slots: { default: () => h(PfNavList, { 'data-test': 'list' }, () => h('li', 'Item')) },
    });

    const list = wrapper.find('ul');
    expect(list.classes()).toContain(styles.navList);
    expect(list.attributes('role')).toBe('list');
    expect(list.attributes('data-test')).toBe('list');
    expect(wrapper.find(`.${styles.navScrollButton}`).exists()).toBe(false);
  });

  it('does not render scroll buttons for a horizontal nav whose items fit', async () => {
    const wrapper = mount(PfNav, {
      props: { variant: 'horizontal' },
      slots: { default: () => h(PfNavList, () => h('li', 'Item')) },
      attachTo: document.body,
    });
    await nextTick();
    expect(wrapper.find(`.${styles.navScrollButton}`).exists()).toBe(false);
  });

  it('hides the scroll buttons of a horizontal nav once all items are in view', async () => {
    const wrapper = mount(PfNav, {
      props: { variant: 'horizontal' },
      slots: {
        default: () =>
          h(PfNavList, { backScrollAriaLabel: 'Back', forwardScrollAriaLabel: 'Forward' }, () => h('li', 'Item')),
      },
      attachTo: document.body,
    });

    const buttons = wrapper.findAll(`.${styles.navScrollButton} button`);
    expect(buttons.map(b => b.attributes('aria-label'))).toEqual(['Back', 'Forward']);

    await wrapper.find('ul').trigger('scroll');
    expect(wrapper.find(`.${styles.navScrollButton}`).exists()).toBe(false);
  });
});

describe('NavGroup', () => {
  it('renders a titled section labelled by its heading', () => {
    const wrapper = mount(PfNavGroup, { props: { title: 'Group' }, slots: { default: () => h('li', 'Item') } });

    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.navSection);
    const title = wrapper.find(`h2.${styles.navSectionTitle}`);
    expect(title.text()).toBe('Group');
    expect(title.attributes('id')).toBeTruthy();
    expect(wrapper.attributes('aria-labelledby')).toBe(title.attributes('id'));
    expect(wrapper.find(`ul.${styles.navList} li`).text()).toBe('Item');
    expect(wrapper.find(`ul.${styles.navList}`).attributes('role')).toBe('list');
  });

  // the title was required and an empty heading always labelled the group
  it('renders no heading without a title and warns without an aria-label', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const labelled = mount(PfNavGroup, { attrs: { 'aria-label': 'Group' } });
      expect(labelled.find('h2').exists()).toBe(false);
      expect(labelled.attributes('aria-labelledby')).toBeUndefined();
      expect(labelled.attributes('aria-label')).toBe('Group');
      expect(warn).not.toHaveBeenCalled();

      mount(PfNavGroup);
      expect(warn).toHaveBeenCalledWith(
        "For accessibility reasons an aria-label should be specified on nav groups if a title isn't",
      );
    } finally {
      warn.mockRestore();
    }
  });

  it('uses an explicit id', () => {
    const wrapper = mount(PfNavGroup, { props: { title: 'Group', id: 'grp' } });
    expect(wrapper.find('h2').attributes('id')).toBe('grp');
    expect(wrapper.attributes('aria-labelledby')).toBe('grp');
  });
});

describe('NavItemSeparator', () => {
  it('renders a presentational divider list item', () => {
    const wrapper = mount(PfNavItemSeparator);

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(dividerStyles.divider);
    expect(wrapper.attributes('role')).toBe('presentation');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/NavItemSeparator');
  });
});

describe('NavItem', () => {
  function mountItem(
    props: Record<string, unknown> = {},
    slots: Record<string, () => unknown> = { default: () => 'Item' },
    sidebarOpen = true,
  ) {
    return mount(PfNavItem, { props, slots, global: { provide: { [SidebarOpenKey as symbol]: sidebarOpen } } });
  }

  it('renders a list item with a link', () => {
    const wrapper = mountItem({ href: '/home' });

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.navItem);
    const link = wrapper.find(`a.${styles.navLink}`);
    expect(link.attributes('href')).toBe('/home');
    expect(link.attributes('tabindex')).toBeUndefined();
    expect(link.attributes('aria-current')).toBeUndefined();
    expect(link.find(`.${styles.navLink}-text`).text()).toBe('Item');
  });

  it('marks the active item as current page', () => {
    const wrapper = mountItem({ active: true });
    const link = wrapper.find(`.${styles.navLink}`);
    expect(link.classes()).toContain(styles.modifiers.current);
    expect(link.attributes('aria-current')).toBe('page');
  });

  it('removes items from the tab order when the sidebar is closed', () => {
    const wrapper = mountItem({}, { default: () => 'Item' }, false);
    expect(wrapper.find(`.${styles.navLink}`).attributes('tabindex')).toBe('-1');
  });

  it('keeps items focusable outside of a page sidebar', () => {
    const wrapper = mount(PfNavItem, { slots: { default: () => 'Item' } });
    expect(wrapper.find(`.${styles.navLink}`).attributes('tabindex')).toBeUndefined();
  });

  it('applies an explicit tabindex', () => {
    const wrapper = mountItem({ tabindex: 2 });
    expect(wrapper.find(`.${styles.navLink}`).attributes('tabindex')).toBe('2');
  });

  it('renders custom item and link components', () => {
    const wrapper = mountItem({ component: 'div', linkComponent: 'span' });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.find(`span.${styles.navLink}`).exists()).toBe(true);
  });

  it('applies itemClass and itemAttrs to the item', () => {
    const wrapper = mountItem({ itemClass: 'custom', itemAttrs: { 'data-test': 'item' } });
    expect(wrapper.classes()).toContain('custom');
    expect(wrapper.attributes('data-test')).toBe('item');
  });

  it('renders the icon slot', () => {
    const wrapper = mountItem({}, { default: () => 'Item', icon: () => h('i', { class: 'my-icon' }) });
    expect(wrapper.find(`.${styles.navLinkIcon} .my-icon`).exists()).toBe(true);
  });

  it('emits select with group and item ids', async () => {
    const wrapper = mountItem({ groupId: 'g', itemId: 'i' });
    await wrapper.find(`.${styles.navLink}`).trigger('click');
    expect(wrapper.emitted('select')![0]!.slice(1)).toEqual(['g', 'i']);
  });

  it('accepts numeric ids', async () => {
    const wrapper = mountItem({ groupId: 1, itemId: 2 });
    await wrapper.find(`.${styles.navLink}`).trigger('click');
    expect(wrapper.emitted('select')![0]!.slice(1)).toEqual([1, 2]);
  });

  it('defaults ouia-safe to true', () => {
    expect(mountItem().attributes('data-ouia-safe')).toBe('true');
  });

  it('logs an error with both to and a flyout', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      mountItem({ to: '/home', linkComponent: 'a' }, { default: () => 'Item', flyout: () => 'Flyout' });
      expect(error).toHaveBeenCalledWith('NavItem cannot have both "to" and "flyout" props.');
    } finally {
      error.mockRestore();
    }
  });

  it('prevents the default click action with preventDefault', async () => {
    const wrapper = mountItem({ preventDefault: true, href: '#' });
    const event = new MouseEvent('click', { cancelable: true, bubbles: true });
    wrapper.find(`.${styles.navLink}`).element.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  describe('flyout', () => {
    function mountFlyout() {
      return mount(PfNav, {
        slots: {
          default: () =>
            h(PfNavList, () =>
              h(
                PfNavItem,
                {},
                {
                  default: () => 'Parent',
                  flyout: () => h('ul', [h('li', [h('button', { class: 'sub' }, 'Sub')])]),
                },
              ),
            ),
        },
        global: { provide: { [SidebarOpenKey as symbol]: true } },
        attachTo: document.body,
      });
    }

    it('renders a button with a toggle icon and the flyout modifier', () => {
      const wrapper = mountFlyout();
      const item = wrapper.find(`li.${styles.navItem}`);

      expect(item.classes()).toContain(styles.modifiers.flyout);
      expect(item.find(`button.${styles.navLink} .${styles.navToggle} svg`).attributes('aria-hidden')).toBe('true');
      expect(document.body.querySelector('.sub')).toBeNull();
    });

    // the flyout button did not tell it opens a menu
    it('marks the button as a menu trigger reflecting the flyout state', async () => {
      const wrapper = mountFlyout();
      const button = wrapper.find(`button.${styles.navLink}`);
      expect(button.attributes('aria-haspopup')).toBe('menu');
      expect(button.attributes('aria-expanded')).toBe('false');

      await wrapper.find(`li.${styles.navItem}`).trigger('mouseover');
      expect(button.attributes('aria-expanded')).toBe('true');
    });

    // the nav CSS styles flyout menus inside the nav, which used to be rendered at the end of the body
    it('renders the flyout inside the nav with its z-index', async () => {
      const wrapper = mountFlyout();
      await wrapper.find(`li.${styles.navItem}`).trigger('mouseover');
      await flushPromises();
      const sub = document.body.querySelector<HTMLElement>('.sub')!;
      expect(wrapper.element.contains(sub)).toBe(true);
      expect(wrapper.find(`li.${styles.navItem}`).element.contains(sub)).toBe(false);
      expect(sub.closest<HTMLElement>('[style*="z-index"]')!.style.zIndex).toBe('9999');
    });

    it('opens with Enter', async () => {
      const wrapper = mountFlyout();
      await wrapper.find(`button.${styles.navLink}`).trigger('keydown', { key: 'Enter' });
      await flushPromises();
      expect(document.body.querySelector('.sub')).not.toBeNull();
    });

    it('shows the flyout on hover and emits showflyout', async () => {
      const wrapper = mountFlyout();

      await wrapper.find(`li.${styles.navItem}`).trigger('mouseover');
      await flushPromises();
      expect(document.body.querySelector('.sub')).not.toBeNull();
      expect(wrapper.findComponent(PfNavItem).emitted('showflyout')).toHaveLength(1);
    });

    it('opens with ArrowRight and closes with Escape', async () => {
      const wrapper = mountFlyout();
      const link = wrapper.find(`button.${styles.navLink}`);

      await link.trigger('keydown', { key: 'ArrowRight' });
      await flushPromises();
      expect(document.body.querySelector('.sub')).not.toBeNull();

      await link.trigger('keydown', { key: 'Escape' });
      await flushPromises();
      expect(document.body.querySelector('.sub')).toBeNull();
    });

    it('closes the flyout when clicking outside', async () => {
      const wrapper = mountFlyout();

      await wrapper.find(`li.${styles.navItem}`).trigger('mouseover');
      await flushPromises();
      document.body.click();
      await flushPromises();
      expect(document.body.querySelector('.sub')).toBeNull();
    });
  });
});

describe('NavExpandable', () => {
  function toggle(wrapper: VueWrapper) {
    return wrapper.find(`button.${styles.navLink}`);
  }

  it('renders a collapsed expandable section', () => {
    const wrapper = mount(PfNavExpandable, { props: { title: 'Section' }, slots: { default: () => h('li', 'Child') } });

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.navItem);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(toggle(wrapper).attributes('aria-expanded')).toBe('false');
    expect(toggle(wrapper).text()).toBe('Section');

    const section = wrapper.find(`section.${styles.navSubnav}`);
    expect(section.attributes('hidden')).toBeDefined();
    expect(section.attributes('inert')).toBeDefined();
    expect(section.attributes('aria-labelledby')).toBe(toggle(wrapper).attributes('id'));
    expect(section.find(`ul.${styles.navList}`).attributes('role')).toBe('list');
  });

  it('renders the expandable icon before the title', () => {
    const wrapper = mount(PfNavExpandable, { props: { title: 'Section', expandableIcon: true } });
    const children = toggle(wrapper).findAll(':scope > span');
    expect(children[0].classes()).toContain(styles.navLinkExpandableIcon);
    expect(children[0].find('svg').exists()).toBe(true);
    expect(children[1].classes()).toContain(styles.navLinkText);

    expect(
      mount(PfNavExpandable, { props: { title: 'Section' } })
        .find(`.${styles.navLinkExpandableIcon}`)
        .exists(),
    ).toBe(false);
  });

  it('renders the icon slot before the expandable icon and the title', () => {
    const wrapper = mount(PfNavExpandable, {
      props: { title: 'Section', expandableIcon: true },
      slots: { icon: () => h('i', { class: 'my-icon' }) },
    });
    const children = toggle(wrapper).findAll(':scope > span');
    expect(children[0].classes()).toContain(styles.navLinkIcon);
    expect(children[0].find('.my-icon').exists()).toBe(true);
    expect(children[1].classes()).toContain(styles.navLinkExpandableIcon);
    expect(children[2].classes()).toContain(styles.navLinkText);

    expect(
      mount(PfNavExpandable, { props: { title: 'Section' } })
        .find(`.${styles.navLinkIcon}`)
        .exists(),
    ).toBe(false);
  });

  it('renders the title slot', () => {
    const wrapper = mount(PfNavExpandable, { slots: { title: () => h('b', 'Bold') } });
    expect(toggle(wrapper).find('b').text()).toBe('Bold');
  });

  it('labels the section with srText instead of the toggle', () => {
    const wrapper = mount(PfNavExpandable, { props: { title: 'Section', srText: 'Hidden title', id: 'exp' } });

    expect(toggle(wrapper).attributes('id')).toBeUndefined();
    const heading = wrapper.find(`h2.${a11yStyles.screenReader}`);
    expect(heading.attributes('id')).toBe('exp');
    expect(heading.text()).toBe('Hidden title');
    expect(wrapper.find('section').attributes('aria-labelledby')).toBe('exp');
  });

  it('applies the current modifier when active', () => {
    const wrapper = mount(PfNavExpandable, { props: { active: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.current);
  });

  it('emits update:expanded with the group id and follows the expanded prop', async () => {
    const wrapper = mountWithModel(PfNavExpandable, 'expanded', { expanded: false, groupId: 'grp' });

    await toggle(wrapper).trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true, 'grp']]);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(toggle(wrapper).attributes('aria-expanded')).toBe('true');
    expect(wrapper.find('section').attributes('hidden')).toBeUndefined();
  });

  // an expanded prop without v-model used to stay stuck in its state
  it('toggles its own state seeded by the expanded prop', async () => {
    const wrapper = mount(PfNavExpandable, { props: { expanded: true, groupId: 'grp' } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);

    await toggle(wrapper).trigger('click');
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(wrapper.emitted('update:expanded')).toEqual([[false, 'grp']]);

    await toggle(wrapper).trigger('click');
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
  });

  it('follows changes of the expanded prop', async () => {
    const wrapper = mount(PfNavExpandable, { props: { expanded: false } });
    await wrapper.setProps({ expanded: true });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('section').attributes('inert')).toBeUndefined();
  });

  it('applies buttonAttrs to the toggle', () => {
    const wrapper = mount(PfNavExpandable, {
      props: { title: 'Section', buttonAttrs: { 'aria-label': 'Expandable Group 1' } },
    });
    expect(toggle(wrapper).attributes('aria-label')).toBe('Expandable Group 1');
  });

  it('defaults ouia-safe to true', () => {
    expect(mount(PfNavExpandable).attributes('data-ouia-safe')).toBe('true');
  });

  it('ignores clicks bubbling from child items', async () => {
    const wrapper = mount(PfNavExpandable, {
      slots: { default: () => h('li', [h('a', { class: 'child' }, 'Child')]) },
    });

    await wrapper.find('.child').trigger('click');
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
  });
});
