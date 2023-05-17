<template>
  <div :class="styles.drawerActions">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

defineOptions({
  name: 'PfDrawerActions',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
