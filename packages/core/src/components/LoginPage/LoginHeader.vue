<template>
  <header :class="styles.loginHeader">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
</script>
