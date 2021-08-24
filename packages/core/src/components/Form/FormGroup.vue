<template>
  <div :class="styles.formGroup">
    <div v-if="label || $slots.label" :class="[styles.formGroupLabel, {[styles.modifiers.noPaddingTop]: noPaddingTop}]">
      <label :class="styles.formLabel" :for="fieldId">
        <span :class="styles.formLabelText">
          <slot name="label">{{ label }}</slot>
        </span>
        <span v-if="required" :class="styles.formLabelRequired" aria-hidden="true">
          {{ ' *' }}
        </span>
      </label>
      {{ ' ' }}
      <slot name="labelIcon" />
    </div>

    <div :class="[styles.formGroupControl, {[styles.modifiers.inline]: inline}]">
      <slot v-if="!helperTextBeforeField" />

      <div
        v-if="internalValidated === 'error' ? (helperTextInvalid || $slots.helperTextInvalid) : (helperText || $slots.helperText)"
        :id="`${fieldId}-helper`"
        :class="[styles.formHelperText, {
          [styles.modifiers.success]: internalValidated === 'success',
          [styles.modifiers.warning]: internalValidated === 'warning',
          [styles.modifiers.error]: internalValidated === 'error',
        }]"
        aria-live="polite"
      >
        <template v-if="internalValidated === 'error'">
          <span v-if="$slots.helperTextInvalidIcon" :class="styles.formHelperTextIcon">
            <slot name="helperTextInvalidIcon" />
          </span>
          <slot name="helperTextInvalid">
            {{ helperTextInvalid }}
          </slot>
        </template>

        <template v-else>
          <span v-if="$slots.helperTextIcon" :class="styles.formHelperTextIcon">
            <slot name="helperTextIcon" />
          </span>
          <slot name="helperText">
            {{ helperText }}
          </slot>
        </template>
      </div>
      <slot v-if="helperTextBeforeField" />
    </div>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { computed } from 'vue';
import { provideChildrenTracker } from '../../use';

export default {
  name: 'PfFormGroup',

  props: {
    /** Label text before the field. */
    label: {
      type: String,
      default: '',
    },

    /** Sets the FormGroup required. */
    required: Boolean,

    /**
     * Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.
     * If set to error, text color of helper text will be modified to indicate error state.
     * If set to warning, text color of helper text will be modified to indicate warning state.
     */
    validated: {
      type: String,
      default: null,
      validator: v => ['success', 'warning', 'error', 'default'].includes(v),
    },

    inline: Boolean,

    /** Removes top spacer from label. */
    noPaddingTop: Boolean,

    /** Helper text regarding the field. It can be a simple text or an object. */
    helperText: {
      type: String,
      default: '',
    },

    /** Flag to position the helper text before the field. False by default */
    helperTextBeforeField: Boolean,

    /** Helper text after the field when the field is invalid. It can be a simple text or an object. */
    helperTextInvalid: {
      type: String,
      default: '',
    },

    /** ID of the included field. It has to be the same for proper working. */
    fieldId: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const inputs = provideChildrenTracker();
    return {
      internalValidated: computed(() => {
        if (props.validated !== null) {
          return props.validated;
        }
        for (const validation of ['error', 'warning', 'success', 'default']) {
          if (inputs.value.some(input => input.effectiveValidated === validation)) {
            return validation;
          }
        }
        return 'default';
      }),
    };
  },

  data() {
    return {
      styles,
    };
  },
};
</script>