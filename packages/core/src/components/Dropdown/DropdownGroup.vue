<template>
  <section :class="styles.dropdownGroup">
    <h1 v-if="$slots.label" :class="styles.dropdownGroupTitle" aria-hidden>
      <slot name="label" />
    </h1>
    <ul role="none">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDropdownGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
}>();
</script>
