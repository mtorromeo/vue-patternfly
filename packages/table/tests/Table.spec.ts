import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import PfTable from '../src/Table.vue';
import PfThead from '../src/Thead.vue';
import PfTbody from '../src/Tbody.vue';
import PfTr from '../src/Tr.vue';
import PfTh from '../src/Th.vue';
import PfTd from '../src/Td.vue';

const components = { PfTable, PfThead, PfTbody, PfTr, PfTh, PfTd };

function mountTemplate(template: string, setup: () => Record<string, unknown> = () => ({})) {
  return mount(defineComponent({ components, setup, template }));
}

describe('Table', () => {
  it('renders the full structure with classes and roles', () => {
    const wrapper = mountTemplate(`
      <pf-table aria-label="Repositories">
        <pf-thead>
          <pf-tr>
            <pf-th>Name</pf-th>
            <pf-th>Branches</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr>
            <pf-td data-label="Name">one</pf-td>
            <pf-td data-label="Branches">10</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    `);

    const table = wrapper.get('table');
    expect(table.classes()).toContain(styles.table);
    expect(table.classes()).toContain(stylesGrid.modifiers.gridMd);
    expect(table.attributes('role')).toBe('grid');
    expect(table.attributes('aria-label')).toBe('Repositories');

    expect(wrapper.get('thead').classes()).toContain(styles.tableThead);
    const tbody = wrapper.get('tbody');
    expect(tbody.classes()).toContain(styles.tableTbody);
    expect(tbody.attributes('role')).toBe('rowgroup');

    for (const tr of wrapper.findAll('tr')) {
      expect(tr.classes()).toContain(styles.tableTr);
    }

    const ths = wrapper.findAll('th');
    expect(ths).toHaveLength(2);
    expect(ths[0].classes()).toContain(styles.tableTh);
    expect(ths[0].attributes('role')).toBe('columnheader');
    expect(ths[0].text()).toBe('Name');

    const tds = wrapper.findAll('td');
    expect(tds).toHaveLength(2);
    expect(tds[0].classes()).toContain(styles.tableTd);
    expect(tds[0].attributes('role')).toBe('cell');
    expect(tds[0].attributes('data-label')).toBe('Name');
    expect(tds[1].text()).toBe('10');

    // no selectable rows: no caption
    expect(wrapper.find('caption').exists()).toBe(false);
  });

  it('applies table modifiers', () => {
    const wrapper = mount(PfTable, {
      props: { compact: true, noBorders: true, striped: true, expandable: true, nested: true },
    });
    const classes = wrapper.get('table').classes();
    expect(classes).toContain(styles.modifiers.compact);
    expect(classes).toContain(styles.modifiers.noBorderRows);
    expect(classes).toContain(styles.modifiers.striped);
    expect(classes).toContain(styles.modifiers.expandable);
    expect(classes).toContain('pf-m-nested');
  });

  it.each([
    ['grid', stylesGrid.modifiers.grid],
    ['grid-lg', stylesGrid.modifiers.gridLg],
    ['grid-xl', stylesGrid.modifiers.gridXl],
    ['grid-2xl', stylesGrid.modifiers.grid_2xl],
  ] as const)('applies the %s grid breakpoint class', (gridBreakPoint, cls) => {
    const wrapper = mount(PfTable, { props: { gridBreakPoint } });
    expect(wrapper.get('table').classes()).toContain(cls);
  });

  it('allows overriding the role', () => {
    const wrapper = mount(PfTable, { props: { role: 'table' } });
    expect(wrapper.get('table').attributes('role')).toBe('table');
  });

  it('renders as a tree grid', () => {
    const wrapper = mount(PfTable, { props: { treeTable: true } });
    const table = wrapper.get('table');
    expect(table.attributes('role')).toBe('treegrid');
    expect(table.classes()).toContain(stylesTreeView.modifiers.treeView);
    expect(table.classes()).toContain(stylesTreeView.modifiers.treeViewGridMd);
    expect(table.classes()).not.toContain(stylesGrid.modifiers.gridMd);
  });

  it('wraps the table in scroll containers for sticky headers', () => {
    const sticky = mount(PfTable, { props: { stickyHeader: true } });
    const outer = sticky.get(`.${scrollStyles.scrollOuterWrapper}`);
    expect(outer.find(`.${scrollStyles.scrollInnerWrapper}`).exists()).toBe(false);
    expect(outer.get('table').classes()).toContain(styles.modifiers.stickyHeader);

    const scroll = mount(PfTable, { props: { stickyHeader: true, horizontalScroll: true } });
    expect(scroll.find(`.${scrollStyles.scrollOuterWrapper} > .${scrollStyles.scrollInnerWrapper} > table`).exists()).toBe(true);

    const plain = mount(PfTable);
    expect(plain.find(`.${scrollStyles.scrollOuterWrapper}`).exists()).toBe(false);
  });

  it('renders the selectable rows caption only while a row is selectable', async () => {
    const selectable = ref(true);
    const wrapper = mountTemplate(`
      <pf-table selectable-row-caption-text="Pick rows">
        <pf-tbody>
          <pf-tr :selectable="selectable"><pf-td>a</pf-td></pf-tr>
          <pf-tr><pf-td>b</pf-td></pf-tr>
        </pf-tbody>
      </pf-table>
    `, () => ({ selectable }));
    await nextTick();

    const caption = wrapper.get('caption');
    expect(caption.text()).toContain('Pick rows');
    expect(caption.get('.pf-v6-screen-reader').text()).toContain('This table has selectable rows');

    selectable.value = false;
    await nextTick();
    expect(wrapper.find('caption').exists()).toBe(false);
  });
});

