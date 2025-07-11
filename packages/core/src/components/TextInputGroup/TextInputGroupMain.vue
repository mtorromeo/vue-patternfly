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
import { inject, type InputHTMLAttributes, getCurrentInstance, useTemplateRef } from 'vue';
import { useChildrenTracker } from '../../use';
import { TextInputGroupDisabledKey } from './TextInputGroup.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormInputsKey } from '../Form/common';

defineOptions({
  name: 'PfTextInputGroupMain',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ InputHTMLAttributes {
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Value for the input */
const value = defineModel<string | number | null>({ default: null });

const emit = defineEmits<{
  /** Callback for when there is a change in the input field*/
  (name: 'change', event: Event): void;
  /** Callback for when the input field is focused*/
  (name: 'focus', event: FocusEvent): void;
  /** Callback for when focus is lost on the input field*/
  (name: 'blur', event: FocusEvent): void;
}>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
  icon: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const disabled = inject(TextInputGroupDisabledKey, false);
const input = useTemplateRef('inputRef');

defineExpose({
  input,
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
