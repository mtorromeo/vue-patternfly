import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import inputGroupStyles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import panelStyles from '@patternfly/react-styles/css/components/Panel/panel';
import PfSearchInput from '../../src/components/SearchInput/SearchInput.vue';
import PfAdvancedSearchMenu from '../../src/components/SearchInput/AdvancedSearchMenu.vue';

enableAutoUnmount(afterEach);

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

function button(wrapper: VueWrapper, label: string) {
  return wrapper.find(`button[aria-label="${label}"]`);
}

describe('SearchInput', () => {
  it('renders a text input group with a search icon', () => {
    const wrapper = mount(PfSearchInput, { props: { placeholder: 'Find' } });

    expect(wrapper.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(false);
    const group = wrapper.find(`.${styles.textInputGroup}`);
    expect(group.exists()).toBe(true);
    expect(group.find(`.${styles.textInputGroupMain}`).classes()).toContain(styles.modifiers.icon);
    expect(group.find(`.${styles.textInputGroupIcon} svg`).exists()).toBe(true);

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('aria-label')).toBe('Search input');
    expect(input.attributes('placeholder')).toBe('Find');
  });

  it('applies ariaLabel, type and hint', () => {
    const wrapper = mount(PfSearchInput, { props: { ariaLabel: 'Filter', type: 'search', hint: 'suggestion' } });

    const inputs = wrapper.findAll('input');
    expect(inputs[0]!.classes()).toContain(styles.modifiers.hint);
    expect(inputs[0]!.attributes('value')).toBe('suggestion');
    expect(inputs[1]!.attributes('type')).toBe('search');
    expect(inputs[1]!.attributes('aria-label')).toBe('Filter');
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfSearchInput, 'modelValue', { modelValue: 'initial' });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.value).toBe('initial');

    await input.setValue('changed');
    expect(wrapper.emitted('update:modelValue')!.slice(-1)[0]).toEqual(['changed']);
    expect(wrapper.props('modelValue')).toBe('changed');
  });

  it('disables the input group', () => {
    const wrapper = mount(PfSearchInput, { props: { disabled: true } });
    expect(wrapper.find(`.${styles.textInputGroup}`).classes()).toContain(styles.modifiers.disabled);
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });

  describe('utilities', () => {
    it('does not render utilities without a value', () => {
      const wrapper = mount(PfSearchInput, { props: { resultsCount: 3, onClear: vi.fn() } });
      expect(wrapper.find(`.${styles.textInputGroupUtilities}`).exists()).toBe(false);
    });

    it('renders the results count in a read badge', () => {
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', resultsCount: '1 / 5' } });
      const badge = wrapper.find(`.${styles.textInputGroupUtilities} .${badgeStyles.badge}`);
      expect(badge.classes()).toContain(badgeStyles.modifiers.read);
      expect(badge.text()).toBe('1 / 5');
    });

    it('renders a clear button calling onClear and focusing the input', async () => {
      const onClear = vi.fn();
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', onClear }, attachTo: document.body });

      const clear = button(wrapper, 'Reset');
      expect(clear.classes()).toContain(buttonStyles.modifiers.plain);
      await clear.trigger('click');
      expect(onClear).toHaveBeenCalledTimes(1);
      expect(document.activeElement).toBe(wrapper.find('input').element);
    });

    it('uses resetButtonLabel for the clear button', () => {
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', onClear: vi.fn(), resetButtonLabel: 'Clear' } });
      expect(button(wrapper, 'Clear').exists()).toBe(true);
    });

    it('renders navigation buttons calling onPreviousClick and onNextClick', async () => {
      const onPreviousClick = vi.fn();
      const onNextClick = vi.fn();
      const wrapper = mount(PfSearchInput, {
        props: { modelValue: 'q', onPreviousClick, onNextClick, nextNavigationButtonDisabled: true },
      });

      expect(wrapper.find(`.${styles.textInputGroupGroup}`).exists()).toBe(true);
      await button(wrapper, 'Previous').trigger('click');
      expect(onPreviousClick).toHaveBeenCalledTimes(1);
      expect(button(wrapper, 'Next').attributes('disabled')).toBeDefined();
      await button(wrapper, 'Next').trigger('click');
      expect(onNextClick).not.toHaveBeenCalled();
    });

    // BUG: SearchInput.vue renders the "previous" navigation button without variant="plain" (the "next" one has it)
    it.fails('renders both navigation buttons as plain buttons', () => {
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', onPreviousClick: vi.fn(), onNextClick: vi.fn() } });
      expect(button(wrapper, 'Previous').classes()).toContain(buttonStyles.modifiers.plain);
    });
  });

  describe('search', () => {
    it('renders a submit button in an input group', async () => {
      const onSearch = vi.fn();
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'term', onSearch } });

      expect(wrapper.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(true);
      const submit = button(wrapper, 'Search');
      expect(submit.attributes('type')).toBe('submit');
      expect(submit.classes()).toContain(buttonStyles.modifiers.control);

      await submit.trigger('click');
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch.mock.calls[0]![0]).toBe('term');
      expect(onSearch.mock.calls[0]![2]).toEqual({});
    });

    it('disables the submit button without a value', () => {
      const wrapper = mount(PfSearchInput, { props: { onSearch: vi.fn() } });
      expect(button(wrapper, 'Search').attributes('disabled')).toBeDefined();
    });

    it('searches on Enter', async () => {
      const onSearch = vi.fn();
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'term', onSearch } });

      await wrapper.find('input').trigger('keydown', { key: 'Enter' });
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch.mock.calls[0]![0]).toBe('term');
    });

    it('builds an attribute value map with the delimiter', async () => {
      const onSearch = vi.fn();
      const wrapper = mount(PfSearchInput, {
        props: { modelValue: 'name:foo some words', onSearch, advancedSearchDelimiter: ':' },
      });

      await button(wrapper, 'Search').trigger('click');
      expect(onSearch.mock.calls[0]![2]).toEqual({ name: 'foo', haswords: 'some words' });
    });
  });

  describe('expandable', () => {
    it('renders only the expand button when collapsed', () => {
      const wrapper = mount(PfSearchInput, { props: { expandable: true, expandButtonAriaLabel: 'Expand' } });

      expect(wrapper.find('input').exists()).toBe(false);
      const expand = button(wrapper, 'Expand');
      expect(expand.attributes('aria-expanded')).toBe('false');
      expect(expand.classes()).toContain(buttonStyles.modifiers.plain);
    });

    it('expands, clears the value and focuses the input', async () => {
      const onClear = vi.fn();
      const wrapper = mountWithModel(PfSearchInput, 'expanded', {
        expandable: true,
        expandButtonAriaLabel: 'Expand',
        modelValue: 'old',
        onClear,
      }, { attachTo: document.body });

      await button(wrapper, 'Expand').trigger('click');
      await flushPromises();
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
      expect(onClear).toHaveBeenCalledTimes(1);
      expect(button(wrapper, 'Expand').attributes('aria-expanded')).toBe('true');
      expect(document.activeElement).toBe(wrapper.find('input').element);
      // the clear button is not rendered for expandable inputs
      expect(button(wrapper, 'Reset').exists()).toBe(false);
    });

    it('collapses and focuses the expand button', async () => {
      const wrapper = mountWithModel(PfSearchInput, 'expanded', {
        expandable: true,
        expandButtonAriaLabel: 'Expand',
        expanded: true,
      }, { attachTo: document.body });

      await button(wrapper, 'Expand').trigger('click');
      await flushPromises();
      expect(wrapper.find('input').exists()).toBe(false);
      expect(document.activeElement).toBe(button(wrapper, 'Expand').element);
    });
  });

  describe('advanced search', () => {
    const attributes = [{ attr: 'username', display: 'Username' }, 'firstname'];

    function mountAdvanced(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = {}) {
      return mountWithModel(PfSearchInput, 'advancedSearchOpen', {
        attributes,
        advancedSearchDelimiter: ':',
        appendTo: 'inline',
        ...props,
      }, { slots, attachTo: document.body });
    }

    function panel() {
      return document.body.querySelector<HTMLElement>(`.${panelStyles.panel}`);
    }

    it('logs an error when attributes are given without a delimiter', () => {
      const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
      mount(PfSearchInput, { props: { attributes: ['a'] } });
      expect(error).toHaveBeenCalledWith(expect.stringContaining('advancedSearchDelimiter'));
    });

    it('renders a toggle button and a closed menu', async () => {
      const wrapper = mountAdvanced();
      await flushPromises();

      expect(wrapper.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(true);
      const toggle = button(wrapper, 'Open advanced search');
      expect(toggle.attributes('aria-expanded')).toBe('false');
      expect(toggle.classes()).toContain(buttonStyles.modifiers.control);
      expect(panel()).toBeNull();
    });

    it('opens the advanced search menu with the toggle', async () => {
      const onToggleAdvancedSearch = vi.fn();
      const wrapper = mountAdvanced({ onToggleAdvancedSearch });

      await button(wrapper, 'Open advanced search').trigger('click');
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[true]]);
      expect(onToggleAdvancedSearch).toHaveBeenCalledWith(expect.anything(), true);
      expect(button(wrapper, 'Open advanced search').classes()).toContain('pf-m-expanded');
      expect(button(wrapper, 'Open advanced search').attributes('aria-expanded')).toBe('true');
      expect(panel()).not.toBeNull();

      const labels = [...panel()!.querySelectorAll('label')].map(l => l.textContent!.trim());
      expect(labels).toEqual(['Username', 'firstname', 'Has words']);
    });

    it('renders the toggle with only onToggleAdvancedSearch', () => {
      const wrapper = mount(PfSearchInput, { props: { onToggleAdvancedSearch: vi.fn() } });
      expect(button(wrapper, 'Open advanced search').exists()).toBe(true);
    });

    it('fills the search input from the attribute fields', async () => {
      const wrapper = mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      const fields = panel()!.querySelectorAll<HTMLInputElement>('input[type="text"]');
      fields[0]!.value = 'john';
      fields[0]!.dispatchEvent(new Event('input'));
      await flushPromises();
      expect(wrapper.emitted('update:modelValue')!.slice(-1)[0]).toEqual(['username:john']);
    });

    it('reflects the search value in the attribute fields', async () => {
      mountAdvanced({ advancedSearchOpen: true, modelValue: 'username:john some text' });
      await flushPromises();

      const fields = panel()!.querySelectorAll<HTMLInputElement>('input[type="text"]');
      expect(fields[0]!.value).toBe('john');
      expect(fields[1]!.value).toBe('');
      expect(fields[2]!.value).toBe('some text');
    });

    it('searches and closes the menu from the submit button', async () => {
      const onSearch = vi.fn();
      const wrapper = mountAdvanced({ advancedSearchOpen: true, modelValue: 'username:john', onSearch });
      await flushPromises();

      panel()!.querySelector<HTMLButtonElement>('button[type="submit"]')!.click();
      await flushPromises();
      expect(onSearch).toHaveBeenCalledWith('username:john', expect.anything(), { username: 'john' });
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
    });

    it('closes the menu when clicking outside', async () => {
      const wrapper = mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
    });

    it('closes the menu on Escape and focuses the input', async () => {
      const wrapper = mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      wrapper.find('input').element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
      expect(document.activeElement).toBe(wrapper.find('input').element);
    });

    it('renders the words-attr-label and form-additional-items slots', async () => {
      mountAdvanced({ advancedSearchOpen: true }, {
        'words-attr-label': () => 'Contains',
        'form-additional-items': () => h('div', { class: 'extra' }),
      });
      await flushPromises();

      expect(panel()!.textContent).toContain('Contains');
      expect(panel()!.querySelector('.extra')).not.toBeNull();
    });
  });
});

