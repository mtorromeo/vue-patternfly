import { describe, expect, it, vi } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import PfProgress from '../../src/components/Progress.vue';

describe('Progress', () => {
  it('renders the progress structure with defaults', () => {
    const wrapper = mount(PfProgress, { props: { value: 33, ariaLabel: 'Upload' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.progress);
    expect(wrapper.classes()).toContain(styles.modifiers.singleline);

    const bar = wrapper.find('[role="progressbar"]');
    expect(bar.classes()).toContain(styles.progressBar);
    expect(bar.attributes('aria-valuemin')).toBe('0');
    expect(bar.attributes('aria-valuemax')).toBe('100');
    expect(bar.attributes('aria-valuenow')).toBe('33');
    expect(bar.attributes('aria-label')).toBe('Upload');

    expect(wrapper.find(`.${styles.progressIndicator}`).attributes('style')).toContain('width: 33%');
    expect(wrapper.find(`.${styles.progressStatus}`).attributes('aria-hidden')).toBe('true');
    expect(wrapper.find(`.${styles.progressStatus} .${styles.progressMeasure}`).text()).toBe('33%');
  });

  it('links the title to the progress bar via a generated id', () => {
    const wrapper = mount(PfProgress, { props: { title: 'Downloading', value: 10 } });
    const id = wrapper.attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.classes()).not.toContain(styles.modifiers.singleline);

    const description = wrapper.find(`.${styles.progressDescription}`);
    expect(description.text()).toBe('Downloading');
    expect(description.attributes('id')).toBe(`${id}-description`);
    expect(wrapper.find('[role="progressbar"]').attributes('aria-labelledby')).toBe(`${id}-description`);
  });

  it('uses the given id and ariaLabelledby without a title', () => {
    const wrapper = mount(PfProgress, { props: { id: 'p1', ariaLabelledby: 'external' } });
    expect(wrapper.attributes('id')).toBe('p1');
    expect(wrapper.find('[role="progressbar"]').attributes('aria-labelledby')).toBe('external');
  });

  it('scales the value between min and max', () => {
    const wrapper = mount(PfProgress, { props: { value: 3, min: 2, max: 6 } });
    expect(wrapper.find(`.${styles.progressIndicator}`).attributes('style')).toContain('width: 25%');
    expect(wrapper.find(`.${styles.progressStatus} .${styles.progressMeasure}`).text()).toBe('25%');
  });

  it('clamps the scaled value', () => {
    const wrapper = mount(PfProgress, { props: { value: 150 } });
    expect(wrapper.find(`.${styles.progressIndicator}`).attributes('style')).toContain('width: 100%');
  });

  it('renders the label, the default slot and valueText', () => {
    const labelled = mount(PfProgress, { props: { value: 2, max: 5, label: '2 of 5', valueText: '2 of 5 steps' } });
    expect(labelled.find(`.${styles.progressStatus} .${styles.progressMeasure}`).text()).toBe('2 of 5');
    expect(labelled.find('[role="progressbar"]').attributes('aria-valuetext')).toBe('2 of 5 steps');

    const slotted = mount(PfProgress, { slots: { default: () => 'custom' } });
    expect(slotted.find(`.${styles.progressStatus} .${styles.progressMeasure}`).text()).toBe('custom');
  });

  it('applies the outside measure location', () => {
    const wrapper = mount(PfProgress, { props: { value: 40, measureLocation: 'outside' } });
    expect(wrapper.classes()).toContain(styles.modifiers.outside);
    expect(wrapper.find(`.${styles.progressStatus} .${styles.progressMeasure}`).text()).toBe('40%');
  });

  it('renders the measure inside the bar and forces the large size', () => {
    const wrapper = mount(PfProgress, { props: { value: 40, measureLocation: 'inside', size: 'sm' } });
    expect(wrapper.classes()).toContain(styles.modifiers.lg);
    expect(wrapper.classes()).not.toContain(styles.modifiers.sm);
    expect(wrapper.find(`.${styles.progressStatus} .${styles.progressMeasure}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.progressIndicator} .${styles.progressMeasure}`).text()).toBe('40%');
  });

  it('applies the inside modifier', () => {
    const wrapper = mount(PfProgress, { props: { measureLocation: 'inside' } });
    expect(wrapper.classes()).toContain(styles.modifiers.inside);
    expect(wrapper.classes()).not.toContain('true');
  });

  it('renders the scaled value inside the bar', () => {
    const wrapper = mount(PfProgress, { props: { value: 3, min: 2, max: 6, measureLocation: 'inside' } });
    expect(wrapper.find(`.${styles.progressIndicator} .${styles.progressMeasure}`).text()).toBe('25%');
  });

  it('hides the measure with measureLocation none', () => {
    const wrapper = mount(PfProgress, { props: { measureLocation: 'none' } });
    expect(wrapper.find(`.${styles.progressStatus} .${styles.progressMeasure}`).exists()).toBe(false);
  });

  it('applies size modifiers', () => {
    expect(mount(PfProgress, { props: { size: 'sm' } }).classes()).toContain(styles.modifiers.sm);
    expect(mount(PfProgress, { props: { size: 'lg' } }).classes()).toContain(styles.modifiers.lg);
  });

  it.each(['success', 'warning', 'danger'] as const)('applies the %s variant with a status icon', variant => {
    const wrapper = mount(PfProgress, { props: { variant } });
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
    expect(wrapper.find(`.${styles.progressStatusIcon} svg`).exists()).toBe(true);
  });

  it('does not render a status icon without a variant', () => {
    expect(mount(PfProgress).find(`.${styles.progressStatusIcon}`).exists()).toBe(false);
  });

  it('applies the truncate modifier to the title', () => {
    const wrapper = mount(PfProgress, { props: { title: 'Long title', titleTruncated: true } });
    expect(wrapper.find(`.${styles.progressDescription}`).classes()).toContain(styles.modifiers.truncate);
  });

  // an empty title div was rendered without a title
  it('renders no title without a title', () => {
    const wrapper = mount(PfProgress, { props: { ariaLabel: 'Upload' } });
    expect(wrapper.find(`.${styles.progressDescription}`).exists()).toBe(false);
  });

  it('renders the title slot', () => {
    const wrapper = mount(PfProgress, { slots: { title: () => h('b', 'Bold') } });
    expect(wrapper.find(`.${styles.progressDescription} b`).text()).toBe('Bold');
    expect(wrapper.classes()).not.toContain(styles.modifiers.singleline);
  });

  it('hides the title from assistive technologies unless truncated', () => {
    const plain = mount(PfProgress, { props: { title: 'Title' } });
    expect(plain.find(`.${styles.progressDescription}`).attributes('aria-hidden')).toBe('true');
    expect(plain.find(`.${styles.progressDescription}`).attributes('tabindex')).toBeUndefined();

    // a truncated title is focusable, to reach its tooltip with the keyboard
    const truncated = mount(PfProgress, { props: { title: 'Title', titleTruncated: true } });
    expect(truncated.find(`.${styles.progressDescription}`).attributes('aria-hidden')).toBeUndefined();
    expect(truncated.find(`.${styles.progressDescription}`).attributes('tabindex')).toBe('0');
  });

  // the status container was rendered even without measure nor icon
  it('renders no status without measure nor icon', () => {
    const wrapper = mount(PfProgress, { props: { title: 'Title', measureLocation: 'none' } });
    expect(wrapper.find(`.${styles.progressStatus}`).exists()).toBe(false);
    const withIcon = mount(PfProgress, { props: { title: 'Title', measureLocation: 'none', variant: 'danger' } });
    expect(withIcon.find(`.${styles.progressStatus} .${styles.progressStatusIcon} svg`).exists()).toBe(true);
  });

  it.each(['success', 'danger'] as const)('hides the %s status icon with hideStatusIcon', variant => {
    const wrapper = mount(PfProgress, { props: { title: 'Title', variant, hideStatusIcon: true } });
    expect(wrapper.find(`.${styles.progressStatusIcon}`).exists()).toBe(false);
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
  });

  it('renders the helper text and describes the progress bar', () => {
    const none = mount(PfProgress, { props: { title: 'Title' } });
    expect(none.find(`.${styles.progressHelperText}`).exists()).toBe(false);
    expect(none.find('[role="progressbar"]').attributes('aria-describedby')).toBeUndefined();

    const prop = mount(PfProgress, { props: { title: 'Title', helperText: 'Help', ariaDescribedby: 'help-id' } });
    expect(prop.find(`.${styles.progressHelperText}`).text()).toBe('Help');
    expect(prop.find('[role="progressbar"]').attributes('aria-describedby')).toBe('help-id');

    const slot = mount(PfProgress, { props: { title: 'Title' }, slots: { 'helper-text': () => h('i', 'Slot') } });
    expect(slot.find(`.${styles.progressHelperText} i`).text()).toBe('Slot');
  });

  // aria-valuetext was rendered empty without valueText
  it('omits aria-valuetext without valueText', () => {
    const wrapper = mount(PfProgress, { props: { title: 'Title' } });
    expect(wrapper.find('[role="progressbar"]').attributes('aria-valuetext')).toBeUndefined();
  });

  it('shows 0% when min and max are equal', () => {
    const wrapper = mount(PfProgress, { props: { title: 'Title', min: 5, max: 5, value: 5 } });
    expect(wrapper.find(`.${styles.progressIndicator}`).attributes('style')).toContain('width: 0%');
  });

  it('warns without a title nor an accessible name', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      mount(PfProgress);
      expect(warn).toHaveBeenCalledWith(
        'One of aria-label or aria-labelledby properties should be passed when using the progress component without a title.',
      );
      warn.mockClear();
      mount(PfProgress, { props: { ariaLabel: 'Upload' } });
      expect(warn).not.toHaveBeenCalled();
    } finally {
      warn.mockRestore();
    }
  });

  it('defaults ouia-safe to true', () => {
    expect(mount(PfProgress, { props: { title: 'Title' } }).attributes('data-ouia-safe')).toBe('true');
  });
});
