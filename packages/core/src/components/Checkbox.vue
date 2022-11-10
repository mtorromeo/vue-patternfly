<template>
  <component
    :is="component"
    :class="[styles.check, {
      [styles.modifiers.standalone]: !label && !$slots.label,
    }]">
    <input
      :id="validId"
      ref="input"
      v-bind="$attrs"
      :class="styles.checkInput"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-valid="!valid"
      @change="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).checked)"
    >
    <label
      v-if="label || $slots.label"
      :class="[styles.checkLabel, {
        [styles.modifiers.disabled]: disabled,
      }]"
      :for="validId"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <span v-if="description || $slots.description" :class="styles.checkDescription">
      <slot name="description">{{ description }}</slot>
    </span>
    <span v-if="body || $slots.body" :class="styles.checkBody">
      <slot name="body">{{ body }}</slot>
    </span>
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Check/check';
import { getUniqueId } from '../util';
import { DefineComponent, defineComponent, markRaw, PropType, ref, Ref } from 'vue';

export default defineComponent({
  name: 'PfCheckbox',

  props: {
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },

    /** Flag to show if the radio is checked. */
    modelValue: Boolean,

    /** Flag to show if the radio is disabled. */
    disabled: Boolean,

    /** Flag to show if the radio selection is valid or invalid. */
    valid: Boolean,

    /** Id of the radio. */
    id: {
      type: String,
      default: null,
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

  emits: ['update:modelValue'],

  setup() {
    const input: Ref<HTMLInputElement | null> = ref(null);
    return {
      styles: markRaw(styles) as typeof styles,
      input,
    };
  },

  computed: {
    validId() {
      return this.id || getUniqueId();
    },
  },

  watch: {
    modelValue: {
      handler() {
        if (!this.input) {
          return;
        }
        this.input.indeterminate = this.modelValue === null;
      },
      immediate: true,
    },
  },
});
</script>