describe('AdvancedSearchMenu', () => {
  it('renders nothing while closed', () => {
    const wrapper = mount(PfAdvancedSearchMenu, { props: { attributes: ['a'] } });
    expect(wrapper.find(`.${panelStyles.panel}`).exists()).toBe(false);
  });

  it('renders a raised panel with a form group per attribute', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, attributes: ['name', { attr: 'age', display: 'Age' }] },
      slots: { 'attribute:name': () => 'Custom name' },
    });

    expect(wrapper.classes()).toContain(panelStyles.panel);
    expect(wrapper.classes()).toContain(panelStyles.modifiers.raised);
    const labels = wrapper.findAll('label').map(l => l.text());
    expect(labels).toEqual(['Custom name', 'Age', 'Has words']);
    expect(wrapper.find('input#name_0').exists()).toBe(true);
    expect(wrapper.find('input#age_1').exists()).toBe(true);
  });

  it('uses the submit and reset labels', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, modelValue: 'x', submitSearchButtonLabel: 'Go', resetButtonLabel: 'Clear', onClear: vi.fn() },
    });

    expect(wrapper.find('button[type="submit"]').text()).toBe('Go');
    expect(wrapper.find('button[type="reset"]').text()).toBe('Clear');
  });

  it('omits the reset button without onClear and disables submit without a value', () => {
    const wrapper = mount(PfAdvancedSearchMenu, { props: { searchMenuOpen: true } });
    expect(wrapper.find('button[type="reset"]').exists()).toBe(false);
    expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeDefined();
  });

  it('calls onClear from the reset button', async () => {
    const onClear = vi.fn();
    const wrapper = mount(PfAdvancedSearchMenu, { props: { searchMenuOpen: true, onClear } });
    await wrapper.find('button[type="reset"]').trigger('click');
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('updates the model combining attribute values', async () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: {
        searchMenuOpen: true,
        attributes: ['name'],
        advancedSearchDelimiter: ':',
        getAttrValueMap: () => ({ haswords: 'some words' }),
      },
    });

    await wrapper.find('input#name_0').setValue('bob');
    expect(wrapper.emitted('update:modelValue')).toEqual([['some words name:bob']]);
  });

  it('emits search and toggleAdvancedMenu on submit', async () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, modelValue: 'name:bob', getAttrValueMap: () => ({ name: 'bob' }) },
    });

    await wrapper.find('button[type="submit"]').trigger('click');
    expect(wrapper.emitted('search')![0]![0]).toBe('name:bob');
    expect(wrapper.emitted('search')![0]![2]).toEqual({ name: 'bob' });
    expect(wrapper.emitted('toggleAdvancedMenu')).toHaveLength(1);
  });

  it('emits toggleAdvancedMenu on outside mousedown only while open', async () => {
    const closed = mount(PfAdvancedSearchMenu, { attachTo: document.body });
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await nextTick();
    expect(closed.emitted('toggleAdvancedMenu')).toBeUndefined();

    const open = mount(PfAdvancedSearchMenu, { props: { searchMenuOpen: true }, attachTo: document.body });
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await nextTick();
    expect(open.emitted('toggleAdvancedMenu')).toHaveLength(1);
  });
});
