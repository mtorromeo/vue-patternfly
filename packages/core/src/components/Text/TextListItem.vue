<template>
  <component :is="component" data-pf-content>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { LiHTMLAttributes } from 'vue';

export type TextListItemVariants = 'li' | 'dt' | 'dd';

defineOptions({
  name: 'PfTextListItem',
});

export interface Props extends /* @vue-ignore */ LiHTMLAttributes {
  component?: TextListItemVariants;
}

withDefaults(defineProps<Props>(), {
  component: 'li',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
