<template>
  <pf-label v-bind="ouiaProps" variant="outline">
    <slot />
  </pf-label>
</template>

<script lang="ts" setup>
import PfLabel from '../Label/Label.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfChip',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfLabel>, 'variant' | 'ouiaId' | 'ouiaSafe'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
