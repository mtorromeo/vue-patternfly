import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import gridStyles from '@patternfly/react-styles/css/components/DataList/data-list-grid';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfDataList from '../../src/components/DataList/DataList.vue';
import PfDataListAction from '../../src/components/DataList/DataListAction.vue';
import PfDataListCell from '../../src/components/DataList/DataListCell.vue';
import PfDataListCheck from '../../src/components/DataList/DataListCheck.vue';
import PfDataListContent from '../../src/components/DataList/DataListContent.vue';
import PfDataListItem from '../../src/components/DataList/DataListItem.vue';
import PfDataListItemCells from '../../src/components/DataList/DataListItemCells.vue';
import PfDataListItemRow from '../../src/components/DataList/DataListItemRow.vue';
import PfDataListToggle from '../../src/components/DataList/DataListToggle.vue';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
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

const items = (keys: string[]) => () => keys.map(key => h(PfDataListItem, { key }, () => h(PfDataListCell, () => key)));

describe('DataList', () => {
  it('renders a list with the md grid breakpoint by default', () => {
    const wrapper = mount(PfDataList, { slots: { default: items(['a']) } });

    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.classes()).toContain(styles.dataList);
    expect(wrapper.classes()).toContain(gridStyles.modifiers.gridMd);
    expect(wrapper.classes()).not.toContain(styles.modifiers.compact);
    expect(wrapper.find(`li.${styles.dataListItem}`).text()).toBe('a');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/DataList');
  });

  it.each([
    ['none', gridStyles.modifiers.gridNone],
    ['sm', gridStyles.modifiers.gridSm],
    ['lg', gridStyles.modifiers.gridLg],
    ['xl', gridStyles.modifiers.gridXl],
    ['2xl', gridStyles.modifiers.grid_2xl],
  ] as const)('applies the %s grid breakpoint', (gridBreakpoint, modifier) => {
    const wrapper = mount(PfDataList, { props: { gridBreakpoint } });
    expect(wrapper.classes()).toContain(modifier);
  });

  it('applies compact and wrap modifiers', () => {
    const wrapper = mount(PfDataList, { props: { compact: true, wrapModifier: 'breakWord' } });
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
    expect(wrapper.classes()).toContain(styles.modifiers.breakWord);
  });

  it('is not selectable by default', () => {
    const wrapper = mount(PfDataList, { slots: { default: items(['a']) } });

    const item = wrapper.find('li');
    expect(item.attributes('tabindex')).toBeUndefined();
    expect(item.classes()).not.toContain(styles.modifiers.clickable);
    expect(item.find('input').exists()).toBe(false);
  });

  it('supports single selection with v-model:selected using item keys', async () => {
    const wrapper = mountWithModel(PfDataList, 'selected', { selected: undefined, selectionInputName: 'pick' }, {
      slots: { default: items(['a', 'b']) },
    });

    const lis = wrapper.findAll('li');
    for (const li of lis) {
      expect(li.classes()).toContain(styles.modifiers.clickable);
      expect(li.attributes('tabindex')).toBe('0');
      const input = li.find('input');
      expect(input.attributes('name')).toBe('pick');
      expect(input.attributes('tabindex')).toBe('-1');
    }

    await lis[1]!.trigger('click');
    expect(wrapper.emitted('update:selected')).toEqual([['b']]);
    expect(lis[1]!.classes()).toContain(styles.modifiers.selected);
    expect(lis[1]!.attributes('aria-selected')).toBe('true');
    expect(lis[0]!.classes()).not.toContain(styles.modifiers.selected);
    expect(lis[0]!.attributes('aria-selected')).toBeUndefined();

    await lis[0]!.trigger('click');
    expect(wrapper.emitted('update:selected')?.[1]).toEqual(['a']);
    expect(lis[0]!.classes()).toContain(styles.modifiers.selected);
    expect(lis[1]!.classes()).not.toContain(styles.modifiers.selected);

    await lis[0]!.trigger('click');
    expect(wrapper.emitted('update:selected')?.[2]).toEqual([undefined]);
    expect(lis[0]!.classes()).not.toContain(styles.modifiers.selected);
  });

  it('renders checkboxes and emits an array with multiple selection', async () => {
    const wrapper = mount(PfDataList, {
      props: { selected: [], selectionMultiple: true },
      slots: { default: items(['a', 'b']) },
    });

    const lis = wrapper.findAll('li');
    expect(lis[0]!.find('input').attributes('type')).toBe('checkbox');

    await lis[0]!.trigger('click');
    expect(wrapper.emitted('update:selected')?.[0]).toEqual([['a']]);
    await lis[1]!.trigger('click');
    expect(wrapper.emitted('update:selected')?.[1]).toEqual([['a', 'b']]);
  });

  // BUG: DataListItem.vue:16 tests the `datalist.multipleSelection` ComputedRef object instead of its value,
  // so selection inputs are always checkboxes, even for single selection
  it.fails('renders radio inputs for single selection', () => {
    const wrapper = mount(PfDataList, { props: { selectionInputName: 'pick' }, slots: { default: items(['a']) } });
    expect(wrapper.find('li input').attributes('type')).toBe('radio');
  });

  it('updates item selection state with multiple v-model:selected', async () => {
    const wrapper = mountWithModel(PfDataList, 'selected', { selected: [], selectionMultiple: true }, {
      slots: { default: items(['a', 'b']) },
    });

    const lis = wrapper.findAll('li');
    await lis[0]!.trigger('click');
    expect(lis[0]!.classes()).toContain(styles.modifiers.selected);
    await lis[1]!.trigger('click');
    expect(lis[1]!.classes()).toContain(styles.modifiers.selected);
    await lis[0]!.trigger('click');
    expect(lis[0]!.classes()).not.toContain(styles.modifiers.selected);
    expect(wrapper.props('selected')).toEqual(['b']);
  });

  it('reflects externally set selection', async () => {
    const wrapper = mount(PfDataList, { props: { selected: ['b'], selectionMultiple: true }, slots: { default: items(['a', 'b']) } });

    const lis = wrapper.findAll('li');
    expect(lis[0]!.classes()).not.toContain(styles.modifiers.selected);
    expect(lis[1]!.classes()).toContain(styles.modifiers.selected);
    expect(lis[1]!.find<HTMLInputElement>('input').element.checked).toBe(true);

    await wrapper.setProps({ selected: ['a'] });
    expect(lis[0]!.classes()).toContain(styles.modifiers.selected);
    expect(lis[1]!.classes()).not.toContain(styles.modifiers.selected);
  });

  it('uses selectionInputValue as item value', async () => {
    const wrapper = mount(PfDataList, {
      props: { selected: undefined, 'onUpdate:selected': () => {} },
      slots: { default: () => h(PfDataListItem, { selectionInputValue: 'val' }, () => 'Item') },
    });

    const li = wrapper.find('li');
    expect(li.find('input').attributes('value')).toBe('val');
    await li.trigger('click');
    expect(wrapper.emitted('update:selected')).toEqual([['val']]);
  });

  it('makes items expandable', async () => {
    const wrapper = mount(PfDataList, {
      props: { expandable: true },
      slots: {
        default: () => h(PfDataListItem, () => [
          h(PfDataListCell, () => 'Cell'),
          h(PfDataListContent, () => 'Details'),
        ]),
      },
    });

    const toggle = wrapper.find(`.${styles.dataListToggle} button`);
    expect(toggle.exists()).toBe(true);
    expect(wrapper.find('section').attributes('hidden')).toBeDefined();

    await toggle.trigger('click');
    expect(wrapper.find('li').classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('section').attributes('hidden')).toBeUndefined();
  });
});

