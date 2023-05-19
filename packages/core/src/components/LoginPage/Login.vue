<template>
  <div :class="styles.login">
    <div :class="styles.loginContainer">
      <slot name="header" />
      <main :class="styles.loginMain">
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLogin',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
