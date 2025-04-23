<template>
  <pf-drawer-main v-bind="ouiaProps">
    <auto-wrap
      ref="elRef"
      force
      component="div"
      :exclude="PfDrawerPanelContent"
      :class="[styles.drawerContent, {
        [styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200,
        [styles.modifiers.noBackground]: colorVariant === DrawerColorVariant.noBackground,
      }]"
    >
      <slot />
    </auto-wrap>

    <slot name="content" />
  </pf-drawer-main>
</template>

<script lang="ts">
export type DrawerContentRef = Readonly<Ref<HTMLDivElement | InstanceType<typeof AutoWrap> | null>>;
export const DrawerContentRefKey = Symbol('DrawerContentRefKey') as InjectionKey<DrawerContentRef>;

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfDrawerMain> {
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerColorVariant | 'light-200' | 'no-background' | 'default';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { type InjectionKey, provide, type Ref, useTemplateRef } from 'vue';
import { DrawerColorVariant } from './common';
import type { ComponentProps } from '../../util';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfDrawerMain from './DrawerMain.vue';
import PfDrawerPanelContent from './DrawerPanelContent.vue';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerContent',
});

const props = withDefaults(defineProps<Props>(), {
  colorVariant: DrawerColorVariant.default,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  content?: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');
provide(DrawerContentRefKey, el);
</script>