describe('DataListItem', () => {
  it('wraps children in a row with cells and leaves content outside', () => {
    const wrapper = mount(PfDataListItem, {
      slots: {
        default: () => [
          h(PfDataListCell, () => 'One'),
          h(PfDataListCell, () => 'Two'),
          h(PfDataListContent, () => 'Details'),
        ],
      },
    });

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.dataListItem);
    const row = wrapper.find(`.${styles.dataListItemRow}`);
    expect(row.findAll(`.${styles.dataListItemContent} > .${styles.dataListCell}`).map(c => c.text())).toEqual(['One', 'Two']);
    expect(row.find('section').exists()).toBe(false);
    expect(wrapper.find(`li > section.${styles.dataListExpandableContent}`).exists()).toBe(true);
  });

  it('does not double wrap an explicit row', () => {
    const wrapper = mount(PfDataListItem, {
      slots: { default: () => h(PfDataListItemRow, () => h(PfDataListItemCells, () => h(PfDataListCell, () => 'Cell'))) },
    });

    expect(wrapper.findAll(`.${styles.dataListItemRow}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${styles.dataListItemContent}`)).toHaveLength(1);
  });

  it('is standalone selectable with v-model:selected', async () => {
    const wrapper = mountWithModel(PfDataListItem, 'selected', { selected: false, selectionInputName: 'n', selectionInputValue: 'v' });

    expect(wrapper.attributes('tabindex')).toBe('0');
    expect(wrapper.classes()).toContain(styles.modifiers.clickable);
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('radio');
    expect(input.attributes('name')).toBe('n');
    expect(input.attributes('value')).toBe('v');

    await wrapper.trigger('click');
    expect(wrapper.emitted('update:selected')).toEqual([[true]]);
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(wrapper.classes()).toContain(styles.modifiers.selected);
    expect(wrapper.attributes('aria-selected')).toBe('true');
  });

  it('emits click when not selectable', async () => {
    const wrapper = mount(PfDataListItem);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(wrapper.emitted('update:selected')).toBeUndefined();
  });

  it('toggles v-model:expanded through the row toggle', async () => {
    const wrapper = mountWithModel(PfDataListItem, 'expanded', { expanded: false, expandable: true }, {
      slots: { default: () => [h(PfDataListCell, () => 'Cell'), h(PfDataListContent, () => 'Details')] },
    });

    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    await wrapper.find(`.${styles.dataListToggle} button`).trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('section').attributes('hidden')).toBeUndefined();
  });

  it('can override the parent expandable setting', () => {
    const wrapper = mount(PfDataList, {
      props: { expandable: true },
      slots: { default: () => h(PfDataListItem, { expandable: false }, () => h(PfDataListCell, () => 'Cell')) },
    });
    expect(wrapper.find(`.${styles.dataListToggle}`).exists()).toBe(false);
  });

  // BUG: DataListItem.vue has no keydown handler, so a focusable selectable item cannot be selected with Enter/Space
  it.fails('selects with the keyboard', async () => {
    const wrapper = mount(PfDataListItem, { props: { selected: false } });
    await wrapper.trigger('keydown', { key: ' ' });
    expect(wrapper.emitted('update:selected')).toEqual([[true]]);
  });
});

