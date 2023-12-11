<template>
  <div :class="[styles.toggleGroup, { [styles.modifiers.compact]: compact }]" role="group">
    <slot />
  </div>
</template>

<script lang="ts">
export const ToggleGroupDisabledKey = Symbol('ToggleGroupDisabledKey') as InjectionKey<ComputedRef<boolean | undefined>>;
export const ToggleGroupSelectionKey = Symbol('ToggleGroupSelectionKey') as InjectionKey<WritableComputedRef<unknown>>;

// TODO: readd `extends /* @vue-ignore */ Omit<HTMLAttributes, 'role'>` once https://github.com/vuejs/language-tools/issues/3723 is fixed
export interface Props<T> {
  /** Modifies the toggle group to include compact styling. */
  compact?: boolean;
  /** Disable all toggle group items under this component. */
  disabled?: boolean;

  modelValue?: T;
}

import { PfToggleGroup, PfToggleGroupItem } from '.';

export function useSingleToggleGroup<T>() {
  return [PfToggleGroup<T | undefined>, PfToggleGroupItem<T>];
}

export function useMultiToggleGroup<T>() {
  return [PfToggleGroup<T[]>, PfToggleGroupItem<T>];
}
</script>

<script lang="ts" setup generic="T = string | number | (string | number)[]">
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import { type InjectionKey, provide, computed, type ComputedRef, type WritableComputedRef } from 'vue';
import { useManagedProp } from '../../use';

defineOptions({
  name: 'PfToggleGroup',
});

const props = defineProps<Props<T>>();

defineEmits<{
  (name: 'update:modelValue', value: T): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(ToggleGroupDisabledKey, computed(() => props.disabled));

const value = useManagedProp<T | undefined>('modelValue', undefined);
provide(ToggleGroupSelectionKey, value);
</script>
