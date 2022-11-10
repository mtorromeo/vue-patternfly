<template>
  <div :class="[styles.drawerBody, {[styles.modifiers.noPadding]: noPadding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

defineProps<{
  /** Indicates if there should be no padding around the drawer panel body */
  noPadding?: boolean;
}>();
</script>
