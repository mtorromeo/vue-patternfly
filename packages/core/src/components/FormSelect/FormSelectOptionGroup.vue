<template>
  <optgroup :label="label" :disabled="disabled">
    <slot />
  </optgroup>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<OptgroupHTMLAttributes, 'label' | 'disabled'> {
  /** The label for the option group */
  label: string;
  /** Flag indicating if the option group is disabled */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import type { OptgroupHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFormSelectOptionGroup',
});

defineProps<Props>();

defineSlots<{
  /** The pf-form-select-option components of the group */
  default?: (props?: Record<never, never>) => any;
}>();
</script>
