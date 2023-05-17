<template>
  <div :class="[styles.drawerBody, {[styles.modifiers.padding]: padding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

defineOptions({
  name: 'PfDrawerContentBody',
});

defineProps<{
  /** Indicates if there should be padding around the drawer content body */
  padding?: boolean;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
