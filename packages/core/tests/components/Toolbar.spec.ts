import { afterEach, describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import labelStyles from '@patternfly/react-styles/css/components/Label/label';
import labelGroupStyles from '@patternfly/react-styles/css/components/Label/label-group';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_toolbar__item_Width';
import PfToolbar from '../../src/components/Toolbar/Toolbar.vue';
import PfToolbarContent from '../../src/components/Toolbar/ToolbarContent.vue';
import PfToolbarExpandableContent from '../../src/components/Toolbar/ToolbarExpandableContent.vue';
import PfToolbarFilter from '../../src/components/Toolbar/ToolbarFilter.vue';
import PfToolbarGroup from '../../src/components/Toolbar/ToolbarGroup.vue';
import PfToolbarItem from '../../src/components/Toolbar/ToolbarItem.vue';
import PfToolbarLabelGroupContent from '../../src/components/Toolbar/ToolbarLabelGroupContent.vue';
import PfToolbarToggleGroup from '../../src/components/Toolbar/ToolbarToggleGroup.vue';
import PfLabel from '../../src/components/Label/Label.vue';
import { globalBreakpoints } from '../../src/components/Toolbar/common';

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

function setWindowWidth(width: number) {
  (window as any).happyDOM.setViewport({ width });
}

afterEach(() => {
  setWindowWidth(1024);
});

const expandableContent = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.toolbarExpandableContent}`);
const labelGroupContent = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.toolbar} > .${styles.toolbarContent}:last-child`);
const toggleButton = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.toolbarToggle} button`);

function mountToggleToolbar(props: Record<string, unknown> = {}, options: Record<string, unknown> = {}) {
  return mount(PfToolbar, {
    props,
    ...options,
    slots: {
      default: () => h(PfToolbarContent, () => h(PfToolbarToggleGroup, { breakpoint: 'xl' }, {
        icon: () => h('i', { class: 'filter-icon' }),
        default: () => h(PfToolbarItem, { class: 'filter-item' }, () => 'Filter'),
      })),
    },
  });
}

function mountFilterToolbar(props: Record<string, unknown> = {}, filterProps: Record<string, unknown> = {}) {
  return mount(PfToolbar, {
    props,
    slots: {
      default: () => h(PfToolbarContent, () => [
        h(PfToolbarToggleGroup, () => [
          h(PfToolbarFilter, { category: 'Status', labels: ['New', { key: 'old', label: 'Old' }], ...filterProps }, () => h('input', { class: 'status-input' })),
        ]),
      ]),
    },
  });
}

describe('Toolbar', () => {
  it('renders the toolbar with a hidden label group content', () => {
    const wrapper = mount(PfToolbar, { slots: { default: () => h('span', { class: 'child' }) } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.toolbar]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Toolbar');
    expect(wrapper.find('.child').exists()).toBe(true);

    const content = labelGroupContent(wrapper);
    expect(content.classes()).toContain(styles.modifiers.hidden);
    expect(content.attributes('hidden')).toBeDefined();
  });

  it('applies modifiers', () => {
    const wrapper = mount(PfToolbar, { props: { fullHeight: true, static: true, sticky: true, noPadding: true } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.fullHeight,
      styles.modifiers.static,
      styles.modifiers.sticky,
      styles.modifiers.noPadding,
    ]));
  });

  it.each([
    ['primary', styles.modifiers.primary],
    ['secondary', styles.modifiers.secondary],
    ['no-background', styles.modifiers.noBackground],
  ] as const)('applies the %s color variant', (colorVariant, cls) => {
    const wrapper = mount(PfToolbar, { props: { colorVariant } });
    expect(wrapper.classes()).toContain(cls);
  });

  it('applies and updates inset breakpoint modifiers', async () => {
    const wrapper = mount(PfToolbar, { props: { inset: 'md' } });
    expect(wrapper.classes()).toContain(styles.modifiers.insetMd);
    await wrapper.setProps({ inset: 'lg' });
    expect(wrapper.classes()).toContain(styles.modifiers.insetLg);
    expect(wrapper.classes()).not.toContain(styles.modifiers.insetMd);
  });

  describe('toggle group', () => {
    it('toggles the expandable content when managed', async () => {
      const wrapper = mountToggleToolbar();
      const button = toggleButton(wrapper);
      expect(button.attributes('aria-label')).toBe('Show Filters');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(expandableContent(wrapper).classes()).not.toContain(styles.modifiers.expanded);

      await button.trigger('click');
      expect(button.attributes('aria-expanded')).toBe('true');
      expect(expandableContent(wrapper).classes()).toContain(styles.modifiers.expanded);
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);

      await button.trigger('click');
      expect(button.attributes('aria-expanded')).toBe('false');
      expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
    });

    it('moves the toggle group content into the expandable content when expanded', async () => {
      const wrapper = mountToggleToolbar();
      const group = wrapper.find(`.${styles.modifiers.toggleGroup}`);
      expect(group.find('.filter-item').exists()).toBe(true);

      await toggleButton(wrapper).trigger('click');
      await nextTick();
      expect(group.find('.filter-item').exists()).toBe(false);
      expect(expandableContent(wrapper).find('.filter-item').exists()).toBe(true);
    });

    it('supports v-model:expanded', async () => {
      const wrapper = mountWithModel(PfToolbar, 'expanded', { expanded: false }, {
        slots: {
          default: () => h(PfToolbarContent, () => h(PfToolbarToggleGroup)),
        },
      });
      expect(toggleButton(wrapper).attributes('aria-expanded')).toBe('false');
      await toggleButton(wrapper).trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.props('expanded')).toBe(true);
      expect(expandableContent(wrapper).classes()).toContain(styles.modifiers.expanded);
    });

    it('follows the controlled expanded prop', async () => {
      const wrapper = mount(PfToolbar, {
        props: { expanded: true },
        slots: { default: () => h(PfToolbarContent, () => h(PfToolbarToggleGroup)) },
      });
      expect(expandableContent(wrapper).classes()).toContain(styles.modifiers.expanded);
      await toggleButton(wrapper).trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[false]]);
      expect(expandableContent(wrapper).classes()).toContain(styles.modifiers.expanded);
    });

    it('collapses the managed expandable content on window resize', async () => {
      const wrapper = mountToggleToolbar();
      await toggleButton(wrapper).trigger('click');
      expect(expandableContent(wrapper).classes()).toContain(styles.modifiers.expanded);

      setWindowWidth(1300);
      await nextTick();
      await nextTick();
      expect(expandableContent(wrapper).classes()).not.toContain(styles.modifiers.expanded);
    });

    it('renders the toggle group classes and icon', () => {
      const wrapper = mountToggleToolbar();
      const group = wrapper.find(`.${styles.modifiers.toggleGroup}`);
      expect(group.classes()).toContain(styles.toolbarGroup);
      expect(toggleButton(wrapper).find('.filter-icon').exists()).toBe(true);
    });
  });

  describe('filters', () => {
    it('renders the filter item and its labels in the label group content', async () => {
      const wrapper = mountFilterToolbar();
      await nextTick();

      expect(wrapper.find('.status-input').exists()).toBe(true);
      const content = labelGroupContent(wrapper);
      expect(content.classes()).not.toContain(styles.modifiers.hidden);
      expect(content.attributes('hidden')).toBeUndefined();

      const group = content.find(`.${labelGroupStyles.labelGroup}`);
      expect(group.find(`.${labelGroupStyles.labelGroupLabel}`).text()).toBe('Status');
      expect(group.findAll(`.${labelStyles.labelText}`).map(l => l.text())).toEqual(['New', 'Old']);
    });

    it('renders a clear all filters button that emits clearAllFilters', async () => {
      const wrapper = mountFilterToolbar({ clearFiltersButtonText: 'Reset' });
      await nextTick();
      const button = labelGroupContent(wrapper).findAll('button').find(b => b.text() === 'Reset');
      expect(button).toBeDefined();
      await button!.trigger('click');
      expect(wrapper.emitted('clearAllFilters')).toHaveLength(1);
    });

    it('emits deleteLabel when a label is closed', async () => {
      const wrapper = mountFilterToolbar();
      await nextTick();
      const labels = labelGroupContent(wrapper).findAll(`.${labelStyles.label}`);
      await labels[1]!.find(`.${labelStyles.labelActions} button`).trigger('click');
      expect(wrapper.findComponent(PfToolbarFilter).emitted('deleteLabel')).toEqual([['Status', 'old']]);
    });

    it('emits deleteLabelGroup when the label group is closed', async () => {
      const wrapper = mountFilterToolbar();
      await nextTick();
      await labelGroupContent(wrapper).find(`.${labelGroupStyles.labelGroupClose} button`).trigger('click');
      expect(wrapper.findComponent(PfToolbarFilter).emitted('deleteLabelGroup')).toEqual([['Status']]);
    });

    it('renders labels from the labels slot', async () => {
      const wrapper = mount(PfToolbar, {
        slots: {
          default: () => h(PfToolbarContent, () => h(PfToolbarFilter, { category: 'Type' }, {
            labels: () => [h(PfLabel, () => 'A'), h(PfLabel, () => 'B'), h(PfLabel, () => 'C')],
          })),
        },
      });
      await nextTick();
      await nextTick();
      const content = labelGroupContent(wrapper);
      expect(content.findAll(`.${labelStyles.labelText}`).map(l => l.text())).toEqual(['A', 'B', 'C']);
      expect(content.classes()).not.toContain(styles.modifiers.hidden);
    });

    it('hides the toolbar item when hideToolbarItem is set', async () => {
      const wrapper = mountFilterToolbar({}, { hideToolbarItem: true });
      await nextTick();
      expect(wrapper.find('.status-input').exists()).toBe(false);
      expect(labelGroupContent(wrapper).findAll(`.${labelStyles.label}`)).toHaveLength(2);
    });

    it('does not count filters without labels', async () => {
      const wrapper = mountFilterToolbar({}, { labels: [] });
      await nextTick();
      expect(labelGroupContent(wrapper).classes()).toContain(styles.modifiers.hidden);
      expect(labelGroupContent(wrapper).find(`.${labelGroupStyles.labelGroup}`).exists()).toBe(false);
    });

    it('collapses the listed filters to a summary on small windows', async () => {
      setWindowWidth(globalBreakpoints.lg - 100);
      const wrapper = mountFilterToolbar();
      await nextTick();
      const content = labelGroupContent(wrapper);
      const listed = content.find(`.${styles.toolbarGroup}`);
      expect(listed.classes()).toContain(styles.modifiers.hidden);
      expect(listed.attributes('hidden')).toBeDefined();
      expect(content.text()).toContain('2 filters applied');
    });

    it('collapses the listed filters at every size with the all breakpoint', async () => {
      const wrapper = mountFilterToolbar({ collapseListedFiltersBreakpoint: 'all' });
      await nextTick();
      expect(labelGroupContent(wrapper).text()).toContain('2 filters applied');
    });

    it('moves the labels into the expandable content when expanded', async () => {
      const wrapper = mountFilterToolbar({ expanded: true });
      await nextTick();
      await nextTick();
      const content = labelGroupContent(wrapper);
      expect(content.classes()).toContain(styles.modifiers.hidden);
      expect(content.find(`.${labelGroupStyles.labelGroup}`).exists()).toBe(false);
      expect(expandableContent(wrapper).findAll(`.${labelStyles.label}`)).toHaveLength(2);
      expect(expandableContent(wrapper).findAll('button').some(b => b.text() === 'Clear all filters')).toBe(true);
    });

    it('emits clearAllFilters from the expandable content clear button', async () => {
      const wrapper = mountFilterToolbar({ expanded: true });
      await nextTick();
      await nextTick();
      const button = expandableContent(wrapper).findAll('button').find(b => b.text() === 'Clear all filters');
      await button!.trigger('click');
      expect(wrapper.emitted('clearAllFilters')).toHaveLength(1);
    });
  });
});

describe('ToolbarContent', () => {
  it('renders the content section and expandable content', () => {
    const wrapper = mount(PfToolbarContent, { slots: { default: () => h('span', { class: 'child' }) } });
    expect(wrapper.classes()).toEqual([styles.toolbarContent]);
    expect(wrapper.find(`.${styles.toolbarContentSection} .child`).exists()).toBe(true);
    expect(expandableContent(wrapper).exists()).toBe(true);
    expect(expandableContent(wrapper).classes()).not.toContain(styles.modifiers.expanded);
  });

  it('applies alignment, visibility and wrap modifiers', () => {
    const wrapper = mount(PfToolbarContent, { props: { alignItems: 'center', visibility: 'hidden', visibilityMd: 'hidden', rowWrap: 'wrap' } });
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.classes()).toContain(styles.modifiers.hiddenOnMd);
    const section = wrapper.find(`.${styles.toolbarContentSection}`);
    expect(section.classes()).toContain(styles.modifiers.alignItemsCenter);
    expect(section.classes()).toContain(styles.modifiers.wrap);
  });
});

describe('ToolbarExpandableContent', () => {
  it('renders an expandable content with a group', () => {
    const wrapper = mount(PfToolbarExpandableContent, { props: { expanded: true }, slots: { default: () => h('span', { class: 'child' }) } });
    expect(wrapper.classes()).toEqual([styles.toolbarExpandableContent, styles.modifiers.expanded]);
    expect(wrapper.find(`.${styles.toolbarGroup} .child`).exists()).toBe(true);
    expect(wrapper.findAll(`.${styles.toolbarGroup}`)).toHaveLength(1);
  });
});

describe('ToolbarGroup', () => {
  it('renders a group and emits mounted with its element', () => {
    const wrapper = mount(PfToolbarGroup, { slots: { default: () => 'Group' } });
    expect(wrapper.classes()).toEqual([styles.toolbarGroup]);
    expect(wrapper.text()).toBe('Group');
    expect(wrapper.emitted('mounted')).toEqual([[wrapper.element]]);
  });

  it.each([
    ['filter-group', styles.modifiers.filterGroup],
    ['action-group', styles.modifiers.actionGroup],
    ['action-group-inline', styles.modifiers.actionGroupInline],
    ['action-group-plain', styles.modifiers.actionGroupPlain],
    ['label-group', styles.modifiers.labelGroup],
  ] as const)('applies the %s variant', (variant, cls) => {
    expect(mount(PfToolbarGroup, { props: { variant } }).classes()).toContain(cls);
  });

  it('applies alignment and breakpoint modifiers', () => {
    const wrapper = mount(PfToolbarGroup, {
      props: { alignItems: 'center', alignSelf: 'center', overflowContainer: true, align: 'end', gap: 'md', columnGap: 'md', rowGap: 'lg', visibilityLg: 'hidden', rowWrap: 'nowrap' },
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.alignItemsCenter,
      styles.modifiers.alignSelfCenter,
      styles.modifiers.overflowContainer,
      styles.modifiers.alignEnd,
      styles.modifiers.gapMd,
      styles.modifiers.columnGapMd,
      styles.modifiers.rowGapLg,
      styles.modifiers.hiddenOnLg,
      styles.modifiers.nowrap,
    ]));
  });
});

describe('ToolbarItem', () => {
  it('renders an item', () => {
    const wrapper = mount(PfToolbarItem, { slots: { default: () => 'Item' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.toolbarItem]);
    expect(wrapper.text()).toBe('Item');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ToolbarItem');
  });

  it.each([
    ['pagination', styles.modifiers.pagination],
    ['label-group', styles.modifiers.labelGroup],
    ['expand-all', styles.modifiers.expandAll],
  ] as const)('applies the %s variant', (variant, cls) => {
    expect(mount(PfToolbarItem, { props: { variant } }).classes()).toContain(cls);
  });

  it('hides label items from assistive technology', () => {
    const wrapper = mount(PfToolbarItem, { props: { variant: 'label' } });
    expect(wrapper.classes()).toContain(styles.modifiers.label);
    expect(wrapper.attributes('aria-hidden')).toBe('true');
  });

  it('renders a vertical divider for the separator variant', () => {
    const wrapper = mount(PfToolbarItem, { props: { variant: 'separator' } });
    expect(wrapper.classes()).toContain(dividerStyles.divider);
    expect(wrapper.classes()).toContain(dividerStyles.modifiers.vertical);
    expect(wrapper.classes()).not.toContain(styles.toolbarItem);
  });

  it('applies expanded, alignment and breakpoint modifiers', () => {
    const wrapper = mount(PfToolbarItem, {
      props: { variant: 'expand-all', allExpanded: true, alignItems: 'baseline', alignSelf: 'start', overflowContainer: true, gap: 'sm', visibility: 'hidden' },
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.expanded,
      styles.modifiers.alignItemsBaseline,
      styles.modifiers.alignSelfStart,
      styles.modifiers.overflowContainer,
      styles.modifiers.gapSm,
      styles.modifiers.hidden,
    ]));
  });

  it('sets the width css variables', () => {
    const wrapper = mount(PfToolbarItem, { props: { width: '100px', widthLg: '200px' } });
    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue(cssWidth.name)).toBe('100px');
    expect(style.getPropertyValue(`${cssWidth.name}-on-lg`)).toBe('200px');
  });

  it('forwards attributes', () => {
    const wrapper = mount(PfToolbarItem, { attrs: { id: 'item', class: 'extra' } });
    expect(wrapper.attributes('id')).toBe('item');
    expect(wrapper.classes()).toContain('extra');
  });
});

describe('ToolbarToggleGroup', () => {
  it('applies variant and show breakpoint modifiers', () => {
    const wrapper = mount(PfToolbarToggleGroup, { props: { variant: 'filter-group', lg: true } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.toolbarGroup,
      styles.modifiers.toggleGroup,
      styles.modifiers.filterGroup,
      styles.modifiers.showOnLg,
    ]));
  });

  it('applies the 2xl show breakpoint modifier', () => {
    const wrapper = mount(PfToolbarToggleGroup, { props: { xl2: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.showOn_2xl);
  });

  it('sets aria-haspopup when expanded on small screens', async () => {
    setWindowWidth(500);
    const wrapper = mount(PfToolbar, {
      props: { expanded: true },
      slots: { default: () => h(PfToolbarContent, () => h(PfToolbarToggleGroup)) },
    });
    expect(toggleButton(wrapper).attributes('aria-haspopup')).toBe('true');
  });
});

describe('ToolbarLabelGroupContent', () => {
  it('is hidden without filters', () => {
    const wrapper = mount(PfToolbarLabelGroupContent);
    expect(wrapper.classes()).toContain(styles.toolbarContent);
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.attributes('hidden')).toBeDefined();
    expect(wrapper.emitted('mounted')).toHaveLength(1);
  });

  it('shows the clear filters button', async () => {
    const wrapper = mount(PfToolbarLabelGroupContent, { props: { numberOfFilters: 2, showClearFiltersButton: true, clearFiltersButtonText: 'Clear' } });
    expect(wrapper.attributes('hidden')).toBeUndefined();
    const group = wrapper.find(`.${styles.modifiers.actionGroupInline}`);
    const button = group.find('button');
    expect(button.text()).toBe('Clear');
    await button.trigger('click');
    expect(wrapper.emitted('clearAllFilters')).toHaveLength(1);
  });

  it('replaces the default clear button with the default slot', () => {
    const wrapper = mount(PfToolbarLabelGroupContent, {
      props: { numberOfFilters: 2, showClearFiltersButton: true },
      slots: { default: () => h('button', { class: 'custom-clear' }, 'Custom') },
    });
    const buttons = wrapper.findAll('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]!.classes()).toContain('custom-clear');
  });

  it('is hidden when expanded', () => {
    const wrapper = mount(PfToolbarLabelGroupContent, { props: { numberOfFilters: 2, expanded: true, showClearFiltersButton: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.hidden);
    expect(wrapper.find('button').exists()).toBe(false);
  });
});
