<template>
  <div v-bind="(ouiaProps as any)" :class="[styles.cardActions, { [styles.modifiers.noOffset]: noOffset }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardActions',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
    /** Flag indicating that the actions have no offset. */
  noOffset?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
