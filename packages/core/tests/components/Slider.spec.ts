import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import inputGroupStyles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import cssSliderValue from '@patternfly/react-tokens/dist/esm/c_slider_value';
import PfSlider from '../../src/components/Slider/Slider.vue';

enableAutoUnmount(afterEach);
afterEach(() => {
  vi.restoreAllMocks();
});

function mountWithModels(props: Record<string, unknown> = {}, options: Record<string, unknown> = {}) {
  const wrapper: VueWrapper<any> = mount(PfSlider as any, {
    ...options,
    props: {
      'onUpdate:modelValue': (v: unknown) => wrapper.setProps({ modelValue: v }),
      ...props,
    },
  });
  return wrapper;
}

const lastChange = (wrapper: VueWrapper<any>) => {
  const changes = wrapper.emitted('change')!;
  return changes[changes.length - 1]!;
};
const thumb = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.sliderThumb}`);
const input = (wrapper: VueWrapper<any>) => wrapper.find<HTMLInputElement>('input');

const customSteps = [
  { value: 0, label: '0' },
  { value: 25, label: '1', labelHidden: true },
  { value: 50, label: '2' },
  { value: 75, label: '3', labelHidden: true },
  { value: 100, label: '4' },
];

describe('Slider', () => {
  it('renders a continuous slider with its value', () => {
    const wrapper = mount(PfSlider, { props: { modelValue: 30 } });
    expect(wrapper.classes()).toEqual([styles.slider]);
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssSliderValue.name)).toBe('30%');
    expect(wrapper.find(`.${styles.sliderMain} .${styles.sliderRail} .${styles.sliderRailTrack}`).exists()).toBe(true);

    const t = thumb(wrapper);
    expect(t.attributes('role')).toBe('slider');
    expect(t.attributes('tabindex')).toBe('0');
    expect(t.attributes('aria-valuemin')).toBe('0');
    expect(t.attributes('aria-valuemax')).toBe('100');
    expect(t.attributes('aria-valuenow')).toBe('30');
    expect(t.attributes('aria-valuetext')).toBe('30');
    expect(t.attributes('aria-label')).toBe('Value');
  });

  it('renders the boundaries by default and the ticks of a discrete slider', () => {
    const boundaries = mount(PfSlider, { props: { modelValue: 50, min: 0, max: 200, step: 50 } });
    const labels = boundaries.findAll(`.${styles.sliderStepLabel}`).map(l => l.text());
    expect(labels).toEqual(['0', '200']);
    expect(boundaries.find(`.${styles.sliderStepTick}`).exists()).toBe(false);

    const ticks = mount(PfSlider, { props: { modelValue: 50, max: 200, step: 50, showTicks: true } });
    const steps = ticks.findAll(`.${styles.sliderStep}`);
    expect(steps).toHaveLength(5);
    expect(ticks.findAll(`.${styles.sliderStepTick}`)).toHaveLength(5);
    expect(steps.map(s => s.classes().includes(styles.modifiers.active))).toEqual([true, true, false, false, false]);

    const hidden = mount(PfSlider, { props: { hideBoundaries: true } });
    expect(hidden.find(`.${styles.sliderSteps}`).exists()).toBe(false);
  });

  it('renders the custom steps with their labels', () => {
    const wrapper = mount(PfSlider, { props: { modelValue: 50, customSteps } });
    expect(wrapper.findAll(`.${styles.sliderStep}`)).toHaveLength(5);
    expect(wrapper.findAll(`.${styles.sliderStepLabel}`).map(l => l.text())).toEqual(['0', '2', '4']);
    expect(thumb(wrapper).attributes('aria-valuetext')).toBe('2');
  });

  it('uses the custom steps range for the aria values', () => {
    const wrapper = mount(PfSlider, {
      props: {
        modelValue: 25,
        customSteps: [
          { value: 12, label: '12' },
          { value: 86, label: '86' },
        ],
      },
    });
    expect(thumb(wrapper).attributes('aria-valuemin')).toBe('12');
    expect(thumb(wrapper).attributes('aria-valuemax')).toBe('86');
  });

  it('renders the value input at the end or above the thumb, with a label', () => {
    const end = mount(PfSlider, { props: { modelValue: 50, inputVisible: true, inputLabel: '%' } });
    const value = end.find(`:scope > .${styles.sliderValue}`);
    expect(value.exists()).toBe(true);
    expect(value.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(true);
    expect(value.find(`.${inputGroupStyles.inputGroupText}`).text()).toBe('%');
    expect(input(end).attributes('aria-label')).toBe('Slider value input');

    const above = mount(PfSlider, { props: { modelValue: 50, inputVisible: true, inputAboveThumb: true } });
    expect(above.find(`.${styles.sliderMain} .${styles.sliderValue}.${styles.modifiers.floating}`).exists()).toBe(true);
    expect(above.find(`.${inputGroupStyles.inputGroup}`).exists()).toBe(false);
  });

  it('renders the start and end actions', () => {
    const wrapper = mount(PfSlider, {
      slots: { 'start-actions': () => h('button', 'minus'), 'end-actions': () => h('button', 'plus') },
    });
    const actions = wrapper.findAll(`.${styles.sliderActions}`);
    expect(actions.map(a => a.text())).toEqual(['minus', 'plus']);
    expect(wrapper.element.firstElementChild).toBe(actions[0]!.element);
  });

  it('disables the slider and its input', async () => {
    const wrapper = mountWithModels({ modelValue: 50, disabled: true, inputVisible: true, inputLabel: '%' });
    expect(wrapper.classes()).toContain(styles.modifiers.disabled);
    expect(thumb(wrapper).attributes('tabindex')).toBe('-1');
    expect(thumb(wrapper).attributes('aria-disabled')).toBe('true');
    expect(input(wrapper).attributes('disabled')).toBeDefined();

    await thumb(wrapper).trigger('keydown', { key: 'ArrowRight' });
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });

  it('sets the OUIA attributes, safe by default', () => {
    const wrapper = mount(PfSlider, { props: { ouiaId: 'slider' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Slider');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('slider');
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });

  it('labels and describes the thumb', () => {
    const wrapper = mount(PfSlider, {
      props: { ariaLabelledby: 'lbl', ariaDescribedby: 'desc', thumbAriaLabel: 'Volume', thumbAriaValueText: 'loud' },
    });
    expect(thumb(wrapper).attributes('aria-labelledby')).toBe('lbl');
    expect(thumb(wrapper).attributes('aria-describedby')).toBe('desc');
    expect(thumb(wrapper).attributes('aria-label')).toBe('Volume');
    expect(thumb(wrapper).attributes('aria-valuetext')).toBe('loud');
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined();
  });

  it('renders a tooltip over the thumb with the value or a custom content', async () => {
    const wrapper = mount(PfSlider, { props: { modelValue: 40, tooltipOverThumb: true }, attachTo: document.body });
    await flushPromises();
    thumb(wrapper).element.dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(document.body.querySelector('[role="tooltip"]')!.textContent!.trim()).toBe('40');
    wrapper.unmount();

    const custom = mount(PfSlider, {
      props: { modelValue: 40, tooltipOverThumb: true, tooltipContent: 'Custom' },
      attachTo: document.body,
    });
    await flushPromises();
    thumb(custom).element.dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(document.body.querySelector('[role="tooltip"]')!.textContent!.trim()).toBe('Custom');
  });

  it('changes the value with the arrow keys', async () => {
    const wrapper = mountWithModels({ modelValue: 50, step: 10 });
    await thumb(wrapper).trigger('keydown', { key: 'ArrowRight' });
    expect(wrapper.props('modelValue')).toBe(60);
    await thumb(wrapper).trigger('keydown', { key: 'ArrowLeft' });
    await thumb(wrapper).trigger('keydown', { key: 'ArrowLeft' });
    expect(wrapper.props('modelValue')).toBe(40);
    expect(wrapper.emitted('change')!.map(e => e[1])).toEqual([60, 50, 40]);

    await wrapper.setProps({ modelValue: 95 });
    await thumb(wrapper).trigger('keydown', { key: 'ArrowRight' });
    expect(wrapper.props('modelValue')).toBe(100);
  });

  it('moves between the custom steps with the arrow keys', async () => {
    const wrapper = mountWithModels({ modelValue: 50, customSteps });
    await thumb(wrapper).trigger('keydown', { key: 'ArrowRight' });
    expect(wrapper.props('modelValue')).toBe(75);
    await wrapper.setProps({ modelValue: 0 });
    await thumb(wrapper).trigger('keydown', { key: 'ArrowLeft' });
    expect(wrapper.emitted('change')).toHaveLength(1);
  });

  it('snaps to the step on a rail click', async () => {
    const wrapper = mountWithModels({ modelValue: 0, step: 10 });
    const rail = wrapper.find(`.${styles.sliderRail}`).element as HTMLElement;
    vi.spyOn(rail, 'getBoundingClientRect').mockReturnValue({ left: 0, right: 200 } as DOMRect);
    vi.spyOn(rail, 'offsetWidth', 'get').mockReturnValue(220);
    vi.spyOn(thumb(wrapper).element as HTMLElement, 'offsetWidth', 'get').mockReturnValue(20);

    await wrapper.find(`.${styles.sliderRail}`).trigger('click', { clientX: 67 });
    expect(wrapper.props('modelValue')).toBe(30);
  });

  it('snaps to the closest custom step on a rail click', async () => {
    const wrapper = mountWithModels({ modelValue: 0, customSteps });
    const rail = wrapper.find(`.${styles.sliderRail}`).element as HTMLElement;
    vi.spyOn(rail, 'getBoundingClientRect').mockReturnValue({ left: 0, right: 200 } as DOMRect);
    vi.spyOn(rail, 'offsetWidth', 'get').mockReturnValue(200);
    vi.spyOn(thumb(wrapper).element as HTMLElement, 'offsetWidth', 'get').mockReturnValue(0);

    await wrapper.find(`.${styles.sliderRail}`).trigger('click', { clientX: 140 });
    expect(wrapper.props('modelValue')).toBe(75);
  });

  it('updates the value from the input on enter and blur, clamped to min and max', async () => {
    const wrapper = mountWithModels({ modelValue: 50, inputVisible: true });
    expect(input(wrapper).element.value).toBe('50');

    await input(wrapper).setValue('70');
    expect(wrapper.props('modelValue')).toBe(50);
    await input(wrapper).trigger('keydown', { key: 'Enter' });
    expect(wrapper.props('modelValue')).toBe(70);
    expect(lastChange(wrapper).slice(1)).toEqual([70, 70]);

    await input(wrapper).setValue('150');
    await input(wrapper).trigger('blur');
    expect(wrapper.props('modelValue')).toBe(100);
    expect(input(wrapper).element.value).toBe('100');
  });

  it('updates the value while typing with inputLive', async () => {
    const wrapper = mountWithModels({ modelValue: 50, inputVisible: true, inputLive: true });
    await input(wrapper).setValue('20');
    expect(wrapper.props('modelValue')).toBe(20);
  });

  it('keeps a bound input value independent from the slider value', async () => {
    const onUpdateInputValue = vi.fn();
    const wrapper = mountWithModels({
      modelValue: 50,
      inputValue: 2,
      inputVisible: true,
      customSteps,
      'onUpdate:inputValue': onUpdateInputValue,
    });
    expect(input(wrapper).element.value).toBe('2');

    await input(wrapper).setValue('3');
    await input(wrapper).trigger('keydown', { key: 'Enter' });
    expect(onUpdateInputValue).toHaveBeenCalledWith(3);
    expect(wrapper.props('modelValue')).toBe(50);
    expect(lastChange(wrapper).slice(1)).toEqual([50, 3]);
  });
});
