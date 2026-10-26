import { describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick } from 'vue';
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
import PfMenuSearchInput from '../../src/components/Menu/MenuSearchInput.vue';
import PfMenuContainer from '../../src/components/Menu/MenuContainer.vue';

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

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        styles.modifiers.plain,
        styles.modifiers.scrollable,
        styles.modifiers.flyout,
        'pf-m-nav',
      ]),
    );
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

    it('does not mark clicked items as selected when selected is not passed', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a', 'b') } });

      await itemButtons(wrapper)[1]!.trigger('click');
      await itemButtons(wrapper)[0]!.trigger('click');
      expect(wrapper.emitted('update:selected')).toEqual([['b'], ['a']]);
      expect(itemButtons(wrapper)[0]!.classes()).not.toContain(styles.modifiers.selected);
      expect(itemButtons(wrapper)[0]!.find(`.${styles.menuItemSelectIcon}`).exists()).toBe(false);
    });

    it('marks an item identified by its key as selected', () => {
      const wrapper = mount(PfMenu, {
        props: { selected: 'k' },
        slots: { default: () => [h(PfMenuItem, { key: 'k' }, () => 'K'), h(PfMenuItem, { key: 'j' }, () => 'J')] },
      });
      expect(itemButtons(wrapper)[0]!.classes()).toContain(styles.modifiers.selected);
      expect(itemButtons(wrapper)[1]!.classes()).not.toContain(styles.modifiers.selected);
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
  function mountItem(
    props: Record<string, unknown> = {},
    slots: Record<string, () => unknown> = { default: () => 'Item' },
  ) {
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
    // the first item is reachable with tab
    expect(button.attributes('tabindex')).toBe('0');
    expect(button.find(`.${styles.menuItemMain} .${styles.menuItemText}`).text()).toBe('Item');
  });

  describe('ariaDisabled', () => {
    it.each([
      ['button', {}],
      ['a', { to: '#link' }],
    ])('marks the %s as aria-disabled but keeps it enabled', (tag, props) => {
      const { menu } = mountItem({ ariaDisabled: true, ...props });

      expect(menu.find('li').classes()).toContain(styles.modifiers.ariaDisabled);
      const control = menu.find(`.${styles.menuItem}`);
      expect(control.element.tagName).toBe(tag.toUpperCase());
      expect(control.attributes('aria-disabled')).toBe('true');
      expect(control.attributes('disabled')).toBeUndefined();
    });

    it('does not select or emit click', async () => {
      const onSelect = vi.fn();
      const wrapper = mount(PfMenu, {
        props: { onSelect },
        slots: { default: () => h(PfMenuItem, { value: 'a', ariaDisabled: true, to: '#link' }, () => 'Item') },
      });

      const event = new MouseEvent('click', { bubbles: true, cancelable: true });
      wrapper.find(`.${styles.menuItem}`).element.dispatchEvent(event);
      await nextTick();
      expect(onSelect).not.toHaveBeenCalled();
      expect(wrapper.findComponent(PfMenuItem).emitted('click')).toBeUndefined();
      expect(event.defaultPrevented).toBe(true);
    });

    it('is not set by default', () => {
      const { menu } = mountItem();
      expect(menu.find('li').classes()).not.toContain(styles.modifiers.ariaDisabled);
      expect(menu.find(`.${styles.menuItem}`).attributes('aria-disabled')).toBeUndefined();
    });
  });

  describe('tooltip', () => {
    const tooltipAttrs = { appendTo: 'inline', animationDuration: 0, entryDelay: 0, exitDelay: 0 };

    // the tooltip needs its trigger to be in the document
    function mountItem(props: Record<string, unknown>, slots: Record<string, () => unknown>) {
      const menu = mount(PfMenu, { slots: { default: () => h(PfMenuItem, props, slots) }, attachTo: document.body });
      return { menu };
    }

    it('shows a tooltip when hovering the item', async () => {
      const { menu } = mountItem({ tooltip: 'Help text', tooltipAttrs }, { default: () => 'Item' });
      await flushPromises();

      menu.find(`.${styles.menuItem}`).element.dispatchEvent(new MouseEvent('mouseenter'));
      await flushPromises();
      const tooltip = menu.find('[role="tooltip"]');
      expect(tooltip.exists()).toBe(true);
      expect(tooltip.text()).toBe('Help text');
      menu.unmount();
    });

    it('renders the tooltip slot', async () => {
      const { menu } = mountItem({ tooltipAttrs }, { default: () => 'Item', tooltip: () => h('b', 'Rich help') });
      await flushPromises();

      menu.find(`.${styles.menuItem}`).element.dispatchEvent(new MouseEvent('mouseenter'));
      await flushPromises();
      expect(menu.find('[role="tooltip"] b').text()).toBe('Rich help');
      menu.unmount();
    });

    it('renders no tooltip by default', () => {
      const { menu } = mountItem({}, { default: () => 'Item' });
      expect(menu.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);
    });
  });

  it('renders the value when no default slot is given', () => {
    const { menu } = mountItem({ value: 'fallback' }, {});
    expect(menu.find(`.${styles.menuItemText}`).text()).toBe('fallback');
  });

  it('throws when used outside of a menu', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(() => mount(PfMenuItem, { slots: { default: () => 'Item' } })).toThrow(
      'MenuItems can only be used inside Menu components',
    );
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

    expect(menu.find('li').classes()).toEqual(
      expect.arrayContaining([
        styles.modifiers.currentPath,
        styles.modifiers.load,
        styles.modifiers.loading,
        styles.modifiers.danger,
      ]),
    );
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
    const { menu } = mountItem(
      { description: 'Desc', externalLink: true },
      {
        default: () => 'Item',
        icon: () => h('i', { class: 'my-icon' }),
      },
    );

    expect(menu.find(`.${styles.menuItemIcon} .my-icon`).exists()).toBe(true);
    expect(menu.find(`.${styles.menuItemDescription}`).text()).toBe('Desc');
    expect(menu.find(`.${styles.menuItemExternalIcon} svg`).exists()).toBe(true);
  });

  it('hides the item icons from assistive technologies', () => {
    const external = mountItem({ externalLink: true }).menu;
    expect(external.find(`.${styles.menuItemExternalIcon} svg`).attributes('aria-hidden')).toBe('true');
    const back = mountItem({ direction: 'up' }).menu;
    expect(back.find(`.${styles.menuItemToggleIcon} svg`).attributes('aria-hidden')).toBe('true');
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
      const wrapper = mount(PfMenu, {
        slots: { default: () => h(PfMenuItem, { check: true, value: 'a' }, () => 'A') },
      });

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
            h(
              PfMenuItem,
              { value: 'parent' },
              {
                default: () => 'Parent',
                'flyout-menu': () => h('div', { class: 'flyout' }, 'Sub'),
              },
            ),
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
      const wrapper = mount(PfMenu, {
        slots: { default: () => h(PfMenuItem, { value: 'a', favorited: false }, () => 'A') },
      });
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
        default: () =>
          h(
            PfMenuItem,
            { value: 'item-1' },
            {
              default: () => 'Item',
              actions: () => h(PfMenuItemAction, { actionId: 'act', 'aria-label': 'Do' }),
            },
          ),
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
        default: () =>
          h(
            PfMenuItem,
            { value: 'a', disabled: true },
            {
              default: () => 'Item',
              actions: () => h(PfMenuItemAction, { 'aria-label': 'Do' }),
            },
          ),
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

describe('Menu parity', () => {
  it('defaults ouiaSafe to true', () => {
    expect(mount(PfMenu).attributes('data-ouia-safe')).toBe('true');
  });

  describe('listbox role', () => {
    it('renders the list as a listbox with option items marking the selection', () => {
      const wrapper = mount(PfMenu, {
        props: { role: 'listbox', selected: 'b' },
        slots: { default: () => h(PfMenuList, { ariaMultiselectable: true }, items('a', 'b')) },
      });
      const list = wrapper.get('ul');
      expect(list.attributes('role')).toBe('listbox');
      expect(list.attributes('aria-multiselectable')).toBe('true');
      const [a, b] = itemButtons(wrapper);
      expect(a.attributes('role')).toBe('option');
      expect(a.attributes('aria-selected')).toBe('false');
      expect(b.attributes('aria-selected')).toBe('true');
    });

    it('keeps the menu role and no aria-selected by default', () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a') } });
      expect(wrapper.get('ul').attributes('role')).toBe('menu');
      expect(wrapper.get('ul').attributes('aria-multiselectable')).toBeUndefined();
      expect(itemButtons(wrapper)[0].attributes('aria-selected')).toBeUndefined();
    });
  });

  describe('keyboard', () => {
    it('makes only the first item tabbable', () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a', 'b') } });
      expect(itemButtons(wrapper).map(b => b.attributes('tabindex'))).toEqual(['0', '-1']);
    });

    it('moves the roving tabindex with the arrow keys', async () => {
      const wrapper = mount(PfMenu, { slots: { default: items('a', 'b', 'c') }, attachTo: document.body });
      const buttons = () => itemButtons(wrapper).map(b => b.element as HTMLElement);
      buttons()[0].focus();
      await wrapper.trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(buttons()[1]);
      expect(buttons()[1].tabIndex).toBe(0);
      expect(buttons()[0].tabIndex).toBe(-1);
      await wrapper.trigger('keydown', { key: 'ArrowUp' });
      await wrapper.trigger('keydown', { key: 'ArrowUp' });
      expect(document.activeElement).toBe(buttons()[2]);
      wrapper.unmount();
    });

    it('moves between an item and its actions with the horizontal arrow keys', async () => {
      const wrapper = mount(PfMenu, {
        slots: {
          default: () =>
            h(
              PfMenuItem,
              { value: 'a' },
              {
                default: () => 'A',
                actions: () => h(PfMenuItemAction, { 'aria-label': 'Act' }, { icon: () => h('i', { class: 'act' }) }),
              },
            ),
        },
        attachTo: document.body,
      });
      const button = itemButtons(wrapper)[0].element as HTMLElement;
      const action = wrapper.get(`.${styles.menuItemAction} button`).element as HTMLElement;
      button.focus();
      await wrapper.trigger('keydown', { key: 'ArrowRight' });
      expect(document.activeElement).toBe(action);
      await wrapper.trigger('keydown', { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(button);
      wrapper.unmount();
    });

    it('clicks the focused element with Enter and Space', async () => {
      const onSelect = vi.fn();
      const wrapper = mount(PfMenu, { props: { onSelect }, slots: { default: items('a') }, attachTo: document.body });
      const button = itemButtons(wrapper)[0].element as HTMLElement;
      button.focus();
      await wrapper.trigger('keydown', { key: 'Enter' });
      await wrapper.trigger('keydown', { key: ' ' });
      expect(onSelect).toHaveBeenCalledTimes(2);
      wrapper.unmount();
    });
  });

  it('renders the menu search input wrapper', () => {
    const wrapper = mount(PfMenuSearchInput, { slots: { default: () => h('input') } });
    expect(wrapper.classes()).toEqual([`${styles.menuSearch}-input`]);
  });

  it('renders a custom action icon and reports the action of item 0', async () => {
    const onActionClick = vi.fn();
    const wrapper = mount(PfMenu, {
      props: { onActionClick },
      slots: {
        default: () =>
          h(
            PfMenuItem,
            { value: 0 },
            {
              default: () => 'Zero',
              actions: () =>
                h(
                  PfMenuItemAction,
                  { 'aria-label': 'Act', actionId: 'code' },
                  { icon: () => h('i', { class: 'act' }) },
                ),
            },
          ),
      },
    });
    expect(wrapper.find(`.${styles.menuItemAction} .act`).exists()).toBe(true);
    await wrapper.get(`.${styles.menuItemAction} button`).trigger('click');
    expect(onActionClick).toHaveBeenCalledWith(expect.anything(), 0, 'code');
  });

  it('applies titleId to the group title', () => {
    const wrapper = mount(PfMenuGroup, { props: { label: 'Group', titleId: 'title' } });
    expect(wrapper.get(`.${styles.menuGroupTitle}`).attributes('id')).toBe('title');
  });

  it('opens external links in a new tab', () => {
    const wrapper = mount(PfMenu, {
      slots: { default: () => h(PfMenuItem, { to: '#', externalLink: true }, () => 'Link') },
    });
    expect(wrapper.get('a').attributes('target')).toBe('_blank');
  });

  describe('flyout', () => {
    function mountFlyout() {
      return mount(PfMenu, {
        props: { containsFlyout: true },
        slots: {
          default: () =>
            h(
              PfMenuItem,
              { value: 'parent' },
              {
                default: () => 'Parent',
                'flyout-menu': () => h(PfMenu, () => h(PfMenuItem, { value: 'child' }, () => 'Child')),
              },
            ),
        },
        attachTo: document.body,
      });
    }

    it('renders the toggle icon and the popup attributes of a flyout trigger', () => {
      const wrapper = mountFlyout();
      const trigger = itemButtons(wrapper)[0];
      expect(trigger.find(`.${styles.menuItemToggleIcon}`).exists()).toBe(true);
      expect(trigger.attributes('aria-haspopup')).toBe('menu');
      expect(trigger.attributes('aria-expanded')).toBe('false');
      wrapper.unmount();
    });

    it('opens with ArrowRight focusing the first flyout item, and closes with Escape', async () => {
      const wrapper = mountFlyout();
      const trigger = itemButtons(wrapper)[0].element as HTMLElement;
      trigger.focus();
      trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await flushPromises();
      const child = wrapper.findAll(`.${styles.menuItem}`).find(i => i.text() === 'Child');
      expect(child?.element).toBe(document.activeElement);

      (document.activeElement as HTMLElement).dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
      );
      await flushPromises();
      expect(wrapper.findAll(`.${styles.menuItem}`).some(i => i.text() === 'Child')).toBe(false);
      expect(document.activeElement).toBe(trigger);
      wrapper.unmount();
    });
  });
});

describe('Drilldown', () => {
  function mountDrilldown(props: Record<string, unknown> = {}) {
    return mount(PfMenu, {
      props: { id: 'root', containsDrilldown: true, ...props },
      slots: {
        default: () =>
          h(PfMenuContent, () =>
            h(PfMenuList, () => [
              h(
                PfMenuItem,
                { value: 'start', direction: 'down' },
                {
                  default: () => 'Start rollout',
                  'drilldown-menu': () =>
                    h(PfDrilldownMenu, { id: 'sub' }, () => [
                      h(PfMenuItem, { value: 'back', direction: 'up' }, () => 'Back'),
                      h(PfMenuItem, { value: 'child' }, () => 'Child'),
                    ]),
                },
              ),
              h(PfMenuItem, { value: 'edit' }, () => 'Edit'),
            ]),
          ),
      },
      attachTo: document.body,
    });
  }

  const startItem = (wrapper: VueWrapper) => wrapper.get(`#root > .${styles.menuContent} > ul > li`);

  it('renders the drilldown modifier and the submenu inside its item', () => {
    const wrapper = mountDrilldown();
    expect(wrapper.classes()).toContain(styles.modifiers.drilldown);
    const sub = startItem(wrapper).get('#sub');
    expect(sub.classes()).toContain(styles.menu);
    expect(sub.classes()).not.toContain(styles.modifiers.drilledIn);
    expect(startItem(wrapper).find(`.${styles.menuItemToggleIcon}`).exists()).toBe(true);
    wrapper.unmount();
  });

  it('drills into the submenu and out of it, managing the drilldown state', async () => {
    const wrapper = mountDrilldown();
    await startItem(wrapper).get(`.${styles.menuItem}`).trigger('click');

    expect(wrapper.emitted('drillIn')?.[0].slice(1)).toEqual(['root', 'sub', 'start']);
    expect(wrapper.emitted('update:drilledInMenus')?.[0]).toEqual([['root']]);
    expect(wrapper.emitted('update:drilldownItemPath')?.[0]).toEqual([['start']]);
    expect(wrapper.emitted('update:activeMenu')?.[0]).toEqual(['sub']);
    expect(wrapper.classes()).toContain(styles.modifiers.drilledIn);
    expect(startItem(wrapper).classes()).toContain(styles.modifiers.currentPath);
    expect(startItem(wrapper).get(`.${styles.menuItem}`).attributes('aria-expanded')).toBe('true');

    const back = wrapper.findAll(`.${styles.menuItem}`).find(i => i.text().includes('Back'))!;
    await back.trigger('click');
    expect(wrapper.emitted('drillOut')?.[0].slice(1)).toEqual(['root', 'back']);
    expect(wrapper.emitted('update:drilledInMenus')?.[1]).toEqual([[]]);
    expect(wrapper.emitted('update:activeMenu')?.[1]).toEqual(['root']);
    expect(wrapper.classes()).not.toContain(styles.modifiers.drilledIn);
    expect(startItem(wrapper).classes()).not.toContain(styles.modifiers.currentPath);
    wrapper.unmount();
  });

  it('starts drilled in from the models', () => {
    const wrapper = mountDrilldown({ drilledInMenus: ['root'], drilldownItemPath: ['start'], activeMenu: 'sub' });
    expect(wrapper.classes()).toContain(styles.modifiers.drilledIn);
    expect(startItem(wrapper).classes()).toContain(styles.modifiers.currentPath);
    wrapper.unmount();
  });

  it('focuses the first item of the submenu after the transition', async () => {
    const wrapper = mountDrilldown();
    await startItem(wrapper).get(`.${styles.menuItem}`).trigger('click');
    wrapper.get('#sub').element.dispatchEvent(new Event('transitionend', { bubbles: true }));
    const back = wrapper.findAll(`.${styles.menuItem}`).find(i => i.text().includes('Back'))!;
    expect(document.activeElement).toBe(back.element);
    wrapper.unmount();
  });

  it('only navigates the items of the active menu with the arrow keys', async () => {
    const wrapper = mountDrilldown({ drilledInMenus: ['root'], drilldownItemPath: ['start'], activeMenu: 'sub' });
    const subItems = wrapper
      .get('#sub')
      .findAll(`.${styles.menuItem}`)
      .map(i => i.element as HTMLElement);
    subItems[0].focus();
    await wrapper.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(subItems[1]);
    await wrapper.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(subItems[0]);
    wrapper.unmount();
  });

  it('sets the root content height from the active menu', async () => {
    const clientHeight = vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(function (
      this: HTMLElement,
    ) {
      return this.closest('#sub') ? 80 : 200;
    });
    const wrapper = mountDrilldown({ drilledInMenus: ['root'], drilldownItemPath: ['start'], activeMenu: 'sub' });
    await flushPromises();
    expect(wrapper.emitted('getMenuHeight')).toEqual(expect.arrayContaining([['sub', 80]]));
    const rootContent = wrapper.get(`#root > .${styles.menuContent}`).element as HTMLElement;
    expect(rootContent.style.getPropertyValue('--pf-v6-c-menu__content--Height')).toBe('80px');
    clientHeight.mockRestore();
    wrapper.unmount();
  });
});

describe('MenuContainer', () => {
  function mountContainer(props: Record<string, unknown> = {}) {
    return mount(
      defineComponent({
        components: { PfMenuContainer, PfMenu, PfMenuItem },
        props: ['initialOpen'],
        data: () => ({ open: false }),
        template: `
          <pf-menu-container v-model:open="open" append-to="inline" v-bind="$attrs">
            <template #toggle="{ toggle }"><button class="toggle" @click="toggle">Toggle</button></template>
            <pf-menu><pf-menu-item value="a">A</pf-menu-item><pf-menu-item value="b">B</pf-menu-item></pf-menu>
          </pf-menu-container>
          <button class="outside">Outside</button>`,
      }),
      { attrs: props, attachTo: document.body },
    );
  }

  it('toggles the menu from the toggle slot and closes it on outside clicks', async () => {
    const wrapper = mountContainer();
    await wrapper.get('.toggle').trigger('click');
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(true);
    (wrapper.get('.outside').element as HTMLElement).click();
    await nextTick();
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(false);
    wrapper.unmount();
  });

  it('positions the menu itself as the floating element', async () => {
    const wrapper = mountContainer();
    await wrapper.get('.toggle').trigger('click');
    await nextTick();
    const menu = wrapper.get(`.${styles.menu}`).element as HTMLElement;
    expect(menu.style.position).toBe('absolute');
    expect(menu.style.transform).toContain('translate3d');
    wrapper.unmount();
  });

  it('closes with Escape focusing the toggle, and focuses the first item with ArrowDown from the toggle', async () => {
    const wrapper = mountContainer();
    const toggle = wrapper.get('.toggle').element as HTMLElement;
    await wrapper.get('.toggle').trigger('click');
    toggle.focus();
    toggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    expect(document.activeElement).toBe(wrapper.findAll(`.${styles.menuItem}`)[0].element);

    (document.activeElement as HTMLElement).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    await nextTick();
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(false);
    expect(document.activeElement).toBe(toggle);
    wrapper.unmount();
  });
});
