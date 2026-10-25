import { describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
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
import PfDataListControl from '../../src/components/DataList/DataListControl.vue';
import PfDataListDragButton from '../../src/components/DataList/DataListDragButton.vue';
import PfDataListText from '../../src/components/DataList/DataListText.vue';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
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
    const wrapper = mountWithModel(
      PfDataList,
      'selected',
      { selected: undefined, selectionInputName: 'pick' },
      {
        slots: { default: items(['a', 'b']) },
      },
    );

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

  it('renders radio inputs for single selection', () => {
    const wrapper = mount(PfDataList, { props: { selectionInputName: 'pick' }, slots: { default: items(['a']) } });
    expect(wrapper.find('li input').attributes('type')).toBe('radio');
  });

  it('updates item selection state with multiple v-model:selected', async () => {
    const wrapper = mountWithModel(
      PfDataList,
      'selected',
      { selected: [], selectionMultiple: true },
      {
        slots: { default: items(['a', 'b']) },
      },
    );

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
    const wrapper = mount(PfDataList, {
      props: { selected: ['b'], selectionMultiple: true },
      slots: { default: items(['a', 'b']) },
    });

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
        default: () =>
          h(PfDataListItem, () => [h(PfDataListCell, () => 'Cell'), h(PfDataListContent, () => 'Details')]),
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
    expect(row.findAll(`.${styles.dataListItemContent} > .${styles.dataListCell}`).map(c => c.text())).toEqual([
      'One',
      'Two',
    ]);
    expect(row.find('section').exists()).toBe(false);
    expect(wrapper.find(`li > section.${styles.dataListExpandableContent}`).exists()).toBe(true);
  });

  it('does not double wrap an explicit row', () => {
    const wrapper = mount(PfDataListItem, {
      slots: {
        default: () => h(PfDataListItemRow, () => h(PfDataListItemCells, () => h(PfDataListCell, () => 'Cell'))),
      },
    });

    expect(wrapper.findAll(`.${styles.dataListItemRow}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${styles.dataListItemContent}`)).toHaveLength(1);
  });

  it('is standalone selectable with v-model:selected', async () => {
    const wrapper = mountWithModel(PfDataListItem, 'selected', {
      selected: false,
      selectionInputName: 'n',
      selectionInputValue: 'v',
    });

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
    const wrapper = mountWithModel(
      PfDataListItem,
      'expanded',
      { expanded: false, expandable: true },
      {
        slots: { default: () => [h(PfDataListCell, () => 'Cell'), h(PfDataListContent, () => 'Details')] },
      },
    );

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

  it('selects with the keyboard', async () => {
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

  it('reflects the expanded state on the default toggle', () => {
    const wrapper = mount(PfDataListItem, {
      props: { expandable: true, expanded: true },
      slots: { default: () => h(PfDataListItemRow) },
    });
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
    expect(wrapper.get('div').classes()).toEqual([styles.dataListCell]);
    expect(wrapper.text()).toBe('Cell');
  });

  it('applies modifiers', () => {
    const wrapper = mount(PfDataListCell, {
      props: { noFill: true, alignRight: true, icon: true, wrapModifier: 'nowrap', width: 3 },
    });

    for (const modifier of ['noFill', 'alignRight', 'icon', 'nowrap', 'flex_3'] as const) {
      expect(wrapper.get('div').classes()).toContain(styles.modifiers[modifier]);
    }
  });

  it('does not apply a flex modifier for width 1', () => {
    const wrapper = mount(PfDataListCell, { props: { width: 1 } });
    expect(wrapper.get('div').classes()).toEqual([styles.dataListCell]);
  });
});

describe('DataListAction', () => {
  it('renders the action class and visibility modifiers', () => {
    const wrapper = mount(PfDataListAction, {
      props: { visibility: 'hidden', visibilityMd: 'visible' },
      slots: { default: () => 'Act' },
    });

    expect(wrapper.classes()).toContain(styles.dataListItemAction);
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.classes()).toContain(styles.modifiers.visibleOnMd);
    expect(wrapper.text()).toBe('Act');
  });

  it('updates visibility modifiers when props change', async () => {
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

  it('binds the checked state with v-model:checked', async () => {
    const wrapper = mountWithModel(PfDataListCheck, 'checked', { checked: false });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:checked')).toEqual([[true]]);

    await wrapper.setProps({ checked: false });
    expect(input.element.checked).toBe(false);
  });

  it('does not render the item control wrapper with otherControls', () => {
    const wrapper = mount(PfDataListCheck, { props: { otherControls: true } });
    expect(wrapper.find(`.${styles.dataListItemControl}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.dataListCheck} input`).exists()).toBe(true);
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

  it('labels the button with a custom aria-labelledby', () => {
    const wrapper = mount(PfDataListToggle, { props: { id: 'tgl' }, attrs: { 'aria-labelledby': 'row tgl' } });
    expect(wrapper.find('button').attributes('aria-labelledby')).toBe('row tgl');
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

describe('DataList parity', () => {
  it('is a list with plain and no-plain-on-glass modifiers', () => {
    const wrapper = mount(PfDataList, {
      props: { plain: true, noPlainOnGlass: true },
      attrs: { 'aria-label': 'List' },
    });
    expect(wrapper.attributes('role')).toBe('list');
    expect(wrapper.attributes('aria-label')).toBe('List');
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([styles.modifiers.plain, styles.modifiers.noPlainOnGlass]),
    );
  });

  it('does not select an item when clicking its actions or controls', async () => {
    // regression: clicks on buttons in actions and on checks selected the item
    const onSelected = vi.fn();
    const wrapper = mount(PfDataList, {
      props: { 'onUpdate:selected': onSelected },
      slots: {
        default: () =>
          h(PfDataListItem, { key: 'a' }, () =>
            h(PfDataListItemRow, () => [
              h(PfDataListCheck, { 'aria-labelledby': 'a' }),
              h(PfDataListCell, () => 'Cell'),
              h(PfDataListAction, () => h('button', { class: 'act' }, 'Act')),
            ]),
          ),
      },
    });

    await wrapper.get('button.act').trigger('click');
    await wrapper.get(`.${styles.dataListItemControl} input`).trigger('click');
    expect(onSelected).not.toHaveBeenCalled();

    await wrapper.get(`.${styles.dataListCell}`).trigger('click');
    expect(onSelected).toHaveBeenCalledWith('a');
  });

  it('labels the hidden selection input', () => {
    const labelled = mount(PfDataListItem, { props: { selected: false }, attrs: { 'aria-labelledby': 'item-1' } });
    expect(labelled.get('input').attributes('aria-labelledby')).toBe('item-1');

    const labeled = mount(PfDataListItem, {
      props: { selected: false, selectableInputAriaLabel: 'Select item' },
      attrs: { 'aria-labelledby': 'item-1' },
    });
    expect(labeled.get('input').attributes('aria-label')).toBe('Select item');
    expect(labeled.get('input').attributes('aria-labelledby')).toBeUndefined();
  });
});

describe('DataListToggle parity', () => {
  it('renders the toggle icon in the button icon container', () => {
    // regression: the icon was rendered as the button text
    const wrapper = mount(PfDataListToggle, { props: { id: 'ex-toggle2' } });
    expect(wrapper.find(`.${buttonStyles.buttonIcon} .${styles.dataListToggleIcon} svg`).exists()).toBe(true);
    expect(wrapper.find(`.${buttonStyles.buttonText}`).exists()).toBe(false);
  });

  it('is labelled by the item and by itself', () => {
    // regression: the item id was missing from aria-labelledby
    const wrapper = mount(PfDataListItem, {
      props: { expandable: true },
      attrs: { 'aria-labelledby': 'item-1' },
      slots: { default: () => h(PfDataListItemRow, null, { toggle: () => h(PfDataListToggle, { id: 'toggle-1' }) }) },
    });
    expect(wrapper.get('button').attributes('aria-labelledby')).toBe('item-1 toggle-1');
  });

  it('spreads buttonAttrs and follows the item expanded state', () => {
    const wrapper = mount(PfDataListItem, {
      props: { expandable: true, expanded: true },
      slots: {
        default: () =>
          h(PfDataListItemRow, null, { toggle: () => h(PfDataListToggle, { buttonAttrs: { 'data-x': 'y' } }) }),
      },
    });
    expect(wrapper.get('button').attributes('data-x')).toBe('y');
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
  });
});

describe('DataListCheck parity', () => {
  it('renders a label wrapped standalone checkbox and puts the class on the control', () => {
    // regression: a bare input was rendered and the class went to the input
    const wrapper = mount(PfDataListCheck, {
      props: { invalid: true },
      attrs: { class: 'custom', 'aria-labelledby': 'item', name: 'check' },
    });
    expect(wrapper.classes()).toEqual([styles.dataListItemControl, 'custom']);
    const check = wrapper.get(`.${styles.dataListCheck} > label`);
    expect(check.classes()).toEqual([checkStyles.check, checkStyles.modifiers.standalone]);
    const input = check.get('input');
    expect(input.classes()).toContain(checkStyles.checkInput);
    expect(input.attributes('aria-labelledby')).toBe('item');
    expect(input.attributes('name')).toBe('check');
    expect(input.attributes('aria-invalid')).toBe('true');
    expect(check.attributes('for')).toBe(input.attributes('id'));
  });

  it('puts the class on the check with otherControls', () => {
    const wrapper = mount(PfDataListCheck, { props: { otherControls: true }, attrs: { class: 'custom' } });
    expect(wrapper.find(`.${styles.dataListItemControl}`).exists()).toBe(false);
    expect(wrapper.get(`.${styles.dataListCheck}`).classes()).toContain('custom');
  });
});

describe('DataListControl', () => {
  it('renders the item control class', () => {
    const wrapper = mount(PfDataListControl, { attrs: { class: 'custom' }, slots: { default: () => 'Ctrl' } });
    expect(wrapper.classes()).toEqual([styles.dataListItemControl, 'custom']);
    expect(wrapper.text()).toBe('Ctrl');
  });
});

describe('DataListDragButton', () => {
  it('renders a drag button with its icon', () => {
    const wrapper = mount(PfDataListDragButton, { attrs: { 'aria-label': 'Drag' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.classes()).toEqual([styles.dataListItemDraggableButton]);
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.find(`.${styles.dataListItemDraggableIcon} svg`).exists()).toBe(true);
  });

  it('is disabled', () => {
    const wrapper = mount(PfDataListDragButton, { props: { disabled: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.disabled);
    expect(wrapper.attributes('disabled')).toBeDefined();
  });
});

describe('DataListText', () => {
  it('renders a span with the text class and wrap modifier', () => {
    const wrapper = mount(PfDataListText, { props: { wrapModifier: 'truncate' }, slots: { default: () => 'Text' } });
    const text = wrapper.get(`.${styles.dataListText}`);
    expect(text.element.tagName).toBe('SPAN');
    expect(text.classes()).toContain(styles.modifiers.truncate);
    expect(text.text()).toBe('Text');
  });

  it('renders another component', () => {
    const wrapper = mount(PfDataListText, { props: { component: 'div' } });
    expect(wrapper.get(`.${styles.dataListText}`).element.tagName).toBe('DIV');
  });

  it('shows a tooltip only when the text overflows', async () => {
    const wrapper = mount(PfDataListText, {
      props: { tooltip: 'Full text' },
      slots: { default: () => 'Text' },
      attachTo: document.body,
    });
    const text = wrapper.get(`.${styles.dataListText}`);

    await text.trigger('mouseenter');
    await flushPromises();
    expect(document.body.textContent).not.toContain('Full text');

    Object.defineProperty(text.element, 'scrollWidth', { value: 200 });
    Object.defineProperty(text.element, 'offsetWidth', { value: 100 });
    await text.trigger('mouseenter');
    await nextTick();
    await flushPromises();
    expect(document.body.textContent).toContain('Full text');
    wrapper.unmount();
  });
});
