<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui :reference="referenceElement" flip>
    <div
      ref="tooltipElement"
      :class="styles.tooltip"
      :style="{
        maxWidth,
        opacity: visible ? 1 : 0,
        transition: 'opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s',
      }"
      role="tooltip"
    >
      <pf-tooltip-arrow />
      <pf-tooltip-content :left-aligned="leftAligned">
        <slot name="content" />
      </pf-tooltip-content>
    </div>
  </floating-ui>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { defineComponent, markRaw, type PropType, type Ref, ref, watch } from 'vue';

import PfTooltipArrow from './TooltipArrow';
import PfTooltipContent from './TooltipContent';
import FloatingUi from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough';
import { useHtmlElementFromVNodes } from '../../use';

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
    FloatingUi,
    PassThrough,
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
    const tooltipElement: Ref<HTMLElement | undefined> = ref();
    const visible = ref(false);

    watch(referenceElement, (el) => {
      el?.addEventListener('mouseenter', () => (visible.value = true));
      el?.addEventListener('mouseleave', () => (visible.value = false));
    });

    return {
      referenceElement,
      styles: markRaw(styles) as typeof styles,
      findReference,
      tooltipElement,
      visible,
    };
  },
});
</script>
