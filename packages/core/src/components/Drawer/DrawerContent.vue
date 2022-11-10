<template>
  <pf-drawer-main>
    <div ref="el" :class="[styles.drawerContent, {
      [styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200,
    }]">
      <slot />
    </div>

    <slot name="content" />
  </pf-drawer-main>
</template>

<script lang="ts">
export type DrawerContentRef = Ref<HTMLDivElement | null>;
export const DrawerContentRefKey = Symbol('DrawerContentRefKey') as InjectionKey<DrawerContentRef>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { InjectionKey, provide, Ref, ref } from 'vue';
import { DrawerColorVariant } from './Drawer.vue';

import PfDrawerMain from './DrawerMain.vue';

withDefaults(defineProps<{
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}>(), {
  colorVariant: DrawerColorVariant.default,
});

const el = ref<HTMLDivElement | null>(null);
provide(DrawerContentRefKey, el);
</script>
