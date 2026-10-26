import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import PfTreeView from '../../src/components/TreeView/TreeView.vue';
import PfTreeViewSearch from '../../src/components/TreeView/TreeViewSearch.vue';
import type { TreeViewDataItem } from '../../src/components/TreeView/common';

enableAutoUnmount(afterEach);

const data = (): TreeViewDataItem[] => [
  {
    name: 'Application launcher',
    id: 'launcher',
    children: [
      { name: 'Application 1', id: 'app1', children: [{ name: 'Settings', id: 'app1-settings' }] },
      { name: 'Application 2', id: 'app2' },
    ],
  },
  { name: 'Cost management', id: 'cost' },
];

const Icon = defineComponent({ render: () => h('i', { class: 'icon' }) });
const ExpandedIcon = defineComponent({ render: () => h('i', { class: 'expanded-icon' }) });

function mountTree(props: Record<string, unknown> = {}, slots: Record<string, (...args: any[]) => unknown> = {}) {
  return mount(PfTreeView, { props: { data: data(), ariaLabel: 'Tree', ...props }, slots, attachTo: document.body });
}

const items = (wrapper: VueWrapper<any>) => wrapper.findAll(`.${styles.treeViewListItem}`);
const nodes = (wrapper: VueWrapper<any>) => wrapper.findAll(`.${styles.treeViewNode}`);

