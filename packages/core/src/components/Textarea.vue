<template>
  <span
    v-bind="(ouiaProps as any)"
    :class="[
      styles.formControl, {
        [styles.modifiers.readonly]: !!readonlyVariant,
        [styles.modifiers.plain]: readonlyVariant === 'plain',
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.resizeVertical]: resizeOrientation === 'vertical',
        [styles.modifiers.resizeHorizontal]: resizeOrientation === 'horizontal',
        [styles.modifiers.resizeBoth]: resizeOrientation === 'both',
        [styles.modifiers.success]: effectiveValidated === 'success',
        [styles.modifiers.warning]: effectiveValidated === 'warning',
        [styles.modifiers.error]: effectiveValidated === 'error',
      },
    ]"
  >
    <textarea
      ref="input"
      :value="value"
      v-bind="$attrs"
      :disabled="disabled || undefined"
      :readonly="!!readonlyVariant || readonly"
      :aria-invalid="effectiveValidated === 'error'"
      @change="handleChange"
      @input="onInput($event as InputEvent)"
      @blur="onBlur"
      @invalid="onInvalid"
      @keyUp="onKeyUp"
    />
    <span v-if="hasStatusIcon" :class="styles.formControlUtilities">
      <pf-form-control-icon :status="(effectiveValidated as 'success' | 'error' | 'warning')" />
    </span>
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';

import { computed, ref, onMounted, type TextareaHTMLAttributes, type Ref } from 'vue';
import { useInputValidation } from '../input';
import { useChildrenTracker } from '../use';
import { FormGroupInputsKey } from './Form/common';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import PfFormControlIcon from './FormControlIcon.vue';

defineOptions({
  name: 'PfTextarea',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<TextareaHTMLAttributes, 'value' | 'aria-invalid'> {
  /** Flag to show if the text area is disabled. */
  disabled?: boolean;

  readonly?: boolean;
  /** Read only variant. */
  readonlyVariant?: 'default' | 'plain';

  /** Flag to modify height based on contents. */
  autoResize?: boolean;

  /**
   * Sets the orientation to limit the resize to
   * @values horizontal, vertical, both
   */
  resizeOrientation?: 'horizontal' | 'vertical' | 'both';

  /** Specifies a regular expression that the value should match */
  pattern?: string | RegExp;

  /** Value of the text area. */
  modelValue?: string | number;

  /** Value to indicate if the text area is modified to show that validation state.
   * If set to success, text area will be modified to indicate valid state.
   * If set to error, text area will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';

  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
}

const props = withDefaults(defineProps<Props>(), {
  resizeOrientation: 'both',
  autoValidate: 'change',
  modelValue: undefined,
});

defineEmits<{
  /** A callback for when the textarea value changes. */
  (name: 'change', event: Event): void;
  /** Callback function when textarea is blurred (focus leaves) */
  (name: 'blur', event: FocusEvent): void;
  (name: 'input', event: Event): void;
  (name: 'invalid', event: Event): void;
  (name: 'keyup', event: KeyboardEvent): void;
  (name: 'update:modelValue'): void;
  (name: 'update:validated'): void;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const input: Ref<HTMLInputElement | undefined> = ref();
const hasStatusIcon = computed(() => ['success', 'error', 'warning'].includes(effectiveValidated.value));

const {
  value,
  effectiveValidated,
  onBlur,
  onChange,
  onInput,
  onInvalid,
  onKeyUp,
  ...inputValidationData
} = useInputValidation({
  inputElement: input,
  ...props,
  customCheckValidity: checkValidity,
});

useChildrenTracker(FormGroupInputsKey, effectiveValidated);

const regexPattern = computed(() => {
  if (props.pattern instanceof RegExp) {
    return props.pattern;
  }
  return new RegExp(`^(?:${props.pattern})$`, 'us');
});

function checkValidity() {
  if (!input.value) {
    return false;
  }

  inputValidationData.setCustomValidity('');

  if (props.pattern && value.value) {
    const error = !regexPattern.value.test(value.value);
    if (error) {
      let error = 'Please match the format requested.';
      if (input.value.title) {
        error += `\n${input.value.title}`;
      }
      inputValidationData.setCustomValidity(error);
      return false;
    }
  }

  if (!input.value.checkValidity()) {
    return false;
  }

  inputValidationData.innerValidated.value = 'success';
  return true;
}

function handleChange(event: Event) {
  if (props.autoResize) {
    setAutoHeight();
  }
  onChange(event);
}

function setAutoHeight() {
  if (!input.value) {
    return false;
  }

  const parent = input.value.parentElement;
  if (!parent) {
    return;
  }

  parent.style.setProperty('height', 'inherit');
  const computed = window.getComputedStyle(input.value);
  // Calculate the height
  const height =
    parseInt(computed.getPropertyValue('border-top-width')) +
    parseInt(computed.getPropertyValue('padding-top')) +
    input.value.scrollHeight +
    parseInt(computed.getPropertyValue('padding-bottom')) +
    parseInt(computed.getPropertyValue('border-bottom-width'));
  parent.style.setProperty('height', `${height}px`);
}

onMounted(() => {
  if (props.autoResize) {
    setAutoHeight();
  }
});

function focus() {
  input.value?.focus();
}

defineExpose({
  ...inputValidationData,
  input,
  focus,
  value,
  checkValidity,
});
</script>
