<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-if="$slots.content || content"
    :hidden="!visible"
    v-slot="{ placement }"
    :teleport-to="appendTo"
    :reference="referenceElement"
    :placement="position"
    :offset="Number(distance)"
    :flip="flip"
    :min-width="minWidth ?? 'auto'"
    :z-index="zIndex"
    :animation-duration="animationDuration"
    @hidden="onHidden"
    @shown="safe = true"
  >
    <div
      ref="tooltipElementRef"
      v-bind="{ ...ouiaProps, ...$attrs }"
      :id="tooltipId"
      :class="[styles.tooltip, positionModifiers[placement]]"
      :style="{ maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth }"
      role="tooltip"
      :aria-live="ariaLive ?? (triggerRef ? 'polite' : 'off')"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <pf-tooltip-arrow />
      <pf-tooltip-content :left-aligned="leftAligned">
        <slot name="content">{{ content }}</slot>
      </pf-tooltip-content>
    </div>
  </floating-ui>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role' | 'onTransitionend'> {
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** Id of the tooltip, generated if not set */
  id?: string;
  /** Tooltip position. The 'auto' position chooses the side with the most space. */
  position?: Placement;
  /** A combination of the strings 'mouseenter', 'focus' and 'click', or 'manual' to show the tooltip only through v-model:visible */
  trigger?: string;
  /**
   * The trigger element, when it cannot be wrapped by the tooltip: an element, a selector or a function returning it.
   * It replaces the element of the default slot.
   */
  triggerRef?: HTMLElement | string | (() => HTMLElement | null | undefined) | null;
  /** Flag to indicate that the text content is left aligned */
  leftAligned?: boolean;
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
   * The trigger gets the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
   * If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.
   */
  aria?: 'describedby' | 'labelledby' | 'none';
  /**
   * Determines whether the tooltip is an aria-live region. Defaults to 'polite' with a triggerRef, to ensure the
   * tooltip content is announced to assistive technologies, and to 'off' otherwise.
   */
  ariaLive?: 'off' | 'polite';
  /** CSS fade transition animation duration */
  animationDuration?: number;
  /** Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width. */
  minWidth?: string | 'trigger' | 'auto';
  /** Maximum width of the tooltip, a number of pixels or a CSS length */
  maxWidth?: number | string;
  /** z-index of the tooltip */
  zIndex?: number;
  /** Tooltip content, replaced by the content slot */
  content?: string;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  flip?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import {
  ref,
  watch,
  computed,
  onMounted,
  onUnmounted,
  type HTMLAttributes,
  type RendererElement,
  type VNode,
  useTemplateRef,
  useId,
} from 'vue';

import PfTooltipArrow from './TooltipArrow.vue';
import PfTooltipContent from './TooltipContent.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes } from '../../use';
import type { Placement as UIPlacement } from '@floating-ui/dom';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTooltip',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  trigger: 'mouseenter focus',
  entryDelay: 300,
  exitDelay: 300,
  distance: 15,
  aria: 'describedby',
  animationDuration: 300,
  flip: true,
  zIndex: 9999,
  ouiaSafe: true,
});

const emit = defineEmits<{
  /** Emitted when the hide transition of the tooltip has finished */
  (name: 'hidden'): void;
}>();

const safe = ref(!props.animationDuration);
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: computed(() => safe.value && props.ouiaSafe) });

/** value for visibility when trigger is 'manual' */
const visible = defineModel<boolean>('visible', { default: false });

defineSlots<{
  /** The trigger of the tooltip, unless triggerRef is set */
  default?: (props?: Record<never, never>) => VNode[];
  /** Content of the tooltip, replacing the content prop */
  content?: (props?: Record<never, never>) => VNode[];
}>();

const { element: slotReference, findReference } = useHtmlElementFromVNodes();

// the trigger is the triggerRef element when set, resolved once mounted, or the element of the default slot
const triggerRefElement = ref<HTMLElement | null>(null);
function resolveTriggerRef() {
  const { triggerRef } = props;
  if (typeof triggerRef === 'string') {
    triggerRefElement.value = document.querySelector<HTMLElement>(triggerRef);
  } else if (typeof triggerRef === 'function') {
    triggerRefElement.value = triggerRef() ?? null;
  } else {
    triggerRefElement.value = triggerRef ?? null;
  }
}
onMounted(resolveTriggerRef);
watch(() => props.triggerRef, resolveTriggerRef);
const referenceElement = computed(() => triggerRefElement.value ?? slotReference.value);
const manual = computed(() => props.trigger.trim() === 'manual');
const tooltipElement = useTemplateRef('tooltipElementRef');
const randomId = useId();
const tooltipId = computed(() => props.id || `pf-tooltip-${randomId}`);

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