describe('TreeView', () => {
  it('renders a tree of button nodes', () => {
    const wrapper = mountTree();
    expect(wrapper.classes()).toEqual([styles.treeView]);
    const list = wrapper.find('ul');
    expect(list.attributes('role')).toBe('tree');
    expect(list.attributes('aria-label')).toBe('Tree');
    expect(list.attributes('aria-multiselectable')).toBe('false');
    expect(items(wrapper)).toHaveLength(2);

    const first = items(wrapper)[0]!;
    expect(first.attributes('role')).toBe('treeitem');
    expect(first.attributes('aria-expanded')).toBe('false');
    expect(first.attributes('id')).toBe('launcher');
    const node = first.find(`.${styles.treeViewNode}`);
    expect(node.element.tagName).toBe('BUTTON');
    expect(node.find(`.${styles.treeViewNodeToggle}`).element.tagName).toBe('SPAN');
    expect(node.find(`.${styles.treeViewNodeText}`).text()).toBe('Application launcher');
    // a leaf has no toggle
    expect(items(wrapper)[1]!.find(`.${styles.treeViewNodeToggle}`).exists()).toBe(false);
  });

  it('expands and collapses a node on click, emitting expand and collapse', async () => {
    const wrapper = mountTree();
    await nodes(wrapper)[0]!.trigger('click');
    const first = items(wrapper)[0]!;
    expect(first.classes()).toContain(styles.modifiers.expanded);
    expect(first.attributes('aria-expanded')).toBe('true');
    const nested = first.find('ul');
    expect(nested.attributes('role')).toBe('group');
    expect(nested.attributes('aria-multiselectable')).toBeUndefined();
    expect(wrapper.emitted('expand')![0]![1]).toMatchObject({ id: 'launcher' });
    expect(wrapper.emitted('select')![0]![1]).toMatchObject({ id: 'launcher' });

    await nodes(wrapper)[0]!.trigger('click');
    expect(items(wrapper)[0]!.find('ul').exists()).toBe(false);
    expect(wrapper.emitted('collapse')).toHaveLength(1);
  });

  it('does not toggle a node when the select event is prevented', async () => {
    const wrapper = mountTree({ onSelect: (event: Event) => event.preventDefault() });
    await nodes(wrapper)[0]!.trigger('click');
    expect(items(wrapper)[0]!.classes()).not.toContain(styles.modifiers.expanded);
  });

  it('expands nodes by default and with allExpanded', async () => {
    const byDefault = mountTree({ defaultAllExpanded: true });
    expect(
      items(byDefault).every(
        i => !i.find(`.${styles.treeViewNodeToggle}`).exists() || i.classes().includes(styles.modifiers.expanded),
      ),
    ).toBe(true);

    const itemDefault = mount(PfTreeView, {
      props: { data: [{ ...data()[0]!, defaultExpanded: true }], ariaLabel: 'Tree' },
    });
    expect(items(itemDefault)[0]!.classes()).toContain(styles.modifiers.expanded);

    const all = mountTree({ allExpanded: true });
    expect(items(all)).toHaveLength(5);
    await all.setProps({ allExpanded: false });
    expect(items(all)).toHaveLength(2);
  });

  it('marks the active items as current and selected', async () => {
    const wrapper = mountTree({ activeItems: [{ name: 'Cost management', id: 'cost' }] });
    const cost = items(wrapper)[1]!;
    expect(cost.attributes('aria-selected')).toBe('true');
    expect(cost.find(`.${styles.treeViewNode}`).classes()).toContain(styles.modifiers.current);
    // a node with children is not selected unless the nodes are selectable
    await wrapper.setProps({ activeItems: [{ name: 'Application launcher', id: 'launcher' }] });
    expect(items(wrapper)[0]!.attributes('aria-selected')).toBe('false');
  });

  it('sets aria-multiselectable on the root list', () => {
    const wrapper = mountTree({ multiSelectable: true });
    expect(wrapper.find('ul').attributes('aria-multiselectable')).toBe('true');
  });

  it('separates selection and expansion with selectableNodes', async () => {
    const wrapper = mountTree({
      selectableNodes: true,
      activeItems: [{ name: 'Application launcher', id: 'launcher' }],
    });
    const node = nodes(wrapper)[0]!;
    expect(node.element.tagName).toBe('DIV');
    expect(node.find(`.${styles.treeViewNodeText}`).element.tagName).toBe('BUTTON');
    expect(items(wrapper)[0]!.attributes('aria-selected')).toBe('true');
    const toggle = node.find(`.${styles.treeViewNodeToggle}`);
    expect(toggle.element.tagName).toBe('BUTTON');
    expect(toggle.attributes('aria-labelledby')).toBe(node.attributes('id'));

    await node.trigger('click');
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(items(wrapper)[0]!.classes()).not.toContain(styles.modifiers.expanded);

    await toggle.trigger('click');
    expect(items(wrapper)[0]!.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.emitted('select')).toHaveLength(1);
  });

  it('renders checkboxes with their checked and indeterminate state', async () => {
    const wrapper = mountTree({
      checkboxes: true,
      data: [
        { name: 'Parent', id: 'p', checkAttrs: { checked: null }, children: [{ name: 'Child', id: 'c' }] },
        { name: 'Other', id: 'o', checkAttrs: { checked: true, 'aria-label': 'other-check' } },
      ],
    });
    const [parent, other] = items(wrapper);
    expect(parent!.attributes('aria-checked')).toBe('false');
    expect(parent!.attributes('aria-selected')).toBeUndefined();
    const node = parent!.find(`.${styles.treeViewNode}`);
    expect(node.element.tagName).toBe('LABEL');
    const input = parent!.find<HTMLInputElement>(`.${styles.treeViewNodeCheck} input`);
    expect(node.attributes('for')).toBe(input.attributes('id'));
    expect(input.element.indeterminate).toBe(true);
    expect(other!.attributes('aria-checked')).toBe('true');
    expect(other!.find('input').attributes('aria-label')).toBe('other-check');

    await input.trigger('change');
    expect(wrapper.emitted('check')![0]![1]).toMatchObject({ id: 'p' });
    expect(wrapper.emitted('select')).toBeUndefined();
  });

  it('renders the badges with the number of children or a custom content', () => {
    const wrapper = mountTree({
      badges: true,
      data: [...data(), { name: 'Custom', id: 'custom', customBadgeContent: '2 apps', children: [] }],
    });
    const badges = wrapper.findAll(`.${styles.treeViewNodeCount} .${badgeStyles.badge}`);
    expect(badges.map(b => b.text())).toEqual(['2', '2 apps']);
    expect(badges[0]!.classes()).toContain(badgeStyles.modifiers.read);
  });

  it('renders the icons, with the expanded icon of expanded nodes', async () => {
    const wrapper = mountTree({ icon: Icon, expandedIcon: ExpandedIcon });
    expect(items(wrapper)[0]!.find(`.${styles.treeViewNodeIcon} .icon`).exists()).toBe(true);
    await nodes(wrapper)[0]!.trigger('click');
    expect(items(wrapper)[0]!.find(`.${styles.treeViewNodeIcon} .expanded-icon`).exists()).toBe(true);

    const perItem = mount(PfTreeView, { props: { data: [{ name: 'A', icon: ExpandedIcon }], ariaLabel: 'Tree' } });
    expect(perItem.find(`.${styles.treeViewNodeIcon} .expanded-icon`).exists()).toBe(true);
  });

  it('renders the actions of the items from the action slot', () => {
    const wrapper = mountTree(
      {},
      { action: ({ item }: { item: TreeViewDataItem }) => (item.id === 'cost' ? h('button', 'Action') : []) },
    );
    const actions = wrapper.findAll(`.${styles.treeViewAction}`);
    expect(actions).toHaveLength(1);
    expect(items(wrapper)[1]!.find(`.${styles.treeViewAction}`).text()).toBe('Action');
  });

  it('renders the compact variants with the titles', () => {
    const wrapper = mountTree({ variant: 'compact', data: [{ name: 'Description', title: 'apiVersion' }] });
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
    const content = wrapper.find(`.${styles.treeViewNodeContent}`);
    expect(content.find(`.${styles.treeViewNodeTitle}`).text()).toBe('apiVersion');
    expect(content.find(`.${styles.treeViewNodeText}`).text()).toBe('Description');

    const noBackground = mountTree({ variant: 'compactNoBackground' });
    expect(noBackground.classes()).toEqual([styles.treeView, styles.modifiers.compact, styles.modifiers.noBackground]);
    expect(mountTree({ guides: true }).classes()).toContain(styles.modifiers.guides);
  });

  it('renders the collapsed children as inert with animations', async () => {
    const wrapper = mountTree({ animations: true });
    const nested = items(wrapper)[0]!.find('ul');
    expect(nested.exists()).toBe(true);
    expect(nested.attributes('inert')).toBeDefined();
    await nodes(wrapper)[0]!.trigger('click');
    expect(items(wrapper)[0]!.find('ul').attributes('inert')).toBeUndefined();
  });

  it('renders the toolbar above the tree with a divider', () => {
    const wrapper = mountTree({}, { toolbar: () => h('div', { class: 'toolbar' }) });
    expect(wrapper.element.children[0]!.className).toBe('toolbar');
    expect(wrapper.element.children[1]!.classList.contains(dividerStyles.divider)).toBe(true);
  });

  it('disables a node and its toggle', () => {
    const wrapper = mountTree({ data: [{ name: 'A', id: 'a', disabled: true, children: [{ name: 'B' }] }] });
    const node = nodes(wrapper)[0]!;
    expect(node.attributes('disabled')).toBeDefined();
    expect(node.classes()).toContain(styles.modifiers.disabled);
    expect(node.find(`.${styles.treeViewNodeToggle}`).classes()).toContain(styles.modifiers.disabled);
    expect(items(wrapper)[0]!.attributes('aria-disabled')).toBe('true');
  });

  it('makes only the first node reachable with tab and moves the focus with the arrow keys', async () => {
    const wrapper = mountTree();
    const [first, second] = nodes(wrapper);
    expect(first!.attributes('tabindex')).toBe('0');

    (first!.element as HTMLElement).focus();
    await first!.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(second!.element);
    expect(second!.attributes('tabindex')).toBe('0');
    expect(first!.attributes('tabindex')).toBe('-1');

    await second!.trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(first!.element);
  });

  it('expands with the right arrow and collapses with the left arrow', async () => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0));
    const wrapper = mountTree();
    const first = nodes(wrapper)[0]!;
    (first.element as HTMLElement).focus();
    await first.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();
    expect(items(wrapper)[0]!.classes()).toContain(styles.modifiers.expanded);

    (first.element as HTMLElement).focus();
    await first.trigger('keydown', { key: 'ArrowLeft' });
    expect(items(wrapper)[0]!.classes()).not.toContain(styles.modifiers.expanded);
    vi.unstubAllGlobals();
  });
});

describe('TreeViewSearch', () => {
  it('renders a search input with an icon and emits search', async () => {
    const wrapper = mount(PfTreeViewSearch, { attrs: { id: 'search', 'aria-label': 'Search', class: 'extra' } });
    expect(wrapper.classes()).toEqual([styles.treeViewSearch, 'extra']);
    expect(wrapper.find(`.${formStyles.formControl}`).classes()).toContain(formStyles.modifiers.icon);
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('search');
    expect(input.attributes('id')).toBe('search');
    expect(input.classes()).not.toContain('extra');
    expect(wrapper.find(`.${formStyles.formControlIcon}`).exists()).toBe(true);

    await input.setValue('app');
    expect(wrapper.emitted('search')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')).toEqual([['app']]);
  });
});
