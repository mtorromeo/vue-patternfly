<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-if="$slots.content"
    v-slot="{ placement }"
    :teleport-to="appendTo"
    :reference="referenceElement"
    :placement="position"
    :offset="Number(distance)"
    :flip="flip"
    :min-width="minWidth"
  >
    <div
      v-if="tooltipDisplay"
      ref="tooltipElement"
      v-bind="{...ouiaProps, ...$attrs}"
      :class="[styles.tooltip, positionModifiers[placement]]"
      :style="{
        maxWidth,
        opacity: opacity ? 1 : 0,
        transition: `opacity ${animationDuration}ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s`,
      }"
      role="tooltip"
      @transitionend="handleTransitionEnd"
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
import { ref, watch, computed, onMounted, onUnmounted, type HTMLAttributes, type RendererElement, useTemplateRef } from 'vue';

import PfTooltipArrow from './TooltipArrow.vue';
import PfTooltipContent from './TooltipContent.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes, useManagedProp } from '../../use';
import type { Placement as UIPlacement } from '@floating-ui/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTooltip',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role' | 'onTransitionend'> {
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** Tooltip position */
  position?: Placement;
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
  distance?: number | string;
  /**
   * aria-labelledby or aria-describedby for tooltip.
   * The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
   * If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.
   */
  aria?: 'describedby' | 'labelledby' | 'none';
  /** CSS fade transition animation duration */
  animationDuration?: number;
  /** Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width. */
  minWidth?: string | 'trigger' | 'auto';
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
  entryDelay: 1000,
  exitDelay: 0,
  distance: 15,
  aria: 'describedby',
  animationDuration: 300,
  flip: true,
  visible: undefined,
  ouiaSafe: true,
});
const safe = ref(!props.animationDuration);
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: computed(() => safe.value && props.ouiaSafe)});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  content?: (props?: Record<never, never>) => any;
}>();

defineEmits<{
  (name: 'update:visible', value: boolean): void;
}>();

const { element: referenceElement, findReference } = useHtmlElementFromVNodes();
const tooltipElement = useTemplateRef('tooltipElement');
const tooltipDisplay = ref(false);
const managedVisible = useManagedProp('visible', false);
const opacity = ref(managedVisible.value);
const showTimer = ref(0);
const hideTimer = ref(0);

const triggerMouseEnter = computed(() => props.trigger.split(' ').includes('mouseenter'));
const triggerFocus = computed(() => props.trigger.split(' ').includes('focus'));
const triggerClick = computed(() => props.trigger.split(' ').includes('click'));

const positionModifiers: Record<UIPlacement, string> = {
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

watch([tooltipElement, triggerClick, triggerFocus, triggerMouseEnter], transitionOutEnd);

watch(managedVisible, () => {
  safe.value = !props.animationDuration;
  opacity.value = safe.value;

  if (managedVisible.value) {
    tooltipDisplay.value = true;
    if (!opacity.value) {
      setTimeout(() => (opacity.value = true), 0);
    }
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
  document.addEventListener('click', handleClick as (e: MouseEvent) => void);
});

onUnmounted(() => {
  clearTimeout(showTimer.value);
  clearTimeout(hideTimer.value);
  document.removeEventListener('click', handleClick as (e: MouseEvent) => void);
  referenceElement.value?.addEventListener('mouseenter', handleMouseEnter);
  referenceElement.value?.addEventListener('mouseleave', handleMouseLeave);
  referenceElement.value?.removeEventListener('focus', handleFocus);
  referenceElement.value?.removeEventListener('blur', handleBlur);
});

function handleClick(e: PointerEvent) {
  if (triggerClick.value) {
    if (e.target === referenceElement.value) {
      show(false);
    } else {
      hide(false);
    }
  }
}

function handleFocus() {
  if (triggerFocus.value) {
    show();
  }
}

function handleBlur() {
  if (triggerFocus.value) {
    hide();
  }
}

function handleMouseEnter() {
  if (triggerMouseEnter.value) {
    show();
  }
}

function handleMouseLeave() {
  if (triggerMouseEnter.value) {
    hide();
  }
}

function show(delay?: boolean) {
  clearTimeout(hideTimer.value);
  if (delay === undefined || delay) {
    showTimer.value = setTimeout(() => (managedVisible.value = true), props.entryDelay);
  } else {
    managedVisible.value = true;
  }
}

function hide(delay?: boolean) {
  clearTimeout(showTimer.value);
  if (delay === undefined || delay) {
    hideTimer.value = setTimeout(() => (managedVisible.value = false), props.exitDelay);
  } else {
    managedVisible.value = false;
  }
}

function transitionOutEnd() {
  if (!managedVisible.value) {
    tooltipDisplay.value = false;
  }
}

function handleTransitionEnd() {
  safe.value = true;
  transitionOutEnd();
}

defineExpose({
  el: tooltipElement,
  show,
  hide,
});
</script>
