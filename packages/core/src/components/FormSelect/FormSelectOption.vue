<template>
  <option>
    <slot />
  </option>
</template>

<script lang="ts" setup>
import type { OptionHTMLAttributes } from 'vue';
import { useChildrenTracker } from '../../use';
import { FormSelectOptionsKey } from './FormSelect.vue';

defineOptions({
  name: 'PfFormSelectOption',
});

export interface Props extends /* @vue-ignore */ Omit<OptionHTMLAttributes, 'placeholder'> {
  placeholder?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

useChildrenTracker(FormSelectOptionsKey);
</script>
