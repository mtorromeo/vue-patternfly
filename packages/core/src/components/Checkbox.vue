<template>
  <div :class="[styles.check, {
    [styles.modifiers.standalone]: !label && !$slots.label,
  }]">
    <input
      :id="id"
      ref="input"
      v-bind="$args"
      :class="styles.checkInput"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      :aria-valid="!valid"
      @change="$emit('change', $event)"
    >
    <label
      v-if="label || $slots.label"
      :class="[styles.checkLabel, {
        [styles.modifiers.disabled]: disabled,
      }]"
      :for="id"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <span
      v-if="description || $slots.description"
      :class="styles.checkDescription"
    >
      <slot name="description">{{ description }}</slot>
    </span>
    <span
      v-if="body || $slots.body"
      :class="styles.checkBody"
    >
      <slot name="body">{{ body }}</slot>
    </span>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Check/check';

export default {
  name: 'PfCheckbox',

  props: {
    /** Flag to show if the radio is checked. */
    checked: Boolean,

    /** Flag to show if the radio is disabled. */
    disabled: Boolean,

    /** Flag to show if the radio selection is valid or invalid. */
    valid: Boolean,

    /** Id of the radio. */
    id: {
      type: String,
      required: true,
    },

    /** Label text of the radio. */
    label: {
      type: String,
      default: '',
    },

    /** Body of the radio. */
    body: {
      type: String,
      default: '',
    },

    /** Description text of the radio. */
    description: {
      type: String,
      default: '',
    },
  },

  emits: ['change'],

  data() {
    return {
      styles,
    };
  },

  watch: {
    checked: {
      handler() {
        if (!this.$refs.input) {
          return;
        }
        this.$refs.input.indeterminate = this.checked === null;
      },
      immediate: true,
    },
  },
};
</script>
