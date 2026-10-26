import { describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import PfFormSelect from '../../src/components/FormSelect/FormSelect.vue';
import PfFormSelectOption from '../../src/components/FormSelect/FormSelectOption.vue';
import PfFormSelectOptionGroup from '../../src/components/FormSelect/FormSelectOptionGroup.vue';
import PfForm from '../../src/components/Form/Form.vue';

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

const options = () => [
  h(PfFormSelectOption, { value: '', placeholder: true }, () => 'Choose'),
  h(PfFormSelectOption, { value: 'a' }, () => 'A'),
  h(PfFormSelectOption, { value: 'b' }, () => 'B'),
];

describe('FormSelect', () => {
  it('renders a select wrapped in a form control', () => {
    const wrapper = mount(PfFormSelect, { slots: { default: options } });

    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(styles.formControl);
    const select = wrapper.find('select');
    expect(select.exists()).toBe(true);
    expect(select.attributes('multiple')).toBeUndefined();
    expect(select.attributes('disabled')).toBeUndefined();
    expect(select.findAll('option')).toHaveLength(3);
    expect(wrapper.find(`.${styles.formControlUtilities} .${styles.formControlToggleIcon} svg`).exists()).toBe(true);
  });

  it('forwards attributes to the select element', () => {
    const wrapper = mount(PfFormSelect, { attrs: { 'aria-label': 'Choice', name: 'choice', id: 'choice' } });
    const select = wrapper.find('select');
    expect(select.attributes('aria-label')).toBe('Choice');
    expect(select.attributes('name')).toBe('choice');
    expect(select.attributes('id')).toBe('choice');
    expect(wrapper.attributes('aria-label')).toBeUndefined();
  });

  it('applies the disabled modifier and disables the select', () => {
    const wrapper = mount(PfFormSelect, { props: { disabled: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.disabled);
    expect(wrapper.find('select').attributes('disabled')).toBeDefined();
  });

  it.each(['success', 'warning', 'error'] as const)(
    'applies the %s validation modifier with a status icon',
    validated => {
      const wrapper = mount(PfFormSelect, { props: { validated } });
      expect(wrapper.classes()).toContain(styles.modifiers[validated]);
      expect(wrapper.find(`.${styles.formControlIcon}.${styles.modifiers.status} svg`).exists()).toBe(true);
    },
  );

  it('renders no status icon in the default validation state', () => {
    const wrapper = mount(PfFormSelect, { props: { validated: 'default' } });
    expect(wrapper.find(`.${styles.formControlIcon}`).exists()).toBe(false);
  });

  it('renders a multiple select without toggle icon', () => {
    const wrapper = mount(PfFormSelect, { props: { multiple: true }, slots: { default: options } });
    expect(wrapper.find('select').attributes('multiple')).toBeDefined();
    expect(wrapper.find(`.${styles.formControlToggleIcon}`).exists()).toBe(false);
    expect((wrapper.element as HTMLElement).style.getPropertyValue('--pf-v6-c-form-control--ColumnGap')).toBe('0px');
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfFormSelect, 'modelValue', { modelValue: 'a' }, { slots: { default: options } });
    const select = wrapper.find<HTMLSelectElement>('select');
    await nextTick();
    expect(select.element.value).toBe('a');

    await select.setValue('b');
    expect(wrapper.emitted('update:modelValue')?.slice(-1)[0]).toEqual(['b']);
    expect(wrapper.props('modelValue')).toBe('b');

    await wrapper.setProps({ modelValue: 'a' });
    expect(select.element.value).toBe('a');
  });

  it('applies the placeholder modifier when the placeholder option is selected', async () => {
    const wrapper = mountWithModel(PfFormSelect, 'modelValue', { modelValue: '' }, { slots: { default: options } });
    await nextTick();
    expect(wrapper.classes()).toContain(styles.modifiers.placeholder);

    await wrapper.find('select').setValue('a');
    expect(wrapper.classes()).not.toContain(styles.modifiers.placeholder);
  });

  it('puts the OUIA attributes on the select, safe by default', () => {
    const wrapper = mount(PfFormSelect, { props: { ouiaId: 'BasicFormSelect' }, attrs: { 'aria-label': 'Choice' } });
    const select = wrapper.get('select');
    expect(select.attributes('data-ouia-component-id')).toBe('BasicFormSelect');
    expect(select.attributes('data-ouia-component-type')).toBe('PF/FormSelect');
    expect(select.attributes('data-ouia-safe')).toBe('true');
    expect(wrapper.attributes('data-ouia-component-id')).toBeUndefined();
  });

  it('puts class and style on the form control, not on the select', () => {
    const wrapper = mount(PfFormSelect, { attrs: { class: 'custom', style: 'color: red', 'aria-label': 'Choice' } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([styles.formControl, 'custom']));
    expect((wrapper.element as HTMLElement).style.color).toBe('red');
    const select = wrapper.get('select');
    expect(select.classes()).not.toContain('custom');
    expect(select.attributes('style')).toBeUndefined();
  });

  it('sets aria-invalid on the select', async () => {
    const wrapper = mount(PfFormSelect, { attrs: { 'aria-label': 'Choice' } });
    expect(wrapper.get('select').attributes('aria-invalid')).toBe('false');
    await wrapper.setProps({ validated: 'error' });
    expect(wrapper.get('select').attributes('aria-invalid')).toBe('true');
  });

  it('logs an error without an id or aria-label', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfFormSelect, { attrs: { 'aria-label': 'label' } });
    mount(PfFormSelect, { attrs: { id: 'id' } });
    expect(error).not.toHaveBeenCalled();
    mount(PfFormSelect);
    expect(error).toHaveBeenCalledWith('FormSelect requires either an id or aria-label to be specified');
    error.mockRestore();
  });

  it('sets the required attribute on the select', () => {
    const wrapper = mount(PfFormSelect, { attrs: { required: true, 'aria-label': 'Choice' } });
    expect(wrapper.get('select').attributes('required')).toBeDefined();
  });

  it('renders grouped options and applies the placeholder of a nested option', async () => {
    const wrapper = mountWithModel(
      PfFormSelect,
      'modelValue',
      { modelValue: '2' },
      {
        attrs: { 'aria-label': 'grouped FormSelect' },
        slots: {
          default: () => [
            h(PfFormSelectOptionGroup, { label: 'Group1' }, () => [
              h(PfFormSelectOption, { value: '1', label: 'The first option' }),
              h(PfFormSelectOption, { value: '2', label: 'Second option', placeholder: true }),
            ]),
            h(PfFormSelectOptionGroup, { label: 'Group3', disabled: true }, () => [
              h(PfFormSelectOption, { value: '5', label: 'The fifth option' }),
            ]),
          ],
        },
      },
    );
    await nextTick();
    const groups = wrapper.findAll('optgroup');
    expect(groups.map(g => g.attributes('label'))).toEqual(['Group1', 'Group3']);
    expect(groups[0].attributes('disabled')).toBeUndefined();
    expect(groups[1].attributes('disabled')).toBeDefined();
    expect(wrapper.get<HTMLSelectElement>('select').element.value).toBe('2');
    expect(wrapper.classes()).toContain(styles.modifiers.placeholder);
  });

  it('exposes the select element', () => {
    const wrapper = mount(PfFormSelect);
    expect(wrapper.vm.input).toBe(wrapper.find('select').element);
  });

  it('registers itself in the parent form', async () => {
    const form = mount(PfForm, { slots: { default: () => h(PfFormSelect) } });
    await nextTick();
    expect(form.vm.elements).toHaveLength(1);
  });
});

describe('FormSelectOption', () => {
  it('renders an option with its attributes', () => {
    const wrapper = mount(PfFormSelectOption, { attrs: { value: 'a', disabled: true }, slots: { default: () => 'A' } });
    expect(wrapper.element.tagName).toBe('OPTION');
    expect(wrapper.attributes('value')).toBe('a');
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.text()).toBe('A');
  });

  it('does not render the placeholder prop as an attribute', () => {
    const wrapper = mount(PfFormSelectOption, { props: { placeholder: true } });
    expect(wrapper.attributes('placeholder')).toBeUndefined();
  });
});

