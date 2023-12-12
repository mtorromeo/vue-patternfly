<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-if="$slots.content"
    v-slot="{ placement: floatingPlacement }"
    :reference="referenceElement"
    :placement="placement"
    :offset="distance"
    :flip="flip"
  >
    <div
      ref="tooltipElement"
      v-bind="{...ouiaProps, ...$attrs}"
      :class="[styles.tooltip, positionModifiers[floatingPlacement]]"
      :style="{
        maxWidth,
        opacity: managedVisible ? 1 : 0,
        transition: 'opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s',
        display: tooltipDisplay ? 'initial' : 'none',
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
import { type Ref, ref, watch, computed, onMounted, onUnmounted, type HTMLAttributes } from 'vue';

import PfTooltipArrow from './TooltipArrow.vue';
import PfTooltipContent from './TooltipContent.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes, useManagedProp } from '../../use';
import type { Placement } from '@floating-ui/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

export type TooltipPosition = Placement | 'auto';

defineOptions({
  name: 'PfTooltip',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role' | 'onTransitionend'> {
  position?: TooltipPosition;
  /** A combination of the strings 'mouseenter', 'focus' and 'click' */
  trigger?: string;
  /** Flag to indicate that the text content is left aligned */
  leftAligned?: boolean,
  /** Delay in ms before the tooltip appears */
  entryDelay?: number;
  /** Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
   * be given ample time to move their mouse from the trigger to the tooltip content without the content
   * being hidden.
   */
  exitDelay?: number;
  /** Distance of the tooltip to its target */
  distance?: number;
  /**
   * aria-labelledby or aria-describedby for tooltip.
   * The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
   * If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.
   */
  aria?: 'describedby' | 'labelledby' | 'none';
  /** CSS fade transition animation duration */
  animationDuration?: number;
  /** Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width. */
  minWidth?: string | 'trigger';
  /** Maximum width of the tooltip */
  maxWidth?: number;
  /** Tooltip content */
  content?: string;
  /**
   * The desired position to flip the tooltip to if the initial position is not possible.
   * By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.
   */
  flip?: boolean;
  /** value for visibility when trigger is 'manual' */
  visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  trigger: 'mouseenter focus',
  entryDelay: 300,
  exitDelay: 0,
  distance: 15,
  aria: 'describedby',
  animationDuration: 300,
  flip: true,
  visible: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  content?: (props?: Record<never, never>) => any;
}>();

defineEmits<{
  (name: 'update:visible', value: boolean): void;
}>();

const { element: referenceElement, findReference } = useHtmlElementFromVNodes();
const tooltipElement: Ref<HTMLElement | undefined> = ref();
const tooltipDisplay = ref(false);
const managedVisible = useManagedProp('visible', false);

const triggerMouseEnter = computed(() => props.trigger.split(' ').includes('mouseenter'));
const triggerFocus = computed(() => props.trigger.split(' ').includes('focus'));
const triggerClick = computed(() => props.trigger.split(' ').includes('click'));

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

watch([tooltipElement, triggerClick, triggerFocus, triggerMouseEnter], hide);

watch(managedVisible, () => {
  if (managedVisible.value) {
    tooltipDisplay.value = true;
  }
});

watch(referenceElement, (el, oldEl) => {
  oldEl?.removeEventListener('mouseenter', handleMouseEnter);
  oldEl?.removeEventListener('mouseleave', handleMouseLeave);
  oldEl?.removeEventListener('focus', handleFocus);
  oldEl?.removeEventListener('blur', handleBlur);

  el?.addEventListener('mouseenter', handleMouseEnter);
  el?.addEventListener('mouseleave', handleMouseLeave);
  el?.addEventListener('focus', handleFocus);
  el?.addEventListener('blur', handleBlur);
});

onMounted(() => {
  document.addEventListener('click', handleClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClick);
  referenceElement.value?.addEventListener('mouseenter', handleMouseEnter);
  referenceElement.value?.addEventListener('mouseleave', handleMouseLeave);
  referenceElement.value?.removeEventListener('focus', handleFocus);
  referenceElement.value?.removeEventListener('blur', handleBlur);
});

function handleClick(e: MouseEvent) {
  if (triggerClick.value) {
    managedVisible.value = e.target === referenceElement.value;
  }
}

function handleFocus() {
  if (triggerFocus.value) {
    managedVisible.value = true;
  }
}

function handleBlur() {
  if (triggerFocus.value) {
    managedVisible.value = false;
  }
}

function handleMouseEnter() {
  if (triggerMouseEnter.value) {
    managedVisible.value = true;
  }
}

function handleMouseLeave() {
  if (triggerMouseEnter.value) {
    managedVisible.value = false;
  }
}

function hide() {
  if (!managedVisible.value) {
    tooltipDisplay.value = false;
  }
}

defineExpose({
  el: tooltipElement,
});
</script>
