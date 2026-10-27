import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils';
import { h, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfDualListSelector from '../../src/components/DualListSelector/DualListSelector.vue';
import PfDualListSelectorPane from '../../src/components/DualListSelector/DualListSelectorPane.vue';
import PfDualListSelectorList from '../../src/components/DualListSelector/DualListSelectorList.vue';
import PfDualListSelectorListItem from '../../src/components/DualListSelector/DualListSelectorListItem.vue';
import PfDualListSelectorControlsWrapper from '../../src/components/DualListSelector/DualListSelectorControlsWrapper.vue';
import PfDualListSelectorControl from '../../src/components/DualListSelector/DualListSelectorControl.vue';
import PfDualListSelectorTree from '../../src/components/DualListSelector/DualListSelectorTree.vue';
import PfSearchInput from '../../src/components/SearchInput/SearchInput.vue';
import type { DualListSelectorTreeItemData } from '../../src/components/DualListSelector/common';

enableAutoUnmount(afterEach);

const treeData = (): DualListSelectorTreeItemData[] => [
  {
    id: 'fruits',
    text: 'Fruits',
    checked: false,
    badge: true,
    children: [
      { id: 'apple', text: 'Apple', checked: true },
      {
        id: 'berries',
        text: 'Berries',
        checked: null,
        children: [
          { id: 'blueberry', text: 'Blueberry', checked: false },
          { id: 'strawberry', text: 'Strawberry', checked: false },
        ],
      },
    ],
  },
  { id: 'bread', text: 'Bread', checked: false },
];

function mountTree(props: Record<string, unknown> = {}, selectorProps: Record<string, unknown> = {}) {
  return mount(PfDualListSelector, {
    props: { tree: true, ...selectorProps },
    slots: {
      default: () =>
        h(PfDualListSelectorPane, { id: 'tree' }, () =>
          h(PfDualListSelectorList, null, () => h(PfDualListSelectorTree, { data: treeData(), ...props })),
        ),
    },
    attachTo: document.body,
  });
}

describe('PfDualListSelector', () => {
  it('renders the root with a generated id and the OUIA attributes', () => {
    const wrapper = mount(PfDualListSelector, { props: { ouiaId: 'ouia-id' } });
    expect(wrapper.element.className).toBe(styles.dualListSelector);
    expect(wrapper.attributes('id')).toBeTruthy();
    expect(wrapper.attributes('data-ouia-component-id')).toBe('ouia-id');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/DualListSelector');
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });

  it('renders ouia-safe false when specified', () => {
    const wrapper = mount(PfDualListSelector, { props: { ouiaSafe: false } });
    expect(wrapper.attributes('data-ouia-safe')).toBe('false');
  });

  it.each([
    [{}, false],
    [{ animations: true }, false],
    [{ tree: true }, false],
    [{ tree: true, animations: true }, true],
  ])('with %o renders the animate-expand modifier: %s', (props, animated) => {
    const wrapper = mount(PfDualListSelector, { props });
    expect(wrapper.classes().includes(styles.modifiers.animateExpand)).toBe(animated);
  });
});

describe('PfDualListSelectorPane', () => {
  it('renders the available pane with just the menu and an empty list', () => {
    const wrapper = mount(PfDualListSelectorPane, {
      props: { id: 'basicTest' },
      slots: { default: () => h(PfDualListSelectorList) },
    });
    expect(wrapper.classes()).toEqual([styles.dualListSelectorPane, 'pf-m-available']);
    expect(wrapper.element.children).toHaveLength(1);
    const menu = wrapper.element.children[0];
    expect(menu.className).toBe(styles.dualListSelectorMenu);
    expect(menu.getAttribute('tabindex')).toBe('0');
    const list = menu.children[0];
    expect(list.tagName).toBe('UL');
    expect(list.className).toBe(styles.dualListSelectorList);
    // an empty list is not a listbox
    expect(list.getAttribute('role')).toBeNull();
    expect(list.getAttribute('aria-disabled')).toBeNull();
  });

  it('renders the chosen pane', () => {
    const wrapper = mount(PfDualListSelectorPane, { props: { chosen: true } });
    expect(wrapper.classes()).toEqual([styles.dualListSelectorPane, styles.modifiers.chosen]);
  });

  it('renders title, search input, actions and status in order', () => {
    const wrapper = mount(PfDualListSelectorPane, {
      props: { id: 'statusTest', title: 'Available options', status: 'Test status1' },
      slots: {
        'search-input': () => h(PfSearchInput),
        actions: () => h('button', { class: 'sort' }),
      },
    });
    const [header, tools, status, menu] = Array.from(wrapper.element.children as HTMLCollection);
    expect(header.className).toBe(styles.dualListSelectorHeader);
    expect(header.children[0].className).toBe(`${styles.dualListSelector}__title`);
    expect(header.querySelector(`.${styles.dualListSelectorTitleText}`)?.textContent).toBe('Available options');
    expect(tools.className).toBe(styles.dualListSelectorTools);
    expect(tools.children[0].className).toBe(styles.dualListSelectorToolsFilter);
    expect(tools.children[0].querySelector('input')).not.toBeNull();
    expect(tools.children[1].className).toBe(styles.dualListSelectorToolsActions);
    expect(tools.children[1].querySelector('.sort')).not.toBeNull();
    expect(status.className).toBe(styles.dualListSelectorStatus);
    const statusText = status.children[0];
    expect(statusText.className).toBe(styles.dualListSelectorStatusText);
    expect(statusText.id).toBe('statusTest-status');
    expect(statusText.textContent).toBe('Test status1');
    expect(menu.className).toBe(styles.dualListSelectorMenu);
  });

  it('sets the min height of the list', () => {
    const wrapper = mount(PfDualListSelectorPane, { props: { listMinHeight: '300px' } });
    const menu = wrapper.find(`.${styles.dualListSelectorMenu}`).element as HTMLElement;
    expect(menu.style.getPropertyValue('--pf-v6-c-dual-list-selector__menu--MinHeight')).toBe('300px');
  });

  it('disabled marks the list as disabled and disables its options', async () => {
    const selected = ref(false);
    const wrapper = mount(PfDualListSelectorPane, {
      props: { disabled: true },
      slots: {
        default: () =>
          h(PfDualListSelectorList, null, () =>
            h(
              PfDualListSelectorListItem,
              { selected: selected.value, 'onUpdate:selected': (v: boolean) => (selected.value = v) },
              () => 'Option 1',
            ),
          ),
      },
    });
    expect(wrapper.find('ul').attributes('aria-disabled')).toBe('true');
    const item = wrapper.find('li');
    expect(item.classes()).toContain(styles.modifiers.disabled);
    await item.trigger('click');
    expect(selected.value).toBe(false);
  });
});

describe('PfDualListSelectorListItem', () => {
  function mountList(itemProps: Record<string, unknown> = {}) {
    const selected = ref(false);
    const wrapper = mount(PfDualListSelectorPane, {
      props: { id: 'pane', status: '0 of 2 options selected' },
      slots: {
        default: () =>
          h(PfDualListSelectorList, null, () => [
            h(
              PfDualListSelectorListItem,
              {
                id: 'option-1',
                selected: selected.value,
                'onUpdate:selected': (v: boolean) => (selected.value = v),
                ...itemProps,
              },
              () => 'Option 1',
            ),
            h(PfDualListSelectorListItem, { id: 'option-2' }, () => 'Option 2'),
          ]),
      },
      attachTo: document.body,
    });
    return { wrapper, selected };
  }

  it('renders the option markup', () => {
    const { wrapper } = mountList();
    const list = wrapper.find('ul');
    expect(list.attributes('role')).toBe('listbox');
    expect(list.attributes('aria-multiselectable')).toBe('true');
    expect(list.attributes('aria-labelledby')).toBe('pane-status');

    const item = wrapper.find('li').element;
    expect(item.className).toBe(styles.dualListSelectorListItem);
    expect(item.id).toBe('option-1');
    expect(item.getAttribute('role')).toBe('option');
    expect(item.getAttribute('tabindex')).toBe('-1');
    expect(item.getAttribute('aria-selected')).toBe('false');
    const row = item.children[0];
    expect(row.className).toBe(styles.dualListSelectorListItemRow);
    const text = row.querySelector(
      `:scope > .${styles.dualListSelectorItem} > .${styles.dualListSelectorItemMain} > .${styles.dualListSelectorItemText}`,
    );
    expect(text?.textContent).toBe('Option 1');
  });

  it('toggles the selection on click and becomes the active descendant', async () => {
    const { wrapper, selected } = mountList();
    const item = wrapper.find('li');
    await item.trigger('click');

    expect(selected.value).toBe(true);
    expect(item.find(`.${styles.dualListSelectorListItemRow}`).classes()).toContain(styles.modifiers.selected);
    expect(item.attributes('aria-selected')).toBe('true');
    expect(wrapper.find('ul').attributes('aria-activedescendant')).toBe('option-1');

    const optionSelect = wrapper.findComponent(PfDualListSelectorListItem).emitted('optionSelect');
    expect(optionSelect?.[0][1]).toBe('option-1');

    await item.trigger('click');
    expect(selected.value).toBe(false);
  });

  it('selects the focused option with Enter and Space', async () => {
    const { wrapper, selected } = mountList();
    const item = wrapper.find('li');
    (item.element as HTMLElement).focus();
    await item.trigger('keydown', { key: 'Enter' });
    expect(selected.value).toBe(true);
    await item.trigger('keydown', { key: ' ' });
    expect(selected.value).toBe(false);
  });

  it('works uncontrolled', async () => {
    const wrapper = mount(PfDualListSelectorListItem, { slots: { default: () => 'Option' } });
    await wrapper.trigger('click');
    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('renders a drag handle when draggable', () => {
    const { wrapper } = mountList({ draggable: true });
    const draggable = wrapper.find(`li .${styles.dualListSelectorListItemRow} > .${styles.dualListSelectorDraggable}`);
    expect(draggable.exists()).toBe(true);
    const handle = draggable.element.children[0];
    expect(handle.tagName).toBe('SPAN');
    expect(handle.classList).toContain(buttonStyles.button);
    expect(handle.classList).toContain(buttonStyles.modifiers.plain);
    expect(handle.querySelector('svg')).not.toBeNull();
  });

  it('moves the focus between the enabled options with the arrows, wrapping around', async () => {
    const { wrapper } = mountList({ disabled: false });
    const items = wrapper.findAll('li');
    const menu = wrapper.find(`.${styles.dualListSelectorMenu}`);

    (menu.element as HTMLElement).focus();
    await menu.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(items[0].element);
    expect(wrapper.find('ul').attributes('aria-activedescendant')).toBe('option-1');

    await items[0].trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(items[1].element);

    await items[1].trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(items[0].element);

    await items[0].trigger('keydown', { key: 'ArrowUp' });
    expect(document.activeElement).toBe(items[1].element);
  });

  it('skips the disabled options with the arrows', async () => {
    const { wrapper } = mountList({ disabled: true });
    const items = wrapper.findAll('li');
    const menu = wrapper.find(`.${styles.dualListSelectorMenu}`);
    (menu.element as HTMLElement).focus();
    await menu.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(items[1].element);
  });
});

describe('PfDualListSelectorControlsWrapper', () => {
  function mountControls(disabled = false) {
    return mount(PfDualListSelectorControlsWrapper, {
      slots: {
        default: () => [
          h(PfDualListSelectorControl, { ariaLabel: 'Add selected', disabled }, { icon: () => h('i') }),
          h(PfDualListSelectorControl, { ariaLabel: 'Add all' }, { icon: () => h('i') }),
          h(PfDualListSelectorControl, { ariaLabel: 'Remove all' }, { icon: () => h('i') }),
        ],
      },
      attachTo: document.body,
    });
  }

  it('renders the wrapper and the controls', () => {
    const wrapper = mountControls();
    expect(wrapper.element.className).toBe(styles.dualListSelectorControls);
    expect(wrapper.attributes('tabindex')).toBe('0');
    expect(wrapper.attributes('role')).toBe('group');
    expect(wrapper.attributes('aria-label')).toBe('Controls for moving options between lists');

    const item = wrapper.element.children[0];
    expect(item.className).toBe(styles.dualListSelectorControlsItem);
    const button = item.children[0];
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList).toContain(buttonStyles.modifiers.plain);
    expect(button.getAttribute('aria-label')).toBe('Add selected');
    expect(button.getAttribute('tabindex')).toBe('-1');
    // aria-label goes to the button, not the item
    expect(item.getAttribute('aria-label')).toBeNull();
  });

  it('controls are enabled by default and disabled with disabled', () => {
    const wrapper = mountControls(true);
    const [first, second] = wrapper.findAll('button');
    expect(first.attributes('disabled')).toBeDefined();
    expect(first.attributes('aria-disabled')).toBe('true');
    expect(second.attributes('disabled')).toBeUndefined();
  });

  it('emits click', async () => {
    const wrapper = mountControls();
    await wrapper.find('button').trigger('click');
    expect(wrapper.findComponent(PfDualListSelectorControl).emitted('click')).toHaveLength(1);
  });

  it('moves the focus between the enabled controls with the arrows', async () => {
    const wrapper = mountControls(true);
    const buttons = wrapper.findAll('button');
    (wrapper.element as HTMLElement).focus();
    await wrapper.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(buttons[1].element);
    await buttons[1].trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(buttons[2].element);
    await buttons[2].trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(buttons[1].element);
  });

  it('renders a tooltip on the control button', async () => {
    const wrapper = mount(PfDualListSelectorControl, {
      props: {
        ariaLabel: 'Add all',
        tooltip: 'Add all options',
        tooltipAttrs: { entryDelay: 0, animationDuration: 0 },
      },
      attachTo: document.body,
    });
    await flushPromises();
    wrapper.find('button').element.dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(document.body.querySelector('[role="tooltip"]')?.textContent).toContain('Add all options');
  });
});

describe('PfDualListSelectorTree', () => {
  it('renders the options with checkboxes, toggles and badges', () => {
    const wrapper = mountTree();
    const list = wrapper.find('ul');
    expect(list.attributes('role')).toBe('tree');

    const fruits = wrapper.find('li#fruits').element;
    expect(fruits.getAttribute('role')).toBe('treeitem');
    expect(fruits.classList).toContain(styles.modifiers.expandable);
    expect(fruits.classList).not.toContain(styles.modifiers.expanded);
    const row = fruits.children[0];
    expect(row.classList).toContain(styles.dualListSelectorListItemRow);
    expect(row.classList).toContain(styles.modifiers.check);
    const main = row.querySelector(`:scope > .${styles.dualListSelectorItem} > .${styles.dualListSelectorItemMain}`)!;
    expect(Array.from(main.children, el => el.className)).toEqual([
      styles.dualListSelectorItemToggle,
      styles.dualListSelectorItemCheck,
      styles.dualListSelectorItemText,
      styles.dualListSelectorItemCount,
    ]);
    // the badge counts the leaves of the option
    expect(main.querySelector(`.${badgeStyles.badge}`)?.textContent).toBe('3');

    // collapsed options do not render their children
    expect(wrapper.find('li#apple').exists()).toBe(false);
    const bread = wrapper.find('li#bread');
    expect(bread.classes()).not.toContain(styles.modifiers.expandable);
    expect(bread.find(`.${styles.dualListSelectorItemToggle}`).exists()).toBe(false);
  });

  it('expands an option with its toggle', async () => {
    const wrapper = mountTree();
    await wrapper.find(`li#fruits .${styles.dualListSelectorItemToggle}`).trigger('click');
    expect(wrapper.find('li#fruits').classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('li#fruits').attributes('aria-expanded')).toBe('true');
    const nested = wrapper.find('li#fruits > ul');
    expect(nested.classes()).toEqual([styles.dualListSelectorList]);
    expect(nested.attributes('role')).toBe('group');
    expect(wrapper.find('li#apple').exists()).toBe(true);
    // the toggle does not check the option
    expect(wrapper.findComponent(PfDualListSelectorTree).emitted('optionCheck')).toBeUndefined();
  });

  it('renders the checked, unchecked and indeterminate states', () => {
    const wrapper = mountTree({ defaultAllExpanded: true });
    const checkbox = (id: string) => wrapper.find(`li#${id} input`).element as HTMLInputElement;
    expect(checkbox('apple').checked).toBe(true);
    expect(wrapper.find(`li#apple .${styles.dualListSelectorListItemRow}`).classes()).toContain(
      styles.modifiers.selected,
    );
    expect(checkbox('bread').checked).toBe(false);
    expect(checkbox('berries').indeterminate).toBe(true);
  });

  it('emits optionCheck from the row and the checkbox, and keeps the checkbox controlled', async () => {
    const wrapper = mountTree({ defaultAllExpanded: true });
    const tree = wrapper.findComponent(PfDualListSelectorTree);

    await wrapper.find(`li#bread .${styles.dualListSelectorItem}`).trigger('click');
    let [, checked, itemData] = tree.emitted('optionCheck')![0] as [Event, boolean, DualListSelectorTreeItemData];
    expect(checked).toBe(true);
    expect(itemData.id).toBe('bread');
    expect(wrapper.find('ul').attributes('aria-activedescendant')).toBe('bread');

    // nested options bubble up to the root tree
    const apple = wrapper.find('li#apple input');
    await apple.setValue(false);
    [, checked, itemData] = tree.emitted('optionCheck')![1] as [Event, boolean, DualListSelectorTreeItemData];
    expect(checked).toBe(false);
    expect(itemData.id).toBe('apple');
    // the data was not updated: the checkbox stays checked
    expect((apple.element as HTMLInputElement).checked).toBe(true);
  });

  it('defaultExpanded of an option overrides defaultAllExpanded', () => {
    const data = treeData();
    data[0].defaultExpanded = false;
    const wrapper = mount(PfDualListSelectorTree, { props: { data, defaultAllExpanded: true } });
    expect(wrapper.find('li#fruits').classes()).not.toContain(styles.modifiers.expanded);
  });

  it('badges adds a badge to every option with children', () => {
    const data = treeData();
    delete data[0].badge;
    const wrapper = mount(PfDualListSelectorTree, { props: { data, badges: true, defaultAllExpanded: true } });
    expect(wrapper.find(`li#berries .${badgeStyles.badge}`).text()).toBe('2');
  });

  it('disabled options do not check', async () => {
    const wrapper = mountTree({ disabled: true });
    expect(wrapper.find('li#bread').classes()).toContain(styles.modifiers.disabled);
    await wrapper.find(`li#bread .${styles.dualListSelectorItem}`).trigger('click');
    expect(wrapper.findComponent(PfDualListSelectorTree).emitted('optionCheck')).toBeUndefined();
  });

  it('with animations renders the collapsed children inert', async () => {
    const wrapper = mountTree({}, { animations: true });
    const nested = wrapper.find('li#fruits > ul');
    expect(nested.exists()).toBe(true);
    expect(nested.attributes('inert')).toBeDefined();

    await wrapper.find(`li#fruits .${styles.dualListSelectorItemToggle}`).trigger('click');
    expect(wrapper.find('li#fruits > ul').attributes('inert')).toBeUndefined();
  });

  it('moves the focus between the toggles and checkboxes with the arrows, skipping inert ones', async () => {
    const wrapper = mountTree({}, { animations: true });
    const menu = wrapper.find(`.${styles.dualListSelectorMenu}`);
    (menu.element as HTMLElement).focus();

    await menu.trigger('keydown', { key: 'ArrowDown' });
    const fruitsToggle = wrapper.find(`li#fruits .${styles.dualListSelectorItemToggle}`).element;
    expect(document.activeElement).toBe(fruitsToggle);

    await wrapper.find(`li#fruits .${styles.dualListSelectorItemToggle}`).trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(wrapper.find('li#fruits input').element);

    // the children of the collapsed option are inert: the next is bread
    await wrapper.find('li#fruits input').trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(wrapper.find('li#bread input').element);
    expect(wrapper.find('ul').attributes('aria-activedescendant')).toBe('bread');
  });
});
