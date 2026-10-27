import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Form/form';
import helperTextStyles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import cssMaxWidth from '@patternfly/react-tokens/dist/esm/c_form_m_limit_width_MaxWidth';
import PfForm from '../../src/components/Form/Form.vue';
import PfFormAlert from '../../src/components/Form/FormAlert.vue';
import PfFormGroup from '../../src/components/Form/FormGroup.vue';
import PfFormFieldGroup from '../../src/components/Form/FormFieldGroup.vue';
import PfFormFieldGroupHeader from '../../src/components/Form/FormFieldGroupHeader.vue';
import PfFormHelperText from '../../src/components/Form/FormHelperText.vue';
import PfFormSection from '../../src/components/Form/FormSection.vue';
import PfActionGroup from '../../src/components/Form/ActionGroup.vue';
import PfTextInput from '../../src/components/TextInput.vue';
import PfCheckbox from '../../src/components/Checkbox.vue';
import PfTextarea from '../../src/components/Textarea.vue';
import PfFormSelect from '../../src/components/FormSelect/FormSelect.vue';
import PfSwitch from '../../src/components/Switch.vue';
import PfRadio from '../../src/components/Radio.vue';
import PfFormGroupLabelHelp from '../../src/components/Form/FormGroupLabelHelp.vue';
import PfFormContextProvider from '../../src/components/Form/FormContextProvider.vue';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { createFormContext, useFormContext, type FormContext } from '../../src/use/form-context';

