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
</script>
