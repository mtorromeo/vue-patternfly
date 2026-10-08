import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import cssMaxHeight from '@patternfly/react-tokens/dist/esm/c_panel__main_MaxHeight';
import PfPanel from '../../src/components/Panel/Panel.vue';
import PfPanelHeader from '../../src/components/Panel/PanelHeader.vue';
import PfPanelMain from '../../src/components/Panel/PanelMain.vue';
import PfPanelMainBody from '../../src/components/Panel/PanelMainBody.vue';
import PfPanelFooter from '../../src/components/Panel/PanelFooter.vue';

describe('Panel', () => {
  it('renders a div with the panel class and default slot', () => {
    const wrapper = mount(PfPanel, { slots: { default: () => 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.panel]);
    expect(wrapper.text()).toBe('Content');
  });

  it.each(['raised', 'bordered'] as const)('applies the %s variant modifier', (variant) => {
    const wrapper = mount(PfPanel, { props: { variant } });
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
  });

  it('applies the scrollable modifier', () => {
    const wrapper = mount(PfPanel, { props: { scrollable: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.scrollable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.raised);
    expect(wrapper.classes()).not.toContain(styles.modifiers.bordered);
  });

  it('sets OUIA attributes', () => {
    const wrapper = mount(PfPanel, { props: { ouiaId: 'my-panel', ouiaSafe: true } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Panel');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('my-panel');
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });

  it('renders a full panel structure', () => {
    const wrapper = mount(PfPanel, {
      slots: {
        default: () => [
          h(PfPanelHeader, () => 'Header'),
          h(PfPanelMain, () => h(PfPanelMainBody, () => 'Body')),
          h(PfPanelFooter, () => 'Footer'),
        ],
      },
    });
    expect(wrapper.find(`.${styles.panelHeader}`).text()).toBe('Header');
    expect(wrapper.find(`.${styles.panelMain} > .${styles.panelMainBody}`).text()).toBe('Body');
    expect(wrapper.find(`.${styles.panelFooter}`).text()).toBe('Footer');
  });
});

describe('PanelHeader', () => {
  it('renders the header class and slot', () => {
    const wrapper = mount(PfPanelHeader, { slots: { default: () => 'Header' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.panelHeader]);
    expect(wrapper.text()).toBe('Header');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/PanelHeader');
  });
});

describe('PanelMain', () => {
  it('renders the main class and slot', () => {
    const wrapper = mount(PfPanelMain, { slots: { default: () => 'Main' } });
    expect(wrapper.classes()).toEqual([styles.panelMain]);
    expect(wrapper.text()).toBe('Main');
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssMaxHeight.name)).toBe('');
  });

  it('sets the max height css variable', () => {
    const wrapper = mount(PfPanelMain, { props: { maxHeight: '250px' } });
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssMaxHeight.name)).toBe('250px');
  });
});

describe('PanelMainBody', () => {
  it('renders the main body class and slot', () => {
    const wrapper = mount(PfPanelMainBody, { slots: { default: () => 'Body' } });
    expect(wrapper.classes()).toEqual([styles.panelMainBody]);
    expect(wrapper.text()).toBe('Body');
  });
});

describe('PanelFooter', () => {
  it('renders the footer class and slot', () => {
    const wrapper = mount(PfPanelFooter, { slots: { default: () => 'Footer' } });
    expect(wrapper.classes()).toEqual([styles.panelFooter]);
    expect(wrapper.text()).toBe('Footer');
  });
});
