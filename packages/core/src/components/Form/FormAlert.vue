<template>
  <form class="pf-v5-c-form__alert">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import type { FormHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFormAlert',
});

export interface Props extends /* @vue-ignore */ FormHTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
