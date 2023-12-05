<template>
  <span
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
      ref="input"
      v-bind="$attrs"
      :disabled="disabled || undefined"
      :value="value"
      @change="handleChange($event as InputEvent)"
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

export interface Props extends /* @vue-ignore */ SelectHTMLAttributes {
  /** @model */
  modelValue?: string;

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
import { provideChildrenTracker, useManagedProp, type ChildrenTrackerInjectionKey } from '../../use';
import type PfFormSelectOption from './FormSelectOption.vue';
import PfFormControlIcon from '../FormControlIcon.vue';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import { computed, ref, type Ref, type SelectHTMLAttributes } from 'vue';


defineOptions({
  name: 'PfFormSelect',
  inheritAttrs: false,
});

const props = defineProps<Props>();

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'change', event: InputEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const input: Ref<HTMLSelectElement | undefined> = ref();
const options = provideChildrenTracker(FormSelectOptionsKey);
const value = useManagedProp('modelValue', '');
const hasStatusIcon = computed(() => props.validated && ['success', 'error', 'warning'].includes(props.validated));

const selectedOption = computed(() => {
  return options.find(option => option.$attrs.value === value.value);
});

const selectedPlaceholder = computed(() => selectedOption.value?.placeholder);

function handleChange(e: InputEvent) {
  value.value = (e.currentTarget as HTMLSelectElement).value;
  emit('change', e);
}

defineExpose({
  input,
});
</script>