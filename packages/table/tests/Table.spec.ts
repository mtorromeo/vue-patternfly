import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import menuToggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import accessibilityStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { PfDropdownItem, PfMenuToggle } from '@vue-patternfly/core';
import { providePfMessages } from '@vue-patternfly/core/messages';
import PfTable from '../src/Table.vue';
import PfThead from '../src/Thead.vue';
import PfTbody from '../src/Tbody.vue';
import PfTr from '../src/Tr.vue';
import PfTh from '../src/Th.vue';
import PfTd from '../src/Td.vue';
import PfTfoot from '../src/Tfoot.vue';
import PfCaption from '../src/Caption.vue';
import PfTableText from '../src/TableText.vue';
import PfExpandableRowContent from '../src/ExpandableRowContent.vue';
import PfInnerScrollContainer from '../src/InnerScrollContainer.vue';
import PfOuterScrollContainer from '../src/OuterScrollContainer.vue';
import PfActionsColumn from '../src/ActionsColumn.vue';
import PfTreeRowWrapper from '../src/TreeRowWrapper.vue';

const components = {
  PfTable,
  PfThead,
  PfTbody,
  PfTr,
  PfTh,
  PfTd,
  PfCaption,
  PfInnerScrollContainer,
  PfOuterScrollContainer,
  PfActionsColumn,
  PfTreeRowWrapper,
  PfDropdownItem,
  PfMenuToggle,
};

function mountTemplate(template: string, setup: () => Record<string, unknown> = () => ({}), attachTo?: HTMLElement) {
  return mount(defineComponent({ components, setup, template }), { attachTo });
}

/** Makes an element report its content as overflowing */
function mockOverflow(el: Element) {
  Object.defineProperty(el, 'offsetWidth', { configurable: true, value: 50 });
  Object.defineProperty(el, 'scrollWidth', { configurable: true, value: 100 });
}

