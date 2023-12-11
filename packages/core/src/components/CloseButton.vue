<template>
  <pf-button variant="plain" aria-label="Close" @click="emit('click', $event)">
    <xmark-icon />
  </pf-button>
</template>

<script lang="ts" setup>
import type { ComponentProps } from '../util';
import PfButton from './Button.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

defineOptions({
  name: 'PfCloseButton',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'onClick' | 'variant' | 'aria-label'> {
}

defineProps<Props>();

const emit = defineEmits<{
  (name: 'click', e: Event): void;
}>();
</script>
