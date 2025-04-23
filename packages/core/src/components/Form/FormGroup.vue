<template>
  <component v-bind="ouiaProps" :is="fieldset ? 'fieldset' : 'div'" :class="styles.formGroup">
    <div
      v-if="label || $slots.label"
      :class="[styles.formGroupLabel, {
        [styles.modifiers.info]: labelInfo || $slots['label-info'],
        [styles.modifiers.noPaddingTop]: noPaddingTop,
      }]"
    >
      <component
        :is="(labelInfo || $slots['label-info']) ? 'div' : PassThrough"
        :class="styles.formGroupLabelMain"
      >
        <label :class="styles.formLabel" :for="fieldId">
          <span :class="styles.formLabelText">
            <slot name="label">{{ label }}</slot>
          </span>
          <span v-if="required" :class="styles.formLabelRequired" aria-hidden="true">{{ ' *' }}</span>
        </label>
        {{ ' ' }}
        <slot name="label-icon" />
      </component>

      <div v-if="labelInfo || $slots['label-info']" :class="styles.formGroupLabelInfo">
        <slot name="label-info">{{ labelInfo }}</slot>
      </div>
    </div>

    <div
      :class="[styles.formGroupControl, {
        [styles.modifiers.inline]: inline,
        [styles.modifiers.stack]: stack,
      }]"
    >
      <slot v-if="!helperTextBeforeField" />

      <pf-form-helper-text
        v-if="internalValidated === 'error' ? (helperTextInvalid || $slots['helper-text-invalid']) : (helperText || $slots['helper-text'])"
        :id="`${fieldId}-helper`"
        :success="internalValidated === 'success'"
        :warning="internalValidated === 'warning'"
        :error="internalValidated === 'error'"
      >
        <template v-if="internalValidated === 'error'">
          <span v-if="$slots['helper-text-invalid-icon']" :class="styles.formHelperTextIcon">
            <slot name="helper-text-invalid-icon" />
          </span>
          <slot name="helper-text-invalid">{{ helperTextInvalid }}</slot>
        </template>

        <template v-else-if="helperText || $slots['helper-text']">
          <span v-if="$slots['helper-text-icon']" :class="styles.formHelperTextIcon">
            <slot name="helper-text-icon" />
          </span>
          <slot name="helper-text">{{ helperText }}</slot>
        </template>
      </pf-form-helper-text>

      <slot v-if="helperTextBeforeField" />
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { type FieldsetHTMLAttributes, computed, toValue } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

import PfFormHelperText from './FormHelperText.vue';
import type { InputValidateState } from '../../input';
import { provideChildrenTracker } from '../../use';
import { FormGroupInputsKey } from './common';
import { isDefined } from '@vueuse/shared';

defineOptions({
  name: 'PfFormGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
  fieldset?: boolean;

    /** Label text before the field. */
  label?: string;

  /** Additional label information displayed after the label. */
  labelInfo?: string;

  /** Sets the FormGroup required. */
  required?: boolean;

  /**
   * Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.
   * If set to error, text color of helper text will be modified to indicate error state.
   * If set to warning, text color of helper text will be modified to indicate warning state.
   */
  validated?: InputValidateState;

  inline?: boolean;

  /** Sets the FormGroupControl to be stacked */
  stack?: boolean;

  /** Removes top spacer from label. */
  noPaddingTop?: boolean;

  /** Helper text regarding the field. */
  helperText?: string;

  /** Flag to position the helper text before the field. False by default */
  helperTextBeforeField?: boolean;

  /** Helper text after the field when the field is invalid. */
  helperTextInvalid?: string;

  /** ID of the included field. It has to be the same for proper working. */
  fieldId?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
  'label-icon'?: (props?: Record<never, never>) => any;
  'label-info'?: (props?: Record<never, never>) => any;
  'helper-text-invalid-icon'?: (props?: Record<never, never>) => any;
  'helper-text-invalid'?: (props?: Record<never, never>) => any;
  'helper-text-icon'?: (props?: Record<never, never>) => any;
  'helper-text'?: (props?: Record<never, never>) => any;
}>();

// components that use useInputValidation
const inputs = provideChildrenTracker(FormGroupInputsKey);

const internalValidated = computed(() => {
  if (isDefined(props.validated)) {
    return props.validated;
  }
  for (const validation of ['error', 'warning', 'success', 'default'] as const) {
    if (inputs.some(validatedState => toValue(validatedState) === validation)) {
      return validation;
    }
  }
  return 'default';
});
</script>