describe('Thead', () => {
  it('applies modifiers', () => {
    const wrapper = mount(PfThead, { props: { noWrap: true, nestedHeader: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.nowrap);
    expect(wrapper.classes()).toContain(styles.modifiers.nestedColumnHeader);
  });
});

describe('Tbody', () => {
  it('applies modifiers', () => {
    const wrapper = mount(PfTbody, { props: { expanded: true, oddStriped: true, evenStriped: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.classes()).toContain(styles.modifiers.striped);
    expect(wrapper.classes()).toContain(styles.modifiers.stripedEven);
  });
});

describe('Tr', () => {
  it('applies state modifiers', () => {
    const wrapper = mount(PfTr, {
      props: { selected: true, striped: true, borderRow: true, resetOffset: true },
    });
    const classes = wrapper.classes();
    expect(classes).toContain(styles.modifiers.selected);
    expect(classes).toContain(styles.modifiers.striped);
    expect(classes).toContain(styles.modifiers.borderRow);
    expect(classes).toContain(styles.modifiers.firstCellOffsetReset);
  });

  it('is not an expandable row unless expanded is set', () => {
    const wrapper = mount(PfTr);
    expect(wrapper.classes()).not.toContain(styles.tableExpandableRow);
    expect(wrapper.attributes('hidden')).toBeUndefined();
  });

  it('hides collapsed expandable rows and shows expanded ones', async () => {
    const wrapper = mount(PfTr, { props: { expanded: false } });
    expect(wrapper.classes()).toContain(styles.tableExpandableRow);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(wrapper.attributes('hidden')).toBeDefined();

    await wrapper.setProps({ expanded: true });
    expect(wrapper.classes()).toContain(styles.tableExpandableRow);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.attributes('hidden')).toBeUndefined();
  });

  it('can be hidden explicitly', () => {
    const wrapper = mount(PfTr, { props: { hidden: true } });
    expect(wrapper.attributes('hidden')).toBeDefined();
  });

  it('is focusable and activates on click, Enter and Space when clickable', async () => {
    const calls: unknown[] = [];
    const wrapper = mount(PfTr, {
      props: { clickable: true, onClick: (e?: PointerEvent | KeyboardEvent) => calls.push(e?.type) },
    });
    expect(wrapper.classes()).toContain(styles.modifiers.clickable);
    expect(wrapper.attributes('tabindex')).toBe('0');

    await wrapper.trigger('click');
    await wrapper.trigger('keydown', { key: 'Enter' });
    await wrapper.trigger('keydown', { key: ' ' });
    await wrapper.trigger('keydown', { key: 'a' });
    expect(calls).toEqual(['click', 'keydown', 'keydown']);
  });

  it('is not focusable when not clickable', () => {
    const wrapper = mount(PfTr);
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    expect(wrapper.classes()).not.toContain(styles.modifiers.clickable);
  });

  it('labels selectable rows for assistive technologies', async () => {
    const wrapper = mount(PfTr, { props: { selectable: true, selected: true } });
    expect(wrapper.attributes('aria-label')).toBe('Row selected');

    await wrapper.setProps({ selected: false });
    expect(wrapper.attributes('aria-label')).toBe('');

    await wrapper.setProps({ ariaLabel: 'Custom' });
    expect(wrapper.attributes('aria-label')).toBe('Custom');
  });

  it('does not label non-selectable or hidden rows', async () => {
    const wrapper = mount(PfTr);
    expect(wrapper.attributes('aria-label')).toBeUndefined();

    await wrapper.setProps({ selectable: true, hidden: true });
    expect(wrapper.attributes('aria-label')).toBeUndefined();
  });
});

describe('Th', () => {
  // Th renders a fragment (reusable checkbox template + cell), so query the cell explicitly
  const cell = (wrapper: ReturnType<typeof mount>) => wrapper.get('[role="columnheader"]');

  it('applies cell modifiers', () => {
    const wrapper = mount(PfTh, {
      props: { width: 20, modifier: 'nowrap', textCenter: true, subheader: true, dataLabel: 'Col' },
    });
    const classes = cell(wrapper).classes();
    expect(classes).toContain(styles.modifiers.width_20);
    expect(classes).toContain(styles.modifiers.nowrap);
    expect(classes).toContain(styles.modifiers.center);
    expect(classes).toContain(styles.tableSubhead);
    expect(cell(wrapper).attributes('data-label')).toBe('Col');
  });

  it('can render a different element', () => {
    const wrapper = mount(PfTh, { props: { component: 'td' } });
    expect(cell(wrapper).element.tagName).toBe('TD');
    expect(cell(wrapper).attributes('role')).toBe('columnheader');
  });

  it('forwards attributes to the cell', () => {
    const wrapper = mount(PfTh, { attrs: { colspan: 2, 'data-test': 'th' } });
    expect(cell(wrapper).attributes('colspan')).toBe('2');
    expect(cell(wrapper).attributes('data-test')).toBe('th');
  });

  // Suspected bug: `scope` is declared as a prop (default 'col') but never bound to the element,
  // so header cells are never associated with their column.
  it.fails('renders the scope attribute', () => {
    const wrapper = mount(PfTh);
    expect(cell(wrapper).attributes('scope')).toBe('col');
  });

  it('applies sticky styles', () => {
    const wrapper = mount(PfTh, {
      props: { sticky: true, rightBorder: true, leftBorder: true, stickyLeftOffset: '10px' },
    });
    const classes = cell(wrapper).classes();
    expect(classes).toContain(scrollStyles.tableStickyCell);
    expect(classes).toContain(scrollStyles.modifiers.borderRight);
    expect(classes).toContain(scrollStyles.modifiers.borderLeft);
    const style = (cell(wrapper).element as HTMLElement).style;
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--MinWidth')).toBe('120px');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--Left')).toBe('10px');
  });

  describe('sorting', () => {
    it('does not render a sort button when not sortable', () => {
      const wrapper = mount(PfTh, { slots: { default: 'Name' } });
      expect(wrapper.find('button').exists()).toBe(false);
      expect(cell(wrapper).attributes('aria-sort')).toBeUndefined();
      expect(cell(wrapper).classes()).not.toContain(styles.tableSort);
    });

    it('renders an unsorted sortable header', () => {
      const wrapper = mount(PfTh, { props: { sortable: true }, slots: { default: 'Name' } });
      expect(cell(wrapper).classes()).toContain(styles.tableSort);
      expect(cell(wrapper).classes()).not.toContain(styles.modifiers.selected);
      expect(cell(wrapper).attributes('aria-sort')).toBe('none');
      const button = wrapper.get(`button.${styles.tableButton}`);
      expect(button.get(`.${styles.tableText}`).text()).toBe('Name');
      expect(button.find(`.${styles.tableSortIndicator} svg`).exists()).toBe(true);
    });

    it('sets aria-sort and the selected modifier when sorted', async () => {
      const wrapper = mount(PfTh, { props: { sortable: true, sorted: true, direction: 'asc' } });
      expect(cell(wrapper).attributes('aria-sort')).toBe('ascending');
      expect(cell(wrapper).classes()).toContain(styles.modifiers.selected);
      const ascIcon = wrapper.get(`.${styles.tableSortIndicator}`).html();

      await wrapper.setProps({ direction: 'desc' });
      expect(cell(wrapper).attributes('aria-sort')).toBe('descending');
      expect(wrapper.get(`.${styles.tableSortIndicator}`).html()).not.toBe(ascIcon);
    });

    it('emits sort and toggles the direction on click', async () => {
      const wrapper = mount(PfTh, { props: { sortable: true, sorted: true, direction: 'asc' } });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted('sort')).toHaveLength(1);
      expect(wrapper.emitted('update:direction')).toEqual([['desc']]);

      await wrapper.setProps({ direction: 'desc' });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted('sort')).toHaveLength(2);
      expect(wrapper.emitted('update:direction')).toEqual([['desc'], ['asc']]);
    });

    it('works with v-model:direction', async () => {
      const direction = ref<'asc' | 'desc'>('asc');
      const wrapper = mountTemplate(`
        <pf-th sortable sorted v-model:direction="direction">Name</pf-th>
      `, () => ({ direction }));
      await wrapper.get('button').trigger('click');
      expect(direction.value).toBe('desc');
      expect(wrapper.get('th').attributes('aria-sort')).toBe('descending');
    });

    // Suspected bug: `defaultDirection` is documented to default to "asc" but is ignored:
    // the first click on a header without a direction always requests "desc".
    it.fails('uses the default direction (asc) when sorting a column for the first time', async () => {
      const wrapper = mount(PfTh, { props: { sortable: true } });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted('update:direction')).toEqual([['asc']]);
    });
  });

  describe('selection', () => {
    it('renders a select-all checkbox when selected is defined', async () => {
      const wrapper = mount(PfTh, { props: { selected: false } });
      expect(cell(wrapper).classes()).toContain(styles.tableCheck);
      const input = wrapper.get<HTMLInputElement>('input[type="checkbox"]');
      expect(input.element.checked).toBe(false);

      await input.setValue(true);
      expect(wrapper.emitted('update:selected')).toEqual([[true]]);
      const select = wrapper.emitted<[Event, boolean]>('select')!;
      expect(select).toHaveLength(1);
      expect(select[0][1]).toBe(true);

      await wrapper.setProps({ selected: true });
      expect(input.element.checked).toBe(true);
    });

    it('does not render a checkbox when selected is undefined', () => {
      const wrapper = mount(PfTh);
      expect(wrapper.find('input').exists()).toBe(false);
      expect(cell(wrapper).classes()).not.toContain(styles.tableCheck);
    });
  });
});

