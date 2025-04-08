<template>
  <div
    v-bind="ouiaProps"
    ref="elRef"
    :class="[styles.drawer, {
      [styles.modifiers.expanded]: expandedClass,
      [styles.modifiers.inline]: inline,
      [styles.modifiers.static]: static,
      [styles.modifiers.panelLeft]: position === 'start',
      [styles.modifiers.panelBottom]: position === 'bottom',
    }]"
    @animationend="display = isOpen"
  >
    <auto-wrap :component="PfDrawerContent" :exclude="PfDrawerSection">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, provide, ref, type HTMLAttributes, watch, useTemplateRef } from 'vue';
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
  position?: 'start' | 'end' | 'bottom';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'end',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');
const display = ref(props.static || props.expanded);
const expandedClass = ref(props.expanded);
const isOpen = computed(() => props.static || props.expanded);

provide(DrawerKey, {
  el,
  expanded: isOpen,
  display,
  inline: computed(() => props.inline),
  position: computed(() => props.position),
});

watch(isOpen, expanded => {
  if (expanded) {
    display.value = true;
    setTimeout(() => (expandedClass.value = true), 50);
  } else {
    expandedClass.value = false;
  }
});
</script>
