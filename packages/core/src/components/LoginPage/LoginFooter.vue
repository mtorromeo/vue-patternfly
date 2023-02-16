<template>
  <footer :class="styles.loginFooter">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
</script>
