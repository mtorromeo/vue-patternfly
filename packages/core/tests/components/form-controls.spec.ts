import { describe, it, expect, vi } from 'vitest';
import { h, nextTick } from 'vue';
import { mount, type VueWrapper } from '@vue/test-utils';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import radioStyles from '@patternfly/react-styles/css/components/Radio/radio';
import switchStyles from '@patternfly/react-styles/css/components/Switch/switch';
import formControlStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import PfCheckbox from '../../src/components/Checkbox.vue';
import PfRadio from '../../src/components/Radio.vue';
import PfSwitch from '../../src/components/Switch.vue';
import PfTextInput from '../../src/components/TextInput.vue';
import PfTextarea from '../../src/components/Textarea.vue';

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
  it('renders an accessible checkbox with a label', () => {
    const wrapper = mount(PfCheckbox, { props: { id: 'check', label: 'Accept' } });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('checkbox');
    expect(input.attributes('id')).toBe('check');
    expect(input.classes()).toContain(checkStyles.checkInput);
    expect(wrapper.classes()).toContain(checkStyles.check);
    expect(wrapper.classes()).not.toContain(checkStyles.modifiers.standalone);

    const label = wrapper.find('label');
    expect(label.attributes('for')).toBe('check');
    expect(label.text()).toBe('Accept');
  });

  it('generates an id linking label and input', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Accept' } });
    const id = wrapper.find('input').attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.find('label').attributes('for')).toBe(id);
  });

  it('is standalone without a label and forwards aria attributes to the input', () => {
    const wrapper = mount(PfCheckbox, { attrs: { 'aria-label': 'Select row', name: 'row' } });
    expect(wrapper.classes()).toContain(checkStyles.modifiers.standalone);
    expect(wrapper.find('input').attributes('aria-label')).toBe('Select row');
    expect(wrapper.find('input').attributes('name')).toBe('row');
    expect(wrapper.attributes('aria-label')).toBeUndefined();
  });

  it('applies class to the wrapper and inputClass to the input', () => {
    const wrapper = mount(PfCheckbox, {
      props: { label: 'Accept', inputClass: 'input-extra' },
      attrs: { class: 'wrapper-extra' },
    });
    expect(wrapper.classes()).toContain('wrapper-extra');
    expect(wrapper.classes()).not.toContain('input-extra');
    expect(wrapper.find('input').classes()).toEqual([checkStyles.checkInput, 'input-extra']);
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfCheckbox, 'modelValue', { modelValue: false, label: 'Accept' });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
    expect(wrapper.props('modelValue')).toBe(true);
    expect(wrapper.emitted('change')).toHaveLength(1);

    await wrapper.setProps({ modelValue: false });
    expect(input.element.checked).toBe(false);
  });

  it('works uncontrolled', async () => {
    const wrapper = mount(PfCheckbox);
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
  });

  it('becomes indeterminate when the model is set to null', async () => {
    const wrapper = mount(PfCheckbox, { props: { modelValue: false } });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.indeterminate).toBe(false);

    await wrapper.setProps({ modelValue: null });
    expect(input.element.indeterminate).toBe(true);

    await wrapper.setProps({ modelValue: true });
    expect(input.element.indeterminate).toBe(false);
    expect(input.element.checked).toBe(true);
  });

  it('is indeterminate when mounted with a null model', () => {
    const wrapper = mount(PfCheckbox, { props: { modelValue: null } });
    expect(wrapper.find<HTMLInputElement>('input').element.indeterminate).toBe(true);
  });

  it('can be disabled and required', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Accept', disabled: true, required: true } });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(input.attributes('required')).toBeDefined();
    expect(wrapper.find('label').classes()).toContain(checkStyles.modifiers.disabled);
    const required = wrapper.find(`.${checkStyles.checkLabelRequired}`);
    expect(required.attributes('aria-hidden')).toBe('true');
  });

  it('renders description and body', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'L', description: 'Desc', body: 'Body' } });
    expect(wrapper.find(`.${checkStyles.checkDescription}`).text()).toBe('Desc');
    expect(wrapper.find(`.${checkStyles.checkBody}`).text()).toBe('Body');
  });

  it('wraps the input in a label with labelWrapped', () => {
    const wrapper = mount(PfCheckbox, { props: { id: 'wrapped', label: 'Accept', labelWrapped: true } });
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('for')).toBe('wrapped');
    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.findAll('label')).toHaveLength(1);
  });

  it('renders the label before the input with labelBeforeButton', () => {
    const wrapper = mount(PfCheckbox, { props: { label: 'Accept', labelBeforeButton: true } });
    const children = Array.from((wrapper.element as HTMLElement).children).map(c => c.tagName);
    expect(children.indexOf('LABEL')).toBeLessThan(children.indexOf('INPUT'));
  });
});