describe('Td', () => {
  it('applies cell modifiers', () => {
    const wrapper = mount(PfTd, {
      props: { width: 50, modifier: 'truncate', textCenter: true, noPadding: true, actionCell: true, draggable: true },
    });
    const classes = wrapper.classes();
    expect(classes).toContain(styles.modifiers.width_50);
    expect(classes).toContain(styles.modifiers.truncate);
    expect(classes).toContain(styles.modifiers.center);
    expect(classes).toContain(styles.modifiers.noPadding);
    expect(classes).toContain(styles.tableAction);
    expect(classes).toContain(styles.tableDraggable);
  });

  it('can render a different element', () => {
    const wrapper = mount(PfTd, { props: { component: 'th' } });
    expect(wrapper.element.tagName).toBe('TH');
    expect(wrapper.attributes('role')).toBe('cell');
  });

  it('applies sticky styles', () => {
    const wrapper = mount(PfTd, { props: { sticky: true, stickyMinWidth: '80px', stickyRightOffset: '5px' } });
    expect(wrapper.classes()).toContain(scrollStyles.tableStickyCell);
    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--MinWidth')).toBe('80px');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--Right')).toBe('5px');
  });

  it('renders a row selection checkbox and emits selection changes', async () => {
    const wrapper = mount(PfTd, { props: { selected: true } });
    expect(wrapper.classes()).toContain(styles.tableCheck);
    const input = wrapper.get<HTMLInputElement>('input[type="checkbox"]');
    expect(input.element.checked).toBe(true);

    await input.setValue(false);
    expect(wrapper.emitted('update:selected')).toEqual([[false]]);
    expect(wrapper.emitted<[Event, boolean]>('select')![0][1]).toBe(false);
  });

  it('supports v-model:selected for row selection', async () => {
    const selected = ref(false);
    const wrapper = mountTemplate(`
      <pf-table>
        <pf-tbody>
          <pf-tr selectable :selected="selected">
            <pf-td v-model:selected="selected" />
            <pf-td>Row</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    `, () => ({ selected }));

    await wrapper.get('input').setValue(true);
    expect(selected.value).toBe(true);
    const tr = wrapper.get('tbody tr');
    expect(tr.classes()).toContain(styles.modifiers.selected);
    expect(tr.attributes('aria-label')).toBe('Row selected');
  });
});
