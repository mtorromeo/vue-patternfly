<template>
  <div :class="styles.loginMainBody">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLoginMainBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
import styles from '@patternfly/react-styles/css/components/Login/login';
</script>