describe('Radio', () => {
  it('renders an accessible radio with a label', () => {
    const wrapper = mount(PfRadio, { props: { id: 'radio', label: 'Option', name: 'group' } });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('radio');
    expect(input.attributes('name')).toBe('group');
    expect(input.classes()).toContain(radioStyles.radioInput);
    expect(wrapper.classes()).toContain(radioStyles.radio);
    expect(wrapper.find('label').attributes('for')).toBe('radio');
    expect(input.attributes('aria-label')).toBeUndefined();
  });

  it('uses aria-label only without a visible label', () => {
    const wrapper = mount(PfRadio, { props: { ariaLabel: 'Option', name: 'group' } });
    expect(wrapper.find('input').attributes('aria-label')).toBe('Option');
    expect(wrapper.classes()).toContain(radioStyles.modifiers.standalone);
  });

  it('applies class to the wrapper and inputClass to the input', () => {
    const wrapper = mount(PfRadio, {
      props: { label: 'Option', inputClass: 'input-extra' },
      attrs: { class: 'wrapper-extra' },
    });
    expect(wrapper.classes()).toContain('wrapper-extra');
    expect(wrapper.classes()).not.toContain('input-extra');
    expect(wrapper.find('input').classes()).toEqual([radioStyles.radioInput, 'input-extra']);
  });

  it('reflects the checked prop and emits change', async () => {
    const wrapper = mount(PfRadio, { props: { label: 'Option', name: 'group', checked: false } });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await wrapper.setProps({ checked: true });
    expect(input.element.checked).toBe(true);

    await input.trigger('change');
    expect(wrapper.emitted('change')).toHaveLength(1);
  });

  it('can be disabled', () => {
    const wrapper = mount(PfRadio, { props: { label: 'Option', name: 'group', disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    expect(wrapper.find('label').classes()).toContain(radioStyles.modifiers.disabled);
  });

  it('can use a label as wrapper', () => {
    const wrapper = mount(PfRadio, { props: { id: 'r', label: 'Option', name: 'group', component: 'label' } });
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('for')).toBe('r');
    expect(wrapper.find(`.${radioStyles.radioLabel}`).element.tagName).toBe('SPAN');
  });

  it('wraps the input in a label with labelWrapped, unless component is set', () => {
    const wrapper = mount(PfRadio, { props: { id: 'r', label: 'Option', labelWrapped: true } });
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.attributes('for')).toBe('r');
    expect(wrapper.find(`.${radioStyles.radioLabel}`).element.tagName).toBe('SPAN');

    const h3 = mount(PfRadio, { props: { id: 'r', ariaLabel: 'Option', labelWrapped: true, component: 'h3' } });
    expect(h3.element.tagName).toBe('H3');
  });

  it('is standalone without a label, even when wrapped in a label', () => {
    const wrapper = mount(PfRadio, { props: { ariaLabel: 'Option', component: 'label' } });
    expect(wrapper.classes()).toContain(radioStyles.modifiers.standalone);
  });

  it('puts the OUIA attributes on the input', () => {
    const wrapper = mount(PfRadio, { props: { label: 'Option', ouiaId: 'my-radio' } });
    const input = wrapper.find('input');
    expect(input.attributes('data-ouia-component-type')).toBe('PF/Radio');
    expect(input.attributes('data-ouia-component-id')).toBe('my-radio');
    expect(input.attributes('data-ouia-safe')).toBe('true');
    expect(wrapper.attributes('data-ouia-component-type')).toBeUndefined();
  });

  it('sets aria-invalid from invalid', () => {
    expect(
      mount(PfRadio, { props: { label: 'Option' } })
        .find('input')
        .attributes('aria-invalid'),
    ).toBe('false');
    expect(
      mount(PfRadio, { props: { label: 'Option', invalid: true } })
        .find('input')
        .attributes('aria-invalid'),
    ).toBe('true');
  });

  it('is described by its description unless aria-describedby is set', () => {
    const wrapper = mount(PfRadio, { props: { label: 'Option', description: 'Some text' } });
    const description = wrapper.find(`.${radioStyles.radioDescription}`);
    expect(description.attributes('id')).toBeTruthy();
    expect(wrapper.find('input').attributes('aria-describedby')).toBe(description.attributes('id'));

    const custom = mount(PfRadio, {
      props: { label: 'Option', description: 'Some text' },
      attrs: { 'aria-describedby': 'custom-id' },
    });
    expect(custom.find('input').attributes('aria-describedby')).toBe('custom-id');

    const empty = mount(PfRadio, {
      props: { label: 'Option', description: 'Some text' },
      attrs: { 'aria-describedby': '' },
    });
    expect(empty.find('input').attributes('aria-describedby')).toBeUndefined();

    const none = mount(PfRadio, { props: { label: 'Option' } });
    expect(none.find('input').attributes('aria-describedby')).toBeUndefined();
  });

  it('renders the description and body', () => {
    const wrapper = mount(PfRadio, { props: { label: 'Option', description: 'Description', body: 'Body' } });
    expect(wrapper.find(`.${radioStyles.radioDescription}`).text()).toBe('Description');
    expect(wrapper.find(`.${radioStyles.radioBody}`).text()).toBe('Body');
  });

  it('binds the selected value of the group with v-model', async () => {
    const small = mountWithModel(PfRadio, 'modelValue', {
      label: 'Small',
      name: 'size',
      value: 'sm',
      modelValue: 'lg',
    });
    const input = small.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    input.element.checked = true;
    await input.trigger('change');
    expect(small.emitted('update:modelValue')).toEqual([['sm']]);
    expect(small.props('modelValue')).toBe('sm');
    expect(input.element.checked).toBe(true);

    await small.setProps({ modelValue: 'lg' });
    expect(input.element.checked).toBe(false);
  });

  it('warns without a label or an aria-label', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfRadio, { props: { name: 'group' } });
    expect(error).toHaveBeenCalledWith('Radio:', 'Radio requires an aria-label to be specified');
    error.mockClear();
    mount(PfRadio, { props: { name: 'group', ariaLabel: 'Option' } });
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });
});

