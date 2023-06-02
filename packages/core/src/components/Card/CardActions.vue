<template>
  <div :class="[styles.cardActions, { [styles.modifiers.noOffset]: noOffset }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfCardActions',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Flag indicating that the actions have no offset. */
  noOffset?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
