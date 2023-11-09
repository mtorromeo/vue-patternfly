<template>
  <span
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
      v-bind="{...ouiaProps, ...$attrs}"
      ref="input"
      :value="value"
      :type="type"
      :aria-invalid="effectiveValidated === 'error'"
      :disabled="disabled || undefined"
      :readonly="!!readOnlyVariant || readonly"
      @change="onChange"
      @input="onInput"
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
import { type Ref, ref, type InputHTMLAttributes } from 'vue';
import { useChildrenTracker } from '../use';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { useInputValidation, type InputValidateState } from '../input';
import { FormGroupInputsKey } from './Form/common';
import { useOUIAProps } from '../helpers/ouia';
import { computed } from 'vue';
import PfFormControlIcon from './FormControlIcon.vue';

defineOptions({
  name: 'PfTextInput',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
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
  modelValue?: string | number;
  /** Aria-label. The text input requires an associated id or aria-label. */
  ariaLabel?: string;
  /** Trim text at start */
  startTruncated?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  autoValidate: 'change',
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
  (name: 'update:modelValue'): void;
  (name: 'update:validated'): void;
}>();

defineSlots<{
  icon?: (props?: Record<never, never>) => any;
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
} = useInputValidation({inputElement: input, ...props});

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
