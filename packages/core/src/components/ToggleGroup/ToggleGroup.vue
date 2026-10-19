<template>
  <div v-bind="ouiaProps" :class="[styles.toggleGroup, { [styles.modifiers.compact]: compact }]" role="group">
    <slot />
  </div>
</template>

<script lang="ts">
export const ToggleGroupDisabledKey = Symbol('ToggleGroupDisabledKey') as InjectionKey<ComputedRef<boolean | undefined>>;
export const ToggleGroupSelectionKey = Symbol('ToggleGroupSelectionKey') as InjectionKey<Ref<unknown>>;

interface Props<T> extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role'> {
  /** Selected item value, or array of values for multiple selection. */
  modelValue?: T | null;
  /** Modifies the toggle group to include compact styling. */
  compact?: boolean;
  /** Disable all toggle group items under this component. */
  disabled?: boolean;
}
</script>

<script lang="ts" setup generic="T = string | number | (string | number)[]">
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import { type InjectionKey, provide, computed, type ComputedRef, type Ref, type HTMLAttributes, useModel } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToggleGroup',
});

const props = withDefaults(defineProps<Props<T>>(), {
  modelValue: null,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  // Deselecting the only selected item of a single selection emits undefined
  (e: 'update:modelValue', value: T extends unknown[] ? T : T | undefined): void;
}>();

const value = useModel(props, 'modelValue');

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(ToggleGroupDisabledKey, computed(() => props.disabled));

provide(ToggleGroupSelectionKey, value);
</script>
