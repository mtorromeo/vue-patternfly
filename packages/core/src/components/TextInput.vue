<template>
  <input
    ref="input"
    :value="value"
    :class="[
      styles.formControl, {
        [styles.modifiers.iconSprite]: iconSprite,
        [styles.modifiers.plain]: readOnlyVariant === 'plain',
        [styles.modifiers.success]: effectiveValidated === 'success',
        [styles.modifiers.warning]: effectiveValidated === 'warning',
        [styles.modifiers.icon]: (iconVariant && iconVariant !== 'search') || iconUrl,
        [styles.modifiers[iconVariant ?? 'search']]: iconVariant,
      },
    ]"
    :type="type"
    :style="{
      backgroundImage: iconUrl ? `url(${iconUrl})` : undefined,
      backgroundSize: iconDimensions ? iconDimensions : undefined,
    }"
    :aria-invalid="effectiveValidated === 'error'"
    :disabled="disabled || undefined"
    :required="required || undefined"
    :readonly="!!readOnlyVariant || readonly"
    @change="onChange"
    @input="onInput"
    @blur="onBlur"
    @invalid="onInvalid"
    @keyup="onKeyUp"
  >
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import { useChildrenTracker } from '../use';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { useInputValidation } from '../input';
import { FormGroupInputsKey } from './Form/common';

const props = withDefaults(defineProps<{
  /** Flag to show if the text input is disabled. */
  disabled?: boolean;
  readonly?: boolean;
  /** Read only variant. */
  readOnlyVariant?: 'plain' | 'default';
  required?: boolean;
  /** Value to indicate if the text input is modified to show that validation state.
   * If set to success, text input will be modified to indicate valid state.
   * If set to error, text input will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** Type that the text input accepts. */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url';
  /** Value of the text input. */
  modelValue?: string | number;
  /** Aria-label. The text input requires an associated id or aria-label. */
  ariaLabel?: string;
  /** Trim text on left */
  leftTruncated?: boolean;
  /** icon variant */
  iconVariant?: 'calendar' | 'clock' | 'search';
  /** Use the external file instead of a data URI */
  iconSprite?: boolean;
  /** Custom icon url to set as the text input's background-image */
  iconUrl?: string;
  /** Dimensions for the custom icon set as the text input's background-size */
  iconDimensions?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
}>(), {
  type: 'text',
  autoValidate: 'change',
  modelValue: undefined,
});

defineEmits<{
  /** A callback for when the text input value changes. */
  (name: 'change', event: Event): void;
  /** Callback function when text input is focused */
  (name: 'focus', event: Event): void;
  /** Callback function when text input is blurred (focus leaves) */
  (name: 'blur', event: FocusEvent): void;
  (name: 'input', event: Event): void;
  (name: 'invalid', event: Event): void;
  (name: 'keyup', event: KeyboardEvent): void;
  (name: 'update:modelValue'): void;
  (name: 'update:validated'): void;
}>();

const input: Ref<HTMLInputElement | undefined> = ref();

useChildrenTracker(FormGroupInputsKey);

const {
  value,
  effectiveValidated,
  onBlur,
  onChange,
  onInput,
  onInvalid,
  onKeyUp,
  ...inputValidationData
} = useInputValidation({inputElement: input, ...props});

function focus() {
  input.value?.focus();
}

defineExpose({
  input,
  focus,
  value,
  ...inputValidationData,
});
</script>
