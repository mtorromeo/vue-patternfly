import { describe, expect, it } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfProgressStepper from '../../src/components/ProgressStepper/ProgressStepper.vue';
import PfProgressStep from '../../src/components/ProgressStepper/ProgressStep.vue';

describe('ProgressStepper', () => {
  it('renders an ordered list with role list', () => {
    const wrapper = mount(PfProgressStepper);
    expect(wrapper.element.tagName).toBe('OL');
    expect(wrapper.attributes('role')).toBe('list');
    expect(wrapper.classes()).toEqual([styles.progressStepper]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/ProgressStepper');
  });

  it('applies center, vertical and compact modifiers', () => {
    const wrapper = mount(PfProgressStepper, { props: { centerAligned: true, vertical: true, compact: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.center);
    expect(wrapper.classes()).toContain(styles.modifiers.vertical);
    expect(wrapper.classes()).toContain(styles.modifiers.compact);
  });

  it('renders steps in the default slot', () => {
    const wrapper = mount(PfProgressStepper, {
      slots: {
        default: () => [
          h(PfProgressStep, { variant: 'success' }, () => 'First'),
          h(PfProgressStep, { variant: 'info', current: true }, () => 'Second'),
          h(PfProgressStep, { variant: 'pending' }, () => 'Third'),
        ],
      },
    });
    const steps = wrapper.findAll('li');
    expect(steps).toHaveLength(3);
    expect(steps.map(s => s.find(`.${styles.progressStepperStepTitle}`).text())).toEqual(['First', 'Second', 'Third']);
    expect(steps[1]?.attributes('aria-current')).toBe('step');
  });
});

describe('ProgressStep', () => {
  it('renders a list item with the step structure', () => {
    const wrapper = mount(PfProgressStep, { slots: { default: () => 'Title' } });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.attributes('role')).toBe('listitem');
    expect(wrapper.classes()).toContain(styles.progressStepperStep);
    expect(wrapper.classes()).not.toContain(styles.modifiers.current);
    expect(wrapper.attributes('aria-current')).toBeUndefined();
    expect(wrapper.find(`.${styles.progressStepperStepConnector} > .${styles.progressStepperStepIcon}`).exists()).toBe(true);
    const title = wrapper.find(`.${styles.progressStepperStepMain} > .${styles.progressStepperStepTitle}`);
    expect(title.element.tagName).toBe('DIV');
    expect(title.text()).toBe('Title');
    expect(wrapper.find(`.${styles.progressStepperStepDescription}`).exists()).toBe(false);
  });

  it('marks the current step', () => {
    const wrapper = mount(PfProgressStep, { props: { current: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.current);
    expect(wrapper.attributes('aria-current')).toBe('step');
  });

  it.each(['success', 'info', 'warning', 'danger'] as const)('applies the %s modifier and renders an icon', (variant) => {
    const wrapper = mount(PfProgressStep, { props: { variant } });
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
    expect(wrapper.find(`.${styles.progressStepperStepIcon} svg`).exists()).toBe(true);
  });

  it('applies the pending modifier without an icon', () => {
    const wrapper = mount(PfProgressStep, { props: { variant: 'pending' } });
    expect(wrapper.classes()).toContain(styles.modifiers.pending);
    expect(wrapper.find(`.${styles.progressStepperStepIcon} svg`).exists()).toBe(false);
  });

  it('renders no modifier nor icon for the default variant', () => {
    const wrapper = mount(PfProgressStep, { props: { variant: 'default' } });
    expect(wrapper.classes()).toEqual([styles.progressStepperStep]);
    expect(wrapper.find(`.${styles.progressStepperStepIcon} svg`).exists()).toBe(false);
  });

  it('renders distinct icons per variant', () => {
    const icons = (['success', 'info', 'warning', 'danger'] as const).map(variant =>
      mount(PfProgressStep, { props: { variant } }).find(`.${styles.progressStepperStepIcon} svg`).html(),
    );
    expect(new Set(icons).size).toBe(icons.length);
  });

  it('lets the icon slot override the variant icon', () => {
    const wrapper = mount(PfProgressStep, {
      props: { variant: 'success' },
      slots: { icon: () => h('i', { class: 'my-icon' }) },
    });
    const icon = wrapper.find(`.${styles.progressStepperStepIcon}`);
    expect(icon.find('.my-icon').exists()).toBe(true);
    expect(icon.find('svg').exists()).toBe(false);
  });

  it('renders the description prop', () => {
    const wrapper = mount(PfProgressStep, { props: { description: 'Some description' } });
    expect(wrapper.find(`.${styles.progressStepperStepDescription}`).text()).toBe('Some description');
  });

  it('renders the description slot over the prop', () => {
    const wrapper = mount(PfProgressStep, {
      props: { description: 'Prop' },
      slots: { description: () => h('b', 'Slot') },
    });
    const description = wrapper.find(`.${styles.progressStepperStepDescription}`);
    expect(description.find('b').text()).toBe('Slot');
    expect(description.text()).toBe('Slot');
  });

  it('turns a popover trigger into the help text title', async () => {
    const FakePopover = defineComponent({
      name: 'PfPopover',
      setup(_, { slots }) {
        return () => h('button', { class: buttonStyles.button, type: 'button' }, slots.default?.());
      },
    });
    const wrapper = mount(PfProgressStep, { slots: { default: () => h(FakePopover, () => 'Help') } });
    await flushPromises();

    const main = wrapper.find(`.${styles.progressStepperStepMain}`);
    expect(main.find('div').exists()).toBe(false);
    const button = main.find('button');
    expect(button.text()).toBe('Help');
    expect(button.classes()).toContain(styles.progressStepperStepTitle);
    expect(button.classes()).toContain(styles.modifiers.helpText);
    expect(button.classes()).not.toContain(buttonStyles.button);
  });
});
