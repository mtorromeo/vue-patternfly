<template>
  <pf-drawer-panel-body :no-padding="noPadding">
    <div :class="styles.drawerHead">
      <slot />
    </div>
  </pf-drawer-panel-body>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

import PfDrawerPanelBody from './DrawerPanelBody.vue';

defineOptions({
  name: 'PfDrawerHead',
});

defineProps<{
  /** Indicates if there should be no padding around the drawer panel body of the head*/
  noPadding?: boolean;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
