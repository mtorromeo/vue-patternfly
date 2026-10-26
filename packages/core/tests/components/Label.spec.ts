import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Label/label';
import groupStyles from '@patternfly/react-styles/css/components/Label/label-group';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfLabel from '../../src/components/Label/Label.vue';
import PfLabelGroup from '../../src/components/Label/LabelGroup.vue';

describe('Label', () => {
  describe('rendering', () => {
    it('renders a non interactive label by default', () => {
      const wrapper = mount(PfLabel, { slots: { default: () => 'Grey' } });

      expect(wrapper.element.tagName).toBe('SPAN');
      expect(wrapper.classes()).toContain(styles.label);
      expect(wrapper.classes()).toContain(styles.modifiers.filled);

      const content = wrapper.find(`.${styles.labelContent}`);
      expect(content.element.tagName).toBe('SPAN');
      expect(content.classes()).not.toContain(styles.modifiers.clickable);
      expect(wrapper.find(`.${styles.labelText}`).text()).toBe('Grey');
      expect(wrapper.find(`.${styles.labelIcon}`).exists()).toBe(false);
      expect(wrapper.find(`.${styles.labelActions}`).exists()).toBe(false);
    });

    it('applies color, outline and compact modifiers', () => {
      const wrapper = mount(PfLabel, { props: { color: 'blue', variant: 'outline', compact: true } });

      expect(wrapper.classes()).toContain(styles.modifiers.blue);
      expect(wrapper.classes()).toContain(styles.modifiers.outline);
      expect(wrapper.classes()).toContain(styles.modifiers.compact);
      expect(wrapper.classes()).not.toContain(styles.modifiers.filled);
    });

    it('renders a custom icon slot', () => {
      const wrapper = mount(PfLabel, { slots: { icon: () => h('i', { class: 'my-icon' }), default: () => 'Text' } });
      expect(wrapper.find(`.${styles.labelIcon} .my-icon`).exists()).toBe(true);
    });

    it('renders overflow and add labels as buttons', () => {
      const overflow = mount(PfLabel, { props: { overflow: true } });
      expect(overflow.element.tagName).toBe('BUTTON');
      expect(overflow.attributes('type')).toBe('button');
      expect(overflow.classes()).toContain(styles.modifiers.overflow);

      const add = mount(PfLabel, { props: { variant: 'add' } });
      expect(add.element.tagName).toBe('BUTTON');
      expect(add.classes()).toContain(styles.modifiers.add);
    });
  });

  // 13cd28b9
  describe('status', () => {
    it.each(['success', 'warning', 'danger', 'info', 'custom'] as const)(
      'applies the %s status modifier and renders an icon',
      status => {
        const wrapper = mount(PfLabel, { props: { status }, slots: { default: () => 'Status' } });

        expect(wrapper.classes()).toContain(styles.modifiers[status]);
        expect(wrapper.find(`.${styles.labelIcon} svg`).exists()).toBe(true);
      },
    );

    it('renders a distinct icon for every status', () => {
      const icons = (['success', 'warning', 'danger', 'info', 'custom'] as const).map(status =>
        mount(PfLabel, { props: { status } }).find(`.${styles.labelIcon} svg`).html(),
      );
      expect(new Set(icons).size).toBe(icons.length);
    });

    it('lets the icon slot override the status icon', () => {
      const wrapper = mount(PfLabel, {
        props: { status: 'success' },
        slots: { icon: () => h('i', { class: 'my-icon' }) },
      });

      const icon = wrapper.find(`.${styles.labelIcon}`);
      expect(icon.find('.my-icon').exists()).toBe(true);
      expect(icon.find('svg').exists()).toBe(false);
      expect(wrapper.classes()).toContain(styles.modifiers.success);
    });
  });

  // 27a2ff84
  describe('click', () => {
    it('renders a clickable button and calls onClick', async () => {
      const onClick = vi.fn();
      const wrapper = mount(PfLabel, { props: { onClick }, slots: { default: () => 'Click me' } });

      expect(wrapper.element.tagName).toBe('SPAN');
      const content = wrapper.find(`.${styles.labelContent}`);
      expect(content.element.tagName).toBe('BUTTON');
      expect(content.attributes('type')).toBe('button');
      expect(content.classes()).toContain(styles.modifiers.clickable);

      await content.trigger('click');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick.mock.calls[0]?.[0]).toBeInstanceOf(Event);
    });

    it('does not call onClick when disabled', async () => {
      const onClick = vi.fn();
      const wrapper = mount(PfLabel, { props: { onClick, disabled: true } });

      expect(wrapper.classes()).toContain(styles.modifiers.disabled);
      expect(wrapper.attributes('disabled')).toBeUndefined();
      const content = wrapper.find(`.${styles.labelContent}`);
      expect(content.attributes('disabled')).toBeDefined();
      await content.trigger('click');
      expect(onClick).not.toHaveBeenCalled();
    });

    it('is not clickable for add variant labels', () => {
      const wrapper = mount(PfLabel, { props: { variant: 'add', onClick: vi.fn() } });
      expect(wrapper.find(`.${styles.labelContent}`).classes()).not.toContain(styles.modifiers.clickable);
    });
  });

  // e6739f5a
  describe('links', () => {
    it('renders an anchor when href is set', async () => {
      const wrapper = mount(PfLabel, { props: { href: '#target' }, slots: { default: () => 'Link' } });

      const content = wrapper.find(`.${styles.labelContent}`);
      expect(content.element.tagName).toBe('A');
      expect(content.attributes('href')).toBe('#target');
      expect(content.classes()).toContain(styles.modifiers.clickable);
      expect(content.attributes('aria-disabled')).toBeUndefined();
      expect(content.attributes('tabindex')).toBeUndefined();

      const event = new MouseEvent('click', { bubbles: true, cancelable: true });
      content.element.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
    });

    it('marks disabled links as aria-disabled, removes them from tab order and prevents navigation', () => {
      const onClick = vi.fn();
      const wrapper = mount(PfLabel, { props: { href: '#target', disabled: true, onClick } });

      const content = wrapper.find(`.${styles.labelContent}`);
      expect(content.element.tagName).toBe('A');
      expect(content.attributes('aria-disabled')).toBe('true');
      expect(content.attributes('tabindex')).toBe('-1');
      expect(content.attributes('disabled')).toBeUndefined();

      const event = new MouseEvent('click', { bubbles: true, cancelable: true });
      content.element.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('disables the close button of a disabled link label', () => {
      const wrapper = mount(PfLabel, { props: { href: '#target', disabled: true, onClose: vi.fn() } });
      expect(wrapper.find(`.${styles.labelActions} button`).attributes('disabled')).toBeDefined();
    });
  });

  describe('close button', () => {
    it('renders a close button that calls onClose', async () => {
      const onClose = vi.fn();
      const wrapper = mount(PfLabel, {
        props: { onClose, closeBtnAriaLabel: 'Remove label' },
        slots: { default: () => 'Closable' },
      });

      const button = wrapper.find(`.${styles.labelActions} button`);
      expect(button.attributes('aria-label')).toBe('Remove label');
      expect(button.find(`.${buttonStyles.buttonIcon} svg`).exists()).toBe(true);

      await button.trigger('click');
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('defaults the close button label to "Close" followed by the label text', () => {
      const empty = mount(PfLabel, { props: { onClose: vi.fn() } });
      expect(empty.find(`.${styles.labelActions} button`).attributes('aria-label')).toBe('Close');
      const wrapper = mount(PfLabel, { props: { onClose: vi.fn() }, slots: { default: () => 'Something' } });
      expect(wrapper.find(`.${styles.labelActions} button`).attributes('aria-label')).toBe('Close Something');
    });

    it('renders the actions slot instead of the close button', () => {
      const wrapper = mount(PfLabel, { slots: { actions: () => h('button', { class: 'custom-action' }) } });

      const actions = wrapper.find(`.${styles.labelActions}`);
      expect(actions.find('.custom-action').exists()).toBe(true);
      expect(actions.findAll('button')).toHaveLength(1);
    });
  });
});

describe('LabelGroup', () => {
  const labels = (count: number) => () =>
    Array.from({ length: count }, (_, i) => h(PfLabel, { key: i }, () => `Label ${i + 1}`));

  it('does not render without labels', () => {
    const wrapper = mount(PfLabelGroup);
    expect(wrapper.find(`.${groupStyles.labelGroup}`).exists()).toBe(false);
  });

  it('renders every label in a list item', () => {
    const wrapper = mount(PfLabelGroup, { slots: { default: labels(2) } });

    const list = wrapper.find(`ul.${groupStyles.labelGroupList}`);
    expect(list.attributes('role')).toBe('list');
    const items = list.findAll(`li.${groupStyles.labelGroupListItem}`);
    expect(items[0]?.text()).toBe('Label 1');
    expect(items[1]?.text()).toBe('Label 2');
  });

  it('collapses labels beyond numLabels behind an overflow label that toggles them', async () => {
    const wrapper = mount(PfLabelGroup, { props: { numLabels: 2 }, slots: { default: labels(5) } });

    const texts = () => wrapper.findAll(`.${styles.labelText}`).map(t => t.text());
    expect(texts()).toEqual(['Label 1', 'Label 2', '3 more']);

    const overflow = wrapper.find(`.${styles.modifiers.overflow}`);
    await overflow.find(`.${styles.labelContent}`).trigger('click');
    expect(wrapper.emitted('overflowLabelClick')).toHaveLength(1);
    expect(texts()).toEqual(['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Show Less']);

    await wrapper.find(`.${styles.modifiers.overflow} .${styles.labelContent}`).trigger('click');
    expect(texts()).toEqual(['Label 1', 'Label 2', '3 more']);
  });

  it('uses custom collapsed and expanded texts', async () => {
    const wrapper = mount(PfLabelGroup, {
      props: { numLabels: 1, collapsedText: '+${remaining}', expandedText: 'Less' },
      slots: { default: labels(3) },
    });

    const overflow = () => wrapper.find(`.${styles.modifiers.overflow}`);
    expect(overflow().text()).toBe('+2');
    await overflow().find(`.${styles.labelContent}`).trigger('click');
    expect(overflow().text()).toBe('Less');
  });

  it('does not render the overflow label when all labels fit', () => {
    const wrapper = mount(PfLabelGroup, { props: { numLabels: 3 }, slots: { default: labels(2) } });
    expect(wrapper.find(`.${styles.modifiers.overflow}`).exists()).toBe(false);
  });

  // 3e0af483
  it('renders a small plain close button with an xmark icon when closable', async () => {
    const wrapper = mount(PfLabelGroup, { props: { closable: true }, slots: { default: labels(1) } });

    const button = wrapper.find(`.${groupStyles.labelGroupClose} button`);
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
    expect(button.classes()).toContain(buttonStyles.modifiers.small);
    expect(button.attributes('aria-label')).toBe('Close label group');
    expect(button.find(`.${buttonStyles.buttonIcon} svg`).attributes('aria-hidden')).toBe('true');

    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not render a close button unless closable', () => {
    const wrapper = mount(PfLabelGroup, { slots: { default: labels(1) } });
    expect(wrapper.find(`.${groupStyles.labelGroupClose}`).exists()).toBe(false);
  });

  it('renders the category label and modifier', () => {
    const wrapper = mount(PfLabelGroup, { props: { category: 'Group', id: 'grp' }, slots: { default: labels(1) } });

    expect(wrapper.classes()).toContain(groupStyles.modifiers.category);
    expect(wrapper.find(`.${groupStyles.labelGroupLabel}`).text()).toBe('Group');
    expect(wrapper.find('ul').attributes('aria-labelledby')).toBe('grp');
  });
});

describe('Label parity', () => {
  it('renders an editable label as a button and edits it in a text input', async () => {
    const wrapper = mount(PfLabel, {
      props: { editable: true, onClose: vi.fn() },
      slots: { default: () => 'Something' },
      attachTo: document.body,
    });
    expect(wrapper.classes()).toContain(groupStyles.modifiers.editable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.clickable);
    const button = wrapper.get(`button.${styles.labelContent}`);
    expect(wrapper.get(`.${styles.labelActions} button`).attributes('aria-label')).toBe('Close Something');

    await button.trigger('click');
    expect(wrapper.classes()).toContain(styles.modifiers.editableActive);
    expect(wrapper.find(`.${styles.labelActions}`).exists()).toBe(false);
    const input = wrapper.get<HTMLInputElement>(`input.${styles.labelContent}`);
    expect(input.element.value).toBe('Something');
    await input.setValue('Something else');
    await input.trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted('editComplete')?.[0][1]).toBe('Something else');
    expect(wrapper.find('input').exists()).toBe(false);
    wrapper.unmount();
  });

  it('cancels an edit with escape, emitting the previous text and discarding the draft', async () => {
    const wrapper = mount(PfLabel, { props: { editable: true }, slots: { default: () => 'Something' } });
    await wrapper.get('button').trigger('click');
    await wrapper.get('input').setValue('Something else');
    await wrapper.get('input').trigger('keydown', { key: 'Escape' });
    expect(wrapper.emitted('editCancel')?.[0][1]).toBe('Something');
    expect(wrapper.emitted('editComplete')).toBeUndefined();

    await wrapper.get('button').trigger('click');
    expect(wrapper.get<HTMLInputElement>('input').element.value).toBe('Something');
  });

  it('completes an edit when clicking outside', async () => {
    const wrapper = mount(PfLabel, {
      props: { editable: true },
      slots: { default: () => 'Something' },
      attachTo: document.body,
    });
    await wrapper.get('button').trigger('click');
    await wrapper.get('input').setValue('Other');
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('editComplete')?.[0][1]).toBe('Other');
    expect(wrapper.find('input').exists()).toBe(false);
    wrapper.unmount();
  });

  it('forwards editableAttrs to the button and input', async () => {
    const wrapper = mount(PfLabel, {
      props: { editable: true, editableAttrs: { 'aria-label': 'Editable label' } },
      slots: { default: () => 'Something' },
    });
    expect(wrapper.get('button').attributes('aria-label')).toBe('Editable label');
    await wrapper.get('button').trigger('click');
    expect(wrapper.get('input').attributes('aria-label')).toBe('Editable label');
  });

  it('calls onClick from the root button of overflow labels', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfLabel, { props: { overflow: true, onClick }, slots: { default: () => '3 more' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.attributes('type')).toBe('button');
    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    await wrapper.get(`.${styles.labelContent}`).trigger('click');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('applies the disabled modifier only to clickable labels', () => {
    expect(mount(PfLabel, { props: { disabled: true } }).classes()).not.toContain(styles.modifiers.disabled);
    expect(mount(PfLabel, { props: { disabled: true, href: '#' } }).classes()).toContain(styles.modifiers.disabled);
  });

  it('forwards closeBtnAttrs to the close button', () => {
    const wrapper = mount(PfLabel, { props: { onClose: vi.fn(), closeBtnAttrs: { id: 'close' } } });
    expect(wrapper.get(`.${styles.labelActions} button`).attributes('id')).toBe('close');
  });

  it('makes truncated text focusable for its tooltip', async () => {
    const scrollWidth = vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200);
    const clientWidth = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
    const wrapper = mount(PfLabel, { props: { textMaxWidth: '16ch' }, slots: { default: () => 'Long text' } });
    await wrapper.vm.$nextTick();
    expect(wrapper.get(`.${styles.labelContent}`).attributes('tabindex')).toBe('0');
    scrollWidth.mockRestore();
    clientWidth.mockRestore();
  });

  it('warns about incompatible props', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    mount(PfLabel, { props: { onClick: vi.fn(), href: '#' } });
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Link labels cannot have onClick'));
    warn.mockClear();
    mount(PfLabel, { props: { onClick: vi.fn(), editable: true } });
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Editable labels cannot have onClick'));
    warn.mockRestore();
  });
});

describe('LabelGroup parity', () => {
  const labels = () => [h(PfLabel, () => 'Label 1')];

  it('renders the close button beside the main section, labelled by the category', () => {
    const wrapper = mount(PfLabelGroup, {
      props: { closable: true, category: 'Group label', id: 'group' },
      slots: { default: labels },
    });
    const [main, close] = wrapper.element.children;
    expect(main.className).toBe(groupStyles.labelGroupMain);
    expect(close.className).toBe(groupStyles.labelGroupClose);
    const button = wrapper.get(`.${groupStyles.labelGroupClose} button`);
    expect(button.attributes('id')).toBe('remove_group_group');
    expect(button.attributes('aria-labelledby')).toBe('remove_group_group group');
    expect(wrapper.attributes('id')).toBeUndefined();
  });

  it('labels the list with the category, or with aria-label without one', () => {
    const withCategory = mount(PfLabelGroup, { props: { category: 'Group label' }, slots: { default: labels } });
    const id = withCategory.get(`.${groupStyles.labelGroupLabel} span`).attributes('id');
    expect(id).toBeTruthy();
    expect(withCategory.get('ul').attributes('aria-labelledby')).toBe(id);
    expect(withCategory.get('ul').attributes('aria-label')).toBeUndefined();

    const without = mount(PfLabelGroup, { slots: { default: labels } });
    expect(without.get('ul').attributes('aria-labelledby')).toBeUndefined();
    expect(without.get('ul').attributes('aria-label')).toBe('Label group category');
  });

  it('renders with only an add label control', () => {
    const wrapper = mount(PfLabelGroup, {
      slots: { 'add-label-control': () => h(PfLabel, { variant: 'add' }, () => 'Add label') },
    });
    expect(wrapper.find(`.${groupStyles.labelGroup}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.modifiers.add}`).exists()).toBe(true);
  });

  it('forwards editableTextareaAttrs to the textarea', () => {
    const wrapper = mount(PfLabelGroup, {
      props: { editable: true, editableTextarea: true, editableTextareaAttrs: { 'aria-label': 'New label' } },
      slots: { default: labels },
    });
    expect(wrapper.get('textarea').attributes('aria-label')).toBe('New label');
  });

  it('makes a truncated category focusable', async () => {
    const scrollWidth = vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200);
    const clientWidth = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
    const wrapper = mount(PfLabelGroup, { props: { category: 'A very long category' }, slots: { default: labels } });
    await wrapper.vm.$nextTick();
    expect(wrapper.get(`.${groupStyles.labelGroupLabel}`).attributes('tabindex')).toBe('0');
    scrollWidth.mockRestore();
    clientWidth.mockRestore();
  });
});
