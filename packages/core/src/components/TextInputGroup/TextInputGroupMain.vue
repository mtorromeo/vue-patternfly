<template>
  <div :class="[styles.textInputGroupMain, {
    [styles.modifiers.icon]: !!$slots.icon,
  }]">
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
        ref="input"
        :type="type"
        :class="styles.textInputGroupTextInput"
        :aria-label="ariaLabel"
        :disabled="disabled || undefined"
        v-model="value"
        :placeholder="placeholder"
      >
    </span>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { inject, ref } from 'vue';
import { useManagedProp } from '../../use';
import { TextInputGroupDisabledKey } from './TextInputGroup.vue';

const props = withDefaults(defineProps<{
  /** Type that the input accepts. */
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
    | 'url';
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
  /** Accessibility label for the input */
  ariaLabel?: string;
  /** Value for the input */
  modelValue?: string | number;
  /** Placeholder value for the input */
  placeholder?: string;
}>(), {
  ariaLabel: 'Type to filter',
  type: 'text',
});

const emit = defineEmits({
  'update:modelValue': (v: string) => true,
  /** Callback for when there is a change in the input field*/
  change: (value: string, event: Event) => true,
  /** Callback for when the input field is focused*/
  focus: (event?: any) => true,
  /** Callback for when focus is lost on the input field*/
  blur: (event?: any) => true,
});

const value = useManagedProp('modelValue', '');
const disabled = inject(TextInputGroupDisabledKey, false);
const input = ref<HTMLInputElement | null>(null);

defineExpose({
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
