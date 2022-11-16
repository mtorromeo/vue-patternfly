<template>
  <pf-drawer-main>
    <overridable-wrapper
      force
      component="div"
      :exclude="PfDrawerPanelContent"
      ref="el"
      :class="[styles.drawerContent, {
        [styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200,
      }]"
    >
      <slot />
    </overridable-wrapper>

    <slot name="content" />
  </pf-drawer-main>
</template>

<script lang="ts">
export type DrawerContentRef = Ref<HTMLDivElement | InstanceType<typeof OverridableWrapper> | undefined>;
export const DrawerContentRefKey = Symbol('DrawerContentRefKey') as InjectionKey<DrawerContentRef>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { type InjectionKey, provide, type Ref, ref } from 'vue';
import { DrawerColorVariant } from './common';

import OverridableWrapper from '../../helpers/OverridableWrapper';
import PfDrawerMain from './DrawerMain.vue';
import PfDrawerPanelContent from './DrawerPanelContent.vue';

withDefaults(defineProps<{
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}>(), {
  colorVariant: DrawerColorVariant.default,
});

const el: Ref<HTMLDivElement | undefined> = ref();
provide(DrawerContentRefKey, el);
</script>
