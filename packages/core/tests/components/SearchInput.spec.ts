import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import inputGroupStyles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import panelStyles from '@patternfly/react-styles/css/components/Panel/panel';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import actionListStyles from '@patternfly/react-styles/css/components/ActionList/action-list';
import iconStyles from '@patternfly/react-styles/css/components/Icon/icon';
import PfSearchInput from '../../src/components/SearchInput/SearchInput.vue';
import PfAdvancedSearchMenu from '../../src/components/SearchInput/AdvancedSearchMenu.vue';
import { buildQueryString, getAttrValueMap } from '../../src/components/SearchInput/common';

enableAutoUnmount(afterEach);

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

function button(wrapper: VueWrapper, label: string) {
  return wrapper.find(`button[aria-label="${label}"]`);
}

/** Class lists of the children of an element, to assert the markup structure */
function childClasses(el: Element) {
  return [...el.children].map(c => [...c.classList]);
}

describe('SearchInput', () => {
  it('renders a text input group with a search icon as root', () => {
    const wrapper = mount(PfSearchInput, { props: { placeholder: 'Find' }, attrs: { 'data-testid': 'root' } });

    expect(wrapper.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(false);
    const group = wrapper.find(`.${styles.textInputGroup}`);
    expect(group.attributes('data-testid')).toBe('root');
    expect(group.find(`.${styles.textInputGroupMain}`).classes()).toContain(styles.modifiers.icon);
    expect(group.find(`.${styles.textInputGroupIcon} svg`).exists()).toBe(true);

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('aria-label')).toBe('Search input');
    expect(input.attributes('placeholder')).toBe('Find');
  });

  it('forwards class and attributes to the root element', () => {
    // regression: $attrs were dropped
    const wrapper = mount(PfSearchInput, { attrs: { class: 'custom', id: 'search' } });
    const group = wrapper.find(`.${styles.textInputGroup}`);
    expect(group.classes()).toContain('custom');
    expect(group.attributes('id')).toBe('search');
  });

  it('applies ariaLabel, type and hint', () => {
    const wrapper = mount(PfSearchInput, { props: { ariaLabel: 'Filter', type: 'search', hint: 'suggestion' } });

    const inputs = wrapper.findAll('input');
    expect(inputs[0]!.classes()).toContain(styles.modifiers.hint);
    expect(inputs[0]!.attributes('value')).toBe('suggestion');
    expect(inputs[1]!.attributes('type')).toBe('search');
    expect(inputs[1]!.attributes('aria-label')).toBe('Filter');
  });

  it('applies name and inputAttrs to the input', () => {
    const wrapper = mount(PfSearchInput, {
      props: { name: 'q', inputAttrs: { id: 'search-input', autofocus: 'true' } },
    });
    const input = wrapper.find('input');
    expect(input.attributes('name')).toBe('q');
    expect(input.attributes('id')).toBe('search-input');
    expect(input.attributes('autofocus')).toBeDefined();
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

  it('exposes focus() and the input element', () => {
    const wrapper = mount(PfSearchInput, { attachTo: document.body });
    const vm = wrapper.vm as unknown as { focus: () => void; input: HTMLInputElement };
    vm.focus();
    expect(document.activeElement).toBe(wrapper.find('input').element);
    expect(vm.input).toBe(wrapper.find('input').element);
  });

  describe('utilities', () => {
    it('does not render utilities without a value', () => {
      const wrapper = mount(PfSearchInput, { props: { resultsCount: 3, onClear: vi.fn() } });
      expect(wrapper.find(`.${styles.textInputGroupUtilities}`).exists()).toBe(false);
    });

    it('renders utilities without a value when utilitiesDisplayed is set', () => {
      const wrapper = mount(PfSearchInput, { props: { utilitiesDisplayed: true, onClear: vi.fn() } });
      expect(button(wrapper, 'Reset').exists()).toBe(true);
    });

    it('renders the results count in a read badge with resultsCountContext', () => {
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', resultsCount: '1 / 5' } });
      const badge = wrapper.find(`.${styles.textInputGroupUtilities} .${badgeStyles.badge}`);
      expect(badge.classes()).toContain(badgeStyles.modifiers.read);
      expect(badge.text()).toBe('1 / 5 results');
      expect(badge.find('.pf-v6-screen-reader').text()).toBe('results');
    });

    it('uses a custom resultsCountContext', () => {
      const wrapper = mount(PfSearchInput, {
        props: { modelValue: 'q', resultsCount: 3, resultsCountContext: ' matches' },
      });
      expect(wrapper.find('.pf-v6-screen-reader').text()).toBe('matches');
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

    it('hides the clear button without onClear', () => {
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'q', resultsCount: 3 } });
      expect(button(wrapper, 'Reset').exists()).toBe(false);
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
      expect(button(wrapper, 'Previous').classes()).toContain(buttonStyles.modifiers.plain);
      await button(wrapper, 'Previous').trigger('click');
      expect(onPreviousClick).toHaveBeenCalledTimes(1);
      expect(button(wrapper, 'Next').attributes('disabled')).toBeDefined();
      await button(wrapper, 'Next').trigger('click');
      expect(onNextClick).not.toHaveBeenCalled();
    });
  });

  describe('search', () => {
    it('wraps the text input group and the submit button in input group items', () => {
      // regression: the input group children were not wrapped in input group items
      const wrapper = mount(PfSearchInput, { props: { onSearch: vi.fn() }, attrs: { class: 'custom' } });

      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(group.classes()).toContain('custom');
      expect(childClasses(group.element)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.fill],
        [inputGroupStyles.inputGroupItem],
      ]);
      expect(group.element.children[0]!.firstElementChild!.classList).toContain(styles.textInputGroup);
      expect(group.element.children[1]!.querySelector('button')!.getAttribute('aria-label')).toBe('Search');
    });

    it('renders a submit button with a mirrored icon', async () => {
      const onSearch = vi.fn();
      const wrapper = mount(PfSearchInput, { props: { modelValue: 'term', onSearch } });

      const submit = button(wrapper, 'Search');
      expect(submit.attributes('type')).toBe('submit');
      expect(submit.classes()).toContain(buttonStyles.modifiers.control);
      expect(submit.find(`.${iconStyles.iconContent}`).classes()).toContain('pf-v6-m-mirror-inline-rtl');

      await submit.trigger('click');
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch.mock.calls[0]![0]).toBe('term');
      expect(onSearch.mock.calls[0]![2]).toEqual({ haswords: 'term' });
    });

    it('does not disable the submit button without a value', () => {
      // regression: the submit button was disabled while the input was empty
      const wrapper = mount(PfSearchInput, { props: { onSearch: vi.fn() } });
      expect(button(wrapper, 'Search').attributes('disabled')).toBeUndefined();
    });

    it('disables the submit button when disabled', () => {
      const wrapper = mount(PfSearchInput, { props: { onSearch: vi.fn(), disabled: true } });
      expect(button(wrapper, 'Search').attributes('disabled')).toBeDefined();
    });

    it('does not submit an enclosing form', async () => {
      // regression: the submit button and Enter submitted the enclosing form
      const onSubmit = vi.fn((e: Event) => e.preventDefault());
      const onSearch = vi.fn();
      const wrapper = mount(
        { render: () => h('form', { onSubmit }, [h(PfSearchInput, { modelValue: 'term', onSearch })]) },
        { attachTo: document.body },
      );

      button(wrapper, 'Search').element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      const enter = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
      wrapper.find('input').element.dispatchEvent(enter);
      expect(enter.defaultPrevented).toBe(true);
      expect(onSearch).toHaveBeenCalledTimes(2);
      expect(onSubmit).not.toHaveBeenCalled();
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
        props: { modelValue: `name:foo some words title:'a b'`, onSearch, advancedSearchDelimiter: ':' },
      });

      await button(wrapper, 'Search').trigger('click');
      expect(onSearch.mock.calls[0]![2]).toEqual({ name: 'foo', haswords: 'some words', title: 'a b' });
    });
  });

  describe('expandable', () => {
    it('renders only the expand button when collapsed', () => {
      const wrapper = mount(PfSearchInput, {
        props: { expandable: true, expandButtonAriaLabel: 'Expand' },
        attrs: { class: 'custom' },
      });

      expect(wrapper.find('input').exists()).toBe(false);
      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(group.classes()).toContain('custom');
      // input group > item > plain item > button
      expect(childClasses(group.element)).toEqual([[inputGroupStyles.inputGroupItem]]);
      expect(childClasses(group.element.children[0]!)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.plain],
      ]);

      const expand = button(wrapper, 'Expand');
      expect(expand.attributes('aria-expanded')).toBe('false');
      expect(expand.classes()).toContain(buttonStyles.modifiers.plain);
    });

    it('renders the text input group and the toggle when expanded', () => {
      const wrapper = mount(PfSearchInput, { props: { expandable: true, expanded: true } });

      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(childClasses(group.element)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.fill],
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.plain],
      ]);
      expect(wrapper.findAll('button')).toHaveLength(1);
      expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
    });

    it('wraps the toggle in an input group item beside the extra buttons', () => {
      const wrapper = mount(PfSearchInput, { props: { expandable: true, expanded: true, onSearch: vi.fn() } });

      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(childClasses(group.element)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.fill],
        [inputGroupStyles.inputGroupItem],
        [inputGroupStyles.inputGroupItem],
      ]);
      expect(childClasses(group.element.children[2]!)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.plain],
      ]);
    });

    it('expands, clears the value without calling onClear and focuses the input', async () => {
      const onClear = vi.fn();
      const wrapper = mountWithModel(
        PfSearchInput,
        'expanded',
        {
          expandable: true,
          expandButtonAriaLabel: 'Expand',
          modelValue: 'old',
          onClear,
        },
        { attachTo: document.body },
      );

      await button(wrapper, 'Expand').trigger('click');
      await flushPromises();
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
      expect(onClear).not.toHaveBeenCalled();
      expect(button(wrapper, 'Expand').attributes('aria-expanded')).toBe('true');
      expect(document.activeElement).toBe(wrapper.find('input').element);
      // the clear button is not rendered for expandable inputs
      expect(button(wrapper, 'Reset').exists()).toBe(false);
    });

    it('collapses and focuses the expand button', async () => {
      const wrapper = mountWithModel(
        PfSearchInput,
        'expanded',
        {
          expandable: true,
          expandButtonAriaLabel: 'Expand',
          expanded: true,
        },
        { attachTo: document.body },
      );

      await button(wrapper, 'Expand').trigger('click');
      await flushPromises();
      expect(wrapper.find('input').exists()).toBe(false);
      expect(document.activeElement).toBe(button(wrapper, 'Expand').element);
    });

    it('does not render animation classes or inert without animations', () => {
      const wrapper = mount(PfSearchInput, { props: { expandable: true, expanded: true } });

      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(group.classes()).not.toContain(inputGroupStyles.modifiers.searchExpandable);
      expect(group.classes()).not.toContain(inputGroupStyles.modifiers.expanded);
      expect(wrapper.find(`.${inputGroupStyles.modifiers.searchInput}`).exists()).toBe(false);
      expect(wrapper.find('[inert]').exists()).toBe(false);
    });

    it.each([false, true])('renders animation classes and inert with animations (expanded: %s)', expanded => {
      const wrapper = mount(PfSearchInput, {
        props: { expandable: true, animations: true, expanded, expandButtonAriaLabel: 'Toggle' },
      });

      const group = wrapper.find(`.${inputGroupStyles.inputGroup}`);
      expect(group.classes()).toContain(inputGroupStyles.modifiers.searchExpandable);
      expect(group.classes().includes(inputGroupStyles.modifiers.expanded)).toBe(expanded);

      // the text input is always rendered, inert while collapsed
      const items = group.element.children;
      expect([...items[0]!.classList]).toEqual([
        inputGroupStyles.inputGroupItem,
        inputGroupStyles.modifiers.searchInput,
      ]);
      expect(items[0]!.hasAttribute('inert')).toBe(!expanded);
      expect(items[0]!.querySelector('input')).not.toBeNull();

      const buttons = wrapper.findAll('button');
      expect(buttons).toHaveLength(2);
      const expandItem = buttons[0]!.element.parentElement!;
      const closeItem = buttons[1]!.element.parentElement!;
      expect(expandItem.classList).toContain(inputGroupStyles.modifiers.searchExpand);
      expect(expandItem.hasAttribute('inert')).toBe(expanded);
      expect(closeItem.classList).toContain(inputGroupStyles.modifiers.searchAction);
      expect(closeItem.hasAttribute('inert')).toBe(!expanded);
    });

    it('focuses the expand button at the end of the collapse transition with animations', async () => {
      const wrapper = mountWithModel(
        PfSearchInput,
        'expanded',
        { expandable: true, animations: true, expanded: true },
        { attachTo: document.body },
      );

      const [expandButton, closeButton] = wrapper.findAll('button');
      await closeButton!.trigger('click');
      await flushPromises();
      expect(wrapper.emitted('update:expanded')).toEqual([[false]]);
      expect(document.activeElement).not.toBe(expandButton!.element);

      await expandButton!.element.parentElement!.dispatchEvent(new Event('transitionend'));
      expect(document.activeElement).toBe(expandButton!.element);
    });
  });

  describe('advanced search', () => {
    const attributes = [{ attr: 'username', display: 'Username' }, 'firstname'];

    function mountAdvanced(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = {}) {
      return mountWithModel(
        PfSearchInput,
        'advancedSearchOpen',
        {
          attributes,
          advancedSearchDelimiter: ':',
          appendTo: 'inline',
          ...props,
        },
        { slots, attrs: { 'data-testid': 'root' }, attachTo: document.body },
      );
    }

    function panel() {
      return document.body.querySelector<HTMLElement>(`.${panelStyles.panel}`);
    }

    function root() {
      return document.body.querySelector<HTMLElement>('[data-testid="root"]')!;
    }

    it('logs an error when attributes are given without a delimiter', () => {
      const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
      mount(PfSearchInput, { props: { attributes: ['a'] } });
      expect(error).toHaveBeenCalledWith(expect.stringContaining('advancedSearchDelimiter'));
      error.mockRestore();
    });

    it('renders a wrapper div with the input group items and a closed menu', async () => {
      mountAdvanced({ onSearch: vi.fn() });
      await flushPromises();

      expect(root().tagName).toBe('DIV');
      const group = root().firstElementChild!;
      expect(group.classList).toContain(inputGroupStyles.inputGroup);
      expect(childClasses(group)).toEqual([
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.fill],
        [inputGroupStyles.inputGroupItem, inputGroupStyles.modifiers.plain],
        [inputGroupStyles.inputGroupItem],
      ]);
      const toggle = group.children[1]!.querySelector('button')!;
      expect(toggle.getAttribute('aria-label')).toBe('Open advanced search');
      expect(toggle.getAttribute('aria-expanded')).toBe('false');
      expect(toggle.classList).toContain(buttonStyles.modifiers.control);
      expect(panel()).toBeNull();
    });

    it('opens the menu with the toggle and focuses the first attribute field', async () => {
      const onToggleAdvancedSearch = vi.fn();
      const wrapper = mountAdvanced({ onToggleAdvancedSearch });

      await button(wrapper, 'Open advanced search').trigger('click');
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[true]]);
      expect(onToggleAdvancedSearch).toHaveBeenCalledWith(expect.anything(), true);
      expect(button(wrapper, 'Open advanced search').classes()).toContain('pf-m-expanded');
      expect(button(wrapper, 'Open advanced search').attributes('aria-expanded')).toBe('true');
      expect(panel()).not.toBeNull();
      expect(document.activeElement).toBe(panel()!.querySelector('input#username_0'));

      const labels = [...panel()!.querySelectorAll('label')].map(l => l.textContent!.trim());
      expect(labels).toEqual(['Username', 'firstname', 'Has words']);
    });

    it('renders the toggle with only onToggleAdvancedSearch', () => {
      const wrapper = mount(PfSearchInput, { props: { onToggleAdvancedSearch: vi.fn() } });
      expect(button(wrapper, 'Open advanced search').exists()).toBe(true);
    });

    it('renders the menu in the document flow with appendTo="inline"', async () => {
      mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      const menuWrapper = root().children[1]!;
      expect(menuWrapper.firstElementChild).toBe(panel());
      expect((menuWrapper as HTMLElement).style.position).toBe('');
    });

    it('floats the menu inside the wrapper div by default', async () => {
      // regression: the menu was teleported to body by default
      mountAdvanced({ appendTo: undefined, advancedSearchOpen: true });
      await flushPromises();

      expect(root().contains(panel())).toBe(true);
      expect(panel()!.parentElement!.style.position).toBe('absolute');
      expect(panel()!.parentElement!.style.zIndex).toBe('9999');
    });

    it('appends the menu to another element with appendTo', async () => {
      mountAdvanced({ appendTo: 'body', advancedSearchOpen: true });
      await flushPromises();

      expect(panel()).not.toBeNull();
      expect(root().contains(panel())).toBe(false);
      expect(panel()!.parentElement!.parentElement).toBe(document.body);
    });

    it('fills the search input from the attribute fields, quoting values with spaces', async () => {
      const wrapper = mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      const fields = panel()!.querySelectorAll<HTMLInputElement>('input[type="text"]');
      fields[0]!.value = 'john doe';
      fields[0]!.dispatchEvent(new Event('input'));
      await flushPromises();
      expect(wrapper.emitted('update:modelValue')!.slice(-1)[0]).toEqual([`username:'john doe'`]);
    });

    it('reflects the search value in the attribute fields', async () => {
      mountAdvanced({ advancedSearchOpen: true, modelValue: `username:'john doe' some text` });
      await flushPromises();

      const fields = panel()!.querySelectorAll<HTMLInputElement>('input[type="text"]');
      expect(fields[0]!.value).toBe('john doe');
      expect(fields[1]!.value).toBe('');
      expect(fields[2]!.value).toBe('some text');
    });

    it('searches, closes the menu and focuses the input from the submit button', async () => {
      const onSearch = vi.fn();
      const wrapper = mountAdvanced({ advancedSearchOpen: true, modelValue: 'username:john', onSearch });
      await flushPromises();

      panel()!.querySelector<HTMLButtonElement>('button[type="submit"]')!.click();
      await flushPromises();
      expect(onSearch).toHaveBeenCalledWith('username:john', expect.anything(), { username: 'john' });
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
      expect(document.activeElement).toBe(wrapper.find('input').element);
    });

    it('closes the menu when clicking outside', async () => {
      const wrapper = mountAdvanced({ advancedSearchOpen: true });
      await flushPromises();

      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
    });

    it('keeps the menu open when clicking inside a menu appended elsewhere', async () => {
      // regression: clicks in a menu outside the search input closed it
      const wrapper = mountAdvanced({ appendTo: 'body', advancedSearchOpen: true });
      await flushPromises();

      panel()!
        .querySelector('input')!
        .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toBeUndefined();
    });

    it('closes the menu on Escape anywhere and focuses the input', async () => {
      // regression: Escape only closed the menu from within the search input
      const wrapper = mountAdvanced({ appendTo: 'body', advancedSearchOpen: true });
      await flushPromises();

      panel()!
        .querySelector('input')!
        .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await flushPromises();
      expect(wrapper.emitted('update:advancedSearchOpen')).toEqual([[false]]);
      expect(document.activeElement).toBe(wrapper.find('input').element);
    });

    it('renders the words-attr-label, attribute and form-additional-items slots', async () => {
      // regression: the attribute:<attr> slots were not forwarded to the menu
      mountAdvanced(
        { advancedSearchOpen: true },
        {
          'words-attr-label': () => 'Contains',
          'attribute:firstname': () => 'Given name',
          'form-additional-items': () => h('div', { class: 'extra' }),
        },
      );
      await flushPromises();

      const labels = [...panel()!.querySelectorAll('label')].map(l => l.textContent!.trim());
      expect(labels).toEqual(['Username', 'Given name', 'Contains']);
      expect(panel()!.querySelector('.extra')).not.toBeNull();
    });

    it('uses wordsAttrLabel for the has words field', async () => {
      mountAdvanced({ advancedSearchOpen: true, wordsAttrLabel: 'Keywords' });
      await flushPromises();
      expect(panel()!.querySelectorAll('label')[2]!.textContent!.trim()).toBe('Keywords');
    });
  });
});

