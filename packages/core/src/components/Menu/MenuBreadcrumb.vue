<template>
  <div :class="styles.menuBreadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
</script>
