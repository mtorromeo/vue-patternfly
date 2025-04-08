<template>
  <span
    v-bind="ouiaProps"
    :class="[
      styles.formControl, {
        [styles.modifiers.readonly]: !!readOnlyVariant,
        [styles.modifiers.plain]: readOnlyVariant === 'plain',
        [styles.modifiers.success]: effectiveValidated === 'success',
        [styles.modifiers.warning]: effectiveValidated === 'warning',
        [styles.modifiers.error]: effectiveValidated === 'error',
        [styles.modifiers.icon]: !!$slots.icon,
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.expanded]: expanded,
      },
    ]"
  >
    <input
      v-bind="$attrs"
      ref="inputRef"
      :value="value"
      :type="type"
      :aria-invalid="effectiveValidated === 'error'"
      :disabled="disabled || undefined"
      :readonly="!!readOnlyVariant || readonly"
      @change="onChange"
      @input="onInput($event as InputEvent)"
      @blur="onBlur"
      @invalid="onInvalid"
      @keyup="onKeyUp"
    >
    <span v-if="$slots.icon || hasStatusIcon" :class="styles.formControlUtilities">
      <pf-form-control-icon v-if="$slots.icon">
        <slot name="icon" />
      </pf-form-control-icon>
      <pf-form-control-icon v-if="hasStatusIcon" :status="(effectiveValidated as 'success' | 'error' | 'warning')" />
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, toRefs, type InputHTMLAttributes, getCurrentInstance, useTemplateRef } from 'vue';
import { useChildrenTracker } from '../use';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { useInputValidation, type InputValidateState } from '../input';
import { FormGroupInputsKey, FormInputsKey } from './Form/common';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import PfFormControlIcon from './FormControlIcon.vue';

defineOptions({
  name: 'PfTextInput',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'value' | 'type' | 'aria-invalid'> {
  /** Flag to show if the text input is disabled. */
  disabled?: boolean;
  /** Flag to apply expanded styling */
  expanded?: boolean;
  readonly?: boolean;
  /** Read only variant. */
  readOnlyVariant?: 'plain' | 'default';
  /** Value to indicate if the text input is modified to show that validation state.
   * If set to success, text input will be modified to indicate valid state.
   * If set to error, text input will be modified to indicate error state.
   */
  validated?: InputValidateState;
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
    | 'url'
    | 'week';
  /** Value of the text input. */
  modelValue?: string | number | null;
  /** Aria-label. The text input requires an associated id or aria-label. */
  ariaLabel?: string;
  /** Trim text at start */
  startTruncated?: boolean;
  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
  /** Disables validation status icon */
  noStatusIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  autoValidate: true,
  modelValue: undefined,
});

defineEmits<{
  /** A callback for when the text input value changes. */
  (name: 'change', event: Event): void;
  /** Callback function when text input is blurred (focus leaves) */
  (name: 'blur', event: FocusEvent): void;
  (name: 'input', event: Event): void;
  (name: 'invalid', event: Event): void;
  (name: 'keyup', event: KeyboardEvent): void;
  (name: 'update:modelValue', value: string): void;
  (name: 'update:validated', value: InputValidateState): void;
}>();

defineSlots<{
  icon?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const input = useTemplateRef('inputRef');
const hasStatusIcon = computed(() => !props.noStatusIcon && ['success', 'error', 'warning'].includes(effectiveValidated.value));

const { validated } = toRefs(props);
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
  autoValidate: props.autoValidate,
  validated: validated,
});

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
useChildrenTracker(FormGroupInputsKey, effectiveValidated);

function focus() {
  input.value?.focus();
}

defineExpose({
  ...inputValidationData,
  input,
  focus,
  value,
  effectiveValidated,
});
</script>
