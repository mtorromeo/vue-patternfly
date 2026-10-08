import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
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
        default: () => [
          h(PfTextInput, { 'aria-label': 'Name' }),
          h(PfCheckbox, { label: 'Accept' }),
        ],
      },
    });
    await nextTick();
    expect(wrapper.vm.elements).toHaveLength(2);
  });
});

describe('FormAlert', () => {
  it('renders the alert slot with the alert class', () => {
    const wrapper = mount(PfFormAlert, { slots: { default: () => h('p', 'Alert') } });
    expect(wrapper.classes()).toContain(`${styles.form}__alert`);
    expect(wrapper.find('p').text()).toBe('Alert');
  });

  // BUG: FormAlert renders a <form> element, which ends up nested inside the parent PfForm (invalid HTML).
  // PatternFly renders a <div>.
  it.fails('renders a div so it can be nested in a form', () => {
    const wrapper = mount(PfFormAlert);
    expect(wrapper.element.tagName).toBe('DIV');
  });
});

describe('FormGroup', () => {
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

  it('renders label info and label icon', () => {
    const wrapper = mount(PfFormGroup, {
      props: { label: 'Name', labelInfo: 'Additional info' },
      slots: { 'label-icon': () => h('i', { class: 'my-icon' }) },
    });
    const labelContainer = wrapper.find(`.${styles.formGroupLabel}`);
    expect(labelContainer.classes()).toContain(styles.modifiers.info);
    expect(wrapper.find(`.${styles.formGroupLabelMain}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formGroupLabelMain} .my-icon`).exists()).toBe(true);
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
    expect(item.text()).toBe('Enter your name');
  });

  it('renders no helper text by default', () => {
    const wrapper = mount(PfFormGroup, { slots: { default: () => h('input') } });
    expect(wrapper.find(`.${styles.formHelperText}`).exists()).toBe(false);
  });

  it('renders helper text after the field unless helperTextBeforeField is set', () => {
    const after = mount(PfFormGroup, { props: { helperText: 'Help' }, slots: { default: () => h('input') } });
    let children = Array.from(after.find(`.${styles.formGroupControl}`).element.children);
    expect(children.map(c => c.tagName)).toEqual(['INPUT', 'DIV']);

    const before = mount(PfFormGroup, { props: { helperText: 'Help', helperTextBeforeField: true }, slots: { default: () => h('input') } });
    children = Array.from(before.find(`.${styles.formGroupControl}`).element.children);
    expect(children.map(c => c.tagName)).toEqual(['DIV', 'INPUT']);
  });

  it('renders the helper-text slot', () => {
    const wrapper = mount(PfFormGroup, { slots: { 'helper-text': () => h('span', { class: 'custom-help' }, 'Custom') } });
    expect(wrapper.find(`.${styles.formHelperText} .custom-help`).text()).toBe('Custom');
  });

  it('shows the invalid helper text when validated is error', async () => {
    const wrapper = mount(PfFormGroup, { props: { helperText: 'Help', helperTextInvalid: 'Invalid!' } });
    expect(wrapper.find(`.${styles.formHelperText}`).text()).toBe('Help');

    await wrapper.setProps({ validated: 'error' });
    const item = wrapper.find(`.${helperTextStyles.helperTextItem}`);
    expect(item.text()).toBe('Invalid!');
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
    expect(wrapper.find(`.${styles.formHelperText}`).text()).toBe('Invalid!');
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
    expect(button.attributes('aria-labelledby')).toBe(button.attributes('id'));
    expect(button.find(`.${styles.formFieldGroupToggleIcon} svg`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formFieldGroupBody}`).exists()).toBe(false);
  });

  // BUG: when expandable and uncontrolled, `expanded` is undefined so the toggle has no aria-expanded attribute
  // until it is clicked once (src/components/Form/FormFieldGroup.vue:13).
  it.fails('sets aria-expanded=false on the collapsed toggle', () => {
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
      slots: { default: () => h('button', 'Action') },
    });

    expect(wrapper.classes()).toContain(styles.formFieldGroupHeader);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderMain}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderTitle} .${styles.formFieldGroupHeaderTitleText}`).text()).toBe('Title');
    expect(wrapper.find(`.${styles.formFieldGroupHeaderDescription}`).text()).toBe('Description');
    expect(wrapper.find(`.${styles.formFieldGroupHeaderActions} button`).text()).toBe('Action');
  });

  it('omits empty sections', () => {
    const wrapper = mount(PfFormFieldGroupHeader);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderTitle}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderDescription}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.formFieldGroupHeaderActions}`).exists()).toBe(false);
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
