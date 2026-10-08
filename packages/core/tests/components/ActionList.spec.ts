import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';
import PfActionList from '../../src/components/ActionList/ActionList.vue';
import PfActionListGroup from '../../src/components/ActionList/ActionListGroup.vue';
import PfActionListItem from '../../src/components/ActionList/ActionListItem.vue';

describe('ActionList', () => {
  it('renders a div with the action list class and the default slot', () => {
    const wrapper = mount(PfActionList, { slots: { default: () => h('button', 'Action') } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.actionList);
    expect(wrapper.classes()).not.toContain(styles.modifiers.icons);
    expect(wrapper.find('button').text()).toBe('Action');
  });

  it('applies the icons modifier when iconList is set', () => {
    const wrapper = mount(PfActionList, { props: { iconList: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.icons);
  });

  it('sets OUIA attributes', () => {
    const wrapper = mount(PfActionList, { props: { ouiaId: 'my-list', ouiaSafe: true } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ActionList');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('my-list');
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });

  it('forwards attributes to the root element', () => {
    const wrapper = mount(PfActionList, { attrs: { id: 'actions', 'aria-label': 'Actions' } });
    expect(wrapper.attributes('id')).toBe('actions');
    expect(wrapper.attributes('aria-label')).toBe('Actions');
  });

  it('renders groups and items', () => {
    const wrapper = mount(PfActionList, {
      slots: {
        default: () => [
          h(PfActionListGroup, () => [
            h(PfActionListItem, () => h('button', 'One')),
            h(PfActionListItem, () => h('button', 'Two')),
          ]),
          h(PfActionListGroup, () => h(PfActionListItem, () => h('button', 'Three'))),
        ],
      },
    });

    const groups = wrapper.findAll(`.${styles.actionListGroup}`);
    expect(groups).toHaveLength(2);
    expect(groups[0]?.findAll(`.${styles.actionList}__item`).map(i => i.text())).toEqual(['One', 'Two']);
    expect(groups[1]?.text()).toBe('Three');
  });
});

describe('ActionListGroup', () => {
  it('renders a div with the group class and the default slot', () => {
    const wrapper = mount(PfActionListGroup, { slots: { default: () => 'Content' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.actionListGroup);
    expect(wrapper.text()).toBe('Content');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ActionListGroup');
  });
});

describe('ActionListItem', () => {
  it('renders a div with the item class and the default slot', () => {
    const wrapper = mount(PfActionListItem, { slots: { default: () => h('button', 'Action') } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(`${styles.actionList}__item`);
    expect(wrapper.find('button').text()).toBe('Action');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ActionListItem');
  });
});
