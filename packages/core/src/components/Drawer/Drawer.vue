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
import { computed, provide, type Ref, ref } from 'vue';
import OverridableWrapper from '../../helpers/OverridableWrapper';
import { DrawerKey } from './common';
import PfDrawerContent from './DrawerContent.vue';
import PfDrawerSection from './DrawerSection.vue';

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

const el: Ref<HTMLDivElement | undefined> = ref();

provide(DrawerKey, {
  el,
  expanded: computed(() => props.expanded),
  inline: computed(() => props.inline),
  static: computed(() => props.static),
  position: computed(() => props.position),
});
</script>
