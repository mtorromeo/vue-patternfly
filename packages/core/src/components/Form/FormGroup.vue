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
        v-if="validated === 'error' ? (helperTextInvalid || $slots.helperTextInvalid) : (helperText || $slots.helperText)"
        :id="`${fieldId}-helper`"
        :class="[styles.formHelperText, {
          [styles.modifiers.success]: validated === 'success',
          [styles.modifiers.warning]: validated === 'warning',
          [styles.modifiers.error]: validated === 'error',
        }]"
        aria-live="polite"
      >
        <template v-if="validated === 'error'">
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
      default: 'default',
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

  data() {
    return {
      styles,
    };
  },
};
</script>
