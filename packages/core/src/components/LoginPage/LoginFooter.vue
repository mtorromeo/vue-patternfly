<template>
  <footer :class="styles.loginFooter">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLoginFooter',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
