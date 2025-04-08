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
        v-if="(internalValidated === 'error' && helperTextInvalid || $slots['helper-text-invalid']) || (helperText || $slots['helper-text'])"
        :id="`${fieldId}-helper`"
      >
        <pf-helper-text v-if="(helperTextInvalid || $slots['helper-text-invalid']) && internalValidated === 'error'">
          <slot name="helper-text-invalid">
            <pf-helper-text-item icon variant="error">
              {{ helperTextInvalid }}
            </pf-helper-text-item>
          </slot>
        </pf-helper-text>
        <pf-helper-text v-else>
          <slot name="helper-text">
            <pf-helper-text-item :icon="helperTextVariant !== 'default'" :variant="helperTextVariant">
              {{ helperText }}
            </pf-helper-text-item>
          </slot>
        </pf-helper-text>
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
import PfHelperText from '../HelperText/HelperText.vue';
import PfHelperTextItem, { type Props as HelperTextItemProps } from '../HelperText/HelperTextItem.vue';
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

  /** Helper text variant. */
  helperTextVariant?: HelperTextItemProps['variant'];

  /** Flag to position the helper text before the field. False by default */
  helperTextBeforeField?: boolean;

  /** Helper text after the field when the field is invalid. */
  helperTextInvalid?: string;

  /** ID of the included field. It has to be the same for proper working. */
  fieldId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  helperTextVariant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
  'label-icon'?: (props?: Record<never, never>) => any;
  'label-info'?: (props?: Record<never, never>) => any;
  'helper-text-invalid'?: (props?: Record<never, never>) => any;
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
