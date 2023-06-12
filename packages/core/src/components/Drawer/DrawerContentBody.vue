<template>
  <div :class="[styles.drawerBody, {[styles.modifiers.padding]: padding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerContentBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Indicates if there should be padding around the drawer content body */
  padding?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
