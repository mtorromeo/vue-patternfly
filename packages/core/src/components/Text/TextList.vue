<template>
  <component :is="component" data-pf-content>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

export type TextListVariants = 'ul' | 'dt' | 'dd';

defineOptions({
  name: 'PfTextList',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: TextListVariants;
}

withDefaults(defineProps<Props>(), {
  component: 'ul',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
