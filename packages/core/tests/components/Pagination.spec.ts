import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import menuStyles from '@patternfly/react-styles/css/components/Menu/menu';
import PfPagination from '../../src/components/Pagination/Pagination.vue';
import PfPaginationNavigation from '../../src/components/Pagination/PaginationNavigation.vue';
import PfPaginationOptionsMenu from '../../src/components/Pagination/PaginationOptionsMenu.vue';

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

type Action = 'first' | 'previous' | 'next' | 'last';
const navButton = (wrapper: VueWrapper<any>, action: Action) => wrapper.find(`button[data-action="${action}"]`);
const isDisabled = (wrapper: VueWrapper<any>, action: Action) => navButton(wrapper, action).attributes('disabled') !== undefined;
const pageInput = (wrapper: VueWrapper<any>) => wrapper.find<HTMLInputElement>(`.${styles.paginationNavPageSelect} input`);
const totalText = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.paginationTotalItems}`).text().replace(/\s+/g, ' ');
const toggleText = (wrapper: VueWrapper<any>) => wrapper.find('button[aria-haspopup="listbox"]').text().replace(/\s+/g, ' ');

describe('Pagination', () => {
  describe('rendering', () => {
    it('defaults to the top variant', () => {
      const wrapper = mount(PfPagination, { props: { count: 52 } });
      expect(wrapper.attributes('id')).toBe('options-menu-top-pagination');
      expect(wrapper.find(`.${styles.paginationTotalItems}`).exists()).toBe(true);
    });

    it('renders a top pagination with total items, options menu and navigation', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, variant: 'top' } });
      expect(wrapper.element.tagName).toBe('DIV');
      expect(wrapper.classes()).toContain(styles.pagination);
      expect(wrapper.classes()).not.toContain(styles.modifiers.bottom);
      expect(wrapper.attributes('id')).toBe('options-menu-top-pagination');
      expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Pagination');

      expect(totalText(wrapper)).toBe('1 - 10 of 52');
      expect(toggleText(wrapper)).toBe('1 - 10 of 52');
      expect(wrapper.find('button[aria-haspopup="listbox"]').attributes('id')).toBe('options-menu-top-toggle');

      const nav = wrapper.find('nav');
      expect(nav.classes()).toContain(styles.paginationNav);
      expect(nav.attributes('aria-label')).toBe('Pagination');
    });

    it('renders a bottom pagination without total items', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, variant: 'bottom', widgetId: 'w' } });
      expect(wrapper.classes()).toContain(styles.modifiers.bottom);
      expect(wrapper.attributes('id')).toBe('w-bottom-pagination');
      expect(wrapper.find(`.${styles.paginationTotalItems}`).exists()).toBe(false);
    });

    it('applies static and sticky modifiers', () => {
      const wrapper = mount(PfPagination, { props: { static: true, sticky: true } });
      expect(wrapper.classes()).toContain(styles.modifiers.static);
      expect(wrapper.classes()).toContain(styles.modifiers.sticky);
    });

    it('applies inset breakpoint modifiers', () => {
      const wrapper = mount(PfPagination, { props: { inset: 'sm', insetLg: 'none' } });
      expect(wrapper.classes()).toContain(styles.modifiers.insetSm);
      expect(wrapper.classes()).toContain(styles.modifiers.insetNoneOnLg);
    });

    it('updates inset modifiers when props change', async () => {
      const wrapper = mount(PfPagination, { props: { inset: 'sm' } });
      await wrapper.setProps({ inset: 'lg' });
      expect(wrapper.classes()).toContain(styles.modifiers.insetLg);
      expect(wrapper.classes()).not.toContain(styles.modifiers.insetSm);
    });

    it('uses the titleItems in the summaries', () => {
      const wrapper = mount(PfPagination, { props: { count: 5, titleItems: 'items', variant: 'top' } });
      expect(totalText(wrapper)).toBe('1 - 5 of 5 items');
      expect(toggleText(wrapper)).toBe('1 - 5 of 5 items');
    });

    it('hides the items title in the toggle when compact and hides first/last and page input', () => {
      const wrapper = mount(PfPagination, { props: { count: 5, titleItems: 'items', compact: true } });
      expect(toggleText(wrapper)).toBe('1 - 5 of 5');
      expect(navButton(wrapper, 'first').exists()).toBe(false);
      expect(navButton(wrapper, 'last').exists()).toBe(false);
      expect(pageInput(wrapper).exists()).toBe(false);
      expect(navButton(wrapper, 'previous').exists()).toBe(true);
      expect(navButton(wrapper, 'next').exists()).toBe(true);
    });

    it('renders the total slot with scoped props', () => {
      const wrapper = mount(PfPagination, {
        props: { count: 25, page: 2, variant: 'bottom', titleItems: 'rows' },
        slots: {
          total: (p: any) => h('span', { class: 'custom' }, `${p.firstIndex}/${p.lastIndex}/${p.count}/${p.titleItems}`),
        },
      });
      expect(wrapper.find(`.${styles.paginationTotalItems} .custom`).text()).toBe('11/20/25/rows');
    });

    it('renders the default slot', () => {
      const wrapper = mount(PfPagination, { slots: { default: () => h('span', { class: 'extra' }) } });
      expect(wrapper.find('.extra').exists()).toBe(true);
    });

    it('does not render the options menu without per page options', () => {
      const wrapper = mount(PfPagination, { props: { count: 10, perPageOptions: [] } });
      expect(wrapper.find('button[aria-haspopup="listbox"]').exists()).toBe(false);
    });
  });

  describe('indexes and page constraints', () => {
    it.each([
      [52, 1, 10, '1 - 10 of 52', '1', 'of 6'],
      [52, 3, 10, '21 - 30 of 52', '3', 'of 6'],
      [52, 6, 10, '51 - 52 of 52', '6', 'of 6'],
      [52, 99, 10, '51 - 52 of 52', '6', 'of 6'],
      [52, -3, 10, '1 - 10 of 52', '1', 'of 6'],
      [52, 2, 20, '21 - 40 of 52', '2', 'of 3'],
      [20, 2, 10, '11 - 20 of 20', '2', 'of 2'],
      [0, 1, 10, '0 - 0 of 0', '0', 'of 0'],
    ])('count %i, page %i, perPage %i shows %j', (count, page, perPage, summary, inputValue, pages) => {
      const wrapper = mount(PfPagination, { props: { count, page, perPage, variant: 'top' } });
      expect(totalText(wrapper)).toBe(summary);
      expect(pageInput(wrapper).element.value).toBe(inputValue);
      expect(wrapper.find(`.${styles.paginationNavPageSelect} > span[aria-hidden]`).text()).toBe(pages);
    });

    it('derives the page from offset', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, offset: 20, perPage: 10, variant: 'top' } });
      expect(pageInput(wrapper).element.value).toBe('3');
      expect(totalText(wrapper)).toBe('21 - 30 of 52');
      expect(toggleText(wrapper)).toBe('21 - 30 of 52');
    });

    it('uses itemsStart and itemsEnd in the toggle', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, itemsStart: 5, itemsEnd: 14 } });
      expect(toggleText(wrapper)).toBe('5 - 14 of 52');
    });

    it('pluralizes the pages title', () => {
      const one = mount(PfPagination, { props: { count: 5, titlePage: 'page' } });
      expect(one.find(`.${styles.paginationNavPageSelect} > span[aria-hidden]`).text()).toBe('of 1 page');
      const many = mount(PfPagination, { props: { count: 25, titlePage: 'page' } });
      expect(many.find(`.${styles.paginationNavPageSelect} > span[aria-hidden]`).text()).toBe('of 3 pages');
      const custom = mount(PfPagination, { props: { count: 25, titlePage: 'pagina', titlePages: 'pagine' } });
      expect(custom.find(`.${styles.paginationNavPageSelect} > span[aria-hidden]`).text()).toBe('of 3 pagine');
    });
  });

  describe('navigation', () => {
    it('disables first/previous on the first page', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 1 } });
      expect(isDisabled(wrapper, 'first')).toBe(true);
      expect(isDisabled(wrapper, 'previous')).toBe(true);
      expect(isDisabled(wrapper, 'next')).toBe(false);
      expect(isDisabled(wrapper, 'last')).toBe(false);
      expect(pageInput(wrapper).attributes('disabled')).toBeUndefined();
    });

    it('disables next/last on the last page', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 6 } });
      expect(isDisabled(wrapper, 'first')).toBe(false);
      expect(isDisabled(wrapper, 'previous')).toBe(false);
      expect(isDisabled(wrapper, 'next')).toBe(true);
      expect(isDisabled(wrapper, 'last')).toBe(true);
    });

    it('disables everything when there are no items', () => {
      const wrapper = mount(PfPagination, { props: { count: 0 } });
      for (const action of ['first', 'previous', 'next', 'last'] as const) {
        expect(isDisabled(wrapper, action)).toBe(true);
      }
      expect(pageInput(wrapper).attributes('disabled')).toBeDefined();
    });

    it('disables the page input when there is a single page', () => {
      const wrapper = mount(PfPagination, { props: { count: 5 } });
      expect(pageInput(wrapper).attributes('disabled')).toBeDefined();
    });

    it('disables everything when disabled', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 3, disabled: true } });
      for (const action of ['first', 'previous', 'next', 'last'] as const) {
        expect(isDisabled(wrapper, action)).toBe(true);
      }
      expect(pageInput(wrapper).attributes('disabled')).toBeDefined();
      expect(wrapper.find('button[aria-haspopup="listbox"]').attributes('disabled')).toBeDefined();
    });

    it('uses the aria labels', () => {
      const wrapper = mount(PfPagination, {
        props: {
          count: 52,
          toFirstPageAriaLabel: 'First',
          toPreviousPageAriaLabel: 'Prev',
          toNextPageAriaLabel: 'Next',
          toLastPageAriaLabel: 'Last',
          currPageAriaLabel: 'Current',
          paginationAriaLabel: 'Pager',
        },
      });
      expect(navButton(wrapper, 'first').attributes('aria-label')).toBe('First');
      expect(navButton(wrapper, 'previous').attributes('aria-label')).toBe('Prev');
      expect(navButton(wrapper, 'next').attributes('aria-label')).toBe('Next');
      expect(navButton(wrapper, 'last').attributes('aria-label')).toBe('Last');
      expect(pageInput(wrapper).attributes('aria-label')).toBe('Current');
      expect(wrapper.find('nav').attributes('aria-label')).toBe('Pager');
    });

    it('navigates with v-model:page and emits the click events', async () => {
      const wrapper = mountWithModel(PfPagination, 'page', { count: 52, page: 1, variant: 'top' });

      await navButton(wrapper, 'next').trigger('click');
      expect(wrapper.props('page')).toBe(2);
      expect(pageInput(wrapper).element.value).toBe('2');
      expect(totalText(wrapper)).toBe('11 - 20 of 52');

      await navButton(wrapper, 'last').trigger('click');
      expect(wrapper.props('page')).toBe(6);

      await navButton(wrapper, 'previous').trigger('click');
      expect(wrapper.props('page')).toBe(5);

      await navButton(wrapper, 'first').trigger('click');
      expect(wrapper.props('page')).toBe(1);

      expect(wrapper.emitted('update:page')).toEqual([[2], [6], [5], [1]]);
      expect(wrapper.emitted('nextClick')).toEqual([[2]]);
      expect(wrapper.emitted('lastClick')).toEqual([[6]]);
      expect(wrapper.emitted('previousClick')).toEqual([[5]]);
      expect(wrapper.emitted('firstClick')).toEqual([[1]]);
    });

    it('goes to the typed page on Enter, clamped to the available pages', async () => {
      const wrapper = mountWithModel(PfPagination, 'page', { count: 52, page: 1 });
      const input = pageInput(wrapper);

      await input.setValue('4');
      await input.trigger('keydown', { key: 'Enter' });
      expect(wrapper.props('page')).toBe(4);

      await input.setValue('40');
      await input.trigger('keydown', { key: 'Enter' });
      expect(wrapper.props('page')).toBe(6);

      await input.setValue('-2');
      await input.trigger('keydown', { key: 'Enter' });
      expect(wrapper.props('page')).toBe(1);

      expect(wrapper.emitted('update:page')).toEqual([[4], [6], [1]]);
    });

    it('stays on the current page when Enter is pressed with an empty input', async () => {
      const wrapper = mountWithModel(PfPagination, 'page', { count: 52, page: 3 });
      const input = pageInput(wrapper);
      await input.setValue('');
      await input.trigger('keydown', { key: 'Enter' });
      expect(wrapper.emitted('update:page')).toEqual([[3]]);
    });

    it('clamps the input value on change', async () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 2 } });
      const input = pageInput(wrapper);
      input.element.value = '42';
      await input.trigger('input');
      await input.trigger('change');
      expect(input.element.value).toBe('6');
      expect(wrapper.emitted('update:page')).toBeUndefined();
    });

    it('prevents non numeric keys in the page input', () => {
      const wrapper = mount(PfPagination, { props: { count: 52 } });
      const input = pageInput(wrapper).element;
      const press = (key: string) => {
        const event = new KeyboardEvent('keydown', { key, cancelable: true });
        input.dispatchEvent(event);
        return event.defaultPrevented;
      };
      expect(press('a')).toBe(true);
      expect(press('-')).toBe(true);
      expect(press('5')).toBe(false);
      expect(press('Backspace')).toBe(false);
      expect(press('ArrowUp')).toBe(false);
      expect(press('Tab')).toBe(false);
    });

    it('syncs the input with the page prop', async () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 2 } });
      await wrapper.setProps({ page: 5 });
      expect(pageInput(wrapper).element.value).toBe('5');
    });
  });

  describe('per page', () => {
    it('lists the per page options and updates v-model:perPage', async () => {
      const wrapper = mountWithModel(PfPagination, 'perPage', { count: 52, perPage: 10, variant: 'top' }, { attachTo: document.body });
      await wrapper.find('button[aria-haspopup="listbox"]').trigger('click');
      await nextTick();

      const options = document.body.querySelectorAll<HTMLButtonElement>('[data-action^="per-page-"]');
      expect([...options].map(o => o.textContent!.replace(/\s+/g, ' ').trim())).toEqual([
        '10 per page', '20 per page', '50 per page', '100 per page',
      ]);

      const option20 = document.body.querySelector<HTMLButtonElement>(`[data-action="per-page-20"] .${menuStyles.menuItem}`)!;
      option20.click();
      await nextTick();
      expect(wrapper.emitted('update:perPage')).toEqual([[20]]);
      expect(wrapper.props('perPage')).toBe(20);
      expect(totalText(wrapper)).toBe('1 - 20 of 52');
      expect(wrapper.find(`.${styles.paginationNavPageSelect} > span[aria-hidden]`).text()).toBe('of 3');
      wrapper.unmount();
    });

    it('uses custom per page options and suffix', async () => {
      const wrapper = mount(PfPagination, {
        props: { variant: 'top', count: 52, perPage: 5, perPageOptions: [{ title: 'five', value: 5 }, { title: 'all', value: 100 }], titlePerPageSuffix: 'rows' },
        attachTo: document.body,
      });
      await wrapper.find('button[aria-haspopup="listbox"]').trigger('click');
      await nextTick();
      const options = document.body.querySelectorAll('[data-action^="per-page-"]');
      expect([...options].map(o => o.textContent!.replace(/\s+/g, ' ').trim())).toEqual(['five rows', 'all rows']);
      expect(totalText(wrapper)).toBe('1 - 5 of 52');
      wrapper.unmount();
    });

    it('updates the page when the selected perPage leaves it out of range', async () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 6, perPage: 10, variant: 'top' }, attachTo: document.body });
      await wrapper.find('button[aria-haspopup="listbox"]').trigger('click');
      await nextTick();

      document.body.querySelector<HTMLButtonElement>(`[data-action="per-page-50"] .${menuStyles.menuItem}`)!.click();
      await nextTick();
      expect(wrapper.emitted('update:perPage')).toEqual([[50]]);
      expect(wrapper.emitted('update:page')).toEqual([[2]]);
      wrapper.unmount();
    });

    it('moves to the last full page with lastFullPageShown', async () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 3, perPage: 20, lastFullPageShown: true, variant: 'top' }, attachTo: document.body });
      await wrapper.find('button[aria-haspopup="listbox"]').trigger('click');
      await nextTick();

      document.body.querySelector<HTMLButtonElement>(`[data-action="per-page-50"] .${menuStyles.menuItem}`)!.click();
      await nextTick();
      expect(wrapper.emitted('update:page')).toEqual([[1]]);
      wrapper.unmount();
    });

    it('does not update the page when it stays in range', async () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 2, perPage: 10, variant: 'top' }, attachTo: document.body });
      await wrapper.find('button[aria-haspopup="listbox"]').trigger('click');
      await nextTick();

      document.body.querySelector<HTMLButtonElement>(`[data-action="per-page-20"] .${menuStyles.menuItem}`)!.click();
      await nextTick();
      expect(wrapper.emitted('update:perPage')).toEqual([[20]]);
      expect(wrapper.emitted('update:page')).toBeUndefined();
      wrapper.unmount();
    });

    it('keeps the last page in range when perPage grows', () => {
      const wrapper = mount(PfPagination, { props: { count: 52, page: 6, perPage: 50, variant: 'top' } });
      expect(pageInput(wrapper).element.value).toBe('2');
      expect(totalText(wrapper)).toBe('51 - 52 of 52');
    });
  });
});

describe('PaginationNavigation', () => {
  it('renders the navigation with defaults', () => {
    const wrapper = mount(PfPaginationNavigation);
    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.classes()).toContain(styles.paginationNav);
    expect(wrapper.attributes('aria-label')).toBe('Pagination');
    const controls = wrapper.findAll(`.${styles.paginationNavControl}`);
    expect(controls).toHaveLength(4);
    expect(controls[0]!.classes()).toContain(styles.modifiers.first);
    expect(controls[3]!.classes()).toContain(styles.modifiers.last);
    expect(controls.every(c => c.find('button svg').exists())).toBe(true);
  });

  it('emits setPage with the page range', async () => {
    const wrapper = mount(PfPaginationNavigation, { props: { page: 2, firstPage: 1, lastPage: 5, perPage: 20 } });
    await navButton(wrapper, 'next').trigger('click');
    expect(wrapper.emitted('setPage')).toEqual([[3, 20, 40, 60]]);
    expect(wrapper.emitted('nextClick')).toEqual([[3]]);
  });
});

describe('PaginationOptionsMenu', () => {
  it('renders a toggle with the item range', () => {
    const wrapper = mount(PfPaginationOptionsMenu, { props: { count: 30, firstIndex: 11, lastIndex: 20, itemsTitle: 'items' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/PaginationOptionsMenu');
    const toggle = wrapper.find('button');
    expect(toggle.attributes('id')).toBe('pagination-options-menu-toggle');
    expect(toggle.attributes('aria-haspopup')).toBe('listbox');
    expect(toggle.attributes('aria-expanded')).toBe('false');
    expect(toggle.text().replace(/\s+/g, ' ')).toBe('11 - 20 of 30 items');
  });

  it('opens the menu, marks the selected option and closes after selection', async () => {
    const wrapper = mount(PfPaginationOptionsMenu, { props: { count: 30, perPage: 20 }, attachTo: document.body });
    const toggle = wrapper.find('button');
    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');

    const menu = document.body.querySelector(`.${menuStyles.menu}`)!;
    expect(menu).not.toBeNull();
    expect(menu.querySelector(`[data-action="per-page-20"] .${menuStyles.menuItemSelectIcon}`)).not.toBeNull();
    expect(menu.querySelector(`[data-action="per-page-10"] .${menuStyles.menuItemSelectIcon}`)).toBeNull();

    menu.querySelector<HTMLButtonElement>(`[data-action="per-page-50"] .${menuStyles.menuItem}`)!.click();
    await nextTick();
    expect(wrapper.emitted('update:perPage')).toEqual([[50]]);
    expect(toggle.attributes('aria-expanded')).toBe('false');
    wrapper.unmount();
  });

  it('is disabled when disabled', () => {
    const wrapper = mount(PfPaginationOptionsMenu, { props: { disabled: true } });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });
});
