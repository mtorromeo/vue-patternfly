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
    it.each(['success', 'warning', 'danger', 'info', 'custom'] as const)('applies the %s status modifier and renders an icon', (status) => {
      const wrapper = mount(PfLabel, { props: { status }, slots: { default: () => 'Status' } });

      expect(wrapper.classes()).toContain(styles.modifiers[status]);
      expect(wrapper.find(`.${styles.labelIcon} svg`).exists()).toBe(true);
    });

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
      const wrapper = mount(PfLabel, { props: { onClose, closeBtnAriaLabel: 'Remove label' }, slots: { default: () => 'Closable' } });

      const button = wrapper.find(`.${styles.labelActions} button`);
      expect(button.attributes('aria-label')).toBe('Remove label');
      expect(button.find(`.${buttonStyles.buttonIcon} svg`).exists()).toBe(true);

      await button.trigger('click');
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('defaults the close button label to "Close"', () => {
      const wrapper = mount(PfLabel, { props: { onClose: vi.fn() } });
      expect(wrapper.find(`.${styles.labelActions} button`).attributes('aria-label')).toBe('Close');
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
  const labels = (count: number) => () => Array.from({ length: count }, (_, i) => h(PfLabel, { key: i }, () => `Label ${i + 1}`));

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
    expect(wrapper.emitted('overflowChipClick')).toHaveLength(1);
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
    expect(button.attributes('aria-label')).toBe('Close chip group');
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
