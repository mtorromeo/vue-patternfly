<template>
  <pf-button variant="link" inline>
    <slot />
  </pf-button>
</template>

<script lang="ts" setup>
import type { ComponentProps } from '../../util';
import PfButton from '../Button.vue';

defineOptions({
  name: 'PfAlertActionLink',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'inline'> {
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
