import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import PfTextInputGroup from '../../src/components/TextInputGroup/TextInputGroup.vue';
import PfTextInputGroupMain from '../../src/components/TextInputGroup/TextInputGroupMain.vue';
import PfTextInputGroupUtilities from '../../src/components/TextInputGroup/TextInputGroupUtilities.vue';
import PfForm from '../../src/components/Form/Form.vue';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';

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

describe('TextInputGroup', () => {
  it('renders main and utilities', () => {
    const wrapper = mount(PfTextInputGroup, {
      slots: {
        default: () => [
          h(PfTextInputGroupMain, { 'aria-label': 'Search' }),
          h(PfTextInputGroupUtilities, () => h('button', 'Clear')),
        ],
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.textInputGroup]);
    expect(wrapper.find(`.${styles.textInputGroupMain} input`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.textInputGroupUtilities} button`).text()).toBe('Clear');
  });

  it('applies the plain modifier', () => {
    const wrapper = mount(PfTextInputGroup, { props: { plain: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.plain);
  });

  it.each(['success', 'warning', 'error'] as const)('applies the %s status modifier', validated => {
    const wrapper = mount(PfTextInputGroup, { props: { validated } });
    expect(wrapper.classes()).toContain(styles.modifiers[validated]);
  });

  it('applies no status modifier when validated is default', () => {
    const wrapper = mount(PfTextInputGroup, { props: { validated: 'default' } });
    expect(wrapper.classes()).toEqual([styles.textInputGroup]);
  });

  it.each([
    ['success', CircleCheckIcon],
    ['warning', TriangleExclamationIcon],
    ['error', CircleExclamationIcon],
  ] as const)('renders the %s status icon after the input', (validated, icon) => {
    const wrapper = mount(PfTextInputGroup, {
      props: { validated },
      slots: { default: () => h(PfTextInputGroupMain) },
    });
    const status = wrapper.find('input').element.nextElementSibling;
    expect(status?.tagName).toBe('SPAN');
    expect([...status!.classList]).toEqual([styles.textInputGroupIcon, styles.modifiers.status]);
    expect(wrapper.findComponent(icon).exists()).toBe(true);
    expect(wrapper.findComponent(PfTextInputGroupMain).classes()).toEqual([styles.textInputGroupMain]);
  });

  it('renders no status icon when validated is default', () => {
    const wrapper = mount(PfTextInputGroup, {
      props: { validated: 'default' },
      slots: { default: () => h(PfTextInputGroupMain) },
    });
    expect(wrapper.find('input').element.nextElementSibling).toBeNull();
  });

  it('disables the inner input when disabled', () => {
    const wrapper = mount(PfTextInputGroup, {
      props: { disabled: true },
      slots: { default: () => h(PfTextInputGroupMain) },
    });
    expect(wrapper.classes()).toContain(styles.modifiers.disabled);
    expect(wrapper.find(`input.${styles.textInputGroupTextInput}`).attributes('disabled')).toBeDefined();
  });

  it('updates the inner input when disabled changes', async () => {
    const wrapper = mount(PfTextInputGroup, { slots: { default: () => h(PfTextInputGroupMain) } });
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined();

    await wrapper.setProps({ disabled: true });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});

describe('TextInputGroupMain', () => {
  it('renders a text input', () => {
    const wrapper = mount(PfTextInputGroupMain);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.textInputGroupMain]);
    const input = wrapper.find(`.${styles.textInputGroupText} input`);
    expect(input.classes()).toContain(styles.textInputGroupTextInput);
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('disabled')).toBeUndefined();
    expect(wrapper.find(`.${styles.textInputGroupIcon}`).exists()).toBe(false);
  });

  it('forwards attributes to the input', () => {
    const wrapper = mount(PfTextInputGroupMain, {
      props: { type: 'search' },
      attrs: { 'aria-label': 'Search', placeholder: 'Find', id: 'q', name: 'query', autofocus: 'true' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('search');
    expect(input.attributes('aria-label')).toBe('Search');
    expect(input.attributes('placeholder')).toBe('Find');
    expect(input.attributes('id')).toBe('q');
    expect(input.attributes('name')).toBe('query');
    expect(input.attributes('autofocus')).toBeDefined();
    expect(wrapper.attributes('aria-label')).toBeUndefined();
    expect(wrapper.attributes('id')).toBeUndefined();
  });

  it('defaults the input aria-label to "Type to filter"', () => {
    const wrapper = mount(PfTextInputGroupMain);
    expect(wrapper.find('input').attributes('aria-label')).toBe('Type to filter');
  });

  it('applies class to the root and inputClass to the input', () => {
    const wrapper = mount(PfTextInputGroupMain, {
      props: { inputClass: 'input-extra' },
      attrs: { class: 'custom-class' },
    });
    expect(wrapper.classes()).toEqual([styles.textInputGroupMain, 'custom-class']);
    expect(wrapper.find('input').classes()).toEqual([styles.textInputGroupTextInput, 'input-extra']);
  });

  it('renders the icon slot', () => {
    const wrapper = mount(PfTextInputGroupMain, { slots: { icon: () => h('i', { class: 'my-icon' }) } });
    expect(wrapper.classes()).toContain(styles.modifiers.icon);
    expect(wrapper.find(`.${styles.textInputGroupIcon} .my-icon`).exists()).toBe(true);
  });

  it('renders the default slot before the input', () => {
    const wrapper = mount(PfTextInputGroupMain, { slots: { default: () => h('span', { class: 'chips' }) } });
    expect(wrapper.element.firstElementChild?.classList.contains('chips')).toBe(true);
  });

  it('renders a hidden, disabled hint input', () => {
    const wrapper = mount(PfTextInputGroupMain, { props: { hint: 'apple' } });
    const inputs = wrapper.findAll('input');
    expect(inputs).toHaveLength(2);
    const hint = inputs[0];
    expect(hint.classes()).toContain(styles.textInputGroupTextInput);
    expect(hint.classes()).toContain(styles.modifiers.hint);
    expect(hint.attributes('disabled')).toBeDefined();
    expect(hint.attributes('aria-hidden')).toBe('true');
    expect((hint.element as HTMLInputElement).value).toBe('apple');
  });

  it('supports v-model', async () => {
    const wrapper = mountWithModel(PfTextInputGroupMain, 'modelValue', { modelValue: 'foo' });
    const input = wrapper.find<HTMLInputElement>('input');
    expect(input.element.value).toBe('foo');

    await input.setValue('bar');
    expect(wrapper.emitted('update:modelValue')?.slice(-1)[0]).toEqual(['bar']);
    expect(wrapper.props('modelValue')).toBe('bar');

    await wrapper.setProps({ modelValue: 'baz' });
    expect(input.element.value).toBe('baz');
  });

  it('emits number values for number inputs', async () => {
    const wrapper = mount(PfTextInputGroupMain, { props: { type: 'number' } });
    await wrapper.find('input').setValue('42');
    expect(wrapper.emitted('update:modelValue')?.slice(-1)[0]).toEqual([42]);
  });

  it('updates the model on change with the lazy modifier', async () => {
    const wrapper = mount(PfTextInputGroupMain, { props: { modelModifiers: { lazy: true } } });
    const input = wrapper.find('input');
    input.element.value = 'foo';
    await input.trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();

    await input.trigger('change');
    expect(wrapper.emitted('update:modelValue')?.slice(-1)[0]).toEqual(['foo']);
  });

  it('emits focus, blur, change and input events', async () => {
    const wrapper = mount(PfTextInputGroupMain);
    const input = wrapper.find('input');
    await input.trigger('focus');
    await input.trigger('input');
    await input.trigger('change');
    await input.trigger('blur');

    for (const event of ['focus', 'input', 'change', 'blur']) {
      expect(wrapper.emitted(event), event).toHaveLength(1);
    }
  });

  it('has no validation props and sets no aria-invalid', () => {
    const wrapper = mount(PfTextInputGroup, {
      props: { validated: 'error' },
      slots: { default: () => h(PfTextInputGroupMain) },
    });
    const main = wrapper.findComponent(PfTextInputGroupMain);
    expect(main.props()).not.toHaveProperty('validated');
    expect(main.props()).not.toHaveProperty('autoValidate');
    expect(wrapper.find('input').attributes('aria-invalid')).toBeUndefined();
  });

  it('exposes the input and a focus method', () => {
    const wrapper = mount(PfTextInputGroupMain, { attachTo: document.body });
    expect(wrapper.vm.input).toBe(wrapper.find('input').element);
    wrapper.vm.focus();
    expect(document.activeElement).toBe(wrapper.find('input').element);
    wrapper.unmount();
  });

  it('registers itself in the parent form', async () => {
    const form = mount(PfForm, { slots: { default: () => h(PfTextInputGroupMain) } });
    await nextTick();
    expect(form.vm.elements).toHaveLength(1);
  });
});

describe('TextInputGroupUtilities', () => {
  it('renders a div with the utilities class', () => {
    const wrapper = mount(PfTextInputGroupUtilities, { slots: { default: () => h('button', 'Clear') } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.textInputGroupUtilities);
    expect(wrapper.find('button').text()).toBe('Clear');
  });
});
