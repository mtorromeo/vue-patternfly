import { describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Check/check';
import PfCheckbox from '../../src/components/Checkbox.vue';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
function mountWithModel<C>(
  component: C,
  model: string,
  props: Record<string, unknown>,
  options: Record<string, unknown> = {},
) {
  const wrapper: VueWrapper<any> = mount(component as any, {
    ...options,
    props: {
      ...props,
      [`onUpdate:${model}`]: (v: unknown) => wrapper.setProps({ [model]: v }),
    },
  });
  return wrapper;
}

describe('Checkbox', () => {
  it('renders a standalone div wrapper with the input', () => {
    const wrapper = mount(PfCheckbox, { props: { id: 'test-id', ouiaId: 'ouia-id' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.check, styles.modifiers.standalone]);
    const input = wrapper.get('input');
    expect(input.classes()).toEqual([styles.checkInput]);
    expect(input.attributes('type')).toBe('checkbox');
    expect(input.attributes('id')).toBe('test-id');
    expect(input.attributes('aria-invalid')).toBe('false');
    // OUIA attributes go on the input, as upstream
    expect(input.attributes('data-ouia-component-type')).toBe('PF/Checkbox');
    expect(input.attributes('data-ouia-component-id')).toBe('ouia-id');
    expect(input.attributes('data-ouia-safe')).toBe('true');
    expect(wrapper.attributes('data-ouia-component-type')).toBeUndefined();
  });

  it('generates an id when none is given', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Label' } });
    const id = wrapper.get('input').attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.get('label').attributes('for')).toBe(id);
  });

  it('adds classes to the wrapper and the input', () => {
    const wrapper = mount(PfCheckbox, { props: { inputClass: 'custom-input' }, attrs: { class: 'custom-class' } });
    expect(wrapper.classes()).toContain('custom-class');
    expect(wrapper.get('input').classes()).toEqual([styles.checkInput, 'custom-input']);
  });

  it('forwards other attributes to the input', () => {
    const wrapper = mount(PfCheckbox, { attrs: { name: 'check', 'aria-label': 'Standalone input' } });
    expect(wrapper.get('input').attributes('name')).toBe('check');
    expect(wrapper.get('input').attributes('aria-label')).toBe('Standalone input');
  });

  it('sets the checkbox as invalid', () => {
    expect(
      mount(PfCheckbox, { props: { invalid: true } })
        .get('input')
        .attributes('aria-invalid'),
    ).toBe('true');
  });

  it('disables the checkbox and its label', () => {
    const wrapper = mount(PfCheckbox, { props: { disabled: true, label: 'Label' } });
    expect(wrapper.get('input').attributes('disabled')).toBeDefined();
    expect(wrapper.get('label').classes()).toContain(styles.modifiers.disabled);
  });

  it('marks a required checkbox with an asterisk', () => {
    const plain = mount(PfCheckbox, { props: { label: 'Label' } });
    expect(plain.find(`.${styles.checkLabelRequired}`).exists()).toBe(false);

    const wrapper = mount(PfCheckbox, { props: { required: true, label: 'Label' } });
    expect(wrapper.get('input').attributes('required')).toBeDefined();
    const asterisk = wrapper.get(`.${styles.checkLabelRequired}`);
    expect(asterisk.text()).toBe('*');
    expect(asterisk.attributes('aria-hidden')).toBe('true');
  });

  it('reflects and updates v-model', async () => {
    const wrapper = mountWithModel(PfCheckbox, 'modelValue', { modelValue: false });
    const input = wrapper.get<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
    expect(wrapper.emitted('change')).toHaveLength(1);
    expect(input.element.checked).toBe(true);

    await wrapper.setProps({ modelValue: false });
    expect(input.element.checked).toBe(false);
  });

  it('is indeterminate when the model is null', () => {
    const input = mount(PfCheckbox, { props: { modelValue: null } }).get<HTMLInputElement>('input');
    expect(input.element.indeterminate).toBe(true);
    expect(input.element.checked).toBe(false);
  });

  it('works uncontrolled', async () => {
    const wrapper = mount(PfCheckbox);
    const input = wrapper.get<HTMLInputElement>('input');
    await input.setValue(true);
    expect(input.element.checked).toBe(true);
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
  });

  it('renders a label associated with the input', () => {
    const wrapper = mount(PfCheckbox, { props: { id: 'check', label: 'Label' } });
    expect(wrapper.classes()).toEqual([styles.check]);
    const label = wrapper.get('label');
    expect(label.classes()).toEqual([styles.checkLabel]);
    expect(label.attributes('for')).toBe('check');
    expect(label.text()).toBe('Label');
    expect([...wrapper.element.children].map(c => c.tagName)).toEqual(['INPUT', 'LABEL']);
  });

  it('renders the label before the input with labelBeforeButton', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Label', labelBeforeButton: true } });
    expect([...wrapper.element.children].map(c => c.tagName)).toEqual(['LABEL', 'INPUT']);
  });

  it('renders the label slot', () => {
    const wrapper = mount(PfCheckbox, { slots: { label: () => h('em', 'Custom') } });
    expect(wrapper.get('label em').text()).toBe('Custom');
    expect(wrapper.classes()).not.toContain(styles.modifiers.standalone);
  });

  it('describes the input with the description', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Label', description: 'Description' } });
    const description = wrapper.get(`.${styles.checkDescription}`);
    expect(description.element.tagName).toBe('SPAN');
    expect(description.text()).toBe('Description');
    // regression: the description had no id and did not describe the input
    expect(description.attributes('id')).toBeTruthy();
    expect(wrapper.get('input').attributes('aria-describedby')).toBe(description.attributes('id'));
  });

  it('uses a custom aria-describedby, or none with an empty string', () => {
    const custom = mount(PfCheckbox, { props: { description: 'Description' }, attrs: { 'aria-describedby': 'other' } });
    expect(custom.get('input').attributes('aria-describedby')).toBe('other');

    const none = mount(PfCheckbox, { props: { description: 'Description' }, attrs: { 'aria-describedby': '' } });
    expect(none.get('input').attributes('aria-describedby')).toBeUndefined();

    const noDescription = mount(PfCheckbox);
    expect(noDescription.get('input').attributes('aria-describedby')).toBeUndefined();
  });

  it('renders the body', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Label', body: 'Body' } });
    const body = wrapper.get(`.${styles.checkBody}`);
    expect(body.text()).toBe('Body');

    const slotted = mount(PfCheckbox, { slots: { default: () => h('p', 'Slot body') } });
    expect(slotted.get(`.${styles.checkBody} p`).text()).toBe('Slot body');
  });

  it('wraps everything in a label with labelWrapped', () => {
    const wrapper = mount(PfCheckbox, { props: { id: 'check', label: 'Label', labelWrapped: true } });
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('for')).toBe('check');
    expect(wrapper.get(`.${styles.checkLabel}`).element.tagName).toBe('SPAN');
  });

  it('keeps the standalone modifier when label wrapped without a label', () => {
    // regression: labelWrapped removed the standalone modifier
    const wrapper = mount(PfCheckbox, { props: { labelWrapped: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.standalone);
  });

  it('wraps everything in a label with component label', () => {
    // regression: the wrapper label had no for attribute
    const wrapper = mount(PfCheckbox, { props: { id: 'check', label: 'Label', component: 'label' } });
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('for')).toBe('check');
    expect(wrapper.get(`.${styles.checkLabel}`).element.tagName).toBe('SPAN');
  });

  it('renders the given component, also with labelWrapped', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Label', component: 'h3', labelWrapped: true } });
    expect(wrapper.element.tagName).toBe('H3');
    expect(wrapper.attributes('for')).toBeUndefined();
    expect(wrapper.get(`.${styles.checkLabel}`).element.tagName).toBe('LABEL');
  });

  it('emits change with the event', async () => {
    const onChange = vi.fn();
    const wrapper = mount(PfCheckbox, { attrs: { onChange } });
    await wrapper.get('input').setValue(true);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]![0]).toBeInstanceOf(Event);
  });
});
