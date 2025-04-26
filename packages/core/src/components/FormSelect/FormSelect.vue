<template>
  <span
    v-bind="ouiaProps"
    :class="[
      styles.formControl, {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.placeholder]: selectedPlaceholder,
        [styles.modifiers.success]: validated === 'success',
        [styles.modifiers.warning]: validated === 'warning',
        [styles.modifiers.error]: validated === 'error',
      },
    ]"
  >
    <select
      ref="inputRef"
      v-bind="$attrs"
      v-model="value"
      :disabled="disabled || undefined"
    >
      <slot />
    </select>
    <span :class="styles.formControlUtilities">
      <pf-form-control-icon v-if="hasStatusIcon" :status="(validated as 'success' | 'error' | 'warning')" />
      <span :class="styles.formControlToggleIcon">
        <caret-down-icon />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
export const FormSelectOptionsKey = Symbol("FormSelectOptionsKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfFormSelectOption>>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<SelectHTMLAttributes, 'value'> {
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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { provideChildrenTracker, type ChildrenTrackerInjectionKey, useChildrenTracker } from '../../use';
import type PfFormSelectOption from './FormSelectOption.vue';
import PfFormControlIcon from '../FormControlIcon.vue';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import { computed, type SelectHTMLAttributes, getCurrentInstance, useTemplateRef } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormInputsKey } from '../Form/common';

defineOptions({
  name: 'PfFormSelect',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const value = defineModel<string | string[] | null>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

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
