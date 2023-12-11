<template>
  <component v-bind="(ouiaProps as any)" :is="component" data-pf-content>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

export type TextListVariants = 'ul' | 'dt' | 'dd';

defineOptions({
  name: 'PfTextList',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  component?: TextListVariants;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'ul',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
