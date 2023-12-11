<template>
  <pf-button v-bind="ouiaProps" variant="link" inline>
    <slot />
  </pf-button>
</template>

<script lang="ts" setup>
import type { ComponentProps } from '../../util';
import PfButton from '../Button.vue';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAlertActionLink',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'inline'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
