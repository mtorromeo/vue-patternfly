<template>
  <div
    v-bind="ouiaProps"
    ref="el"
    :class="[styles.drawer, {
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.inline]: inline,
      [styles.modifiers.static]: static,
      [styles.modifiers.panelLeft]: position === 'left',
      [styles.modifiers.panelBottom]: position === 'bottom',
    }]"
  >
    <auto-wrap :component="PfDrawerContent" :exclude="PfDrawerSection">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, provide, type Ref, ref, type HTMLAttributes } from 'vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import { DrawerKey } from './common';
import PfDrawerContent from './DrawerContent.vue';
import PfDrawerSection from './DrawerSection.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawer',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
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
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
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
