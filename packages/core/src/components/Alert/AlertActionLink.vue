<template>
  <pf-button v-bind="ouiaProps" variant="link" inline>
    <slot />
  </pf-button>
</template>

<script lang="ts" setup>
import type { ComponentProps } from 'vue-component-type-helpers';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAlertActionLink',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'inline' | 'ouiaId' | 'ouiaSafe'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
