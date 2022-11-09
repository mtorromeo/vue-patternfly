<template>
  <void @children="findReference">
    <slot />
  </void>

  <div
    ref="tooltipElement"
    :class="styles.tooltip"
    :style="{
      maxWidth,
      opacity: visible ? 1 : 0,
      transition: 'opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s',
      position: floatingUI.strategy,
      zIndex: 9999,
      top: 0,
      left: 0,
      transform: `translate3d(${Math.round(floatingUI.x)}px,${Math.round(floatingUI.y)}px,0)`
    }"
    role="tooltip"
  >
    <pf-tooltip-arrow />
    <pf-tooltip-content :left-aligned="leftAligned">
      <slot name="content" />
    </pf-tooltip-content>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { computed, defineComponent, markRaw, PropType, Ref, ref, watch } from 'vue';

import PfTooltipArrow from './TooltipArrow';
import PfTooltipContent from './TooltipContent';
import Void from '../Void';
import { useFloatingUI, useHtmlElementFromVNodes } from '../../use';
import { flip } from '@floating-ui/core';

export enum TooltipPosition {
  auto = 'auto',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export default defineComponent({
  name: 'PfTooltip',

  components: {
    PfTooltipArrow,
    PfTooltipContent,
    Void,
  },

  props: {
    position: {
      type: String as PropType<TooltipPosition>,
      default: TooltipPosition.top,
      validator: (v: any) => v in TooltipPosition,
    },

    trigger: {
      type: String,
      default: 'mouseenter focus',
    },

    leftAligned: Boolean,

    entryDelay: {
      type: Number,
      default: 300,
    },

    exitDelay: {
      type: Number,
      default: 0,
    },

    distance: {
      type: Number,
      default: 15,
    },

    aria: {
      type: String,
      default: 'describedby',
    },

    animationDuration: {
      type: Number,
      default: 300,
    },

    maxWidth: {
      type: Number,
      default: null,
    },
  },

  setup() {
    const { element: referenceElement, findReference } = useHtmlElementFromVNodes();
    const tooltipElement: Ref<HTMLElement | null> = ref(null);
    const visible = ref(false);

    watch(referenceElement, (el) => {
      el?.addEventListener('mouseenter', () => (visible.value = true));
      el?.addEventListener('mouseleave', () => (visible.value = false));
    });

    const floatingUI = useFloatingUI(
      referenceElement,
      tooltipElement as any,
      computed(() => ({
        middleware: [
          flip(),
        ],
      })),
    );

    return {
      styles: markRaw(styles) as typeof styles,
      findReference,
      tooltipElement,
      floatingUI,
      visible,
    };
  },
});
</script>