describe('DataListItemRow', () => {
  it('renders the row class, wrap modifier and auto wraps cells', () => {
    const wrapper = mount(PfDataListItemRow, {
      props: { wrapModifier: 'truncate' },
      slots: { default: () => [h(PfDataListCell, () => 'Cell'), h(PfDataListAction, () => 'Act')] },
    });

    expect(wrapper.classes()).toContain(styles.dataListItemRow);
    expect(wrapper.classes()).toContain(styles.modifiers.truncate);
    expect(wrapper.find(`.${styles.dataListItemContent} .${styles.dataListCell}`).text()).toBe('Cell');
    expect(wrapper.find(`.${styles.dataListItemContent} .${styles.dataListItemAction}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.dataListItemAction}`).text()).toBe('Act');
  });

  it('does not render a toggle outside an expandable item', () => {
    const wrapper = mount(PfDataListItemRow);
    expect(wrapper.find(`.${styles.dataListToggle}`).exists()).toBe(false);
  });

  it('renders a custom toggle slot in an expandable item', () => {
    const wrapper = mount(PfDataListItem, {
      props: { expandable: true },
      slots: { default: () => h(PfDataListItemRow, null, { toggle: () => h('button', { class: 'custom-toggle' }) }) },
    });

    expect(wrapper.find('.custom-toggle').exists()).toBe(true);
    expect(wrapper.find(`.${styles.dataListToggle}`).exists()).toBe(false);
  });

  // BUG: DataListItemRow.vue:11 does not pass the expanded state to PfDataListToggle, so aria-expanded is never set
  it.fails('reflects the expanded state on the default toggle', () => {
    const wrapper = mount(PfDataListItem, { props: { expandable: true, expanded: true } });
    expect(wrapper.find(`.${styles.dataListToggle} button`).attributes('aria-expanded')).toBe('true');
  });
});

describe('DataListItemCells', () => {
  it('renders the item content class', () => {
    const wrapper = mount(PfDataListItemCells, { slots: { default: () => 'Cells' } });
    expect(wrapper.classes()).toContain(styles.dataListItemContent);
    expect(wrapper.text()).toBe('Cells');
  });
});

