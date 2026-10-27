<template>
  <span
    v-bind="ouiaProps"
    :class="[
      styles.formControl,
      styles.modifiers.textarea,
      {
        [styles.modifiers.readonly]: !!readOnlyVariant,
        [styles.modifiers.plain]: readOnlyVariant === 'plain',
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.resizeVertical]: resizeOrientation === 'vertical',
        [styles.modifiers.resizeHorizontal]: resizeOrientation === 'horizontal',
        [styles.modifiers.resizeBoth]: resizeOrientation === 'both',
        [styles.modifiers.success]: effectiveValidated === 'success',
        [styles.modifiers.warning]: effectiveValidated === 'warning',
        [styles.modifiers.error]: effectiveValidated === 'error',
      },
    ]"
    :style="{
      maxHeight,
      maxWidth,
    }"
  >
    <textarea
      ref="inputRef"
      :value="value"
      v-bind="$attrs"
      :id="fieldId"
      :disabled="disabled || undefined"
      :readonly="!!readOnlyVariant || readonly"
      :aria-invalid="effectiveValidated === 'error'"
      @change="handleChange"
      @input="handleInput($event as InputEvent)"
      @blur="onBlur"
      @invalid="onInvalid"
      @keyup="onKeyUp"
    />
    <span v-if="hasStatusIcon" :class="styles.formControlUtilities">
      <pf-form-control-icon :status="effectiveValidated as 'success' | 'error' | 'warning'" />
    </span>
  </span>
</template>

<script lang="ts">
interface Props<N extends boolean = false>
  extends OUIAProps, /* @vue-ignore */ Omit<TextareaHTMLAttributes, 'value' | 'aria-invalid'> {
  /** Flag to show if the text area is disabled. */
  disabled?: boolean;

  /** Flag to make the text area read only, without the read only styling */
  readonly?: boolean;
  /** Sets the text area as read only and determines the read only styling. */
  readOnlyVariant?: 'default' | 'plain';

  /** Flag to modify height based on contents. */
  autoResize?: boolean;

  /** Sets the orientation to limit the resize to */
  resizeOrientation?: 'horizontal' | 'vertical' | 'both' | 'none';

  /** Specifies a regular expression that the value should match */
  pattern?: string | RegExp;

  /** Value of the text area. */
  modelValue?: string | number | null;
  modelModifiers?: {
    number?: N;
    trim?: boolean;
    lazy?: boolean;
  };

  /** Value to indicate if the text area is modified to show that validation state.
   * If set to success, text area will be modified to indicate valid state.
   * If set to error, text area will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';

  /** When to validate the text area with the browser constraint validation, true for enter or submit */
  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;

  /** Maximum height */
  maxHeight?: string;

  /** Maximum width */
  maxWidth?: string;
}
</script>

<script lang="ts" setup generic="N extends boolean = false">
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';

import {
  computed,
  onMounted,
  toRefs,
  type TextareaHTMLAttributes,
  getCurrentInstance,
  useAttrs,
  useTemplateRef,
} from 'vue';
import { useInputValidation } from '../input';
import { useChildrenTracker } from '../use';
import { FormGroupInputsKey, FormInputsKey, useFormGroupFieldId } from './Form/common';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import PfFormControlIcon from './FormControlIcon.vue';

defineOptions({
  name: 'PfTextarea',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props<N>>(), {
  resizeOrientation: 'both',
  autoValidate: true,
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
  (name: 'update:modelValue', value: N extends true ? number : string): void;
  (name: 'update:validated', value: 'success' | 'warning' | 'error' | 'default'): void;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const attrs = useAttrs();
const { id: fieldId, linked } = useFormGroupFieldId(() => (typeof attrs.id === 'string' ? attrs.id : undefined));
if (!attrs.id && !linked.value && !attrs['aria-label']) {
  console.error('TextArea: TextArea requires either an id or aria-label to be specified');
}

const input = useTemplateRef('inputRef');
const hasStatusIcon = computed(() => ['success', 'error', 'warning'].includes(effectiveValidated.value));

const { validated } = toRefs(props);
const { value, effectiveValidated, onBlur, onChange, onInput, onInvalid, onKeyUp, ...inputValidationData } =
  useInputValidation({
    inputElement: input,
    autoValidate: props.autoValidate,
    validated,
    customCheckValidity: checkValidity,
  });

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
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
    const error = !regexPattern.value.test(String(value.value));
    if (error) {
      let error = 'Please match the format requested.';
      if (input.value.title) {
        error += `\n${input.value.title}`;
      }
      inputValidationData.setCustomValidity(error);
      return false;
    }
  }

  if (!HTMLTextAreaElement.prototype.checkValidity.call(input.value)) {
    return false;
  }

  inputValidationData.innerValidated.value = 'success';
  return true;
}

// like the onChange of upstream, the height follows the content as the user types
function handleInput(event: InputEvent) {
  if (props.autoResize) {
    setAutoHeight();
  }
  onInput(event);
}

function handleChange(event: Event) {
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
  const parentComputed = window.getComputedStyle(parent);
  const px = (style: CSSStyleDeclaration, property: string) => parseInt(style.getPropertyValue(property)) || 0;
  // Calculate the height
  const height =
    px(computed, 'border-top-width') +
    input.value.scrollHeight +
    px(computed, 'border-bottom-width') +
    px(parentComputed, 'padding-top') +
    px(parentComputed, 'padding-bottom');
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