watch(visible, () => {
  safe.value = !props.animationDuration;
});

watch(referenceElement, (el, oldEl) => {
  oldEl?.removeEventListener('mouseenter', handleMouseEnter);
  oldEl?.removeEventListener('mouseleave', handleMouseLeave);
  oldEl?.removeEventListener('focus', handleFocus);
  oldEl?.removeEventListener('blur', handleBlur);
  oldEl?.removeEventListener('keydown', handleTriggerKeydown);

  el?.addEventListener('mouseenter', handleMouseEnter);
  el?.addEventListener('mouseleave', handleMouseLeave);
  el?.addEventListener('focus', handleFocus);
  el?.addEventListener('blur', handleBlur);
  el?.addEventListener('keydown', handleTriggerKeydown);
});

// while visible, the trigger is described or labelled by the tooltip: a slot trigger with its own aria attribute is
// left untouched, while the id is appended to the aria attribute of a triggerRef element, like upstream
let ariaApplied: [Element, string, string] | undefined;
function removeAria() {
  if (!ariaApplied) {
    return;
  }
  const [el, attr, id] = ariaApplied;
  const tokens = (el.getAttribute(attr) ?? '').split(/\s+/).filter(token => token && token !== id);
  if (tokens.length) {
    el.setAttribute(attr, tokens.join(' '));
  } else {
    el.removeAttribute(attr);
  }
  ariaApplied = undefined;
}
watch(
  [referenceElement, () => props.aria, tooltipId, visible],
  ([el, aria, id, isVisible]) => {
    removeAria();
    if (!el || !isVisible || aria === 'none') {
      return;
    }
    const attr = `aria-${aria}`;
    const existing = el.getAttribute(attr);
    if (!existing) {
      el.setAttribute(attr, id);
      ariaApplied = [el, attr, id];
    } else if (triggerRefElement.value && !existing.split(/\s+/).includes(id)) {
      el.setAttribute(attr, `${existing} ${id}`);
      ariaApplied = [el, attr, id];
    }
  },
  { immediate: true },
);

onMounted(() => {
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleDocumentKeydown);
});

onUnmounted(() => {
  clearTimeout(visibilityTimer);
  removeAria();
  document.removeEventListener('click', handleClick);
  document.removeEventListener('keydown', handleDocumentKeydown);
  referenceElement.value?.removeEventListener('mouseenter', handleMouseEnter);
  referenceElement.value?.removeEventListener('mouseleave', handleMouseLeave);
  referenceElement.value?.removeEventListener('focus', handleFocus);
  referenceElement.value?.removeEventListener('blur', handleBlur);
  referenceElement.value?.removeEventListener('keydown', handleTriggerKeydown);
});

function onHidden() {
  safe.value = true;
  emit('hidden');
}

let visibilityTimer: ReturnType<typeof setTimeout> | undefined;

function setVisibleAfter(value: boolean, delay: number) {
  clearTimeout(visibilityTimer);
  if (delay > 0) {
    visibilityTimer = setTimeout(() => {
      visible.value = value;
    }, delay);
  } else {
    visible.value = value;
  }
}

function show() {
  setVisibleAfter(true, props.entryDelay);
}

function hide() {
  setVisibleAfter(false, props.exitDelay);
}

function handleClick(e: MouseEvent) {
  if (!triggerClick.value) {
    return;
  }
  // like upstream, any click hides a visible tooltip, a click on the trigger shows it
  if (visible.value) {
    hide();
  } else if (e.target instanceof Node && referenceElement.value?.contains(e.target)) {
    show();
  }
}

function handleDocumentKeydown(e: KeyboardEvent) {
  if (!manual.value && e.key === 'Escape' && visible.value) {
    hide();
  }
}

function handleTriggerKeydown(e: Event) {
  if (!manual.value && e instanceof KeyboardEvent && e.key === 'Enter') {
    if (visible.value) {
      hide();
    } else {
      show();
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

defineExpose({
  el: tooltipElement,
});
</script>
