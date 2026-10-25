<template>
  <div
    v-bind="ouiaProps"
    ref="elRef"
    :class="[
      styles.drawer,
      {
        [styles.modifiers.expanded]: expandedClass,
        [styles.modifiers.inline]: inline,
        [styles.modifiers.viewport]: viewport,
        [styles.modifiers.static]: static,
        [styles.modifiers.pill]: pill,
        [styles.modifiers.panelLeft]: position === 'start',
        [styles.modifiers.panelBottom]: position === 'bottom',
      },
    ]"
  >
    <auto-wrap :component="PfDrawerContent" :exclude="PfDrawerSection">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Indicates if the drawer is expanded */
  expanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  inline?: boolean;
  /** Positions the drawer as fixed to fill the viewport. Place the drawer after Page as a sibling. */
  viewport?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  static?: boolean;
  /** @beta Indicates if the drawer should have pill styling. */
  pill?: boolean;
  /** Position of the drawer panel */
  position?: 'start' | 'end' | 'bottom';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, provide, ref, type HTMLAttributes, type VNode, watch, useTemplateRef } from 'vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import { DrawerKey } from './common';
import PfDrawerContent from './DrawerContent.vue';
import PfDrawerSection from './DrawerSection.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawer',
});

const props = withDefaults(defineProps<Props>(), {
  position: 'end',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Callback when the drawer panel has finished expanding */
  (name: 'expand', event: TransitionEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const el = useTemplateRef('elRef');
const display = ref(props.static || props.expanded);
const expandedClass = ref(props.expanded);
const isOpen = computed(() => props.static || props.expanded);

provide(DrawerKey, {
  el,
  expanded: isOpen,
  display,
  static: computed(() => props.static),
  inline: computed(() => props.inline),
  viewport: computed(() => props.viewport),
  position: computed(() => props.position),
  onExpand: event => emit('expand', event),
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
