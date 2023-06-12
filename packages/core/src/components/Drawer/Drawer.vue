<template>
  <div
    ref="el" :class="[styles.drawer, {
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.inline]: inline,
      [styles.modifiers.static]: static,
      [styles.modifiers.panelLeft]: position === 'left',
      [styles.modifiers.panelBottom]: position === 'bottom',
    }]">
    <overridable-wrapper :component="PfDrawerContent" :exclude="PfDrawerSection">
      <slot />
    </overridable-wrapper>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, provide, type Ref, ref, type HTMLAttributes } from 'vue';
import OverridableWrapper from '../../helpers/OverridableWrapper.vue';
import { DrawerKey } from './common';
import PfDrawerContent from './DrawerContent.vue';
import PfDrawerSection from './DrawerSection.vue';

defineOptions({
  name: 'PfDrawer',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Indicates if the drawer is expanded */
  expanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  inline?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  static?: boolean;
  /** Position of the drawer panel */
  position?: 'left' | 'right' | 'bottom';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const el: Ref<HTMLDivElement | undefined> = ref();

provide(DrawerKey, {
  el,
  expanded: computed(() => props.expanded),
  inline: computed(() => props.inline),
  static: computed(() => props.static),
  position: computed(() => props.position),
});
</script>
