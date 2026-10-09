import { describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfMenu from '../../src/components/Menu/Menu.vue';
import PfMenuContent from '../../src/components/Menu/MenuContent.vue';
import PfMenuList from '../../src/components/Menu/MenuList.vue';
import PfMenuGroup from '../../src/components/Menu/MenuGroup.vue';
import PfMenuItem from '../../src/components/Menu/MenuItem.vue';
import PfMenuItemAction from '../../src/components/Menu/MenuItemAction.vue';
import PfMenuFooter from '../../src/components/Menu/MenuFooter.vue';
import PfMenuInput from '../../src/components/Menu/MenuInput.vue';
import PfMenuBreadcrumb from '../../src/components/Menu/MenuBreadcrumb.vue';
import PfDrilldownMenu from '../../src/components/Menu/DrilldownMenu.vue';
import PfTextInput from '../../src/components/TextInput.vue';

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

function items(...values: string[]) {
  return () => values.map(value => h(PfMenuItem, { key: value, value }, () => `Item ${value}`));
}

function itemButtons(wrapper: VueWrapper) {
  return wrapper.findAll(`.${styles.menuList} > li > .${styles.menuItem}`);
}

describe('Menu', () => {
  it('renders a menu root with ouia attributes', () => {
    const wrapper = mount(PfMenu, { slots: { default: items('a') } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.menu);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Menu');
    expect(wrapper.attributes('data-ouia-component-id')).toMatch(/^OUIA-Generated-Menu-/);
  });

  it('applies plain, scrollable, flyout and nav modifiers', () => {
    const wrapper = mount(PfMenu, { props: { plain: true, scrollable: true, containsFlyout: true, navFlyout: true } });

    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.plain,
      styles.modifiers.scrollable,
      styles.modifiers.flyout,
      'pf-m-nav',
    ]));
  });

  it('automatically wraps items in a content and list', () => {
    const wrapper = mount(PfMenu, { slots: { default: items('a', 'b') } });

    const content = wrapper.find(`.${styles.menu} > .${styles.menuContent}`);
    expect(content.exists()).toBe(true);
    const list = content.find(`ul.${styles.menuList}`);
    expect(list.attributes('role')).toBe('menu');
    expect(list.findAll(`li.${styles.menuListItem}`)).toHaveLength(2);
  });

  it('wraps text inputs in a menu search area', () => {
    const wrapper = mount(PfMenu, {
      slots: { default: () => [h(PfTextInput, { 'aria-label': 'Search' }), ...items('a')()] },
    });

    expect(wrapper.find(`.${styles.menuSearch} input`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.menuContent} .${styles.menuSearch}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.menuContent} li`).exists()).toBe(true);
  });

  it('does not double wrap explicit content and lists', () => {
    const wrapper = mount(PfMenu, {
      slots: { default: () => h(PfMenuContent, () => h(PfMenuList, items('a'))) },
    });

    expect(wrapper.findAll(`.${styles.menuContent}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${styles.menuList}`)).toHaveLength(1);
  });

  describe('selection', () => {
    it('emits select with the item value on click', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a', 'b') } });

      await itemButtons(wrapper)[1]!.trigger('click');
      expect(wrapper.emitted('select')).toHaveLength(1);
      expect(wrapper.emitted('select')![0]![1]).toBe('b');
      expect(wrapper.emitted('update:selected')).toEqual([['b']]);
    });

    it('toggles single selection and marks the selected item', async () => {
      const wrapper = mountWithModel(PfMenu, 'selected', { selected: 'a' }, { slots: { default: items('a', 'b') } });

      expect(itemButtons(wrapper)[0]!.classes()).toContain(styles.modifiers.selected);
      expect(itemButtons(wrapper)[0]!.find(`.${styles.menuItemSelectIcon}`).exists()).toBe(true);
      expect(itemButtons(wrapper)[1]!.classes()).not.toContain(styles.modifiers.selected);

      await itemButtons(wrapper)[1]!.trigger('click');
      expect(wrapper.props('selected')).toBe('b');
      expect(itemButtons(wrapper)[1]!.classes()).toContain(styles.modifiers.selected);
      expect(itemButtons(wrapper)[0]!.classes()).not.toContain(styles.modifiers.selected);

      await itemButtons(wrapper)[1]!.trigger('click');
      expect(wrapper.props('selected')).toBeNull();
    });

    it('adds and removes values for multiple selection', async () => {
      const wrapper = mountWithModel(PfMenu, 'selected', { selected: ['a'] }, { slots: { default: items('a', 'b') } });

      await itemButtons(wrapper)[1]!.trigger('click');
      expect(wrapper.props('selected')).toEqual(['a', 'b']);

      await itemButtons(wrapper)[0]!.trigger('click');
      expect(wrapper.props('selected')).toEqual(['b']);
      expect(itemButtons(wrapper)[0]!.classes()).not.toContain(styles.modifiers.selected);
      expect(itemButtons(wrapper)[1]!.classes()).toContain(styles.modifiers.selected);
    });

    it('marks the item matching activeItemId as current', () => {
      const wrapper = mount(PfMenu, { props: { activeItemId: 'b' }, slots: { default: items('a', 'b') } });

      expect(itemButtons(wrapper)[0]!.attributes('aria-current')).toBeUndefined();
      expect(itemButtons(wrapper)[1]!.attributes('aria-current')).toBe('true');
    });

    it('follows changes of activeItemId', async () => {
      const wrapper = mount(PfMenu, { props: { activeItemId: 'a' }, slots: { default: items('a', 'b') } });
      await wrapper.setProps({ activeItemId: 'b' });

      expect(itemButtons(wrapper)[0]!.attributes('aria-current')).toBeUndefined();
      expect(itemButtons(wrapper)[1]!.attributes('aria-current')).toBe('true');
    });
  });

  describe('keyboard navigation', () => {
    it('moves focus between enabled items with arrow keys', async () => {
      const wrapper = mount(PfMenu, {
        slots: {
          default: () => [
            h(PfMenuItem, { value: 'a' }, () => 'A'),
            h(PfMenuItem, { value: 'b', disabled: true }, () => 'B'),
            h(PfMenuItem, { value: 'c' }, () => 'C'),
          ],
        },
        attachTo: document.body,
      });
      await nextTick();
      const buttons = itemButtons(wrapper);

      await wrapper.trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(buttons[0]!.element);

      await buttons[0]!.trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(buttons[2]!.element);

      await buttons[2]!.trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(buttons[0]!.element);

      await buttons[0]!.trigger('keydown', { key: 'ArrowUp' });
      expect(document.activeElement).toBe(buttons[2]!.element);
      wrapper.unmount();
    });

    it('focuses the last item on ArrowUp when nothing is focused', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a', 'b', 'c') }, attachTo: document.body });
      await nextTick();

      await wrapper.trigger('keydown', { key: 'ArrowUp' });
      expect(document.activeElement).toBe(itemButtons(wrapper)[2]!.element);
      wrapper.unmount();
    });

    it('ignores other keys', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a') }, attachTo: document.body });
      await nextTick();

      await wrapper.trigger('keydown', { key: 'Enter' });
      expect(document.activeElement).toBe(document.body);
      wrapper.unmount();
    });
  });

  describe('favorites', () => {
    it('renders a favorites group with a copy of favorited items', async () => {
      const wrapper = mount(PfMenu, {
        slots: {
          default: () => [
            h(PfMenuItem, { value: 'a', favorited: true }, () => 'A'),
            h(PfMenuItem, { value: 'b', favorited: false }, () => 'B'),
          ],
        },
        attachTo: document.body,
      });
      await nextTick();
      await nextTick();

      const group = wrapper.find(`.${styles.menuGroup}`);
      expect(group.find(`.${styles.menuGroupTitle}`).text()).toBe('Favorites');
      expect(group.findAll('li')).toHaveLength(1);
      expect(group.find('li').text()).toContain('A');
      wrapper.unmount();
    });

    it('uses a custom favoritesLabel', async () => {
      const wrapper = mount(PfMenu, {
        props: { favoritesLabel: 'Starred' },
        slots: { default: () => h(PfMenuItem, { value: 'a', favorited: true }, () => 'A') },
        attachTo: document.body,
      });
      await nextTick();

      expect(wrapper.find(`.${styles.menuGroupTitle}`).text()).toBe('Starred');
      wrapper.unmount();
    });

    it('does not render a favorites group when nothing is favorited', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a') } });
      await nextTick();
      expect(wrapper.find(`.${styles.menuGroup}`).exists()).toBe(false);
    });
  });
});

describe('MenuContent', () => {
  it('renders the content container with height variables', () => {
    const wrapper = mount(PfMenuContent, { props: { menuHeight: '100px', maxMenuHeight: '200px' } });

    expect(wrapper.classes()).toContain(styles.menuContent);
    expect(wrapper.attributes('style')).toContain('--pf-v6-c-menu__content--Height: 100px');
    expect(wrapper.attributes('style')).toContain('--pf-v6-c-menu__content--MaxHeight: 200px');
  });
});

describe('MenuList', () => {
  it('renders a menu role list with its slot', () => {
    const wrapper = mount(PfMenuList, { slots: { default: () => h('li', 'Item') } });

    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.attributes('role')).toBe('menu');
    expect(wrapper.classes()).toContain(styles.menuList);
    expect(wrapper.text()).toBe('Item');
  });
});

describe('MenuGroup', () => {
  it('renders a section with a heading label', () => {
    const wrapper = mount(PfMenuGroup, { props: { label: 'Group' } });

    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.menuGroup);
    const title = wrapper.find(`.${styles.menuGroupTitle}`);
    expect(title.element.tagName).toBe('H1');
    expect(title.text()).toBe('Group');
  });

  it('uses labelHeadingLevel and the label slot', () => {
    const wrapper = mount(PfMenuGroup, {
      props: { labelHeadingLevel: 'h3' },
      slots: { label: () => h('em', 'Custom') },
    });

    expect(wrapper.find(`h3.${styles.menuGroupTitle} em`).text()).toBe('Custom');
  });

  it('omits the title without a label', () => {
    const wrapper = mount(PfMenuGroup);
    expect(wrapper.find(`.${styles.menuGroupTitle}`).exists()).toBe(false);
  });

  it('wraps items in a menu list', () => {
    const wrapper = mount(PfMenu, { slots: { default: () => h(PfMenuGroup, { label: 'G' }, items('a')) } });
    expect(wrapper.find(`.${styles.menuGroup} > ul.${styles.menuList} > li`).exists()).toBe(true);
  });
});

describe('MenuItem', () => {
  function mountItem(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = { default: () => 'Item' }) {
    const wrapper = mount(PfMenu, {
      slots: { default: () => h(PfMenuItem, props, slots) },
    });
    return { menu: wrapper, item: wrapper.findComponent(PfMenuItem) };
  }

  it('renders a list item with a menuitem button', () => {
    const { menu } = mountItem();
    const li = menu.find('li');

    expect(li.classes()).toContain(styles.menuListItem);
    expect(li.attributes('role')).toBe('none');
    const button = li.find(`.${styles.menuItem}`);
    expect(button.element.tagName).toBe('BUTTON');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('role')).toBe('menuitem');
    expect(button.attributes('tabindex')).toBe('-1');
    expect(button.find(`.${styles.menuItemMain} .${styles.menuItemText}`).text()).toBe('Item');
  });

  it('renders the value when no default slot is given', () => {
    const { menu } = mountItem({ value: 'fallback' }, {});
    expect(menu.find(`.${styles.menuItemText}`).text()).toBe('fallback');
  });

  it('throws when used outside of a menu', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(() => mount(PfMenuItem, { slots: { default: () => 'Item' } })).toThrow('MenuItems can only be used inside Menu components');
  });

  it('renders as a link when given to', () => {
    const { menu } = mountItem({ to: '/path', target: '_blank', download: 'file', referrerpolicy: 'no-referrer' });
    const a = menu.find(`a.${styles.menuItem}`);

    expect(a.attributes('href')).toBe('/path');
    expect(a.attributes('target')).toBe('_blank');
    expect(a.attributes('download')).toBe('file');
    expect(a.attributes('referrerpolicy')).toBe('no-referrer');
    expect(a.attributes('type')).toBeUndefined();
  });

  it('renders a custom component', () => {
    const { menu } = mountItem({ component: 'div' });
    expect(menu.find(`div.${styles.menuItem}`).exists()).toBe(true);
  });

  it('applies disabled state to buttons and aria-disabled to links', () => {
    const { menu } = mountItem({ disabled: true });
    expect(menu.find('li').classes()).toContain(styles.modifiers.disabled);
    expect(menu.find(`.${styles.menuItem}`).attributes('disabled')).toBeDefined();

    const { menu: link } = mountItem({ disabled: true, to: '#' });
    expect(link.find('a').attributes('disabled')).toBeUndefined();
    expect(link.find('a').attributes('aria-disabled')).toBe('true');
  });

  it('applies state modifiers on the list item', () => {
    const { menu } = mountItem({ onPath: true, loadButton: true, loading: true, danger: true });

    expect(menu.find('li').classes()).toEqual(expect.arrayContaining([
      styles.modifiers.currentPath,
      styles.modifiers.load,
      styles.modifiers.loading,
      styles.modifiers.danger,
    ]));
    expect(menu.find(`.${styles.menuItem}`).attributes('aria-expanded')).toBe('true');
  });

  it('applies the focus modifier and focuses the item when focused', async () => {
    const wrapper = mount(PfMenu, {
      slots: { default: () => h(PfMenuItem, { focused: true }, () => 'Item') },
      attachTo: document.body,
    });
    await nextTick();
    await nextTick();

    expect(wrapper.find('li').classes()).toContain(styles.modifiers.focus);
    expect(document.activeElement).toBe(wrapper.find(`.${styles.menuItem}`).element);
    wrapper.unmount();
  });

  it('honors the selected prop over the menu selection', () => {
    const { menu } = mountItem({ value: 'a', selected: true });
    expect(menu.find(`.${styles.menuItem}`).classes()).toContain(styles.modifiers.selected);
  });

  it('sets aria-current from the active prop', () => {
    expect(mountItem({ active: true }).menu.find(`.${styles.menuItem}`).attributes('aria-current')).toBe('page');
    expect(mountItem({ active: false }).menu.find(`.${styles.menuItem}`).attributes('aria-current')).toBeUndefined();
  });

  it('renders icon, description and external link icon', () => {
    const { menu } = mountItem({ description: 'Desc', externalLink: true }, {
      default: () => 'Item',
      icon: () => h('i', { class: 'my-icon' }),
    });

    expect(menu.find(`.${styles.menuItemIcon} .my-icon`).exists()).toBe(true);
    expect(menu.find(`.${styles.menuItemDescription}`).text()).toBe('Desc');
    expect(menu.find(`.${styles.menuItemExternalIcon} svg`).exists()).toBe(true);
  });

  it('renders the description slot', () => {
    const { menu } = mountItem({}, { default: () => 'Item', description: () => 'Slot desc' });
    expect(menu.find(`.${styles.menuItemDescription}`).text()).toBe('Slot desc');
  });

  it('renders a back toggle icon and hides the description for direction up', () => {
    const { menu } = mountItem({ direction: 'up', description: 'Desc' });
    expect(menu.find(`.${styles.menuItemMain} > .${styles.menuItemToggleIcon}:first-child svg`).exists()).toBe(true);
    expect(menu.find(`.${styles.menuItemDescription}`).exists()).toBe(false);
  });

  it('renders a hidden input when given a name', () => {
    const { menu } = mountItem({ name: 'field', value: 'v' });
    const input = menu.find('input[type="hidden"]');
    expect(input.attributes('name')).toBe('field');
    expect(input.attributes('value')).toBe('v');
  });

  it('emits click when clicked', async () => {
    const { menu, item } = mountItem({ value: 'a' });
    await menu.find(`.${styles.menuItem}`).trigger('click');
    expect(item.emitted('click')).toHaveLength(1);
  });

  it('forwards attributes to the list item', () => {
    const { menu } = mountItem({ 'data-test': 'item' });
    expect(menu.find('li').attributes('data-test')).toBe('item');
  });

  it('renders the actions slot', () => {
    const { menu } = mountItem({}, { default: () => 'Item', actions: () => h('span', { class: 'act' }) });
    expect(menu.find('li > .act').exists()).toBe(true);
  });

  describe('check', () => {
    it('renders a checkbox inside a label', async () => {
      const { menu } = mountItem({ check: true, value: 'a', checkName: 'chk' });
      const li = menu.find('li');

      expect(li.attributes('role')).toBe('menuitem');
      const label = li.find(`label.${styles.menuItem}`);
      expect(label.attributes('role')).toBeUndefined();
      const input = label.find(`.${styles.menuItemCheck} input[type="checkbox"]`);
      expect(input.attributes('name')).toBe('chk');
      expect(label.attributes('for')).toBeUndefined();
    });

    it('selects the item through the checkbox change', async () => {
      const wrapper = mount(PfMenu, { slots: { default: () => h(PfMenuItem, { check: true, value: 'a' }, () => 'A') } });

      await wrapper.find('input[type="checkbox"]').setValue(true);
      expect(wrapper.emitted('select')).toHaveLength(1);
      expect(wrapper.emitted('select')![0]![1]).toBe('a');
      expect(wrapper.emitted('update:selected')).toEqual([['a']]);
    });

    it('does not apply the selected modifier to checked items', () => {
      const { menu } = mountItem({ check: true, selected: true });
      expect(menu.find(`.${styles.menuItem}`).classes()).not.toContain(styles.modifiers.selected);
      expect((menu.find('input[type="checkbox"]').element as HTMLInputElement).checked).toBe(true);
    });
  });

  describe('flyout', () => {
    function mountFlyout() {
      return mount(PfMenu, {
        props: { containsFlyout: true },
        slots: {
          default: () => [
            h(PfMenuItem, { value: 'parent' }, {
              default: () => 'Parent',
              'flyout-menu': () => h('div', { class: 'flyout' }, 'Sub'),
            }),
            h(PfMenuItem, { value: 'other' }, () => 'Other'),
          ],
        },
      });
    }

    it('renders no menuitem role on the flyout trigger and hides the flyout initially', () => {
      const wrapper = mountFlyout();
      const trigger = itemButtons(wrapper)[0]!;

      expect(trigger.attributes('role')).toBeUndefined();
      expect(wrapper.find('.flyout').exists()).toBe(false);
    });

    it('renders a toggle icon for direction down', () => {
      const wrapper = mount(PfMenu, {
        slots: {
          default: () => h(PfMenuItem, { direction: 'down' }, { default: () => 'P', 'flyout-menu': () => h('div') }),
        },
      });
      expect(wrapper.find(`.${styles.menuItemToggleIcon} svg`).exists()).toBe(true);
    });

    it('emits showFlyout when clicked', async () => {
      const wrapper = mountFlyout();
      await itemButtons(wrapper)[0]!.trigger('click');
      expect(wrapper.findAllComponents(PfMenuItem)[0]!.emitted('showFlyout')).toHaveLength(1);
    });

    it('shows the flyout on click and hover, hides on hovering another item', async () => {
      const wrapper = mountFlyout();
      const item = wrapper.findAllComponents(PfMenuItem)[0]!;

      await itemButtons(wrapper)[0]!.trigger('click');
      expect(wrapper.find('.flyout').exists()).toBe(true);
      expect(itemButtons(wrapper)[0]!.attributes('aria-expanded')).toBe('true');
      expect(item.emitted('showFlyout')).toHaveLength(1);

      await wrapper.findAll('li')[1]!.trigger('mouseover');
      expect(wrapper.find('.flyout').exists()).toBe(false);

      await wrapper.findAll('li')[0]!.trigger('mouseover');
      expect(wrapper.find('.flyout').exists()).toBe(true);
    });
  });

  describe('favorited', () => {
    it('renders a favorite action toggling update:favorited', async () => {
      const wrapper = mount(PfMenu, { slots: { default: () => h(PfMenuItem, { value: 'a', favorited: false }, () => 'A') } });
      const item = wrapper.findComponent(PfMenuItem);
      const action = wrapper.find(`.${styles.menuItemAction}`);

      expect(action.classes()).toContain('pf-m-favorite');
      expect(action.classes()).not.toContain(styles.modifiers.favorited);
      expect(action.find('button').attributes('aria-label')).toBe('not starred');

      await action.find('button').trigger('click');
      expect(item.emitted('update:favorited')).toEqual([[true]]);
    });

    it('does not render a favorite action when favorited is undefined', () => {
      const { menu } = mountItem();
      expect(menu.find(`.${styles.menuItemAction}`).exists()).toBe(false);
    });
  });
});

describe('MenuItemAction', () => {
  function mountAction(props: Record<string, unknown> = {}) {
    const wrapper = mount(PfMenu, {
      slots: { default: () => h(PfMenuItem, { value: 'a' }, { actions: () => h(PfMenuItemAction, props) }) },
    });
    return wrapper.findComponent(PfMenuItemAction);
  }

  it('renders a plain button', () => {
    const wrapper = mountAction({ 'aria-label': 'Action' });

    expect(wrapper.classes()).toContain(styles.menuItemAction);
    const button = wrapper.find('button');
    expect(button.attributes('tabindex')).toBe('-1');
    expect(button.attributes('aria-label')).toBe('Action');
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
  });

  it('renders the action button with the menuitem role', () => {
    expect(mountAction().find('button').attributes('role')).toBe('menuitem');
  });

  it('renders a star icon and favorited modifier', () => {
    const wrapper = mountAction({ favorited: true });

    expect(wrapper.classes()).toContain('pf-m-favorite');
    expect(wrapper.classes()).toContain(styles.modifiers.favorited);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  it('calls onActionClick on the menu with the item id and action id', async () => {
    const onActionClick = vi.fn();
    const wrapper = mount(PfMenu, {
      props: { onActionClick },
      slots: {
        default: () => h(PfMenuItem, { value: 'item-1' }, {
          default: () => 'Item',
          actions: () => h(PfMenuItemAction, { actionId: 'act', 'aria-label': 'Do' }),
        }),
      },
    });

    await wrapper.find(`.${styles.menuItemAction} button`).trigger('click');
    expect(onActionClick).toHaveBeenCalledTimes(1);
    expect(onActionClick.mock.calls[0]![1]).toBe('item-1');
    expect(onActionClick.mock.calls[0]![2]).toBe('act');
    expect(wrapper.findComponent(PfMenuItemAction).emitted('click')).toHaveLength(1);
  });

  it('is disabled when the parent item is disabled', () => {
    const wrapper = mount(PfMenu, {
      slots: {
        default: () => h(PfMenuItem, { value: 'a', disabled: true }, {
          default: () => 'Item',
          actions: () => h(PfMenuItemAction, { 'aria-label': 'Do' }),
        }),
      },
    });

    expect(wrapper.find(`.${styles.menuItemAction} button`).attributes('disabled')).toBeDefined();
  });
});

describe('MenuFooter', () => {
  it('renders a footer container with its slot', () => {
    const wrapper = mount(PfMenuFooter, { slots: { default: () => 'Footer' } });
    expect(wrapper.classes()).toContain(styles.menuFooter);
    expect(wrapper.text()).toBe('Footer');
  });
});

describe('MenuInput', () => {
  it('renders a search container with its slot', () => {
    const wrapper = mount(PfMenuInput, { slots: { default: () => h('input') } });
    expect(wrapper.classes()).toContain(styles.menuSearch);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});

describe('MenuBreadcrumb', () => {
  it('renders a breadcrumb container with its slot', () => {
    const wrapper = mount(PfMenuBreadcrumb, { slots: { default: () => 'Crumbs' } });
    expect(wrapper.classes()).toContain(styles.menuBreadcrumb);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/MenuBreadcrumb');
    expect(wrapper.text()).toBe('Crumbs');
  });
});

describe('DrilldownMenu', () => {
  it('renders a nested menu with content and list', () => {
    const wrapper = mount(PfDrilldownMenu, { slots: { default: items('a') } });

    expect(wrapper.classes()).toContain(styles.menu);
    expect(wrapper.find(`.${styles.menuContent} > ul.${styles.menuList} > li`).exists()).toBe(true);
    expect(wrapper.findAll(`.${styles.menuList}`)).toHaveLength(1);
  });
});
