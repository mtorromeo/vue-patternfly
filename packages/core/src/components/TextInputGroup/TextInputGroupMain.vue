<template>
  <div
    :class="[styles.textInputGroupMain, {
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
        v-bind="$attrs"
        v-model="value"
        :class="styles.textInputGroupTextInput"
        :disabled="disabled || undefined"
        @change="emit('change', $event)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      >
    </span>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { inject, type Ref, ref, type InputHTMLAttributes } from 'vue';
import { useManagedProp } from '../../use';
import { TextInputGroupDisabledKey } from './TextInputGroup.vue';

defineOptions({
  name: 'PfTextInputGroupMain',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
  /** Value for the input */
  modelValue?: string | number;
}

defineProps<Props>();

const emit = defineEmits<{
  (name: 'update:modelValue', v: string): void;
  /** Callback for when there is a change in the input field*/
  (name: 'change', event: Event): void;
  /** Callback for when the input field is focused*/
  (name: 'focus', event: FocusEvent): void;
  /** Callback for when focus is lost on the input field*/
  (name: 'blur', event: FocusEvent): void;
}>();

const value = useManagedProp('modelValue', '');
const disabled = inject(TextInputGroupDisabledKey, false);
const input: Ref<HTMLInputElement | undefined> = ref();

defineExpose({
  input,
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
