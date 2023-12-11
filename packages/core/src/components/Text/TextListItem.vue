<template>
  <component v-bind="(ouiaProps as any)" :is="component" data-pf-content>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { LiHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

export type TextListItemVariants = 'li' | 'dt' | 'dd';

defineOptions({
  name: 'PfTextListItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  component?: TextListItemVariants;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'li',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
