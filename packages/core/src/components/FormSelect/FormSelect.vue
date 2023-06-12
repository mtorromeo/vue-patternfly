<template>
  <select
    :value="value"
    :class="[styles.formControl, {
      [styles.modifiers.success]: validated === 'success',
      [styles.modifiers.warning]: validated === 'warning',
      [styles.modifiers.placeholder]: selectedPlaceholder,
    }]"
    @change="value = ($event.currentTarget as HTMLSelectElement).value"
  >
    <slot />
  </select>
</template>

<script lang="ts">
export const FormSelectOptionsKey = Symbol("FormSelectOptionsKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfFormSelectOption>>;

export interface Props extends /* @vue-ignore */ SelectHTMLAttributes {
    /** @model */
    modelValue?: string;

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
import type { SelectHTMLAttributes } from 'vue';
import { computed } from 'vue';


defineOptions({
  name: 'PfFormSelect',
});

defineProps<Props>();

defineEmits<{
  (name: 'update:modelValue', value: string): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const options = provideChildrenTracker(FormSelectOptionsKey);
const value = useManagedProp('modelValue', '');

const selectedOption = computed(() => {
  return options.find(option => option.$attrs.value === value.value);
});

const selectedPlaceholder = computed(() => selectedOption.value?.placeholder);
</script>
