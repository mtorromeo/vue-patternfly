import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroup from '../../src/components/InputGroup/InputGroup.vue';
import PfInputGroupItem from '../../src/components/InputGroup/InputGroupItem.vue';
import PfInputGroupText from '../../src/components/InputGroup/InputGroupText.vue';

describe('InputGroup', () => {
  it('renders a div with the input group class and its items', () => {
    const wrapper = mount(PfInputGroup, {
      slots: {
        default: () => [h(PfInputGroupText, () => '@'), h(PfInputGroupItem, { fill: true }, () => h('input'))],
      },
    });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.inputGroup);
    expect(wrapper.findAll(`.${styles.inputGroupItem}`)).toHaveLength(2);
    expect(wrapper.find(`.${styles.inputGroupItem}.${styles.modifiers.fill} input`).exists()).toBe(true);
  });
});

describe('InputGroupItem', () => {
  it('renders a plain item by default', () => {
    const wrapper = mount(PfInputGroupItem, { slots: { default: () => h('input') } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.inputGroupItem]);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it.each(['plain', 'fill', 'box', 'disabled'] as const)('applies the %s modifier', modifier => {
    const wrapper = mount(PfInputGroupItem, { props: { [modifier]: true } });
    expect(wrapper.classes()).toContain(styles.modifiers[modifier]);
  });
});

describe('InputGroupText', () => {
  it('renders the text inside a box item', () => {
    const wrapper = mount(PfInputGroupText, { slots: { default: () => '@' } });
    expect(wrapper.classes()).toContain(styles.inputGroupItem);
    expect(wrapper.classes()).toContain(styles.modifiers.box);
    const text = wrapper.find(`.${styles.inputGroupText}`);
    expect(text.element.tagName).toBe('SPAN');
    expect(text.text()).toBe('@');
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfInputGroupText, { props: { component: 'label' }, slots: { default: () => 'Label' } });
    expect(wrapper.find(`.${styles.inputGroupText}`).element.tagName).toBe('LABEL');
  });

  it('applies plain and disabled to the item', () => {
    const wrapper = mount(PfInputGroupText, { props: { plain: true, disabled: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.plain);
    expect(wrapper.classes()).toContain(styles.modifiers.disabled);
  });

  it('keeps class on the item and puts the other attributes on the text element', () => {
    const wrapper = mount(PfInputGroupText, {
      props: { component: 'label' },
      attrs: { class: 'inpt-grp-text', id: 'email-npt-grp', for: 'email', style: 'color: red' },
      slots: { default: () => '@' },
    });
    expect(wrapper.classes()).toContain('inpt-grp-text');
    expect(wrapper.attributes('id')).toBeUndefined();
    const text = wrapper.get(`.${styles.inputGroupText}`);
    expect(text.classes()).toEqual([styles.inputGroupText]);
    expect(text.attributes('id')).toBe('email-npt-grp');
    expect(text.attributes('for')).toBe('email');
    expect((text.element as HTMLElement).style.color).toBe('red');
  });

  it('puts the OUIA attributes on the item', () => {
    const wrapper = mount(PfInputGroupText, { props: { ouiaId: 'text' } });
    expect(wrapper.attributes('data-ouia-component-id')).toBe('text');
  });
});