describe('Switch', () => {
  it('renders a checkbox input with the switch role', () => {
    const wrapper = mount(PfSwitch, { attrs: { 'aria-label': 'Dark mode', id: 'sw' } });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('checkbox');
    expect(input.attributes('role')).toBe('switch');
    expect(input.attributes('aria-label')).toBe('Dark mode');
    expect(input.attributes('id')).toBe('sw');
    expect(input.classes()).toContain(switchStyles.switchInput);
    expect(wrapper.element.tagName).toBe('LABEL');
    expect(wrapper.classes()).toContain(switchStyles.switch);
  });

  it('supports v-model:checked', async () => {
    const wrapper = mountWithModel(PfSwitch, 'checked', { checked: false, label: 'On' });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:checked')).toEqual([[true]]);
    expect(wrapper.props('checked')).toBe(true);

    await wrapper.setProps({ checked: false });
    expect(input.element.checked).toBe(false);
  });

  it('can be disabled', () => {
    const wrapper = mount(PfSwitch, { props: { disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });

  it('renders the label and reversed modifier', () => {
    const wrapper = mount(PfSwitch, { props: { label: 'Enabled', reversed: true } });
    expect(wrapper.find(`.${switchStyles.switchLabel}`).text()).toBe('Enabled');
    expect(wrapper.classes()).toContain(switchStyles.modifiers.reverse);
  });

  it('submits the off value through a hidden input when unchecked', async () => {
    const wrapper = mount(PfSwitch, { props: { name: 'feature', offValue: 'off', checked: false } });
    const hidden = wrapper.find('input[type="hidden"]');
    expect(hidden.attributes('name')).toBe('feature');
    expect(hidden.attributes('value')).toBe('off');

    await wrapper.setProps({ checked: true });
    expect(wrapper.find('input[type="hidden"]').exists()).toBe(false);
  });

  it('labels the input with the visible label', () => {
    const wrapper = mount(PfSwitch, { props: { id: 'sw', label: 'On' } });
    const input = wrapper.find('input');
    expect(wrapper.attributes('for')).toBe('sw');
    expect(input.attributes('id')).toBe('sw');
    expect(input.attributes('aria-labelledby')).toBe('sw-label');
    const label = wrapper.find(`.${switchStyles.switchLabel}`);
    expect(label.attributes('id')).toBe('sw-label');
    expect(label.attributes('aria-hidden')).toBe('true');
  });

  it('generates the id linking the label to the input', () => {
    const wrapper = mount(PfSwitch, { attrs: { 'aria-label': 'Dark mode' } });
    const id = wrapper.find('input').attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.attributes('for')).toBe(id);
  });

  it('uses aria-label instead of the visible label', () => {
    const wrapper = mount(PfSwitch, { props: { id: 'sw', label: 'On' }, attrs: { 'aria-label': 'Dark mode' } });
    expect(wrapper.find('input').attributes('aria-labelledby')).toBeUndefined();
    expect(wrapper.find('input').attributes('aria-label')).toBe('Dark mode');
    expect(wrapper.find(`.${switchStyles.switchLabel}`).attributes('id')).toBeUndefined();
  });

  it('uses a custom aria-labelledby', () => {
    const wrapper = mount(PfSwitch, { props: { id: 'sw', label: 'On' }, attrs: { 'aria-labelledby': 'ext' } });
    expect(wrapper.find('input').attributes('aria-labelledby')).toBe('ext');
    expect(wrapper.find(`.${switchStyles.switchLabel}`).attributes('id')).toBeUndefined();
  });

  it('renders the label slot', () => {
    const wrapper = mount(PfSwitch, { props: { id: 'sw' }, slots: { label: () => h('b', 'Bold') } });
    expect(wrapper.find(`.${switchStyles.switchLabel} b`).text()).toBe('Bold');
    expect(wrapper.find('input').attributes('aria-labelledby')).toBe('sw-label');
  });

  it('applies class to the label only', () => {
    const wrapper = mount(PfSwitch, { props: { label: 'On' }, attrs: { class: 'extra' } });
    expect(wrapper.classes()).toContain('extra');
    expect(wrapper.find('input').classes()).toEqual([switchStyles.switchInput]);
  });

  it('puts the OUIA attributes on the label, safe by default', () => {
    const wrapper = mount(PfSwitch, { props: { label: 'On' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Switch');
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
  });

  it('renders the check icon in a span with a label and always without one', () => {
    const labelled = mount(PfSwitch, { props: { label: 'On', checkIcon: true } });
    expect(labelled.find(`.${switchStyles.switchToggleIcon}`).element.tagName).toBe('SPAN');
    expect(
      mount(PfSwitch, { props: { label: 'On' } })
        .find(`.${switchStyles.switchToggleIcon}`)
        .exists(),
    ).toBe(false);

    const unlabelled = mount(PfSwitch, { attrs: { 'aria-label': 'Dark mode' } });
    expect(unlabelled.find(`.${switchStyles.switchToggleIcon}`).element.tagName).toBe('DIV');
  });

  it('warns without a label, aria-label or aria-labelledby', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfSwitch);
    expect(error).toHaveBeenCalledWith(
      'Switch: Switch requires at least one of label, aria-labelledby, or aria-label props to be specified',
    );
    error.mockClear();
    mount(PfSwitch, { props: { label: 'On' } });
    mount(PfSwitch, { attrs: { 'aria-label': 'On' } });
    mount(PfSwitch, { attrs: { 'aria-labelledby': 'ext' } });
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });
});

describe('TextInput', () => {
  it('renders a text input inside a form control', () => {
    const wrapper = mount(PfTextInput, { attrs: { id: 'name', placeholder: 'Name' } });
    const input = wrapper.find('input');
    expect(wrapper.classes()).toContain(formControlStyles.formControl);
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('id')).toBe('name');
    expect(input.attributes('placeholder')).toBe('Name');
    expect(input.attributes('aria-invalid')).toBe('false');
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfTextInput, 'modelValue', { modelValue: 'hello' });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.value).toBe('hello');

    await input.setValue('world');
    expect(wrapper.emitted('update:modelValue')).toEqual([['world']]);
    expect(wrapper.props('modelValue')).toBe('world');

    await wrapper.setProps({ modelValue: 'again' });
    expect(input.element.value).toBe('again');
  });

  it('emits numbers for number inputs', async () => {
    const wrapper = mount(PfTextInput, { props: { type: 'number', modelValue: 1 } });
    await wrapper.find('input').setValue('42.5');
    expect(wrapper.emitted('update:modelValue')).toEqual([[42.5]]);
  });

  it('only updates on change with the lazy modifier', async () => {
    const wrapper = mount(PfTextInput, { props: { modelValue: '', modelModifiers: { lazy: true } } });
    const input = wrapper.find<HTMLInputElement>('input');
    input.element.value = 'typed';
    await input.trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    await input.trigger('change');
    expect(wrapper.emitted('update:modelValue')).toEqual([['typed']]);
  });

  it('can be disabled and read-only', async () => {
    const wrapper = mount(PfTextInput, { props: { disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.disabled);

    await wrapper.setProps({ disabled: false, readOnlyVariant: 'plain' });
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined();
    expect(wrapper.find('input').attributes('readonly')).toBeDefined();
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([formControlStyles.modifiers.readonly, formControlStyles.modifiers.plain]),
    );
  });

  it('reflects the validated state with aria-invalid and a status icon', async () => {
    const wrapper = mount(PfTextInput, { props: { validated: 'error' } });
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.error);
    expect(wrapper.find(`.${formControlStyles.formControlUtilities}`).exists()).toBe(true);

    await wrapper.setProps({ validated: 'success' });
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('false');
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.success);

    await wrapper.setProps({ noStatusIcon: true });
    expect(wrapper.find(`.${formControlStyles.formControlUtilities}`).exists()).toBe(false);
  });

  it('becomes invalid when the native input fires invalid', async () => {
    const wrapper = mount(PfTextInput);
    await wrapper.find('input').trigger('invalid');
    expect(wrapper.emitted('invalid')).toHaveLength(1);
    expect(wrapper.emitted('update:validated')).toEqual([['error']]);
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
  });

  it('forwards aria attributes passed as attrs', () => {
    const wrapper = mount(PfTextInput, { attrs: { 'aria-describedby': 'help' } });
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('help');
  });

  it('forwards aria-label to the input', () => {
    const wrapper = mount(PfTextInput, { attrs: { 'aria-label': 'Name' } });
    expect(wrapper.find('input').attributes('aria-label')).toBe('Name');
  });
  it('puts the OUIA attributes on the input, safe by default', () => {
    const wrapper = mount(PfTextInput, { props: { ouiaId: 'ti' }, attrs: { 'aria-label': 'Name' } });
    const input = wrapper.find('input');
    expect(input.attributes('data-ouia-component-type')).toBe('PF/TextInput');
    expect(input.attributes('data-ouia-component-id')).toBe('ti');
    expect(input.attributes('data-ouia-safe')).toBe('true');
    expect(wrapper.attributes('data-ouia-component-type')).toBeUndefined();
  });

  it('keeps a custom aria-invalid', () => {
    const wrapper = mount(PfTextInput, { attrs: { 'aria-label': 'Name', 'aria-invalid': 'true' } });
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
  });

  it('becomes a combobox controlling an expanded element with expandedControls', () => {
    const wrapper = mount(PfTextInput, {
      props: { expanded: true, expandedControls: 'menu' },
      attrs: { 'aria-label': 'Name' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('role')).toBe('combobox');
    expect(input.attributes('aria-expanded')).toBe('true');
    expect(input.attributes('aria-controls')).toBe('menu');
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.expanded);

    const plain = mount(PfTextInput, { props: { expanded: true }, attrs: { 'aria-label': 'Name' } }).find('input');
    expect(plain.attributes('role')).toBeUndefined();
    expect(plain.attributes('aria-expanded')).toBeUndefined();
  });

  it('replaces newlines in the value with spaces', () => {
    const wrapper = mount(PfTextInput, { props: { modelValue: 'a\nb' }, attrs: { 'aria-label': 'Name' } });
    expect(wrapper.find<HTMLInputElement>('input').element.value).toBe('a b');
  });

  it('emits focus', async () => {
    const wrapper = mount(PfTextInput, { attrs: { 'aria-label': 'Name' } });
    await wrapper.find('input').trigger('focus');
    expect(wrapper.emitted('focus')).toHaveLength(1);
  });

  it('warns without an id, aria-label or aria-labelledby', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfTextInput);
    expect(error).toHaveBeenCalledWith('Text input:', 'Text input requires either an id or aria-label to be specified');
    error.mockClear();
    mount(PfTextInput, { attrs: { id: 'name' } });
    mount(PfTextInput, { attrs: { 'aria-label': 'Name' } });
    mount(PfTextInput, { attrs: { 'aria-labelledby': 'lbl' } });
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });

  it('truncates the value at its start while not focused', async () => {
    // every character is 10px wide in a 100px wide input
    const getContext = vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
      font: '',
      measureText: (text: string) => ({ width: text.length * 10 }),
    } as unknown as CanvasRenderingContext2D);
    const clientWidth = vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
    const wrapper = mount(PfTextInput, {
      props: { startTruncated: true, modelValue: 'abcdefghijklmnopqrst' },
      attrs: { 'aria-label': 'Name' },
    });
    await nextTick();
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.value).toBe('...nopqrst');

    await input.trigger('focus');
    expect(input.element.value).toBe('abcdefghijklmnopqrst');

    await input.trigger('blur');
    expect(input.element.value).toBe('...nopqrst');
    getContext.mockRestore();
    clientWidth.mockRestore();
  });
});