describe('DataListCell', () => {
  it('renders the cell class without modifiers by default', () => {
    const wrapper = mount(PfDataListCell, { slots: { default: () => 'Cell' } });
    expect(wrapper.classes()).toEqual([styles.dataListCell]);
    expect(wrapper.text()).toBe('Cell');
  });

  it('applies modifiers', () => {
    const wrapper = mount(PfDataListCell, { props: { noFill: true, alignRight: true, icon: true, wrapModifier: 'nowrap', width: 3 } });

    for (const modifier of ['noFill', 'alignRight', 'icon', 'nowrap', 'flex_3'] as const) {
      expect(wrapper.classes()).toContain(styles.modifiers[modifier]);
    }
  });

  it('does not apply a flex modifier for width 1', () => {
    const wrapper = mount(PfDataListCell, { props: { width: 1 } });
    expect(wrapper.classes()).toEqual([styles.dataListCell]);
  });
});

describe('DataListAction', () => {
  it('renders the action class and visibility modifiers', () => {
    const wrapper = mount(PfDataListAction, { props: { visibility: 'hidden', visibilityMd: 'visible' }, slots: { default: () => 'Act' } });

    expect(wrapper.classes()).toContain(styles.dataListItemAction);
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.classes()).toContain(styles.modifiers.visibleOnMd);
    expect(wrapper.text()).toBe('Act');
  });

  // BUG: DataListAction.vue:27 computes breakpointClasses once at setup, so later prop changes are ignored
  it.fails('updates visibility modifiers when props change', async () => {
    const wrapper = mount(PfDataListAction);
    await wrapper.setProps({ visibility: 'hidden' });
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
  });
});

describe('DataListCheck', () => {
  it('renders a checkbox inside the item control', () => {
    const wrapper = mount(PfDataListCheck, { attrs: { 'aria-label': 'Select row', name: 'row' } });

    expect(wrapper.classes()).toContain(styles.dataListItemControl);
    const input = wrapper.find(`.${styles.dataListCheck} input`);
    expect(input.attributes('type')).toBe('checkbox');
    expect(input.attributes('aria-label')).toBe('Select row');
    expect(input.attributes('name')).toBe('row');
    expect(wrapper.attributes('aria-label')).toBeUndefined();
  });

  it('binds the checked state with v-model:expanded', async () => {
    const wrapper = mountWithModel(PfDataListCheck, 'expanded', { expanded: false });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);

    await wrapper.setProps({ expanded: false });
    expect(input.element.checked).toBe(false);
  });

  // BUG: DataListCheck.vue:2 uses the unregistered 'pass-through' string as component, so otherControls
  // still renders an (unknown) wrapper element carrying the item-control class
  it.fails('does not render the item control wrapper with otherControls', () => {
    const wrapper = mount(PfDataListCheck, { props: { otherControls: true } });
    expect(wrapper.find(`.${styles.dataListItemControl}`).exists()).toBe(false);
  });
});

describe('DataListToggle', () => {
  it('renders a plain button labelled by itself by default', async () => {
    const wrapper = mount(PfDataListToggle, { props: { id: 'tgl', ariaControls: 'content' } });

    expect(wrapper.classes()).toContain(styles.dataListItemControl);
    const button = wrapper.find(`.${styles.dataListToggle} button`);
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
    expect(button.attributes('id')).toBe('tgl');
    expect(button.attributes('aria-label')).toBe('Details');
    expect(button.attributes('aria-labelledby')).toBe('tgl');
    expect(button.attributes('aria-controls')).toBe('content');
    expect(button.find(`.${styles.dataListToggleIcon} svg`).exists()).toBe(true);

    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('sets aria-expanded and drops aria-labelledby with a custom label', () => {
    const wrapper = mount(PfDataListToggle, { props: { id: 'tgl', ariaLabel: 'More', expanded: true } });

    const button = wrapper.find('button');
    expect(button.attributes('aria-label')).toBe('More');
    expect(button.attributes('aria-labelledby')).toBeUndefined();
    expect(button.attributes('aria-expanded')).toBe('true');
  });
});

describe('DataListContent', () => {
  it('is hidden outside an expanded item', () => {
    const wrapper = mount(PfDataListContent, { slots: { default: () => 'Details' } });

    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.dataListExpandableContent);
    expect(wrapper.attributes('hidden')).toBeDefined();
    const body = wrapper.find(`.${styles.dataListExpandableContentBody}`);
    expect(body.text()).toBe('Details');
    expect(body.classes()).not.toContain(styles.modifiers.noPadding);
  });

  it('honours the hidden prop and noPadding modifier', () => {
    const wrapper = mount(PfDataListContent, { props: { hidden: false, noPadding: true } });

    expect(wrapper.attributes('hidden')).toBeUndefined();
    expect(wrapper.find(`.${styles.dataListExpandableContentBody}`).classes()).toContain(styles.modifiers.noPadding);
  });
});
