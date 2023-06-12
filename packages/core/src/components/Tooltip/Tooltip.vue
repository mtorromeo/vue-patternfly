<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui v-if="$slots.content" :reference="referenceElement" :placement="placement" :offset="distance" flip>
    <div
      ref="tooltipElement"
      v-bind="$attrs"
      :class="[styles.tooltip, positionModifiers[placement]]"
      :style="{
        maxWidth,
        opacity: visible ? 1 : 0,
        transition: 'opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s',
      }"
      role="tooltip"
      @transitionend="hide"
    >
      <pf-tooltip-arrow />
      <pf-tooltip-content :left-aligned="leftAligned">
        <slot name="content">{{ content }}</slot>
      </pf-tooltip-content>
    </div>
  </floating-ui>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { type Ref, ref, watch, computed, type HTMLAttributes } from 'vue';

import PfTooltipArrow from './TooltipArrow';
import PfTooltipContent from './TooltipContent';
import FloatingUi from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough';
import { useHtmlElementFromVNodes } from '../../use';
import type { Placement } from '@floating-ui/core';

export type TooltipPosition = Placement | 'auto';

defineOptions({
  name: 'PfTooltip',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  position?: TooltipPosition;
  trigger?: string;
  leftAligned?: boolean,
  entryDelay?: number;
  exitDelay?: number;
  distance?: number;
  aria?: string;
  animationDuration?: number;
  maxWidth?: number;
  content?: string;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  trigger: 'mouseenter focus',
  entryDelay: 300,
  exitDelay: 0,
  distance: 15,
  aria: 'describedby',
  animationDuration: 300,
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  content?: (props?: Record<never, never>) => any;
}>();

const { element: referenceElement, findReference } = useHtmlElementFromVNodes();
const tooltipElement: Ref<HTMLElement | undefined> = ref();
const visible = ref(false);

const positionModifiers: Record<Placement, string> = {
  top: styles.modifiers.top,
  bottom: styles.modifiers.bottom,
  left: styles.modifiers.left,
  right: styles.modifiers.right,
  'top-start': styles.modifiers.topLeft,
  'top-end': styles.modifiers.topRight,
  'bottom-start': styles.modifiers.bottomLeft,
  'bottom-end': styles.modifiers.bottomRight,
  'left-start': styles.modifiers.leftTop,
  'left-end': styles.modifiers.leftBottom,
  'right-start': styles.modifiers.rightTop,
  'right-end': styles.modifiers.rightBottom,
};

// TODO: actual auto detect
const placement = computed<Placement>(() => props.position === 'auto' ? 'top' : props.position);

watch(tooltipElement, (el) => {
  if (el && !visible.value) {
    el.style.display = 'none';
  }
});

watch(referenceElement, (el) => {
  el?.addEventListener('mouseenter', () => {
    visible.value = true;
    if (tooltipElement.value) {
      tooltipElement.value.style.display = 'initial';
    }
  });
  el?.addEventListener('mouseleave', () => (visible.value = false));
});

function hide() {
  if (!visible.value && tooltipElement.value) {
    tooltipElement.value.style.display = 'none';
  }
}
</script>
