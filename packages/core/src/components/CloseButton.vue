<template>
  <pf-button v-bind="ouiaProps" variant="plain" :aria-label="messages.close">
    <template #icon>
      <xmark-icon />
    </template>
  </pf-button>
</template>

<script lang="ts" setup>
import PfButton from './Button.vue';
import { usePfMessages } from '../messages';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfCloseButton',
});

interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'aria-label' | 'ouiaId' | 'ouiaSafe'> {}

const props = defineProps<Props>();
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>
