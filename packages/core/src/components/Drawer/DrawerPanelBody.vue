<template>
  <div :class="[styles.drawerBody, {[styles.modifiers.noPadding]: noPadding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

defineOptions({
  name: 'PfDrawerPanelBody',
});

defineProps<{
  /** Indicates if there should be no padding around the drawer panel body */
  noPadding?: boolean;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
