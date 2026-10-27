<template>
  <component
    :is="component ?? (wrapWithLabel ? 'label' : 'div')"
    :class="[
      styles.check,
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
            styles.checkLabel,
            {
              [styles.modifiers.disabled]: disabled,
            },
          ]"
          :for="wrapWithLabel ? undefined : inputId"
        >
          <slot name="label">{{ label }}</slot>
          <span v-if="required" :class="styles.checkLabelRequired" aria-hidden="true">*</span>
        </component>
      </sort-by>

      <input
        :id="inputId"
        ref="inputRef"
        v-bind="{ ...$attrs, ...ouiaProps, class: undefined }"
        type="checkbox"
        :class="[styles.checkInput, inputClass]"
        :checked="value === null ? undefined : value"
        :indeterminate.prop="value === null"
        :aria-invalid="!!invalid"
        :aria-describedby="ariaDescribedby"
        :disabled="disabled"
        :required="required"
        @change="onChange"
      />
    </sort>

    <span v-if="description || $slots.description" :id="descriptionId" :class="styles.checkDescription">
      <slot name="description">{{ description }}</slot>
    </span>
    <span v-if="body || $slots.default" :class="styles.checkBody">
      <slot>{{ body }}</slot>
    </span>
  </component>
</template>

<script lang="ts">
interface Props
  extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'onChange' | 'type' | 'checked' | 'autocomplete'> {
  /** Sets the checkbox wrapper component to render. Defaults to "div", or "label" with labelWrapped. */
  component?: string | Component;
  /** Additional classes added to the input. */
  inputClass?: HTMLAttributes['class'];
  /** Flag to show if the checkbox is disabled. */
  disabled?: boolean;
  /** Flag to show if the checkbox is required. */
  required?: boolean;
  /** Flag to show if the checkbox selection is invalid. */
  invalid?: boolean;
  /** Id of the checkbox. Generated when not set. */
  id?: string;
  /** Label text of the checkbox. */
  label?: string;
  /** Body of the checkbox. */
  body?: string;
  /** Description text of the checkbox. The input is described by it, unless aria-describedby is set ("" removes it). */
  description?: string;
  /** Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified. */
  labelWrapped?: boolean;
  /** Flag to show if the checkbox label is shown before the checkbox input. */
  labelBeforeButton?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Check/check';
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
  name: 'PfCheckbox',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

// without an id and a label of its own, the first field of a form group gets the id of the group
const slots = useSlots();
const generatedId = useId();
const { id: groupFieldId } = useFormGroupFieldId(
  () => props.id,
  () => !props.label && !slots.label,
);
const inputId = computed(() => groupFieldId.value ?? generatedId);

/** Flag to show if the checkbox is checked. If null, the checkbox will be indeterminate (partially checked). */
const value = defineModel<boolean | null>({ default: false });

const emit = defineEmits<{
  (name: 'change', e: Event): void;
  (name: 'update:modelValue', value: boolean): void;
}>();

defineSlots<{
  /** Body of the checkbox, replacing the body prop */
  default?: (props?: Record<never, never>) => VNode[];
  /** Label of the checkbox, replacing the label prop */
  label?: (props?: Record<never, never>) => VNode[];
  /** Description of the checkbox, replacing the description prop */
  description?: (props?: Record<never, never>) => VNode[];
}>();

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const attrs = useAttrs();
const input = useTemplateRef('inputRef');
const descriptionId = useId();
const wrapWithLabel = computed(() => (props.labelWrapped && !props.component) || props.component === 'label');

// the input is described by the description unless aria-describedby is set: an empty string removes it
const ariaDescribedby = computed(() => {
  const custom = attrs['aria-describedby'];
  if (custom !== undefined) {
    return custom === '' ? undefined : String(custom);
  }
  return props.description || slots.description ? descriptionId : undefined;
});

function onChange(e: Event) {
  emit('change', e);
  value.value = (e.currentTarget as HTMLInputElement).checked;
}

defineExpose({
  input,
});
</script>
