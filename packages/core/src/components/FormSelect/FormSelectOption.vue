<template>
  <option>
    <slot>{{ label }}</slot>
  </option>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<OptionHTMLAttributes, 'label' | 'placeholder'> {
  /** The label for the option, overridden by the default slot */
  label?: string;
  /** Flag indicating if option will have placeholder styling applied when selected */
  placeholder?: boolean;
}
</script>

<script lang="ts" setup>
import type { OptionHTMLAttributes } from 'vue';
import { useChildrenTracker } from '../../use';
import { FormSelectOptionsKey } from './common';

defineOptions({
  name: 'PfFormSelectOption',
});

defineProps<Props>();

defineSlots<{
  /** Content of the option, overrides the label prop */
  default?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(FormSelectOptionsKey);
</script>
