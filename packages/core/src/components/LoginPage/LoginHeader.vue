<template>
  <header :class="styles.loginHeader">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLoginHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();
</script>
