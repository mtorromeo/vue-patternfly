<template>
  <div :class="[styles.drawerSection, {[styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { DrawerColorVariant } from './common';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerSection',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Color variant of the background of the drawer Section */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}

withDefaults(defineProps<Props>(), {
  colorVariant: DrawerColorVariant.default,
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