describe('Table', () => {
  it('renders the full structure with classes', () => {
    const wrapper = mountTemplate(`
      <pf-table aria-label="Repositories">
        <pf-caption>Repositories table</pf-caption>
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
    expect(table.attributes('data-ouia-safe')).toBe('true');

    expect(wrapper.get('caption').classes()).toEqual([styles.tableCaption]);
    expect(wrapper.get('caption').text()).toBe('Repositories table');

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
    expect(ths[0].text()).toBe('Name');

    const tds = wrapper.findAll('td');
    expect(tds).toHaveLength(2);
    expect(tds[0].classes()).toContain(styles.tableTd);
    expect(tds[0].attributes('data-label')).toBe('Name');
    expect(tds[1].text()).toBe('10');

    // no selectable rows: no caption besides the one passed in
    expect(wrapper.findAll('caption')).toHaveLength(1);
  });

  it('leaves the cells with their native roles and out of the tab sequence (regression)', () => {
    const wrapper = mountTemplate(`
      <pf-table><pf-thead><pf-tr><pf-th>Name</pf-th></pf-tr></pf-thead><pf-tbody><pf-tr><pf-td>one</pf-td></pf-tr></pf-tbody></pf-table>
    `);
    for (const cell of [wrapper.get('th'), wrapper.get('td')]) {
      expect(cell.attributes('role')).toBeUndefined();
      expect(cell.attributes('tabindex')).toBe('-1');
    }
  });

  it('applies table modifiers', () => {
    const wrapper = mount(PfTable, {
      props: {
        compact: true,
        noBorders: true,
        striped: true,
        expandable: true,
        nested: true,
        plain: true,
        noPlainOnGlass: true,
        animations: true,
        stickyHeaderBase: true,
        stickyHeaderStuck: true,
      },
    });
    const classes = wrapper.get('table').classes();
    expect(classes).toContain(styles.modifiers.compact);
    expect(classes).toContain(styles.modifiers.noBorderRows);
    expect(classes).toContain(styles.modifiers.striped);
    expect(classes).toContain(styles.modifiers.expandable);
    expect(classes).toContain('pf-m-nested');
    expect(classes).toContain(styles.modifiers.plain);
    expect(classes).toContain(styles.modifiers.noPlainOnGlass);
    expect(classes).toContain(styles.modifiers.animateExpand);
    expect(classes).toContain(styles.modifiers.stickyHeaderBase);
    expect(classes).toContain(styles.modifiers.stickyHeaderStuck);
  });

  it('does not animate expandable rows by default', () => {
    const wrapper = mount(PfTable, { props: { expandable: true } });
    expect(wrapper.get('table').classes()).not.toContain(styles.modifiers.animateExpand);
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
    const wrapper = mount(PfTable, { props: { treeTable: true, noInset: true } });
    const table = wrapper.get('table');
    expect(table.attributes('role')).toBe('treegrid');
    expect(table.classes()).toContain(stylesTreeView.modifiers.treeView);
    expect(table.classes()).toContain(stylesTreeView.modifiers.treeViewGridMd);
    expect(table.classes()).toContain(stylesTreeView.modifiers.noInset);
    expect(table.classes()).not.toContain(stylesGrid.modifiers.gridMd);
  });

  it('wraps the table in scroll containers for sticky headers', () => {
    const sticky = mount(PfTable, { props: { stickyHeader: true } });
    const outer = sticky.get(`.${scrollStyles.scrollOuterWrapper}`);
    expect(outer.find(`.${scrollStyles.scrollInnerWrapper}`).exists()).toBe(false);
    expect(outer.get('table').classes()).toContain(styles.modifiers.stickyHeader);

    const scroll = mount(PfTable, { props: { stickyHeader: true, horizontalScroll: true } });
    expect(
      scroll.find(`.${scrollStyles.scrollOuterWrapper} > .${scrollStyles.scrollInnerWrapper} > table`).exists(),
    ).toBe(true);

    const plain = mount(PfTable);
    expect(plain.find(`.${scrollStyles.scrollOuterWrapper}`).exists()).toBe(false);
  });

  it('does not wrap itself again inside explicit scroll containers', () => {
    const wrapper = mountTemplate(`
      <pf-outer-scroll-container>
        <pf-inner-scroll-container>
          <pf-table sticky-header />
        </pf-inner-scroll-container>
      </pf-outer-scroll-container>
    `);
    expect(wrapper.findAll(`.${scrollStyles.scrollOuterWrapper}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${scrollStyles.scrollInnerWrapper}`)).toHaveLength(1);
    expect(
      wrapper.find(`.${scrollStyles.scrollOuterWrapper} > .${scrollStyles.scrollInnerWrapper} > table`).exists(),
    ).toBe(true);

    const footer = mountTemplate(`<pf-inner-scroll-container><pf-table sticky-footer /></pf-inner-scroll-container>`);
    expect(footer.find(`.${scrollStyles.scrollOuterWrapper}`).exists()).toBe(false);
    expect(footer.get(`.${scrollStyles.scrollInnerWrapper} > table`).classes()).toContain(
      styles.modifiers.stickyFooter,
    );
  });

  it('applies the sticky footer modifiers inside a scroll container', () => {
    const wrapper = mount(PfTable, { props: { stickyFooter: true, stickyFooterBase: true, stickyFooterStuck: true } });
    const table = wrapper.get(`.${scrollStyles.scrollOuterWrapper} table`);
    expect(table.classes()).toEqual(
      expect.arrayContaining([
        styles.modifiers.stickyFooter,
        styles.modifiers.stickyFooterBase,
        styles.modifiers.stickyFooterStuck,
      ]),
    );
    expect(table.classes()).not.toContain(styles.modifiers.stickyHeader);
  });

  it('renders the selectable rows caption only while a row is selectable', async () => {
    const selectable = ref(true);
    const wrapper = mountTemplate(
      `
      <pf-table selectable-row-caption-text="Pick rows">
        <pf-tbody>
          <pf-tr :selectable="selectable"><pf-td>a</pf-td></pf-tr>
          <pf-tr><pf-td>b</pf-td></pf-tr>
        </pf-tbody>
      </pf-table>
    `,
      () => ({ selectable }),
    );
    await nextTick();

    const caption = wrapper.get('caption');
    expect(caption.classes()).not.toContain('pf-v6-screen-reader');
    expect(caption.text()).toContain('Pick rows');
    expect(caption.get('.pf-v6-screen-reader').text()).toContain('This table has selectable rows');

    selectable.value = false;
    await nextTick();
    expect(wrapper.find('caption').exists()).toBe(false);
  });

  it('hides the selectable rows caption without caption text (regression)', async () => {
    const wrapper = mountTemplate(`
      <pf-table><pf-tbody><pf-tr selectable><pf-td>a</pf-td></pf-tr></pf-tbody></pf-table>
    `);
    await nextTick();
    const caption = wrapper.get('caption');
    expect(caption.classes()).toEqual(['pf-v6-screen-reader']);
    expect(caption.text()).toContain('This table has selectable rows');
  });

  it('does not count hidden selectable rows (regression)', async () => {
    const wrapper = mountTemplate(`
      <pf-table>
        <pf-tbody>
          <pf-tr selectable hidden><pf-td>a</pf-td></pf-tr>
          <pf-tr selectable :expanded="false"><pf-td>b</pf-td></pf-tr>
        </pf-tbody>
      </pf-table>
    `);
    await nextTick();
    expect(wrapper.find('caption').exists()).toBe(false);
  });

  it.each([
    ['default', ''],
    ['sticky header', 'sticky-header'],
    ['sticky header with horizontal scroll', 'sticky-header horizontal-scroll'],
  ])('exposes the table element (%s)', (_, attrs) => {
    const wrapper = mountTemplate(`<pf-table ${attrs}><pf-tbody><pf-tr><pf-td>A</pf-td></pf-tr></pf-tbody></pf-table>`);
    const table = wrapper.findComponent(PfTable).vm.table;
    expect(table).toBeInstanceOf(HTMLTableElement);
    expect(table).toBe(wrapper.get('table').element);
  });

  describe('tree table keyboard navigation', () => {
    let wrapper: VueWrapper;

    beforeEach(async () => {
      wrapper = mountTemplate(
        `
        <pf-table tree-table aria-label="Tree">
          <pf-tbody>
            <pf-tr><pf-td><button id="a1">a1</button><button id="a2">a2</button></pf-td></pf-tr>
            <pf-tr hidden><pf-td><button id="h">hidden</button></pf-td></pf-tr>
            <pf-tr><pf-td><button id="b1">b1</button></pf-td></pf-tr>
          </pf-tbody>
        </pf-table>
      `,
        undefined,
        document.body,
      );
      await nextTick();
    });

    afterEach(() => wrapper.unmount());

    const button = (id: string) => document.getElementById(id) as HTMLButtonElement;

    it('sets up a roving tab index', () => {
      expect(button('a1').tabIndex).toBe(0);
      expect(button('a2').tabIndex).toBe(-1);
      expect(button('b1').tabIndex).toBe(-1);
    });

    it('moves between rows with the vertical arrows, skipping hidden rows', async () => {
      button('a1').focus();
      await wrapper.get('#a1').trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(button('b1'));
      expect(button('b1').tabIndex).toBe(0);
      expect(button('a1').tabIndex).toBe(-1);

      await wrapper.get('#b1').trigger('keydown', { key: 'ArrowDown' });
      expect(document.activeElement).toBe(button('a1'));

      await wrapper.get('#a1').trigger('keydown', { key: 'ArrowUp' });
      expect(document.activeElement).toBe(button('b1'));
    });

    it('moves within a row with the horizontal arrows', async () => {
      button('a1').focus();
      await wrapper.get('#a1').trigger('keydown', { key: 'ArrowRight' });
      expect(document.activeElement).toBe(button('a2'));
      await wrapper.get('#a2').trigger('keydown', { key: 'ArrowRight' });
      expect(document.activeElement).toBe(button('a1'));
      await wrapper.get('#a1').trigger('keydown', { key: 'ArrowLeft' });
      expect(document.activeElement).toBe(button('a2'));
    });

    it('activates the focused element with Enter and Space', async () => {
      const onClick = vi.fn();
      button('b1').addEventListener('click', onClick);
      button('b1').focus();
      await wrapper.get('#b1').trigger('keydown', { key: 'Enter' });
      await wrapper.get('#b1').trigger('keydown', { key: ' ' });
      expect(onClick).toHaveBeenCalledTimes(2);
    });
  });

  it('does not handle arrow keys outside of tree tables', async () => {
    const wrapper = mountTemplate(
      `<pf-table><pf-tbody>
        <pf-tr><pf-td><button id="x1">x1</button></pf-td></pf-tr>
        <pf-tr><pf-td><button id="x2">x2</button></pf-td></pf-tr>
      </pf-tbody></pf-table>`,
      undefined,
      document.body,
    );
    const x1 = document.getElementById('x1') as HTMLButtonElement;
    x1.focus();
    await wrapper.get('#x1').trigger('keydown', { key: 'ArrowDown' });
    expect(document.activeElement).toBe(x1);
    expect(x1.tabIndex).toBe(0);
    wrapper.unmount();
  });
});

describe('Thead', () => {
  it('applies modifiers', () => {
    const wrapper = mount(PfThead, { props: { noWrap: true, nestedHeader: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.nowrap);
    expect(wrapper.classes()).toContain(styles.modifiers.nestedColumnHeader);
  });
});

describe('Tfoot', () => {
  it('renders a tfoot with the table footer class', () => {
    const wrapper = mount(PfTfoot, { slots: { default: '<tr><td>Total</td></tr>' }, attrs: { 'data-custom': 'true' } });
    expect(wrapper.element.tagName).toBe('TFOOT');
    expect(wrapper.classes()).toContain(styles.tableTfoot);
    expect(wrapper.attributes('data-custom')).toBe('true');
    expect(wrapper.text()).toBe('Total');
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

describe('Caption', () => {
  it('renders a caption with the table caption class', () => {
    const wrapper = mount(PfCaption, { slots: { default: 'My caption' } });
    expect(wrapper.element.tagName).toBe('CAPTION');
    expect(wrapper.classes()).toEqual([styles.tableCaption]);
    expect(wrapper.text()).toBe('My caption');
  });
});

describe('ExpandableRowContent', () => {
  it('renders only with the expandable row content class by default', () => {
    const wrapper = mount(PfExpandableRowContent, { slots: { default: 'Row content' } });
    expect(wrapper.classes()).toEqual([styles.tableExpandableRowContent]);
    expect(wrapper.text()).toBe('Row content');
  });

  it('applies the no background modifier and spreads attributes', () => {
    const wrapper = mount(PfExpandableRowContent, { props: { noBackground: true }, attrs: { 'data-custom': 'true' } });
    expect(wrapper.classes()).toContain(styles.modifiers.noBackground);
    expect(wrapper.attributes('data-custom')).toBe('true');
  });
});

describe('scroll containers', () => {
  it('render the scroll wrappers and expose their element', () => {
    const inner = mount(PfInnerScrollContainer, { slots: { default: 'content' } });
    expect(inner.classes()).toEqual([scrollStyles.scrollInnerWrapper]);
    expect(inner.vm.container).toBe(inner.element);

    const outer = mount(PfOuterScrollContainer, { slots: { default: 'content' } });
    expect(outer.classes()).toEqual([scrollStyles.scrollOuterWrapper]);
  });
});

describe('Tr', () => {
  it('applies state modifiers', () => {
    const wrapper = mount(PfTr, {
      props: { selected: true, striped: true, borderRow: true, resetOffset: true, controlRow: true, editable: true },
    });
    const classes = wrapper.classes();
    expect(classes).toContain(styles.modifiers.selected);
    expect(classes).toContain(styles.modifiers.striped);
    expect(classes).toContain(styles.modifiers.borderRow);
    expect(classes).toContain(styles.modifiers.firstCellOffsetReset);
    expect(classes).toContain(styles.tableControlRow);
    expect(classes).toContain('pf-m-inline-editable');
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

  it('marks a control row whose content is expanded', () => {
    const wrapper = mount(PfTr, { props: { contentExpanded: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.classes()).not.toContain(styles.tableExpandableRow);
    expect(wrapper.attributes('hidden')).toBeUndefined();
  });

  it('makes hidden rows inert when the table animates its rows', () => {
    const wrapper = mountTemplate(`
      <pf-table animations expandable>
        <pf-tbody>
          <pf-tr id="collapsed" :expanded="false"><pf-td>a</pf-td></pf-tr>
          <pf-tr id="open" :expanded="true"><pf-td>b</pf-td></pf-tr>
        </pf-tbody>
      </pf-table>
    `);
    expect(wrapper.get('#collapsed').attributes('inert')).toBeDefined();
    expect(wrapper.get('#open').attributes('inert')).toBeUndefined();

    const still = mountTemplate(`<pf-table><pf-tbody><pf-tr hidden><pf-td>a</pf-td></pf-tr></pf-tbody></pf-table>`);
    expect(still.get('tr').attributes('inert')).toBeUndefined();
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
  it('applies cell modifiers', () => {
    const wrapper = mount(PfTh, {
      props: { width: 20, modifier: 'nowrap', textCenter: true, subheader: true, dataLabel: 'Col' },
      slots: { default: 'Col' },
    });
    const th = wrapper.get('th');
    expect(th.classes()).toContain(styles.modifiers.width_20);
    expect(th.classes()).toContain(styles.modifiers.nowrap);
    expect(th.classes()).toContain(styles.modifiers.center);
    expect(th.classes()).toContain(styles.tableSubhead);
    expect(th.attributes('data-label')).toBe('Col');
  });

  it('applies the visibility breakpoint modifiers (regression)', () => {
    const wrapper = mount(PfTh, {
      props: { visibilityMd: 'hidden', visibilityLg: 'visible' },
      slots: { default: 'A' },
    });
    expect(wrapper.get('th').classes()).toContain(styles.modifiers.hiddenOnMd);
    expect(wrapper.get('th').classes()).toContain(styles.modifiers.visibleOnLg);
  });

  it('can render a different element, without a scope', () => {
    const wrapper = mount(PfTh, { props: { component: 'td' }, slots: { default: 'A' } });
    const cell = wrapper.get('td');
    expect(cell.classes()).toContain(styles.tableTh);
    expect(cell.attributes('scope')).toBeUndefined();
  });

  it('forwards attributes to the cell', () => {
    const wrapper = mount(PfTh, { attrs: { colspan: 2, 'data-test': 'th', tabindex: 0 }, slots: { default: 'A' } });
    expect(wrapper.get('th').attributes('colspan')).toBe('2');
    expect(wrapper.get('th').attributes('data-test')).toBe('th');
    expect(wrapper.get('th').attributes('tabindex')).toBe('0');
  });

  it('renders the scope attribute', () => {
    const wrapper = mount(PfTh, { slots: { default: 'A' } });
    expect(wrapper.get('th').attributes('scope')).toBe('col');
  });

  it('applies sticky styles with the PatternFly 6 inset variables (regression)', () => {
    const wrapper = mount(PfTh, {
      props: { sticky: true, rightBorder: true, leftBorder: true, stickyLeftOffset: '10px' },
      slots: { default: 'A' },
    });
    const th = wrapper.get('th');
    expect(th.classes()).toContain(scrollStyles.tableStickyCell);
    expect(th.classes()).toContain(scrollStyles.modifiers.borderRight);
    expect(th.classes()).toContain(scrollStyles.modifiers.borderLeft);
    const style = (th.element as HTMLElement).style;
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--MinWidth')).toBe('120px');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--InsetInlineStart')).toBe('10px');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--InsetInlineEnd')).toBe('0');
  });

  describe('accessible name', () => {
    it('warns when the header has no accessible name', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      mount(PfTh);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Table headers must have an accessible name'));

      warn.mockClear();
      mount(PfTh, { attrs: { 'aria-label': 'Test' } });
      mount(PfTh, { props: { ariaLabel: 'Test' } });
      mount(PfTh, { props: { screenReaderText: 'Test' } });
      mount(PfTh, { slots: { default: 'Test' } });
      mount(PfTh, { props: { selected: false } });
      mount(PfTh, { attrs: { 'aria-hidden': 'true' } });
      expect(warn).not.toHaveBeenCalled();

      mount(PfTh, { attrs: { 'aria-hidden': 'false' } });
      expect(warn).toHaveBeenCalledOnce();
      warn.mockRestore();
    });

    it('labels a selection header by default', () => {
      expect(
        mount(PfTh, { props: { selected: false } })
          .get('th')
          .attributes('aria-label'),
      ).toBe('Row select');
      for (const attrs of [{ 'aria-label': 'Custom' }, { ariaLabel: 'Custom' }]) {
        const th = mount(PfTh, { props: { selected: false }, attrs }).get('th');
        expect(th.attributes('aria-label')).toBe('Custom');
        expect(th.attributes('arialabel')).toBeUndefined();
      }
      expect(
        mount(PfTh, { slots: { default: 'Name' } })
          .get('th')
          .attributes('aria-label'),
      ).toBeUndefined();
    });

    it('renders the aria-label when passed in', () => {
      const wrapper = mount(PfTh, { attrs: { 'aria-label': 'Test' } });
      expect(wrapper.get('th').attributes('aria-label')).toBe('Test');
      expect(wrapper.get('th').text()).toBe('');
    });

    it('renders the screen reader text only without children', () => {
      const empty = mount(PfTh, { props: { screenReaderText: 'Test' } });
      expect(empty.get(`th > span.${accessibilityStyles.screenReader}`).text()).toBe('Test');

      const filled = mount(PfTh, { props: { screenReaderText: 'Test' }, slots: { default: 'Heading label' } });
      expect(filled.get('th').text()).toBe('Heading label');
    });

    it('renders the additional content after the children', () => {
      const wrapper = mount(PfTh, {
        slots: { default: () => h('div', 'Test'), 'additional-content': () => h('div', 'Extra') },
      });
      const children = wrapper.get('th').element.children;
      expect(children[0].textContent).toBe('Test');
      expect(children[1].textContent).toBe('Extra');
    });
  });

  describe('sorting', () => {
    it('does not render a sort button when not sortable', () => {
      const wrapper = mount(PfTh, { slots: { default: 'Name' } });
      expect(wrapper.find('button').exists()).toBe(false);
      expect(wrapper.get('th').attributes('aria-sort')).toBeUndefined();
      expect(wrapper.get('th').classes()).not.toContain(styles.tableSort);
    });

    it('renders an unsorted sortable header without aria-sort (regression)', () => {
      const wrapper = mount(PfTh, { props: { sortable: true }, slots: { default: 'Name' } });
      const th = wrapper.get('th');
      expect(th.classes()).toContain(styles.tableSort);
      expect(th.classes()).not.toContain(styles.modifiers.selected);
      expect(th.attributes('aria-sort')).toBeUndefined();
      const button = wrapper.get(`th > button.${styles.tableButton}`);
      expect(button.attributes('type')).toBe('button');
      const content = button.get(`div.${styles.tableButtonContent}`);
      expect(content.get(`span.${styles.tableText}`).text()).toBe('Name');
      expect(content.find(`span.${styles.tableSortIndicator} svg`).exists()).toBe(true);
    });

    it('sets aria-sort and the selected modifier when sorted', async () => {
      const wrapper = mount(PfTh, {
        props: { sortable: true, sorted: true, direction: 'asc' },
        slots: { default: 'A' },
      });
      expect(wrapper.get('th').attributes('aria-sort')).toBe('ascending');
      expect(wrapper.get('th').classes()).toContain(styles.modifiers.selected);
      const ascIcon = wrapper.get(`.${styles.tableSortIndicator}`).html();

      await wrapper.setProps({ direction: 'desc' });
      expect(wrapper.get('th').attributes('aria-sort')).toBe('descending');
      expect(wrapper.get(`.${styles.tableSortIndicator}`).html()).not.toBe(ascIcon);
    });

    it('emits sort with the new direction on click', async () => {
      const wrapper = mount(PfTh, {
        props: { sortable: true, sorted: true, direction: 'asc' },
        slots: { default: 'A' },
      });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted<[MouseEvent, string]>('sort')![0][1]).toBe('desc');
      expect(wrapper.emitted('update:direction')).toEqual([['desc']]);

      await wrapper.setProps({ direction: 'desc' });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted<[MouseEvent, string]>('sort')![1][1]).toBe('asc');
      expect(wrapper.emitted('update:direction')).toEqual([['desc'], ['asc']]);
    });

    it('works with v-model:direction', async () => {
      const direction = ref<'asc' | 'desc'>('asc');
      const wrapper = mountTemplate(`<pf-th sortable sorted v-model:direction="direction">Name</pf-th>`, () => ({
        direction,
      }));
      await wrapper.get('button').trigger('click');
      expect(direction.value).toBe('desc');
      expect(wrapper.get('th').attributes('aria-sort')).toBe('descending');
    });

    it('uses the default direction (asc) when sorting a column for the first time', async () => {
      const wrapper = mount(PfTh, { props: { sortable: true }, slots: { default: 'A' } });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted('update:direction')).toEqual([['asc']]);
    });

    it('starts from defaultDirection when the column is not the sorted one', async () => {
      const wrapper = mount(PfTh, {
        props: { sortable: true, direction: 'asc', defaultDirection: 'desc' },
        slots: { default: 'A' },
      });
      await wrapper.get('button').trigger('click');
      expect(wrapper.emitted('update:direction')).toEqual([['desc']]);
    });

    it('renders a favorites sort column with a star', () => {
      const wrapper = mount(PfTh, { props: { sortable: true, favorites: true } });
      const th = wrapper.get('th');
      expect(th.classes()).toContain(styles.tableSort);
      expect(th.classes()).toContain(styles.tableFavorite);
      const button = wrapper.get(`button.${styles.tableButton}`);
      expect(button.attributes('aria-label')).toBe('Sort favorites');
      expect(button.find(`.${styles.tableText} svg`).exists()).toBe(true);
    });

    it('renders a favorite button beside the sort button of a favorites column', async () => {
      const wrapper = mount(PfTh, {
        props: { sortable: true, favorites: true, favorited: true, favoriteAttrs: { 'aria-label': 'Unfavorite all' } },
      });
      expect(wrapper.get('th').classes()).toContain(styles.modifiers.favorited);
      const buttons = wrapper.findAll(`.pf-v6-c-action-list button`);
      expect(buttons).toHaveLength(2);
      expect(buttons[0].classes()).toContain(buttonStyles.modifiers.favorite);
      expect(buttons[0].classes()).toContain(buttonStyles.modifiers.favorited);
      expect(buttons[0].attributes('aria-label')).toBe('Unfavorite all');
      expect(buttons[1].attributes('aria-label')).toBe('Sort favorites');
      expect(buttons[1].find(`.${styles.tableSortIndicator}`).exists()).toBe(true);

      await buttons[0].trigger('click');
      expect(wrapper.emitted('update:favorited')).toEqual([[false]]);
      await buttons[1].trigger('click');
      expect(wrapper.emitted('update:direction')).toEqual([['asc']]);
    });
  });

  describe('selection', () => {
    it('renders a styled select-all checkbox when selected is defined (regression)', async () => {
      const wrapper = mount(PfTh, { props: { selected: false }, attrs: { 'aria-label': 'Row select' } });
      const th = wrapper.get('th');
      expect(th.classes()).toContain(styles.tableCheck);
      expect(th.attributes('tabindex')).toBe('-1');
      const check = th.get(`div.${checkStyles.check}`);
      expect(check.classes()).toContain(checkStyles.modifiers.standalone);
      const input = check.get<HTMLInputElement>(`input.${checkStyles.checkInput}[type="checkbox"]`);
      expect(input.attributes('id')).toBe('select-all');
      expect(input.attributes('name')).toBe('check-all');
      expect(input.attributes('aria-label')).toBe('Select all rows');
      expect(input.element.checked).toBe(false);
      expect(input.element.indeterminate).toBe(false);

      await input.setValue(true);
      expect(wrapper.emitted('update:selected')).toEqual([[true]]);
      const select = wrapper.emitted<[Event, boolean]>('select')!;
      expect(select).toHaveLength(1);
      expect(select[0][1]).toBe(true);

      await wrapper.setProps({ selected: true });
      expect(input.element.checked).toBe(true);
    });

    it('renders an indeterminate checkbox when selected is null', () => {
      const wrapper = mount(PfTh, { props: { selected: null }, attrs: { 'aria-label': 'Select all' } });
      expect(wrapper.get<HTMLInputElement>('input').element.indeterminate).toBe(true);
    });

    it('can disable the select-all checkbox', () => {
      const wrapper = mount(PfTh, { props: { selected: false, selectDisabled: true }, attrs: { 'aria-label': 'A' } });
      expect(wrapper.get('input').attributes('disabled')).toBeDefined();
    });

    it('does not render a checkbox when selected is undefined', () => {
      const wrapper = mount(PfTh, { slots: { default: 'A' } });
      expect(wrapper.find('input').exists()).toBe(false);
      expect(wrapper.get('th').classes()).not.toContain(styles.tableCheck);
    });
  });

  describe('expand all', () => {
    it('renders an expand all toggle reflecting whether all rows are expanded', async () => {
      const wrapper = mount(PfTh, { props: { expanded: false }, attrs: { 'aria-label': 'Row expansion' } });
      const th = wrapper.get('th');
      expect(th.classes()).toContain(styles.tableToggle);
      const button = th.get('button');
      expect(button.attributes('aria-label')).toBe('Expand all rows');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(button.attributes('id')).toBe('expand-toggle-1');
      expect(button.classes()).not.toContain(styles.modifiers.expanded);
      expect(button.find(`.${styles.tableToggleIcon} svg`).exists()).toBe(true);

      await button.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.emitted<[MouseEvent, boolean]>('toggle')![0][1]).toBe(true);

      await wrapper.setProps({ expanded: true });
      expect(button.attributes('aria-expanded')).toBe('true');
      expect(button.classes()).toContain(styles.modifiers.expanded);
    });
  });

  describe('info', () => {
    it('wraps the header in a help tooltip', () => {
      const wrapper = mount(PfTh, { props: { info: 'More information' }, slots: { default: 'Repositories' } });
      const th = wrapper.get('th');
      expect(th.classes()).toContain(styles.modifiers.help);
      const help = th.get(`div.${styles.tableColumnHelp}`);
      expect(help.get(`span.${styles.tableText}`).text()).toBe('Repositories');
      const button = help.get(`span.${styles.tableColumnHelpAction} button`);
      expect(button.classes()).toContain(buttonStyles.modifiers.plain);
      expect(button.classes()).toContain(buttonStyles.modifiers.noPadding);
      expect(button.attributes('aria-label')).toBe('More information');
    });

    it('wraps the sort button and uses a popover', () => {
      const wrapper = mount(PfTh, {
        props: { sortable: true, infoPopover: true, infoAriaLabel: 'More on pull requests' },
        slots: { default: 'Pull requests', info: () => h('strong', 'information') },
      });
      const help = wrapper.get(`th > div.${styles.tableColumnHelp}`);
      expect(help.find(`button.${styles.tableButton}`).exists()).toBe(true);
      expect(help.get(`span.${styles.tableColumnHelpAction} button`).attributes('aria-label')).toBe(
        'More on pull requests',
      );
    });
  });

  it('shows the header text in a tooltip when it is truncated', async () => {
    const wrapper = mount(PfTh, { slots: { default: 'A very long header' }, attachTo: document.body });
    const th = wrapper.get('th');
    await th.trigger('mouseenter');
    expect(wrapper.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);

    mockOverflow(th.element);
    await th.trigger('mouseenter');
    const tooltip = wrapper.findComponent({ name: 'PfTooltip' });
    expect(tooltip.props('content')).toBe('A very long header');

    await th.trigger('blur');
    expect(wrapper.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);
    wrapper.unmount();
  });
});

describe('messages', () => {
  it('uses the provided messages for the default labels', () => {
    const Provider = defineComponent({
      setup(_, { slots }) {
        providePfMessages({ thRowSelect: 'Selezione', tdSelectRow: row => `Seleziona riga ${row}` });
        return () => slots.default?.();
      },
    });
    const wrapper = mount(Provider, {
      slots: {
        default: () =>
          h(PfTable, null, () => [
            h(PfThead, null, () => h(PfTr, null, () => h(PfTh, { selected: false }))),
            h(PfTbody, null, () => h(PfTr, null, () => h(PfTd, { selected: false, rowIndex: 3 }))),
          ]),
      },
    });

    expect(wrapper.get('th').attributes('aria-label')).toBe('Selezione');
    expect(wrapper.get('td input').attributes('aria-label')).toBe('Seleziona riga 3');
  });
});

describe('Td', () => {
  it('applies cell modifiers', () => {
    const wrapper = mount(PfTd, {
      props: { width: 50, modifier: 'truncate', textCenter: true, noPadding: true, actionCell: true, action: true },
    });
    const classes = wrapper.get('td').classes();
    expect(classes).toContain(styles.modifiers.width_50);
    expect(classes).toContain(styles.modifiers.truncate);
    expect(classes).toContain(styles.modifiers.center);
    expect(classes).toContain(styles.modifiers.noPadding);
    expect(classes).toContain(styles.tableAction);
    expect(classes).toContain(styles.modifiers.action);
  });

  it('does not apply the action modifier by default', () => {
    const wrapper = mount(PfTd);
    expect(wrapper.get('td').classes()).toEqual([styles.tableTd]);
  });

  it('applies the visibility breakpoint modifiers (regression)', () => {
    const wrapper = mount(PfTd, { props: { visibility: 'hidden', visibilitySm: 'visible' } });
    expect(wrapper.get('td').classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.get('td').classes()).toContain(styles.modifiers.visibleOnSm);
  });

  it('can render a different element', () => {
    const wrapper = mount(PfTd, { props: { component: 'th' } });
    expect(wrapper.get('th').classes()).toContain(styles.tableTd);
  });

  it('applies sticky styles with the PatternFly 6 inset variables (regression)', () => {
    const wrapper = mount(PfTd, { props: { sticky: true, stickyRightOffset: '5px' } });
    expect(wrapper.get('td').classes()).toContain(scrollStyles.tableStickyCell);
    const style = (wrapper.get('td').element as HTMLElement).style;
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--MinWidth')).toBe('120px');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--InsetInlineStart')).toBe('0');
    expect(style.getPropertyValue('--pf-v6-c-table__sticky-cell--InsetInlineEnd')).toBe('5px');
  });

  it('becomes focusable when its content is truncated', () => {
    const wrapper = mount(PfTd, { props: { modifier: 'truncate' } });
    expect(wrapper.get('td').attributes('tabindex')).toBe('0');
  });

  it('shows the cell text in a tooltip when it is truncated', async () => {
    const wrapper = mount(PfTd, { slots: { default: 'A very long cell' }, attachTo: document.body });
    const td = wrapper.get('td');
    mockOverflow(td.element);
    await td.trigger('mouseenter');
    expect(wrapper.findComponent({ name: 'PfTooltip' }).props('content')).toBe('A very long cell');
    wrapper.unmount();

    const disabled = mount(PfTd, { props: { noTooltip: true }, slots: { default: 'A very long cell' } });
    mockOverflow(disabled.get('td').element);
    await disabled.get('td').trigger('mouseenter');
    expect(disabled.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);

    const element = mount(PfTd, { slots: { default: () => h('a', 'link') } });
    mockOverflow(element.get('td').element);
    await element.get('td').trigger('mouseenter');
    expect(element.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);
  });

  describe('selection', () => {
    it('renders a styled row selection checkbox and emits selection changes (regression)', async () => {
      const wrapper = mount(PfTd, { props: { selected: true, rowIndex: 2 } });
      const td = wrapper.get('td');
      expect(td.classes()).toContain(styles.tableCheck);
      const check = td.get(`div.${checkStyles.check}.${checkStyles.modifiers.standalone}`);
      const input = check.get<HTMLInputElement>(`input.${checkStyles.checkInput}[type="checkbox"]`);
      expect(input.attributes('id')).toBe('select-2');
      expect(input.attributes('name')).toBe('checkrow2');
      expect(input.attributes('aria-label')).toBe('Select row 2');
      expect(input.element.checked).toBe(true);

      await input.setValue(false);
      expect(wrapper.emitted('update:selected')).toEqual([[false]]);
      expect(wrapper.emitted<[Event, boolean]>('select')![0][1]).toBe(false);
    });

    it('can disable the checkbox', () => {
      const wrapper = mount(PfTd, { props: { selected: false, selectDisabled: true } });
      expect(wrapper.get('input').attributes('disabled')).toBeDefined();
      expect(wrapper.get('input').attributes('aria-label')).toBe('Select row');
    });

    it('renders radios sharing a name scoped to their table', async () => {
      const selected = ref<number>();
      const wrapper = mountTemplate(
        `
        <pf-table>
          <pf-tbody>
            <pf-tr v-for="i in 2" :key="i">
              <pf-td select-radio :row-index="i" :selected="selected === i" @update:selected="selected = i" />
            </pf-tr>
          </pf-tbody>
        </pf-table>
        <pf-table>
          <pf-tbody><pf-tr><pf-td select-radio :selected="false" /></pf-tr></pf-tbody>
        </pf-table>
      `,
        () => ({ selected }),
      );
      const radios = wrapper.findAll<HTMLInputElement>('input[type="radio"]');
      expect(radios).toHaveLength(3);
      expect(radios[0].classes()).toContain('pf-v6-c-radio__input');
      expect(radios[0].attributes('id')).toBe('select-1');
      expect(radios[0].attributes('aria-label')).toBe('Select row 1');
      expect(radios[0].attributes('name')).toBe(radios[1].attributes('name'));
      expect(radios[0].attributes('name')).not.toBe(radios[2].attributes('name'));

      await radios[1].setValue(true);
      expect(selected.value).toBe(2);
      expect(radios[1].element.checked).toBe(true);
    });

    it('supports v-model:selected for row selection', async () => {
      const selected = ref(false);
      const wrapper = mountTemplate(
        `
        <pf-table>
          <pf-tbody>
            <pf-tr selectable :selected="selected">
              <pf-td v-model:selected="selected" />
              <pf-td>Row</pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      `,
        () => ({ selected }),
      );

      await wrapper.get('input').setValue(true);
      expect(selected.value).toBe(true);
      const tr = wrapper.get('tbody tr');
      expect(tr.classes()).toContain(styles.modifiers.selected);
      expect(tr.attributes('aria-label')).toBe('Row selected');
    });
  });

  describe('expansion', () => {
    it('renders an expansion toggle and emits the new expanded state', async () => {
      const wrapper = mount(PfTd, { props: { expanded: false, rowIndex: 1, expandId: 'example' } });
      const td = wrapper.get('td');
      expect(td.classes()).toContain(styles.tableToggle);
      const button = td.get('button');
      expect(button.classes()).toContain(buttonStyles.modifiers.plain);
      expect(button.classes()).not.toContain(buttonStyles.modifiers.small);
      expect(button.attributes('id')).toBe('example1');
      expect(button.attributes('aria-label')).toBe('Details');
      expect(button.attributes('aria-labelledby')).toBe('simple-node1 example1');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(button.find(`.${styles.tableToggleIcon} svg`).exists()).toBe(true);

      await button.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.emitted<[MouseEvent, boolean]>('toggle')![0][1]).toBe(true);

      await wrapper.setProps({ expanded: true });
      expect(button.classes()).toContain(styles.modifiers.expanded);
    });

    it('renders small expansion toggles in compact tables', () => {
      const wrapper = mountTemplate(`
        <pf-table compact expandable>
          <pf-thead><pf-tr><pf-th :expanded="false" aria-label="Row expansion" /><pf-th>Name</pf-th></pf-tr></pf-thead>
          <pf-tbody><pf-tr><pf-td :expanded="false" :row-index="0" /><pf-td>Test content</pf-td></pf-tr></pf-tbody>
        </pf-table>
      `);
      const buttons = wrapper.findAll('button');
      expect(buttons).toHaveLength(2);
      for (const button of buttons) {
        expect(button.classes()).toContain(buttonStyles.modifiers.small);
      }
    });

    it('renders a compound expansion toggle around the cell content', async () => {
      const wrapper = mount(PfTd, {
        props: { expanded: false, compound: true, rowIndex: 0, columnIndex: 2, expandId: 'compound' },
        slots: { default: '10' },
      });
      const td = wrapper.get('td');
      expect(td.classes()).toContain(styles.tableCompoundExpansionToggle);
      expect(td.classes()).not.toContain(styles.tableToggle);
      expect(td.classes()).not.toContain(styles.modifiers.expanded);
      const button = td.get(`button.${styles.tableButton}`);
      expect(button.attributes('id')).toBe('compound-0-2');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(button.get(`span.${styles.tableText}`).text()).toBe('10');

      await button.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      await wrapper.setProps({ expanded: true });
      expect(td.classes()).toContain(styles.modifiers.expanded);
    });

    it('stops the expand animation of a control row when switching compound cells', async () => {
      const wrapper = mountTemplate(
        `
        <pf-table animations expandable>
          <pf-tbody expanded>
            <pf-tr content-expanded control-row>
              <pf-td id="open" compound :expanded="true">1</pf-td>
              <pf-td id="closed" compound :expanded="false">2</pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      `,
      );
      const tr = wrapper.get('tr');
      await wrapper.get('#closed button').trigger('click');
      expect(tr.classes()).toContain(styles.modifiers.noAnimateExpand);
      await wrapper.get('#open button').trigger('click');
      expect(tr.classes()).not.toContain(styles.modifiers.noAnimateExpand);
    });
  });

  describe('favorites', () => {
    it('renders a favorite button and emits the new favorited state', async () => {
      const wrapper = mount(PfTd, { props: { favorited: false, rowIndex: 3 }, slots: { default: 'ignored' } });
      const td = wrapper.get('td');
      expect(td.classes()).toContain(styles.tableFavorite);
      expect(td.classes()).not.toContain(styles.modifiers.favorited);
      const button = td.get('button');
      expect(button.attributes('type')).toBe('button');
      expect(button.classes()).toContain(buttonStyles.modifiers.favorite);
      expect(button.attributes('aria-label')).toBe('Not starred');
      expect(button.attributes('id')).toBe('favorites-button-3');
      expect(button.attributes('aria-labelledby')).toBe('favorites-button-3');
      expect(td.text()).toBe('');

      await button.trigger('click');
      expect(wrapper.emitted('update:favorited')).toEqual([[true]]);
      expect(wrapper.emitted<[MouseEvent, boolean]>('favorite')![0][1]).toBe(true);

      await wrapper.setProps({ favorited: true });
      expect(td.classes()).toContain(styles.modifiers.favorited);
      expect(button.attributes('aria-label')).toBe('Starred');
    });
  });

  describe('draggable rows', () => {
    it('renders a drag button', () => {
      const wrapper = mount(PfTd, { props: { draggableRow: true, draggableAttrs: { id: 'draggable-row-1' } } });
      const td = wrapper.get('td');
      expect(td.classes()).toContain(styles.tableDraggable);
      const button = td.get('button');
      expect(button.attributes('id')).toBe('draggable-row-1');
      expect(button.attributes('aria-label')).toBe('Draggable row draggable button');
      expect(button.find('svg').exists()).toBe(true);
    });
  });
});

describe('TreeRowWrapper', () => {
  function mountTree(model: { expanded?: boolean; checked?: boolean | null; detailsExpanded?: boolean }, setsize = 2) {
    const state = ref({ ...model });
    const wrapper = mountTemplate(
      `
      <pf-table tree-table>
        <pf-tbody>
          <pf-tree-row-wrapper
            :level="1"
            :posinset="1"
            :setsize="setsize"
            v-model:expanded="state.expanded"
            v-model:checked="state.checked"
            v-model:details-expanded="state.detailsExpanded"
          >
            <pf-td tree-row data-label="Name" :row-index="0">
              <template #icon><i class="icon" /></template>
              Repositories one
            </pf-td>
            <pf-td data-label="Branches">Branch one</pf-td>
          </pf-tree-row-wrapper>
        </pf-tbody>
      </pf-table>
    `,
      () => ({ state, setsize }),
    );
    return { wrapper, state };
  }

  it('renders the tree row attributes and the title cell', () => {
    const { wrapper } = mountTree({ expanded: false });
    const tr = wrapper.get('tr');
    expect(tr.attributes('aria-level')).toBe('1');
    expect(tr.attributes('aria-posinset')).toBe('1');
    expect(tr.attributes('aria-setsize')).toBe('2');
    expect(tr.attributes('aria-expanded')).toBe('false');
    expect(tr.classes()).not.toContain(styles.modifiers.expanded);

    const title = tr.get('th');
    expect(title.classes()).toContain(styles.tableTd);
    expect(title.classes()).toContain(stylesTreeView.tableTreeViewTitleCell);
    // the tree title cell does not repeat its label in the responsive view (regression)
    expect(title.attributes('data-label')).toBeUndefined();
    expect(tr.get('td').attributes('data-label')).toBe('Branches');

    const main = title.get(`div.${stylesTreeView.tableTreeViewMain}`);
    const text = main.get(`div.${stylesTreeView.tableTreeViewText}`);
    expect(text.find(`span.${stylesTreeView.tableTreeViewIcon} i.icon`).exists()).toBe(true);
    expect(text.get(`span.${styles.tableText}`).text()).toBe('Repositories one');
  });

  it('toggles the node expansion', async () => {
    const { wrapper, state } = mountTree({ expanded: false });
    const button = wrapper.get(`span.${stylesTreeView.tableToggle} button`);
    expect(button.attributes('aria-label')).toBe('Expand row 0');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.find(`.${stylesTreeView.tableToggleIcon} svg`).exists()).toBe(true);

    await button.trigger('click');
    expect(state.value.expanded).toBe(true);
    expect(wrapper.get('tr').classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.get('tr').attributes('aria-expanded')).toBe('true');
    expect(button.classes()).toContain(styles.modifiers.expanded);
    expect(button.attributes('aria-label')).toBe('Collapse row 0');
  });

  it('does not render the expansion toggle for leaves', () => {
    const { wrapper } = mountTree({ expanded: false }, 0);
    expect(wrapper.find(`span.${stylesTreeView.tableToggle}`).exists()).toBe(false);
  });

  it('renders the checkbox and the details toggle only when bound', async () => {
    const plain = mountTree({ expanded: false });
    expect(plain.wrapper.find('input').exists()).toBe(false);
    expect(plain.wrapper.find(`.${stylesTreeView.tableTreeViewDetailsToggle}`).exists()).toBe(false);

    const { wrapper, state } = mountTree({ expanded: false, checked: null, detailsExpanded: false });
    const check = wrapper.get(`span.${stylesTreeView.tableCheck}`);
    const label = check.get('label');
    const input = label.get<HTMLInputElement>('input[type="checkbox"]');
    expect(label.attributes('for')).toBe('checkbox_0');
    expect(input.attributes('id')).toBe('checkbox_0');
    expect(input.attributes('aria-label')).toBe('Row 0 checkbox');
    expect(input.element.indeterminate).toBe(true);
    await input.setValue(true);
    expect(state.value.checked).toBe(true);

    const details = wrapper.get(`span.${stylesTreeView.tableTreeViewDetailsToggle} button`);
    expect(details.attributes('aria-label')).toBe('Show row details');
    expect(details.find(`span.${styles.table}__details-toggle-icon svg`).exists()).toBe(true);
    await details.trigger('click');
    expect(state.value.detailsExpanded).toBe(true);
    expect(wrapper.get('tr').classes()).toContain(stylesTreeView.modifiers.treeViewDetailsExpanded);
  });

  it('hides rows of collapsed parents', () => {
    const wrapper = mountTemplate(
      `<pf-tree-row-wrapper :level="2" hidden><pf-td tree-row>Child</pf-td></pf-tree-row-wrapper>`,
    );
    expect(wrapper.get('tr').attributes('hidden')).toBeDefined();
  });
});

describe('TableText', () => {
  it('renders a span with the table text class and wrap modifier', () => {
    const wrapper = mount(PfTableText, { props: { wrapModifier: 'truncate' }, slots: { default: 'Text' } });
    const span = wrapper.get('span');
    expect(span.classes()).toEqual([styles.modifiers.truncate, styles.tableText]);
    expect(span.text()).toBe('Text');
  });

  it('renders a different element', () => {
    const wrapper = mount(PfTableText, { props: { component: 'div' } });
    expect(wrapper.get('div').classes()).toContain(styles.tableText);
  });

  it('shows the truncated text in a tooltip on mouse enter and focus', async () => {
    const wrapper = mount(PfTableText, { slots: { default: 'A truncated text' }, attachTo: document.body });
    const span = wrapper.get('span');
    await span.trigger('mouseenter');
    expect(wrapper.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);

    mockOverflow(span.element);
    Object.defineProperty(span.element, 'innerText', { configurable: true, value: 'A truncated text' });
    await span.trigger('mouseenter');
    const tooltip = wrapper.findComponent({ name: 'PfTooltip' });
    expect(tooltip.props('content')).toBe('A truncated text');
    expect(tooltip.props('visible')).toBe(true);

    await wrapper.setProps({ focused: true });
    await wrapper.setProps({ focused: false });
    expect(wrapper.findComponent({ name: 'PfTooltip' }).exists()).toBe(false);
    wrapper.unmount();
  });

  it('shows its tooltip normally with the default behavior', () => {
    const wrapper = mount(PfTableText, { props: { tooltip: 'Info', tooltipDefaultBehavior: true } });
    const tooltip = wrapper.findComponent({ name: 'PfTooltip' });
    expect(tooltip.props('content')).toBe('Info');
    expect(tooltip.props('visible')).toBe(false);
  });
});

describe('ActionsColumn', () => {
  it('renders the outside actions and a kebab toggle opening the actions', async () => {
    const wrapper = mountTemplate(
      `
      <pf-actions-column append-to="inline">
        <template #outside><button id="start">Start</button></template>
        <pf-dropdown-item>Some action</pf-dropdown-item>
        <pf-dropdown-item>Third action</pf-dropdown-item>
      </pf-actions-column>
    `,
      undefined,
      document.body,
    );
    expect(wrapper.find('#start').exists()).toBe(true);
    const toggle = wrapper.get(`button.${menuToggleStyles.menuToggle}`);
    expect(toggle.classes()).toContain(menuToggleStyles.modifiers.plain);
    expect(toggle.attributes('aria-label')).toBe('Kebab toggle');
    expect(toggle.attributes('aria-expanded')).toBe('false');
    expect(toggle.find('svg').exists()).toBe(true);
    expect(wrapper.find('.pf-v6-c-menu__list-item').exists()).toBe(false);

    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');
    const items = wrapper.findAll('.pf-v6-c-menu__list-item');
    expect(items.map(i => i.text())).toEqual(['Some action', 'Third action']);
    expect(wrapper.find('.pf-v6-c-menu__list').exists()).toBe(true);

    await wrapper.get('.pf-v6-c-menu__item').trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('false');
    wrapper.unmount();
  });

  it('disables the toggle', () => {
    const wrapper = mountTemplate(
      `<pf-actions-column disabled><pf-dropdown-item>A</pf-dropdown-item></pf-actions-column>`,
    );
    expect(wrapper.get('button').attributes('disabled')).toBeDefined();
  });

  it('binds its state to a custom toggle', async () => {
    const wrapper = mountTemplate(
      `
      <pf-actions-column append-to="inline">
        <template #toggle><pf-menu-toggle data-test="custom">Actions</pf-menu-toggle></template>
        <pf-dropdown-item>A</pf-dropdown-item>
      </pf-actions-column>
    `,
      undefined,
      document.body,
    );
    const toggle = wrapper.get('[data-test="custom"]');
    expect(toggle.text()).toBe('Actions');
    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');
    wrapper.unmount();
  });
});
