<template>
  <div ref="el" :class="[styles.drawer, {
    [styles.modifiers.expanded]: expanded,
    [styles.modifiers.inline]: inline,
    [styles.modifiers.static]: static,
    [styles.modifiers.panelLeft]: position === 'left',
    [styles.modifiers.panelBottom]: position === 'bottom',
  }]">
    <slot />
  </div>
</template>

<script lang="ts">
export enum DrawerColorVariant {
  default = 'default',
  light200 = 'light-200'
}

export type DrawerProvide = {
  el: Ref<HTMLDivElement | null>;
  expanded: ComputedRef<boolean>;
  inline: ComputedRef<boolean>;
  static: ComputedRef<boolean>;
  position: ComputedRef<'left' | 'right' | 'bottom'>;
}

export const DrawerKey = Symbol('DrawerKey') as InjectionKey<DrawerProvide>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, ComputedRef, InjectionKey, provide, Ref, ref } from 'vue';

const props = withDefaults(defineProps<{
  /** Indicates if the drawer is expanded */
  expanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  inline?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  static?: boolean;
  /** Position of the drawer panel */
  position?: 'left' | 'right' | 'bottom';
}>(), {
  position: 'right',
});

defineEmits({
  /** Callback when drawer panel is expanded after waiting 250ms for animation to complete. */
  expand: () => true,
});

const el = ref<HTMLDivElement | null>(null);

provide(DrawerKey, {
  el,
  expanded: computed(() => props.expanded),
  inline: computed(() => props.inline),
  static: computed(() => props.static),
  position: computed(() => props.position),
});
</script>
