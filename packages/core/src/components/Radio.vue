<template>
  <component
    :is="component ?? (wrapWithLabel ? 'label' : 'div')"
    :class="[
      styles.radio,
      $attrs.class,
      {
        [styles.modifiers.standalone]: !(label || $slots.label),
      },
    ]"
    :for="wrapWithLabel ? inputId : undefined"
  >
    <sort>
      <sort-by :weight="labelBeforeButton ? -1 : 1">
        <component
          :is="wrapWithLabel ? 'span' : 'label'"
          v-if="label || $slots.label"
          :class="[
            styles.radioLabel,
            {
              [styles.modifiers.disabled]: disabled,
            },
          ]"
          :for="wrapWithLabel ? undefined : inputId"
        >
          <slot name="label">{{ label }}</slot>
        </component>
      </sort-by>

      <input
        :id="inputId"
        ref="inputRef"
        v-bind="{ ...$attrs, ...ouiaProps, class: undefined }"
        type="radio"
        :class="[styles.radioInput, inputClass]"
        :value="value"
        :checked="isChecked"
        :aria-invalid="!!invalid"
        :aria-describedby="ariaDescribedby"
        :aria-label="label || $slots.label ? undefined : ariaLabel"
        :disabled="disabled"
        @change="onChange"
      />
    </sort>

    <span v-if="description || $slots.description" :id="descriptionId" :class="styles.radioDescription">
      <slot name="description">{{ description }}</slot>
    </span>
    <span v-if="body || $slots.default" :class="styles.radioBody">
      <slot>{{ body }}</slot>
    </span>
  </component>
</template>

<script lang="ts">
interface Props<T = unknown>
  extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'onChange' | 'type' | 'value' | 'autocomplete'> {
  /** Sets the radio wrapper component to render. Defaults to "div", or "label" with labelWrapped. */
  component?: string | Component;
  /** Additional classes added to the input. */
  inputClass?: HTMLAttributes['class'];
  /** Id of the radio. Generated when not set. */
  id?: string;
  /** Value of the radio, emitted as the model value when it gets selected. */
  value?: T;
  /** Value of the selected radio of the group, bound with v-model. The radio is checked when it equals value. */
  modelValue?: T;
  /** Flag to show if the radio is checked, when it is not bound with v-model. */
  checked?: boolean;
  /** Flag to show if the radio is disabled. */
  disabled?: boolean;
  /** Flag to show if the radio selection is invalid. */
  invalid?: boolean;
  /** Label text of the radio. */
  label?: string;
  /** Aria label for the radio, used only without a label. */
  ariaLabel?: string;
  /** Description text of the radio. The input is described by it, unless aria-describedby is set ("" removes it). */
  description?: string;
  /** Body of the radio. */
  body?: string;
  /** Flag to indicate whether the radio wrapper element is a <label> element for the radio input. Will not apply if a component prop (with a value other than a "label") is specified. */
  labelWrapped?: boolean;
  /** Flag to show if the radio label is shown before the radio input. */
  labelBeforeButton?: boolean;
}
</script>

<script lang="ts" setup generic="T = unknown">
import styles from '@patternfly/react-styles/css/components/Radio/radio';
import { devError } from '../helpers/dev';
import {
  computed,
  type Component,
  type InputHTMLAttributes,
  getCurrentInstance,
  useAttrs,
  useSlots,
  useTemplateRef,
  useId,
  type HTMLAttributes,
  type VNode,
} from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import Sort from '../helpers/Sort.vue';
import SortBy from '../helpers/SortBy.vue';
import { useChildrenTracker } from '../use';
import { FormInputsKey, useFormGroupFieldId } from './Form/common';

defineOptions({
  name: 'PfRadio',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props<T>>(), {
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

// without an id and a label of its own, the first field of a form group gets the id of the group
const slots = useSlots();
const generatedId = useId();
const { id: groupFieldId, linked } = useFormGroupFieldId(
  () => props.id,
  () => !props.label && !slots.label,
);
const inputId = computed(() => groupFieldId.value ?? generatedId);

const emit = defineEmits<{
  (name: 'change', e: Event): void;
  (name: 'update:modelValue', value: T): void;
}>();

defineSlots<{
  /** Body of the radio, replacing the body prop */
  default?: (props?: Record<never, never>) => VNode[];
  /** Label of the radio, replacing the label prop */
  label?: (props?: Record<never, never>) => VNode[];
  /** Description of the radio, replacing the description prop */
  description?: (props?: Record<never, never>) => VNode[];
}>();

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const attrs = useAttrs();
const input = useTemplateRef('inputRef');
const descriptionId = useId();
const wrapWithLabel = computed(() => (props.labelWrapped && !props.component) || props.component === 'label');

// without v-model the checked prop drives the input
const isChecked = computed(() => (props.modelValue === undefined ? props.checked : props.modelValue === props.value));

// the input is described by the description unless aria-describedby is set: an empty string removes it
const ariaDescribedby = computed(() => {
  const custom = attrs['aria-describedby'];
  if (custom !== undefined) {
    return custom === '' ? undefined : String(custom);
  }
  return props.description || slots.description ? descriptionId : undefined;
});

if (!props.label && !slots.label && !linked.value && !props.ariaLabel) {
  devError('Radio:', 'Radio requires an aria-label to be specified');
}

function onChange(e: Event) {
  emit('change', e);
  if ((e.currentTarget as HTMLInputElement).checked) {
    emit('update:modelValue', props.value as T);
  }
}

defineExpose({
  input,
});
</script>
