<template>
  <component
    v-bind="ouiaProps"
    :is="component ?? (wrapWithLabel ? 'label' : 'div')"
    :class="[styles.check, {
      [styles.modifiers.standalone]: !labelWrapped && !(label || $slots.label),
    }]"
    :for="labelWrapped ? id : undefined"
  >
    <sort>
      <sort-by :weight="labelBeforeButton ? -1 : 1">
        <component
          :is="wrapWithLabel ? 'span' : 'label'"
          v-if="label || $slots.label"
          :class="[styles.checkLabel, {
            [styles.modifiers.disabled]: disabled,
          }]"
          :for="wrapWithLabel ? undefined : validId"
        >
          <slot name="label">{{ label }}</slot>
          <span v-if="required" :class="styles.checkLabelRequired" aria-hidden="true">*</span>
        </component>
      </sort-by>

      <input
        :id="validId"
        ref="input"
        v-bind="$attrs"
        type="checkbox"
        :class="styles.checkInput"
        :checked="modelValue === null ? undefined : modelValue"
        :disabled="disabled"
        :required="required"
        @change="onChange"
      >
    </sort>

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
import { computed, ref, watch, type Component, type Ref, type InputHTMLAttributes } from 'vue';
import { getUniqueId } from '../util';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import Sort from '../helpers/Sort.vue';
import SortBy from '../helpers/SortBy.vue';

defineOptions({
  name: 'PfCheckbox',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'onChange' | 'type' | 'checked'> {
  component?: string | Component;
  /** Flag to show if the checkbox is checked. */
  modelValue?: boolean | null;
  /** Flag to show if the checkbox is disabled. */
  disabled?: boolean;
  /** Flag to show if the checkbox is required. */
  required?: boolean;
  /** Flag to show if the checkbox selection is valid or invalid. */
  valid?: boolean;
  /** Id of the checkbox. */
  id?: string;
  /** Label text of the checkbox. */
  label?: string;
  /** Body of the checkbox. */
  body?: string;
  /** Description text of the checkbox. */
  description?: string;
  name?: string;
  /** Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified. */
  labelWrapped?: boolean;
  /** Flag to show if the checkbox label is shown before the checkbox input. */
  labelBeforeButton?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'change', e: Event): void;
  (name: 'update:modelValue', value: boolean): void;
}>();

defineSlots<{
  label?: (props?: Record<never, never>) => any;
  description?: (props?: Record<never, never>) => any;
  body?: (props?: Record<never, never>) => any;
}>();

const input: Ref<HTMLInputElement | undefined> = ref();
const wrapWithLabel = computed(() => (props.labelWrapped && !props.component) || props.component === 'label');
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
