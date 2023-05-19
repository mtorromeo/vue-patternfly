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
import type { ComponentProps } from '../../util';

defineOptions({
  name: 'PfDrawerHead',
});

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfDrawerPanelBody> {
  /** Indicates if there should be no padding around the drawer panel body of the head*/
  noPadding?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
