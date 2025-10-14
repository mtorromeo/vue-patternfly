<template>
  <pf-button v-bind="ouiaProps" variant="plain" aria-label="Close">
    <template #icon>
      <xmark-icon />
    </template>
  </pf-button>
</template>

<script lang="ts" setup>
import PfButton from './Button.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import { useOUIAProps } from '../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfCloseButton',
});

interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'aria-label'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
