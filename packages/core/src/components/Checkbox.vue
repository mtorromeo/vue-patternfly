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
      :checked="modelValue === null ? undefined : modelValue"
      :disabled="disabled"
      @change="onChange"
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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Check/check';
import { computed, ref, watch, type Component, type Ref, type HTMLAttributes } from 'vue';
import { getUniqueId } from '../util';

export interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'onChange'> {
  component?: string | Component;
  /** Flag to show if the radio is checked. */
  modelValue?: boolean | null;
  /** Flag to show if the radio is disabled. */
  disabled?: boolean;
  /** Flag to show if the radio selection is valid or invalid. */
  valid?: boolean;
  /** Id of the radio. */
  id?: string;
  /** Label text of the radio. */
  label?: string;
  /** Body of the radio. */
  body?: string;
  /** Description text of the radio. */
  description?: string;
  name?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});

const emit = defineEmits<{
  (name: 'change', e: Event): void;
  (name: 'update:modelValue', value: boolean): void;
}>();

defineSlots<{
  label?: (props: Record<never, never>) => any;
  description?: (props: Record<never, never>) => any;
  body?: (props: Record<never, never>) => any;
}>();

const input: Ref<HTMLInputElement | undefined> = ref();
const validId = computed(() => props.id || getUniqueId());

watch(() => props.modelValue, () => {
  if (!input.value) {
    return;
  }
  input.value.indeterminate = props.modelValue === null;
}, {
  immediate: true,
});

function onChange(e: Event) {
  emit('change', e);
  emit('update:modelValue', (e.currentTarget as HTMLInputElement).checked);
}

defineExpose({
  input,
});
</script>
