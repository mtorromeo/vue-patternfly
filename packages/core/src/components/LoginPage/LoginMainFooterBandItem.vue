<template>
  <p :class="`${styles.loginMainFooterBand}-item`">
    <slot />
  </p>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLoginMainFooterBandItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