describe('AdvancedSearchMenu', () => {
  it('renders nothing while closed', () => {
    const wrapper = mount(PfAdvancedSearchMenu, { props: { attributes: ['a'], advancedSearchDelimiter: ':' } });
    expect(wrapper.find(`.${panelStyles.panel}`).exists()).toBe(false);
  });

  it('logs an error when attributes are given without a delimiter', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    mount(PfAdvancedSearchMenu, { props: { attributes: ['a'] } });
    expect(error).toHaveBeenCalledWith(expect.stringContaining('AdvancedSearchMenu: An advancedSearchDelimiter'));
    error.mockRestore();
  });

  it('renders a raised panel with a form group per attribute', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: {
        searchMenuOpen: true,
        attributes: ['name', { attr: 'age', display: 'Age' }],
        advancedSearchDelimiter: ':',
      },
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
      props: {
        searchMenuOpen: true,
        modelValue: 'x',
        submitSearchButtonLabel: 'Go',
        resetButtonLabel: 'Clear',
        onClear: vi.fn(),
      },
    });

    expect(wrapper.find('button[type="submit"]').text()).toBe('Go');
    expect(wrapper.find('button[type="reset"]').text()).toBe('Clear');
  });

  it('renders the buttons in an action list inside an action form group', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, modelValue: 'x', onClear: vi.fn() },
    });

    const items = wrapper.findAll(
      `.${formStyles.formGroup}.${formStyles.modifiers.action} .${actionListStyles.actionList} .${actionListStyles.actionListGroup} .${actionListStyles.actionList}__item`,
    );
    expect(items.map(i => i.find('button').attributes('type'))).toEqual(['submit', 'reset']);
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

  it('updates the model combining attribute values, quoting values with spaces', async () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: {
        searchMenuOpen: true,
        attributes: ['name'],
        advancedSearchDelimiter: ':',
        getAttrValueMap: () => ({ haswords: 'some words' }),
      },
    });

    await wrapper.find('input#name_0').setValue('bob');
    expect(wrapper.emitted('update:modelValue')).toEqual([[`'some words' name:bob`]]);
  });

  it('parses the model value without getAttrValueMap', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, attributes: ['name'], advancedSearchDelimiter: '=', modelValue: 'name=bob' },
    });
    expect(wrapper.find<HTMLInputElement>('input#name_0').element.value).toBe('bob');
  });

  it('exposes focus() for the first attribute field', () => {
    const wrapper = mount(PfAdvancedSearchMenu, {
      props: { searchMenuOpen: true, attributes: ['name', 'age'], advancedSearchDelimiter: ':' },
      attachTo: document.body,
    });
    (wrapper.vm as unknown as { focus: () => void }).focus();
    expect(document.activeElement).toBe(wrapper.find('input#name_0').element);
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

describe('getAttrValueMap', () => {
  it('collects unpaired words under haswords, also without a delimiter', () => {
    expect(getAttrValueMap('foo bar')).toEqual({ haswords: 'foo bar' });
    expect(getAttrValueMap('a:1 foo b:2', ':')).toEqual({ a: '1', haswords: 'foo', b: '2' });
  });

  it('keeps quoted values together and unquotes them', () => {
    expect(getAttrValueMap(`a:'x y' "b c"`, ':')).toEqual({ a: 'x y', haswords: 'b c' });
    expect(getAttrValueMap(`a:x\\ y`, ':')).toEqual({ a: 'x y' });
  });

  it('ignores pairs with more than one delimiter', () => {
    expect(getAttrValueMap('a:b:c d', ':')).toEqual({ haswords: 'd' });
  });
});

describe('buildQueryString', () => {
  it('pairs attributes with values, quoting values with spaces and skipping empty ones', () => {
    expect(buildQueryString({ a: 'x y', b: '', haswords: 'foo' }, ':')).toBe(`a:'x y' foo`);
  });
});
