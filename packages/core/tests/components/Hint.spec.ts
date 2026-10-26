import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import PfHint from '../../src/components/Hint/Hint.vue';
import PfHintBody from '../../src/components/Hint/HintBody.vue';
import PfHintFooter from '../../src/components/Hint/HintFooter.vue';
import PfHintTitle from '../../src/components/Hint/HintTitle.vue';

describe('Hint', () => {
  it('renders a div with the hint class', () => {
    const wrapper = mount(PfHint, { slots: { default: () => 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.hint);
    expect(wrapper.text()).toBe('Content');
    expect(wrapper.find(`.${styles.hintActions}`).exists()).toBe(false);
  });

  it('renders the actions slot', () => {
    const wrapper = mount(PfHint, { slots: { actions: () => h('button', 'Act') } });
    expect(wrapper.find(`.${styles.hintActions} button`).text()).toBe('Act');
  });

  it('applies the no offset modifier to the actions with actionsNoOffset', async () => {
    const wrapper = mount(PfHint, { slots: { actions: () => 'actions' } });
    expect(wrapper.get(`.${styles.hintActions}`).classes()).not.toContain(styles.modifiers.noOffset);
    await wrapper.setProps({ actionsNoOffset: true });
    expect(wrapper.get(`.${styles.hintActions}`).classes()).toContain(styles.modifiers.noOffset);
  });

  it('forwards class and attributes to the root', () => {
    const wrapper = mount(PfHint, { attrs: { class: 'custom-classname', 'aria-label': 'labelling-id' } });
    expect(wrapper.classes()).toEqual([styles.hint, 'custom-classname']);
    expect(wrapper.attributes('aria-label')).toBe('labelling-id');
  });

  it('composes title, body and footer', () => {
    const wrapper = mount(PfHint, {
      slots: {
        default: () => [h(PfHintTitle, () => 'Title'), h(PfHintBody, () => 'Body'), h(PfHintFooter, () => 'Footer')],
      },
    });
    expect(wrapper.find(`.${styles.hintTitle}`).text()).toBe('Title');
    expect(wrapper.find(`.${styles.hintBody}`).text()).toBe('Body');
    expect(wrapper.find(`.${styles.hintFooter}`).text()).toBe('Footer');
  });
});

describe('HintTitle', () => {
  it('renders a div with the title class', () => {
    const wrapper = mount(PfHintTitle, { slots: { default: () => 'Title' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.hintTitle);
    expect(wrapper.text()).toBe('Title');
  });
});

describe('HintBody', () => {
  it('renders a div with the body class', () => {
    const wrapper = mount(PfHintBody, { slots: { default: () => 'Body' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.hintBody);
    expect(wrapper.text()).toBe('Body');
  });
});

describe('HintFooter', () => {
  it('renders a div with the footer class', () => {
    const wrapper = mount(PfHintFooter, { slots: { default: () => 'Footer' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.hintFooter);
    expect(wrapper.text()).toBe('Footer');
  });
});