describe('Form', () => {
  it('renders a form element with the base class', () => {
    const wrapper = mount(PfForm, { slots: { default: () => h('input') } });

    expect(wrapper.element.tagName).toBe('FORM');
    expect(wrapper.classes()).toContain(styles.form);
    expect(wrapper.classes()).not.toContain(styles.modifiers.horizontal);
    expect(wrapper.classes()).not.toContain(styles.modifiers.limitWidth);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfForm, { props: { component: 'div' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.form);
  });

  it('applies the horizontal and limit width modifiers', () => {
    const wrapper = mount(PfForm, { props: { horizontal: true, widthLimited: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.horizontal);
    expect(wrapper.classes()).toContain(styles.modifiers.limitWidth);
  });

  it('sets a custom max width', () => {
    const wrapper = mount(PfForm, { props: { maxWidth: '500px' } });
    expect(wrapper.classes()).toContain(styles.modifiers.limitWidth);
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssMaxWidth.name)).toBe('500px');
  });

  it('tracks the form inputs it contains', async () => {
    const wrapper = mount(PfForm, {
      slots: {
        default: () => [h(PfTextInput, { 'aria-label': 'Name' }), h(PfCheckbox, { label: 'Accept' })],
      },
    });
    await nextTick();
    expect(wrapper.vm.elements).toHaveLength(2);
  });
});

describe('Form ouia', () => {
  it('defaults ouiaSafe to true on forms and form groups', () => {
    expect(mount(PfForm).attributes('data-ouia-safe')).toBe('true');
    expect(mount(PfFormGroup).attributes('data-ouia-safe')).toBe('true');
  });
});

describe('FormAlert', () => {
  it('renders the alert slot with the alert class', () => {
    const wrapper = mount(PfFormAlert, { slots: { default: () => h('p', 'Alert') } });
    expect(wrapper.classes()).toContain(`${styles.form}__alert`);
    expect(wrapper.find('p').text()).toBe('Alert');
  });

  it('renders a div so it can be nested in a form', () => {
    const wrapper = mount(PfFormAlert);
    expect(wrapper.element.tagName).toBe('DIV');
  });
});

describe('FormGroup', () => {
  it('applies the action modifier for action groups', () => {
    const wrapper = mount(PfFormGroup, {
      props: { actionGroup: true },
      slots: { default: () => h('button', 'Submit') },
    });

    expect(wrapper.classes()).toContain(styles.modifiers.action);
    expect(wrapper.find(`.${styles.formGroupControl} button`).text()).toBe('Submit');
    expect(mount(PfFormGroup).classes()).not.toContain(styles.modifiers.action);
  });

  it('renders the group with a label linked to the field', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name', fieldId: 'name' },
      slots: { default: () => h('input', { id: 'name' }) },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.formGroup);
    expect(wrapper.find(`.${styles.formGroupLabel}`).exists()).toBe(true);
    const label = wrapper.find(`label.${styles.formLabel}`);
    expect(label.attributes('for')).toBe('name');
    expect(label.find(`.${styles.formLabelText}`).text()).toBe('Name');
    expect(label.find(`.${styles.formLabelRequired}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formGroupControl} input#name`).exists()).toBe(true);
  });

  it('does not render the label container without a label', () => {
    const wrapper = mount(PfFormGroup, { slots: { default: () => h('input') } });
    expect(wrapper.find(`.${styles.formGroupLabel}`).exists()).toBe(false);
  });

  it('renders a fieldset', () => {
    const wrapper = mount(PfFormGroup, { props: { fieldset: true } });
    expect(wrapper.element.tagName).toBe('FIELDSET');
  });

  it('renders the label slot', () => {
    const wrapper = mount(PfFormGroup, { slots: { label: () => h('b', 'Custom'), default: () => h('input') } });
    expect(wrapper.find(`.${styles.formLabelText} b`).text()).toBe('Custom');
  });

  it('marks required groups with an aria-hidden asterisk', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name', required: true } });
    const required = wrapper.find(`.${styles.formLabelRequired}`);
    expect(required.exists()).toBe(true);
    expect(required.attributes('aria-hidden')).toBe('true');
    expect(required.text()).toBe('*');
  });

  it('renders label info and label help', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name', labelInfo: 'Additional info' },
      slots: { 'label-help': () => h('i', { class: 'my-icon' }) },
    });
    const labelContainer = wrapper.find(`.${styles.formGroupLabel}`);
    expect(labelContainer.classes()).toContain(styles.modifiers.info);
    expect(wrapper.find(`.${styles.formGroupLabelMain}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formGroupLabelMain} .${styles.formGroupLabelHelp} .my-icon`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formGroupLabelInfo}`).text()).toBe('Additional info');
  });

  it('renders the label-info slot', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name' }, slots: { 'label-info': () => 'Slot info' } });
    expect(wrapper.find(`.${styles.formGroupLabel}`).classes()).toContain(styles.modifiers.info);
    expect(wrapper.find(`.${styles.formGroupLabelInfo}`).text()).toBe('Slot info');
  });

  it('does not wrap the label without label info', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name' } });
    expect(wrapper.find(`.${styles.formGroupLabelMain}`).exists()).toBe(false);
  });

  it('applies the noPaddingTop, inline and stack modifiers', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name', noPaddingTop: true, inline: true, stack: true } });
    expect(wrapper.find(`.${styles.formGroupLabel}`).classes()).toContain(styles.modifiers.noPaddingTop);
    const control = wrapper.find(`.${styles.formGroupControl}`);
    expect(control.classes()).toContain(styles.modifiers.inline);
    expect(control.classes()).toContain(styles.modifiers.stack);
  });

  it('renders helper text with an id derived from the field id', () => {
    const wrapper = mount(PfFormGroup, {
      props: { fieldId: 'name', helperText: 'Enter your name', helperTextVariant: 'warning' },
      slots: { default: () => h('input', { id: 'name' }) },
    });
    const helper = wrapper.find(`.${styles.formHelperText}`);
    expect(helper.attributes('id')).toBe('name-helper');
    expect(helper.find(`.${helperTextStyles.helperText}`).exists()).toBe(true);
    const item = helper.find(`.${helperTextStyles.helperTextItem}`);
    expect(item.classes()).toContain(helperTextStyles.modifiers.warning);
    expect(item.text()).toBe('Enter your name: warning status;');
  });

  it('renders no helper text by default', () => {
    const wrapper = mount(PfFormGroup, { slots: { default: () => h('input') } });
    expect(wrapper.find(`.${styles.formHelperText}`).exists()).toBe(false);
  });

  it('renders helper text after the field unless helperTextBeforeField is set', () => {
    const after = mount(PfFormGroup, { props: { helperText: 'Help' }, slots: { default: () => h('input') } });
    let children = Array.from(after.find(`.${styles.formGroupControl}`).element.children);
    expect(children.map(c => c.tagName)).toEqual(['INPUT', 'DIV']);

    const before = mount(PfFormGroup, {
      props: { helperText: 'Help', helperTextBeforeField: true },
      slots: { default: () => h('input') },
    });
    children = Array.from(before.find(`.${styles.formGroupControl}`).element.children);
    expect(children.map(c => c.tagName)).toEqual(['DIV', 'INPUT']);
  });

  it('renders the helper-text slot', () => {
    const wrapper = mount(PfFormGroup, {
      slots: { 'helper-text': () => h('span', { class: 'custom-help' }, 'Custom') },
    });
    expect(wrapper.find(`.${styles.formHelperText} .custom-help`).text()).toBe('Custom');
  });

  it('shows the invalid helper text when validated is error', async () => {
    const wrapper = mount(PfFormGroup, { props: { helperText: 'Help', helperTextInvalid: 'Invalid!' } });
    expect(wrapper.find(`.${styles.formHelperText}`).text()).toBe('Help');

    await wrapper.setProps({ validated: 'error' });
    const item = wrapper.find(`.${helperTextStyles.helperTextItem}`);
    expect(item.text()).toBe('Invalid!: error status;');
    expect(item.classes()).toContain(helperTextStyles.modifiers.error);
  });

  it('shows the helper-text-invalid slot when validated is error', () => {
    const wrapper = mount(PfFormGroup, {
      props: { validated: 'error', helperText: 'Help' },
      slots: { 'helper-text-invalid': () => h('span', { class: 'invalid' }, 'Bad') },
    });
    expect(wrapper.find(`.${styles.formHelperText} .invalid`).text()).toBe('Bad');
    expect(wrapper.text()).not.toContain('Help');
  });

  it('derives its validation state from the tracked inputs', async () => {
    const wrapper = mount(PfFormGroup, {
      props: { helperText: 'Help', helperTextInvalid: 'Invalid!' },
      slots: { default: () => h(PfTextInput, { 'aria-label': 'Name', validated: 'error' }) },
    });
    await nextTick();
    expect(wrapper.find(`.${styles.formHelperText}`).text()).toBe('Invalid!: error status;');
  });

  it('lets the validated prop override the tracked inputs state', async () => {
    const wrapper = mount(PfFormGroup, {
      props: { helperText: 'Help', helperTextInvalid: 'Invalid!', validated: 'success' },
      slots: { default: () => h(PfTextInput, { 'aria-label': 'Name', validated: 'error' }) },
    });
    await nextTick();
    expect(wrapper.find(`.${styles.formHelperText}`).text()).toBe('Help');
  });
});

describe('FormGroup roles', () => {
  it('renders a label element linked to the field without a role', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name', fieldId: 'name' } });
    expect(wrapper.attributes('role')).toBeUndefined();
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined();
    const label = wrapper.get(`.${styles.formLabel}`);
    expect(label.element.tagName).toBe('LABEL');
    expect(label.attributes('for')).toBe('name');
  });

  it.each(['group', 'radiogroup'])('labels a %s with the label container instead of a label element', role => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Time zone', fieldId: 'tz', role } });
    expect(wrapper.attributes('role')).toBe(role);
    expect(wrapper.attributes('aria-labelledby')).toBe('tz-legend');
    expect(wrapper.get(`.${styles.formGroupLabel}`).attributes('id')).toBe('tz-legend');
    const label = wrapper.get(`.${styles.formLabel}`);
    expect(label.element.tagName).toBe('SPAN');
    expect(label.attributes('for')).toBeUndefined();
  });

  it('generates the legend id without a fieldId', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Options', role: 'group' } });
    const id = wrapper.get(`.${styles.formGroupLabel}`).attributes('id');
    expect(id).toMatch(/-legend$/);
    expect(wrapper.attributes('aria-labelledby')).toBe(id);
  });

  it('separates the required asterisk with a non-breaking space', () => {
    const wrapper = mount(PfFormGroup, { props: { label: 'Name', required: true } });
    expect(wrapper.get(`.${styles.formLabelRequired}`).element.textContent).toBe('\u00a0*');
  });
});

describe('FormGroup field linking', () => {
  const fields = { PfTextInput, PfTextarea, PfFormSelect, PfSwitch, PfRadio, PfCheckbox };

  for (const [name, field] of Object.entries(fields)) {
    it(`links the label to a ${name} with a generated id`, () => {
      const error = vi.spyOn(console, 'error').mockImplementation(() => {});
      const wrapper = mount(PfFormGroup, {
        props: { label: 'Field' },
        slots: { default: () => h(field) },
      });

      const id = wrapper.find('input, textarea, select').attributes('id');
      expect(id).toBeTruthy();
      expect(wrapper.find(`label.${styles.formLabel}`).attributes('for')).toBe(id);
      expect(error).not.toHaveBeenCalled();
      error.mockRestore();
    });

    it(`gives the fieldId to a ${name} without an id`, () => {
      const wrapper = mount(PfFormGroup, {
        props: { label: 'Field', fieldId: 'field' },
        slots: { default: () => h(field) },
      });

      expect(wrapper.find('input, textarea, select').attributes('id')).toBe('field');
      expect(wrapper.find(`label.${styles.formLabel}`).attributes('for')).toBe('field');
    });
  }

  it('links the label to the own id of the field', async () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name' },
      slots: { default: () => h(PfTextInput, { id: 'own' }) },
    });
    await nextTick();

    expect(wrapper.find('input').attributes('id')).toBe('own');
    expect(wrapper.find(`label.${styles.formLabel}`).attributes('for')).toBe('own');
  });

  it('links only the first field', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name', fieldId: 'first' },
      slots: { default: () => [h(PfTextInput), h(PfTextInput, { 'aria-label': 'Second' })] },
    });

    const inputs = wrapper.findAll('input');
    expect(inputs[0]!.attributes('id')).toBe('first');
    expect(inputs[1]!.attributes('id')).toBeUndefined();
  });

  it('links the next field when the first one is removed', async () => {
    const wrapper = mount(
      defineComponent({
        props: { first: Boolean },
        setup: props => () =>
          h(PfFormGroup, { label: 'Name', fieldId: 'name' }, () => [
            props.first ? h(PfTextInput, { id: 'first' }) : null,
          ]),
      }),
      { props: { first: true } },
    );
    await nextTick();
    expect(wrapper.find('label').attributes('for')).toBe('first');

    await wrapper.setProps({ first: false });
    expect(wrapper.find('label').attributes('for')).toBe('name');
  });

  it('links no field without a label', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const wrapper = mount(PfFormGroup, { props: { fieldId: 'name' }, slots: { default: () => h(PfTextInput) } });

    expect(wrapper.find('input').attributes('id')).toBeUndefined();
    expect(error).toHaveBeenCalledWith('Text input:', expect.stringContaining('requires either an id or aria-label'));
    error.mockRestore();
  });

  it('links the field with a label slot', () => {
    const wrapper = mount(PfFormGroup, {
      props: { fieldId: 'name' },
      slots: { label: () => 'Name', default: () => h(PfTextInput) },
    });

    expect(wrapper.find('input').attributes('id')).toBe('name');
    expect(wrapper.find(`label.${styles.formLabel}`).attributes('for')).toBe('name');
  });

  it('skips the fields with a label of their own', async () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Cancel', fieldId: 'cancel' },
      slots: {
        default: () => [
          h(PfRadio, { label: 'Yes', name: 'cancel' }),
          h(PfCheckbox, { id: 'confirm' }, { label: () => 'Confirm' }),
          h(PfSwitch, { label: 'Notify' }),
          h(PfCheckbox),
        ],
      },
    });
    await nextTick();

    const inputs = wrapper.findAll('input');
    expect(inputs.slice(0, 3).map(i => i.attributes('id'))).not.toContain('cancel');
    expect(inputs[3]!.attributes('id')).toBe('cancel');
    expect(wrapper.find(`label.${styles.formLabel}`).attributes('for')).toBe('cancel');
  });

  it('links the next field when the first one is unmounted', async () => {
    const wrapper = mount(
      defineComponent({
        props: { first: Boolean },
        setup: props => () =>
          h(PfFormGroup, { label: 'Name', fieldId: 'name' }, () => [
            props.first ? h(PfTextInput) : null,
            h(PfTextInput, { class: 'second' }),
          ]),
      }),
      { props: { first: true } },
    );
    expect(wrapper.find('input.second').attributes('id')).toBeUndefined();

    await wrapper.setProps({ first: false });
    expect(wrapper.find('input.second').attributes('id')).toBe('name');
    expect(wrapper.find('label').attributes('for')).toBe('name');
  });

  it('links no field in a group', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Options', fieldId: 'options', role: 'radiogroup' },
      slots: { default: () => [h(PfRadio, { label: 'A' }), h(PfRadio, { label: 'B' })] },
    });

    expect(wrapper.findAll('input').map(i => i.attributes('id'))).not.toContain('options');
  });

  it('derives the helper text id from the generated field id', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name', helperText: 'Help' },
      slots: { default: () => h(PfTextInput) },
    });

    const id = wrapper.find('input').attributes('id');
    expect(wrapper.find(`.${styles.formHelperText}`).attributes('id')).toBe(`${id}-helper`);
  });
});

describe('FormGroupLabelHelp', () => {
  it('renders a plain span button without padding and with the help icon', () => {
    const wrapper = mount(PfFormGroupLabelHelp, { attrs: { 'aria-label': 'More info' } });
    const button = wrapper.get('[role="button"]');
    expect(button.element.tagName).toBe('SPAN');
    expect(button.attributes('tabindex')).toBe('0');
    expect(button.attributes('aria-label')).toBe('More info');
    expect(button.classes()).toEqual(
      expect.arrayContaining([buttonStyles.modifiers.plain, buttonStyles.modifiers.noPadding]),
    );
    expect(button.find(`.${buttonStyles.buttonIcon} svg`).exists()).toBe(true);
  });

  it('clicks on Enter and Space', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfFormGroupLabelHelp, { attrs: { 'aria-label': 'More info', onClick } });
    const button = wrapper.get('[role="button"]');
    await button.trigger('keydown', { key: 'Enter' });
    await button.trigger('keydown', { key: ' ' });
    await button.trigger('keydown', { key: 'a' });
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});

describe('FormFieldGroup accessibility', () => {
  it('is a group labelled by the header title', async () => {
    const wrapper = mount(PfFormFieldGroup, {
      props: { expandable: true },
      slots: { header: () => h(PfFormFieldGroupHeader, { title: 'Field group', titleId: 'title-id' }) },
    });
    await nextTick();
    expect(wrapper.attributes('role')).toBe('group');
    expect(wrapper.attributes('aria-labelledby')).toBe('title-id');
    const button = wrapper.get('button');
    expect(button.attributes('aria-labelledby')).toBe(`title-id ${button.attributes('id')}`);
  });

  it('has no accessible name without a header title', () => {
    const wrapper = mount(PfFormFieldGroup);
    expect(wrapper.attributes('role')).toBe('group');
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined();
  });

  it('logs an error when expandable without toggleAriaLabel nor title', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfFormFieldGroup, {
      props: { expandable: true },
      slots: { header: () => h(PfFormFieldGroupHeader, { description: 'No title' }) },
    });
    expect(error).toHaveBeenCalled();
    error.mockClear();
    mount(PfFormFieldGroup, { props: { expandable: true, toggleAriaLabel: 'Details' } });
    mount(PfFormFieldGroup, {
      props: { expandable: true },
      slots: { header: () => h(PfFormFieldGroupHeader, { title: 'Title' }) },
    });
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });

  it('keeps the collapsed body rendered but inert with animations', async () => {
    const wrapper = mount(PfFormFieldGroup, {
      props: { expandable: true, animations: true, toggleAriaLabel: 'Details' },
      slots: { default: () => 'Child content' },
    });
    expect(wrapper.classes()).toContain(styles.modifiers.expandable);
    const body = wrapper.get(`.${styles.formFieldGroupBody}`);
    expect(body.text()).toBe('Child content');
    expect(body.attributes('inert')).toBeDefined();

    await wrapper.get('button').trigger('click');
    expect(wrapper.get(`.${styles.formFieldGroupBody}`).attributes('inert')).toBeUndefined();
  });

  it('does not apply the expandable modifier without animations', () => {
    const wrapper = mount(PfFormFieldGroup, { props: { expandable: true, toggleAriaLabel: 'Details' } });
    expect(wrapper.classes()).not.toContain(styles.modifiers.expandable);
  });
});

describe('FormFieldGroup', () => {
  it('renders a non expandable group with header and body', () => {
    const wrapper = mount(PfFormFieldGroup, {
      slots: {
        header: () => h(PfFormFieldGroupHeader, { title: 'Header' }),
        default: () => h('input'),
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.formFieldGroup);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(wrapper.find(`.${styles.formFieldGroupToggle}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupHeader}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formFieldGroupBody} input`).exists()).toBe(true);
  });

  it('renders a fieldset', () => {
    const wrapper = mount(PfFormFieldGroup, { props: { fieldset: true } });
    expect(wrapper.element.tagName).toBe('FIELDSET');
  });

  it('renders a collapsed toggle when expandable', () => {
    const wrapper = mount(PfFormFieldGroup, {
      props: { expandable: true, toggleAriaLabel: 'Details' },
      slots: { default: () => h('input') },
    });

    const button = wrapper.find(`.${styles.formFieldGroupToggleButton} button`);
    expect(button.exists()).toBe(true);
    expect(button.attributes('aria-label')).toBe('Details');
    expect(button.attributes('id')).toMatch(/^form-field-group-toggle-/);
    expect(button.attributes('aria-labelledby')).toBeUndefined();
    expect(button.find(`.${buttonStyles.buttonIcon} .${styles.formFieldGroupToggleIcon} svg`).exists()).toBe(true);
    expect(button.find(`.${buttonStyles.buttonText}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupBody}`).exists()).toBe(false);
  });

  it('sets aria-expanded=false on the collapsed toggle', () => {
    const wrapper = mount(PfFormFieldGroup, { props: { expandable: true } });
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false');
  });

  it('toggles the body when the toggle is clicked', async () => {
    const wrapper = mount(PfFormFieldGroup, { props: { expandable: true }, slots: { default: () => h('input') } });

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
    expect(wrapper.find(`.${styles.formFieldGroupBody} input`).exists()).toBe(true);

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:expanded')?.[1]).toEqual([false]);
    expect(wrapper.find(`.${styles.formFieldGroupBody}`).exists()).toBe(false);
  });

  it('is expandable and controlled when the expanded model is set', async () => {
    const wrapper = mount(PfFormFieldGroup, { props: { expanded: true }, slots: { default: () => h('input') } });
    expect(wrapper.find(`.${styles.formFieldGroupToggle}`).exists()).toBe(true);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);

    await wrapper.setProps({ expanded: false });
    expect(wrapper.find(`.${styles.formFieldGroupBody}`).exists()).toBe(false);
  });
});

describe('FormFieldGroupHeader', () => {
  it('renders title, description and actions', () => {
    const wrapper = mount(PfFormFieldGroupHeader, {
      props: { title: 'Title', description: 'Description' },
      slots: { actions: () => h('button', 'Action') },
    });

    expect(wrapper.classes()).toContain(styles.formFieldGroupHeader);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderMain}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderTitle} .${styles.formFieldGroupHeaderTitleText}`).text()).toBe(
      'Title',
    );
    expect(wrapper.find(`.${styles.formFieldGroupHeaderDescription}`).text()).toBe('Description');
    expect(wrapper.find(`.${styles.formFieldGroupHeaderActions} button`).text()).toBe('Action');
  });

  it('omits empty title and description but always renders the actions container', () => {
    const wrapper = mount(PfFormFieldGroupHeader);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderTitle}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderDescription}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderActions}`).exists()).toBe(true);
  });

  it('renders the title and description slots', () => {
    const wrapper = mount(PfFormFieldGroupHeader, {
      props: { titleId: 'title-id' },
      slots: { title: () => h('em', 'Rich title'), description: () => h('em', 'Rich description') },
    });
    const title = wrapper.get(`.${styles.formFieldGroupHeaderTitleText}`);
    expect(title.attributes('id')).toBe('title-id');
    expect(title.get('em').text()).toBe('Rich title');
    expect(wrapper.get(`.${styles.formFieldGroupHeaderDescription} em`).text()).toBe('Rich description');
  });
});

describe('FormHelperText', () => {
  it('renders a div with the helper text class', () => {
    const wrapper = mount(PfFormHelperText, { slots: { default: () => 'Help' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.formHelperText);
    expect(wrapper.text()).toBe('Help');
  });
});

describe('FormSection', () => {
  it('renders a section with a title', () => {
    const wrapper = mount(PfFormSection, { props: { title: 'Section' }, slots: { default: () => h('input') } });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.formSection);
    const title = wrapper.find(`.${styles.formSectionTitle}`);
    expect(title.element.tagName).toBe('DIV');
    expect(title.text()).toBe('Section');
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('uses a custom title element', () => {
    const wrapper = mount(PfFormSection, { props: { title: 'Section', titleElement: 'h3' } });
    expect(wrapper.find(`.${styles.formSectionTitle}`).element.tagName).toBe('H3');
  });

  it('omits the title when not set', () => {
    const wrapper = mount(PfFormSection);
    expect(wrapper.find(`.${styles.formSectionTitle}`).exists()).toBe(false);
    expect(wrapper.attributes('role')).toBe('group');
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined();
  });

  it('is a group labelled by its title', () => {
    const wrapper = mount(PfFormSection, { props: { title: 'Form title', titleElement: 'h4' } });
    const title = wrapper.get(`.${styles.formSectionTitle}`);
    expect(wrapper.attributes('role')).toBe('group');
    expect(title.attributes('id')).toBeTruthy();
    expect(wrapper.attributes('aria-labelledby')).toBe(title.attributes('id'));
  });

  it('renders the title slot', () => {
    const wrapper = mount(PfFormSection, { slots: { title: () => h('em', 'Rich') } });
    expect(wrapper.get(`.${styles.formSectionTitle} em`).text()).toBe('Rich');
  });
});

describe('ActionGroup', () => {
  it('wraps the actions in the form group structure', () => {
    const wrapper = mount(PfActionGroup, { slots: { default: () => h('button', 'Submit') } });
    expect(wrapper.classes()).toContain(styles.formGroup);
    expect(wrapper.classes()).toContain(styles.modifiers.action);
    expect(wrapper.find(`.${styles.formGroupControl} .${styles.formActions} button`).text()).toBe('Submit');
  });
});

describe('FormContextProvider', () => {
  function mountProvider(initialValues: Record<string, string> | undefined, render: (ctx: FormContext) => unknown) {
    return mount(PfFormContextProvider, {
      props: { initialValues },
      slots: { default: (ctx: FormContext) => render(ctx) },
    });
  }

  it('exposes the initial values to the slot', () => {
    const wrapper = mountProvider({ one: 'some value', two: 'some other value' }, ({ values }) =>
      Object.values(values).map(v => h('span', v)),
    );
    expect(wrapper.findAll('span').map(s => s.text())).toEqual(['some value', 'some other value']);
  });

  it('updates values, errors and validity', async () => {
    let ctx!: FormContext;
    const wrapper = mountProvider({ someId: 'some value' }, c => {
      ctx = c;
      return h('span', `${c.getValue('someId')}|${c.getError('someId')}|${c.isValid}`);
    });
    expect(wrapper.text()).toBe('some value||true');

    ctx.setValue('someId', '');
    ctx.setError('someId', 'Some error!');
    await nextTick();
    expect(wrapper.text()).toBe('|Some error!|false');

    ctx.setError('someId', undefined);
    await nextTick();
    expect(wrapper.text()).toBe('||true');
  });

  it('sets multiple values and errors at once', () => {
    const ctx = createFormContext({ someId: 'some value' });
    ctx.setValues({ someId: 'updated value', someNewId: 'new value' });
    ctx.setErrors(errors => ({ ...errors, someId: 'some error!' }));
    expect(ctx.values).toEqual({ someId: 'updated value', someNewId: 'new value' });
    expect(ctx.errors).toEqual({ someId: 'some error!' });
  });

  it('tracks touched fields', () => {
    const ctx = createFormContext();
    ctx.setTouched('someId', true);
    expect(ctx.isTouched('someId')).toBe(true);
    expect(ctx.touched).toEqual({ someId: true });
    ctx.setTouched('someId', false);
    expect(ctx.isTouched('someId')).toBe(false);
    expect(ctx.touched).toEqual({});
  });

  it('validates the fields with validators', () => {
    const ctx = createFormContext();
    ctx.setValidator('someId', value => (!value ? 'some error!' : null));
    expect(ctx.validate()).toEqual({ someId: 'some error!' });
    ctx.setValue('someId', 'filled');
    expect(ctx.validate()).toEqual({});
  });

  it('provides the context to useFormContext', () => {
    let injected: FormContext | undefined;
    const Child = defineComponent({
      setup() {
        injected = useFormContext();
        return () => null;
      },
    });
    mount(PfFormContextProvider, { props: { initialValues: { a: 'b' } }, slots: { default: () => h(Child) } });
    expect(injected?.getValue('a')).toBe('b');
  });
});
