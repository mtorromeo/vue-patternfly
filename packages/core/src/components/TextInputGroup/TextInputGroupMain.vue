<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.textInputGroupMain,
      $attrs.class,
      {
        [styles.modifiers.icon]: !!$slots.icon,
      },
    ]"
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
      />
      <span v-if="!!$slots.icon" :class="styles.textInputGroupIcon">
        <slot name="icon" />
      </span>
      <input
        ref="inputRef"
        v-bind="{ ...$attrs, class: undefined }"
        :value="value"
        :type="type ?? 'text'"
        :aria-label="ariaLabel"
        :class="[styles.textInputGroupTextInput, inputClass]"
        :disabled="group?.disabled.value || undefined"
        @change="onChange"
        @input="onInput"
        @blur="emit('blur', $event)"
        @focus="emit('focus', $event)"
      />
      <span v-if="statusIcon" :class="[styles.textInputGroupIcon, styles.modifiers.status]">
        <component :is="statusIcon" />
      </span>
    </span>
  </div>
</template>

<script lang="ts">
export interface Props<T extends InputType, N extends boolean>
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<InputHTMLAttributes, 'value' | 'type' | 'autocomplete'>,
    /* @vue-ignore */ OverriddenInputAttributes {
  /** Accessibility label for the input */
  ariaLabel?: string;
  /** Additional classes added to the input. */
  inputClass?: HTMLAttributes['class'];
  /** Type that the text input accepts. */
  type?: T;
  /** Value of the text input. */
  modelValue?: string | number | null;
  modelModifiers?: {
    number?: N;
    trim?: boolean;
    lazy?: boolean;
  };

  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
}
</script>

<script lang="ts" setup generic="T extends InputType = 'text', N extends boolean = false">
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import {
  computed,
  inject,
  type HTMLAttributes,
  type InputHTMLAttributes,
  getCurrentInstance,
  useModel,
  useTemplateRef,
} from 'vue';
import { useChildrenTracker } from '../../use';
import { TextInputGroupKey } from './common';
import { statusIcons } from '../../constants';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormInputsKey } from '../Form/common';
import type { InputType, OverriddenInputAttributes } from '../../input';
defineOptions({
  name: 'PfTextInputGroupMain',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props<T, N>>(), {
  ariaLabel: 'Type to filter',
  modelValue: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Callback for when there is a change in the input field*/
  (name: 'change', event: Event): void;
  /** Callback for when the input field is focused*/
  (name: 'focus', event: FocusEvent): void;
  /** Callback for when focus is lost on the input field*/
  (name: 'blur', event: FocusEvent): void;
  /** Callback for every keystroke in the input field */
  (name: 'input', event: Event): void;
  /** Callback for when the model value changes */
  (name: 'update:modelValue', value: N extends true ? number : T extends 'number' ? number : string): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const group = inject(TextInputGroupKey, undefined);
const input = useTemplateRef('inputRef');

const statusIcon = computed(() => {
  switch (group?.validated.value) {
    case 'success':
      return statusIcons.success;
    case 'warning':
      return statusIcons.warning;
    case 'error':
      return statusIcons.danger;
    default:
      return undefined;
  }
});

const [value, modifiers] = useModel(props as { modelValue?: string | number | null }, 'modelValue', {
  // number inputs emit numbers even without the number modifier
  set: v => (props.type === 'number' ? Number(v) : v) as any,
});

function onInput(event: Event) {
  emit('input', event);
  if (!modifiers.lazy) {
    value.value = (event.target as HTMLInputElement).value;
  }
}

function onChange(event: Event) {
  emit('change', event);
  if (modifiers.lazy) {
    value.value = (event.target as HTMLInputElement).value;
  }
}

defineExpose({
  input,
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
