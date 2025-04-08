<template>
  <pf-label v-bind="ouiaProps" variant="outline">
    <slot />
  </pf-label>
</template>

<script lang="ts" setup>
import PfLabel, { type Props as LabelProps } from '../Label/Label.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfChip',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<LabelProps, 'variant'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