describe('FormSelectOption label', () => {
  it('renders the label as the option text', () => {
    const wrapper = mount(PfFormSelectOption, { props: { label: 'Mr' }, attrs: { value: 'mr' } });
    expect(wrapper.text()).toBe('Mr');
    expect(wrapper.attributes('label')).toBeUndefined();
  });

  it('lets the default slot override the label', () => {
    const wrapper = mount(PfFormSelectOption, { props: { label: 'Mr' }, slots: { default: () => 'Mister' } });
    expect(wrapper.text()).toBe('Mister');
  });

  it('does not render OUIA attributes', () => {
    const wrapper = mount(PfFormSelectOption, { props: { label: 'Mr' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBeUndefined();
  });
});

describe('FormSelectOptionGroup', () => {
  it('renders an optgroup with its label and attributes', () => {
    const wrapper = mount(PfFormSelectOptionGroup, {
      props: { label: 'string' },
      attrs: { class: 'custom' },
      slots: { default: () => h('option', 'A') },
    });
    expect(wrapper.element.tagName).toBe('OPTGROUP');
    expect(wrapper.attributes('label')).toBe('string');
    expect(wrapper.attributes('disabled')).toBeUndefined();
    expect(wrapper.classes()).toEqual(['custom']);
    expect(wrapper.find('option').text()).toBe('A');
  });
});
