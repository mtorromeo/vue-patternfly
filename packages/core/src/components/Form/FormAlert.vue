<template>
  <form v-bind="(ouiaProps as any)" class="pf-v5-c-form__alert">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import type { FormHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormAlert',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FormHTMLAttributes {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
