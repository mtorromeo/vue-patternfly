<template>
  <span
    :class="[
      styles.formControl,
      {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.placeholder]: selectedPlaceholder,
        [styles.modifiers.success]: validated === 'success',
        [styles.modifiers.warning]: validated === 'warning',
        [styles.modifiers.error]: validated === 'error',
      },
      $attrs.class,
    ]"
    :style="[
      {
        '--pf-v6-c-form-control--PaddingInlineEnd':
          multiple !== false && multiple !== undefined
            ? 'var(--pf-v6-c-form-control__select--PaddingInlineEnd)'
            : undefined,
        '--pf-v6-c-form-control__utilities--Gap': multiple !== false && multiple !== undefined ? '0px' : undefined,
        '--pf-v6-c-form-control--ColumnGap': multiple !== false && multiple !== undefined ? '0px' : undefined,
        '--pf-v6-c-form-control--m-icon--icon--spacer':
          multiple !== false && multiple !== undefined ? '0px' : undefined,
      },
      $attrs.style as StyleValue,
    ]"
  >
    <select
      ref="inputRef"
      v-bind="{ ...selectAttrs, ...ouiaProps }"
      :id="fieldId"
      v-model="value"
      :aria-invalid="validated === 'error'"
      :disabled="disabled || undefined"
      :multiple="(multiple !== false && multiple !== undefined) || undefined"
    >
      <slot />
    </select>
    <span :class="styles.formControlUtilities">
      <pf-form-control-icon v-if="hasStatusIcon" :status="validated as 'success' | 'error' | 'warning'" />
      <span v-if="!(multiple !== false && multiple !== undefined)" :class="styles.formControlToggleIcon">
        <caret-down-icon />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
export { FormSelectOptionsKey } from './common';

interface Props<M extends boolean = false, V extends string = string>
  extends OUIAProps, /* @vue-ignore */ Omit<SelectHTMLAttributes, 'value'> {
  /** Selected value, or array of selected values when multiple is set. */
  modelValue?: V | V[] | null;
  multiple?: M;
  disabled?: boolean;

  /**
   * Value to indicate if the input is modified to show that validation state.
   * If set to success, input will be modified to indicate valid state.
   * If set to error,  input will be modified to indicate error state.
   * @values default, success, warning, error
   */
  validated?: 'default' | 'success' | 'warning' | 'error';
}
</script>

<script lang="ts" setup generic="M extends boolean = false, V extends string = string">
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { provideChildrenTracker, useChildrenTracker } from '../../use';
import { FormSelectOptionsKey } from './common';
import PfFormControlIcon from '../FormControlIcon.vue';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import {
  computed,
  getCurrentInstance,
  useAttrs,
  useModel,
  useTemplateRef,
  type SelectHTMLAttributes,
  type StyleValue,
} from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormInputsKey, useFormGroupFieldId } from '../Form/common';

defineOptions({
  name: 'PfFormSelect',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props<M, V>>(), {
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineEmits<{
  (name: 'update:modelValue', value: M extends true ? V[] : V): void;
}>();

const value = useModel(props, 'modelValue');

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const attrs = useAttrs();
const selectAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

const { id: fieldId, linked } = useFormGroupFieldId(() => (typeof attrs.id === 'string' ? attrs.id : undefined));
if (!attrs.id && !linked.value && !attrs['aria-label']) {
  console.error('FormSelect requires either an id or aria-label to be specified');
}

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);
const input = useTemplateRef('inputRef');
const options = provideChildrenTracker(FormSelectOptionsKey);
const hasStatusIcon = computed(() => props.validated && ['success', 'error', 'warning'].includes(props.validated));

const selectedOption = computed(() => {
  return options.find(option => option.$attrs.value === value.value);
});

const selectedPlaceholder = computed(() => selectedOption.value?.placeholder);

defineExpose({
  input,
});
</script>
