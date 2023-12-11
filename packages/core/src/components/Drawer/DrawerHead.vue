<template>
  <pf-drawer-panel-body>
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
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
