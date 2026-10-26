import { describe, expect, it, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper';
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
    expect(wrapper.find(`.${styles.progressStepperStepConnector} > .${styles.progressStepperStepIcon}`).exists()).toBe(
      true,
    );
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

  it.each(['success', 'info', 'warning', 'danger'] as const)('applies the %s modifier and renders an icon', variant => {
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

  // the popover had to wrap a button in the default slot, which kept its button markup and lost the title ids
  it('renders the title as the trigger button of the popover slot', async () => {
    let trigger: HTMLElement | null = null;
    const wrapper = mount(PfProgressStep, {
      props: { titleId: 'step-title' },
      attrs: { id: 'step' },
      slots: {
        default: () => 'Help',
        popover: (props: { trigger: HTMLElement | null }) => {
          trigger = props.trigger;
          return h('span', { class: 'popover' });
        },
      },
    });
    await flushPromises();

    const button = wrapper.find(`.${styles.progressStepperStepMain} > button`);
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('id')).toBe('step-title');
    expect(button.attributes('aria-labelledby')).toBe('step step-title');
    expect(button.classes()).toEqual([styles.progressStepperStepTitle, styles.modifiers.helpText]);
    expect(button.text()).toBe('Help');
    expect(button.find('.popover').exists()).toBe(true);
    expect(trigger).toBe(button.element);
  });

  it('renders the title as a div without a popover', () => {
    const wrapper = mount(PfProgressStep, {
      props: { titleId: 'step-title' },
      attrs: { id: 'step' },
      slots: { default: () => 'Title' },
    });
    const title = wrapper.find(`.${styles.progressStepperStepMain} > div`);
    expect(title.classes()).toEqual([styles.progressStepperStepTitle]);
    expect(title.attributes('id')).toBe('step-title');
    expect(title.attributes('aria-labelledby')).toBeUndefined();
  });

  it('warns without id and titleId', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      mount(PfProgressStep);
      expect(warn).toHaveBeenCalledWith(
        'ProgressStep: The titleId and id properties are required to make this component accessible, and one or both of these properties are missing.',
      );
      warn.mockClear();
      mount(PfProgressStep, { props: { titleId: 't' }, attrs: { id: 'i' } });
      expect(warn).not.toHaveBeenCalled();
    } finally {
      warn.mockRestore();
    }
  });
});
