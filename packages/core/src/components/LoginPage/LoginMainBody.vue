<template>
  <div :class="styles.loginMainBody">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Login/login';

defineOptions({
  name: 'PfLoginMainBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
