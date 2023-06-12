<template>
  <div :class="[styles.drawerBody, {[styles.modifiers.noPadding]: noPadding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerPanelBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Indicates if there should be no padding around the drawer panel body */
  noPadding?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
