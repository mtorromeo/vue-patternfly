<template>
  <component
    v-bind="ouiaProps"
    :is="fieldset ? 'fieldset' : 'div'"
    :class="[styles.formGroup, { [styles.modifiers.action]: actionGroup }]"
    :role="role"
    :aria-labelledby="isGroupOrRadioGroup ? legendId : undefined"
  >
    <div
      v-if="label || $slots.label"
      :id="isGroupOrRadioGroup ? legendId : undefined"
      :class="[
        styles.formGroupLabel,
        {
          [styles.modifiers.info]: labelInfo || $slots['label-info'],
          [styles.modifiers.noPaddingTop]: noPaddingTop,
        },
      ]"
    >
      <component :is="labelInfo || $slots['label-info'] ? 'div' : PassThrough" :class="styles.formGroupLabelMain">
        <component
          :is="isGroupOrRadioGroup ? 'span' : 'label'"
          :class="styles.formLabel"
          :for="isGroupOrRadioGroup ? undefined : fieldId"
        >
          <span :class="styles.formLabelText">
            <slot name="label">{{ label }}</slot>
          </span>
          <span v-if="required" :class="styles.formLabelRequired" aria-hidden="true">{{ '\u00a0*' }}</span>
        </component>
        {{ '\u00a0\u00a0' }}
        <span v-if="$slots['label-help']" :class="styles.formGroupLabelHelp">
          <slot name="label-help" />
        </span>
      </component>

      <div v-if="labelInfo || $slots['label-info']" :class="styles.formGroupLabelInfo">
        <slot name="label-info">{{ labelInfo }}</slot>
      </div>
    </div>

    <div
      :class="[
        styles.formGroupControl,
        {
          [styles.modifiers.inline]: inline,
          [styles.modifiers.stack]: stack,
        },
      ]"
    >
      <slot v-if="!helperTextBeforeField" />

      <pf-form-helper-text
        v-if="
          (internalValidated === 'error' && helperTextInvalid) ||
          $slots['helper-text-invalid'] ||
          helperText ||
          $slots['helper-text']
        "
        :id="`${fieldId}-helper`"
      >
        <pf-helper-text v-if="(helperTextInvalid || $slots['helper-text-invalid']) && internalValidated === 'error'">
          <slot name="helper-text-invalid">
            <pf-helper-text-item variant="error">
              {{ helperTextInvalid }}
            </pf-helper-text-item>
          </slot>
        </pf-helper-text>
        <pf-helper-text v-else>
          <slot name="helper-text">
            <pf-helper-text-item :variant="helperTextVariant">
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
import { type FieldsetHTMLAttributes, computed, toValue, useId } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

import PfFormHelperText from './FormHelperText.vue';
import PfHelperText from '../HelperText/HelperText.vue';
import PfHelperTextItem from '../HelperText/HelperTextItem.vue';
import type { InputValidateState } from '../../input';
import { provideChildrenTracker } from '../../use';
import { FormGroupInputsKey } from './common';
import { isDefined } from '@vueuse/shared';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfFormGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
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

  /** Sets the FormGroup action modifier. Used to contain form action buttons. */
  actionGroup?: boolean;

  /** Helper text regarding the field. */
  helperText?: string;

  /** Helper text variant. */
  helperTextVariant?: ComponentProps<typeof PfHelperTextItem>['variant'];

  /** Flag to position the helper text before the field. False by default */
  helperTextBeforeField?: boolean;

  /** Helper text after the field when the field is invalid. */
  helperTextInvalid?: string;

  /** ID of an individual field or a group of multiple fields. Required when a role of "group" or "radiogroup" is passed in.
   * If only one field is included, its ID attribute and this prop must be the same.
   */
  fieldId?: string;

  /** Sets the role of the form group. Pass in "radiogroup" when the form group contains multiple
   * radio inputs, or pass in "group" when the form group contains multiple of any other input type.
   */
  role?: string;
}

const props = withDefaults(defineProps<Props>(), {
  helperTextVariant: 'default',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
  /** A help button for the label, like a pf-form-group-label-help wrapped in a pf-popover */
  'label-help'?: (props?: Record<never, never>) => any;
  'label-info'?: (props?: Record<never, never>) => any;
  'helper-text-invalid'?: (props?: Record<never, never>) => any;
  'helper-text'?: (props?: Record<never, never>) => any;
}>();

const generatedId = useId();
const isGroupOrRadioGroup = computed(() => props.role === 'group' || props.role === 'radiogroup');
const legendId = computed(() => `${props.fieldId || generatedId}-legend`);

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
