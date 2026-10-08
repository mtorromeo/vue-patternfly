import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/c_description_list_GridTemplateColumns_min';
import cssTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list__term_width';
import cssHorizontalTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list_m_horizontal__term_width';
import PfDescriptionList from '../../src/components/DescriptionList/DescriptionList.vue';
import PfDescriptionListDescription from '../../src/components/DescriptionList/DescriptionListDescription.vue';
import PfDescriptionListGroup from '../../src/components/DescriptionList/DescriptionListGroup.vue';
import PfDescriptionListTerm from '../../src/components/DescriptionList/DescriptionListTerm.vue';
import PfDescriptionListTermHelpText from '../../src/components/DescriptionList/DescriptionListTermHelpText.vue';
import PfDescriptionListTermHelpTextButton from '../../src/components/DescriptionList/DescriptionListTermHelpTextButton.vue';

describe('DescriptionList', () => {
  it('renders a dl without modifiers by default', () => {
    const wrapper = mount(PfDescriptionList, {
      slots: {
        default: () => h(PfDescriptionListGroup, () => [
          h(PfDescriptionListTerm, () => 'Name'),
          h(PfDescriptionListDescription, () => 'Example'),
        ]),
      },
    });

    expect(wrapper.element.tagName).toBe('DL');
    expect(wrapper.classes()).toEqual([styles.descriptionList]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/DescriptionList');
    const group = wrapper.find(`.${styles.descriptionListGroup}`);
    expect(group.find(`dt.${styles.descriptionListTerm}`).text()).toBe('Name');
    expect(group.find(`dd.${styles.descriptionListDescription}`).text()).toBe('Example');
  });

  it('applies boolean modifiers', () => {
    const wrapper = mount(PfDescriptionList, {
      props: { horizontal: true, autoColumnWidths: true, autoFit: true, inlineGrid: true, compact: true, fillColumns: true },
    });

    for (const modifier of ['horizontal', 'autoColumnWidths', 'autoFit', 'inlineGrid', 'compact', 'fillColumns'] as const) {
      expect(wrapper.classes()).toContain(styles.modifiers[modifier]);
    }
  });

  it('makes fluid lists horizontal', () => {
    const wrapper = mount(PfDescriptionList, { props: { fluid: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.fluid);
    expect(wrapper.classes()).toContain(styles.modifiers.horizontal);
  });

  it.each([
    ['lg', styles.modifiers.displayLg],
    ['2xl', styles.modifiers.display_2xl],
  ] as const)('applies the %s display size', (displaySize, modifier) => {
    const wrapper = mount(PfDescriptionList, { props: { displaySize } });
    expect(wrapper.classes()).toContain(modifier);
  });

  it('applies responsive columns and orientation modifiers', () => {
    const wrapper = mount(PfDescriptionList, {
      props: { columns: '1Col', columnsMd: '2Col', columns2xl: '3Col', orientation: 'vertical', orientationLg: 'horizontal' },
    });

    expect(wrapper.classes()).toContain(styles.modifiers['1Col']);
    expect(wrapper.classes()).toContain(styles.modifiers['2ColOnMd']);
    expect(wrapper.classes()).toContain(styles.modifiers['3ColOn_2xl']);
    expect(wrapper.classes()).toContain(styles.modifiers.vertical);
    expect(wrapper.classes()).toContain(styles.modifiers.horizontalOnLg);
  });

  it('sets term width and responsive css variables', () => {
    const wrapper = mount(PfDescriptionList, {
      props: { termWidth: '10ch', autoFitMin: '100px', autoFitMinMd: '200px', horizontalTermWidth: '12ch', horizontalTermWidthXl: '15ch' },
    });

    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue(cssTermWidth.name)).toBe('10ch');
    expect(style.getPropertyValue(cssGridTemplateColumnsMin.name)).toBe('100px');
    expect(style.getPropertyValue(`${cssGridTemplateColumnsMin.name}-on-md`)).toBe('200px');
    expect(style.getPropertyValue(cssHorizontalTermWidth.name)).toBe('12ch');
    expect(style.getPropertyValue(`${cssHorizontalTermWidth.name}-on-xl`)).toBe('15ch');
  });

  it('updates classes when props change', async () => {
    const wrapper = mount(PfDescriptionList);
    await wrapper.setProps({ columns: '2Col', compact: true });
    expect(wrapper.classes()).toContain(styles.modifiers['2Col']);
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
  });
});

describe('DescriptionListGroup', () => {
  it('renders the group class and slot', () => {
    const wrapper = mount(PfDescriptionListGroup, { slots: { default: () => 'Group' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.descriptionListGroup);
    expect(wrapper.text()).toBe('Group');
  });
});

describe('DescriptionListTerm', () => {
  it('renders the term text in a span', () => {
    const wrapper = mount(PfDescriptionListTerm, { slots: { default: () => 'Term' } });

    expect(wrapper.element.tagName).toBe('DT');
    expect(wrapper.classes()).toContain(styles.descriptionListTerm);
    expect(wrapper.find(`span.${styles.descriptionListText}`).text()).toBe('Term');
    expect(wrapper.find(`.${styles.descriptionListTermIcon}`).exists()).toBe(false);
  });

  it('renders the icon slot', () => {
    const wrapper = mount(PfDescriptionListTerm, { slots: { icon: () => h('i', { class: 'my-icon' }), default: () => 'Term' } });
    expect(wrapper.find(`.${styles.descriptionListTermIcon} .my-icon`).exists()).toBe(true);
  });
});

describe('DescriptionListDescription', () => {
  it('renders the description text in a div', () => {
    const wrapper = mount(PfDescriptionListDescription, { slots: { default: () => 'Desc' } });

    expect(wrapper.element.tagName).toBe('DD');
    expect(wrapper.classes()).toContain(styles.descriptionListDescription);
    expect(wrapper.find(`div.${styles.descriptionListText}`).text()).toBe('Desc');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/DescriptionListDescription');
  });
});

describe('DescriptionListTermHelpText', () => {
  it('renders a term with the slot content', () => {
    const wrapper = mount(PfDescriptionListTermHelpText, {
      slots: { default: () => h(PfDescriptionListTermHelpTextButton, () => 'Help') },
    });

    expect(wrapper.element.tagName).toBe('DT');
    expect(wrapper.classes()).toContain(styles.descriptionListTerm);
    expect(wrapper.find(`.${styles.modifiers.helpText}`).text()).toBe('Help');
  });
});

describe('DescriptionListTermHelpTextButton', () => {
  it('renders a span with the button role and help text modifier', () => {
    const wrapper = mount(PfDescriptionListTermHelpTextButton, { slots: { default: () => 'Help' } });

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(styles.descriptionListText);
    expect(wrapper.classes()).toContain(styles.modifiers.helpText);
    expect(wrapper.attributes('role')).toBe('button');
    expect(wrapper.text()).toBe('Help');
  });

  it.each(['Enter', ' '])('clicks itself when pressing %j', async (key) => {
    const onClick = vi.fn();
    const wrapper = mount(PfDescriptionListTermHelpTextButton, { attrs: { onClick } });

    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    wrapper.element.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('ignores other keys and events from children', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfDescriptionListTermHelpTextButton, { attrs: { onClick }, slots: { default: () => h('b', 'child') } });

    await wrapper.trigger('keydown', { key: 'a' });
    await wrapper.find('b').trigger('keydown', { key: 'Enter' });
    expect(onClick).not.toHaveBeenCalled();
  });

  it('is focusable', () => {
    const wrapper = mount(PfDescriptionListTermHelpTextButton);
    expect(wrapper.attributes('tabindex')).toBe('0');
  });
});