describe('Textarea', () => {
  it('renders a textarea inside a form control', () => {
    const wrapper = mount(PfTextarea, { attrs: { id: 'notes', 'aria-label': 'Notes' } });
    const textarea = wrapper.find('textarea');
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([formControlStyles.formControl, formControlStyles.modifiers.resizeBoth]),
    );
    expect(textarea.attributes('id')).toBe('notes');
    expect(textarea.attributes('aria-label')).toBe('Notes');
    expect(textarea.attributes('aria-invalid')).toBe('false');
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfTextarea, 'modelValue', { modelValue: 'hello' });
    const textarea = wrapper.find<HTMLTextAreaElement>('textarea');
    expect(textarea.element.value).toBe('hello');

    await textarea.setValue('multi\nline');
    expect(wrapper.emitted('update:modelValue')).toEqual([['multi\nline']]);
    expect(wrapper.props('modelValue')).toBe('multi\nline');

    await wrapper.setProps({ modelValue: 'again' });
    expect(textarea.element.value).toBe('again');
  });

  it('can be disabled and read-only', async () => {
    const wrapper = mount(PfTextarea, { props: { disabled: true } });
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.disabled);

    await wrapper.setProps({ disabled: false, readonlyVariant: 'default' });
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined();
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.readonly);
  });

  it('applies the resize orientation', () => {
    const wrapper = mount(PfTextarea, { props: { resizeOrientation: 'vertical' } });
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.resizeVertical);
    expect(wrapper.classes()).not.toContain(formControlStyles.modifiers.resizeBoth);
  });

  it('reflects the validated state with aria-invalid', () => {
    const wrapper = mount(PfTextarea, { props: { validated: 'error' } });
    expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('true');
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.error);
  });

  it('validates against the pattern', async () => {
    const wrapper = mount(PfTextarea, { props: { pattern: '[0-9]+', modelValue: 'abc' } });
    const vm = wrapper.vm as unknown as { checkValidity: () => boolean };
    expect(vm.checkValidity()).toBe(false);

    await wrapper.setProps({ modelValue: '123' });
    await nextTick();
    expect(vm.checkValidity()).toBe(true);
  });

  it('emits keyup', async () => {
    const wrapper = mount(PfTextarea);
    await wrapper.find('textarea').trigger('keyup', { key: 'Enter' });
    expect(wrapper.emitted('keyup')).toHaveLength(1);
  });
});
