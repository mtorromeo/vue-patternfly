<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.textInputGroupMain, {
      [styles.modifiers.icon]: !!$slots.icon,
    }]"
  >
    <slot />
    <span :class="styles.textInputGroupText">
      <input
        v-if="hint"
        :class="[styles.textInputGroupTextInput, styles.modifiers.hint]"
        type="text"
        disabled
        aria-hidden="true"
        :value="hint"
      >
      <span v-if="!!$slots.icon" :class="styles.textInputGroupIcon">
        <slot name="icon" />
      </span>
      <input
        ref="inputRef"
        v-bind="$attrs"
        v-model="value"
        :type="type ?? 'text'"
        :aria-invalid="effectiveValidated === 'error'"
        :class="styles.textInputGroupTextInput"
        :disabled="disabled || undefined"
        @change="onChange"
        @input="onInput($event as InputEvent)"
        @blur="onBlur"
        @invalid="onInvalid"
        @keyup="onKeyUp"
        @focus="emit('focus', $event)"
      >
    </span>
  </div>
</template>

<script lang="ts">
export interface Props<T extends InputType, N extends boolean> extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'value' | 'type' | 'aria-invalid'> {
  /** Type that the text input accepts. */
  type?: T;
  /** Value of the text input. */
  modelValue?: string | number | null;
  modelModifiers?: {
    number?: N;
    trim?: boolean;
    lazy?: boolean;
  };

  /** Value to indicate if the text input is modified to show that validation state.
   * If set to success, text input will be modified to indicate valid state.
   * If set to error, text input will be modified to indicate error state.
   */
  validated?: InputValidateState;
  autoValidate?: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;

  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
}
</script>

<script lang="ts" setup generic="T extends InputType = 'text', N extends boolean = false">
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { inject, type InputHTMLAttributes, getCurrentInstance, useTemplateRef } from 'vue';
import { useChildrenTracker } from '../../use';
import { TextInputGroupDisabledKey } from './TextInputGroup.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormInputsKey } from '../Form/common';
import { useInputValidation, type InputType, type InputValidateState } from '../../input';
import { toRefs } from 'vue';

defineOptions({
  name: 'PfTextInputGroupMain',
  inheritAttrs: false,
});


const props = withDefaults(defineProps<Props<T, N>>(), {
  autoValidate: true,
  modelValue: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  /** Callback for when there is a change in the input field*/
  (name: 'change', event: Event): void;
  /** Callback for when the input field is focused*/
  (name: 'focus', event: FocusEvent): void;
  /** Callback for when focus is lost on the input field*/
  (name: 'blur', event: FocusEvent): void;
  (name: 'input', event: Event): void;
  (name: 'invalid', event: Event): void;
  (name: 'keyup', event: KeyboardEvent): void;
  /** Callback for when the model value changes */
  (name: 'update:modelValue', value: N extends true ? number : (T extends 'number' ? number : string)): void;
  (name: 'update:validated', value: InputValidateState): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const disabled = inject(TextInputGroupDisabledKey, false);
const input = useTemplateRef('inputRef');

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
  type: () => props.type ?? 'text',
});

defineExpose({
  ...inputValidationData,
  input,
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
