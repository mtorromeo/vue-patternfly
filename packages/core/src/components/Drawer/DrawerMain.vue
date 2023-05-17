<template>
  <div :class="styles.drawerMain">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

defineOptions({
  name: 'PfDrawerMain',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
