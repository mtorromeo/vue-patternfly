<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-slot="{ placement, middlewareData }"
    :teleport-to="appendTo"
    :reference="trigger"
    :placement="position === 'auto' ? 'top' : position"
    :middleware="floatingMiddleware"
    :z-index="zIndex"
    :hidden="!visible"
    :animation-duration="animationDuration"
    @shown="emit('shown')"
    @hidden="emit('hidden')"
  >
    <pf-focus-trap
      ref="dialogRef"
      v-bind="{ ...ouiaProps, ...$attrs }"
      :active="trapActive && visible"
      :focus-trap-options="focusTrapOptions"
      :class="[
        styles.popover,
        positionModifiers[placement],
        alertSeverityVariant && styles.modifiers[alertSeverityVariant],
        {
          [styles.modifiers.noPadding]: noPadding,
          [styles.modifiers.widthAuto]: autoWidth,
        },
      ]"
      role="dialog"
      aria-modal="true"
      :aria-label="$slots.header ? undefined : ariaLabel"
      :aria-labelledby="$slots.header ? `popover-${uniqueId}-header` : undefined"
      :aria-describedby="`popover-${uniqueId}-body`"
      :style="{
        minWidth: hasCustomMinWidth ? minWidth : undefined,
        maxWidth: hasCustomMaxWidth ? maxWidth : undefined,
      }"
      :data-popper-reference-hidden="middlewareData.hide?.referenceHidden"
      :data-popper-escaped="middlewareData.hide?.escaped"
      :data-popper-placement="placement"
      @mousedown="trapActive = false"
      @mouseenter="hover && open($event)"
      @mouseleave="hover && close($event)"
    >
      <div :class="styles.popoverArrow" />
      <div :class="styles.popoverContent">
        <div v-if="!noClose && !hover" :class="styles.popoverClose">
          <pf-close-button :aria-label="closeBtnAriaLabel" style="pointer-events: auto" @click.stop="close" />
        </div>

        <header v-if="$slots.header" :class="styles.popoverHeader">
          <div :id="`popover-${uniqueId}-header`" :class="styles.popoverTitle">
            <span v-if="$slots['header-icon']" :class="styles.popoverTitleIcon">
              <slot name="header-icon" />
            </span>
            <component :is="headerComponent" :class="styles.popoverTitleText">
              <span v-if="alertSeverityVariant" class="pf-v6-screen-reader">
                {{ alertSeverityScreenReaderText ?? `${alertSeverityVariant} alert:` }}
              </span>
              <slot name="header" :hide="() => close()" />
            </component>
          </div>
        </header>

        <div :id="`popover-${uniqueId}-body`" :class="styles.popoverBody">
          <slot name="body" :hide="() => close()" />
        </div>

        <footer v-if="$slots.footer" :id="`popover-${uniqueId}-footer`" :class="styles.popoverFooter">
          <slot name="footer" :hide="() => close()" />
        </footer>
      </div>
    </pf-focus-trap>
  </floating-ui>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<
      ComponentProps<typeof PfFocusTrap>,
      'active' | 'role' | 'aria-modal' | 'aria-labelledby' | 'aria-describedby' | 'ouiaId' | 'ouiaSafe'
    > {
  /** Disables the focus trap of a popover opened by a click, such as when it has no focusable content */
  noFocusTrap?: boolean;
  /** The element to focus when the popover becomes visible. By default the first focusable element will receive focus. */
  elementToFocus?: HTMLElement | SVGElement | string;
  /** Element or selector where to render the floating popover */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** The trigger element, a selector or a function returning it, to use in place of the default slot */
  triggerRef?: HTMLElement | string | (() => HTMLElement | null | undefined) | null;
  /** @deprecated Opens the popover on hover and focus rather than on click. Prefer a tooltip. */
  hover?: boolean;
  /** Removes fixed-width and allows width to be defined by contents */
  autoWidth?: boolean;
  /** Allows content to touch edges of popover container */
  noPadding?: boolean;
  /** Hides the close button */
  noClose?: boolean;
  /** Keeps the popover at its position even when it does not fit, rather than flipping it */
  noFlip?: boolean;
  /** The order of the positions to try when the popover does not fit at its position */
  flipBehavior?: Placement[];
  /** Options of the flip middleware, replacing flipBehavior */
  flipOptions?: FlipOptions;
  /** Options of the auto placement middleware, used when position is "auto" */
  placementOptions?: AutoPlacementOptions;
  /** Keeps the popover open when a click occurs outside of it */
  noHideOnOutsideClick?: boolean;
  /**
   * Popover position. Unless noFlip is set, it will change the position if there is not enough space for it, in the
   * order of flipBehavior.
   */
  position?: Placement | 'auto';
  /** Minimum width of the popover (default 6.25rem) */
  minWidth?: string;
  /** Maximum width of the popover (default 18.75rem) */
  maxWidth?: string;
  /** CSS fade transition animation duration */
  animationDuration?: number;
  /** Accessible label for the close button */
  closeBtnAriaLabel?: string;
  /** Distance of the popover to its target */
  distance?: number;
  /** Accessible label for the popover, required when there is no header */
  ariaLabel?: string;
  /** Sets the heading level to use for the popover header */
  headerComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Severity variants for an alert popover. This modifies the color of the header to match the severity. */
  alertSeverityVariant?: 'custom' | 'info' | 'warning' | 'success' | 'danger';
  /** Text announced by screen readers to indicate the severity of an alert popover. Defaults to "{variant} alert:". */
  alertSeverityScreenReaderText?: string;
  /** The z-index of the popover */
  zIndex?: number;
}

const positionModifiers: Record<string, string> = {
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

const defaultFlipBehavior: Placement[] = [
  'top',
  'bottom',
  'left',
  'right',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
  'right-start',
  'right-end',
];
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { useHtmlElementFromVNodes } from '../use';
import { computed, onMounted, ref, watch, type RendererElement, type VNode, useTemplateRef, useId } from 'vue';
import { useEventListener } from '@vueuse/core';
import popoverMaxWidth from '@patternfly/react-tokens/dist/js/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/js/c_popover_MinWidth';
import PfFocusTrap from '../helpers/FocusTrap.vue';
import PfCloseButton from './CloseButton.vue';
import FloatingUi from '../helpers/FloatingUi.vue';
import PassThrough from '../helpers/PassThrough.vue';
import {
  offset,
  autoPlacement,
  type Placement,
  hide as uiHide,
  flip as uiFlip,
  type FlipOptions,
  type AutoPlacementOptions,
} from '@floating-ui/dom';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfPopover',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  closeBtnAriaLabel: 'Close',
  minWidth: popoverMinWidth.value,
  maxWidth: popoverMaxWidth.value,
  animationDuration: 300,
  distance: 25,
  headerComponent: 'h6',
  flipBehavior: () => defaultFlipBehavior,
  zIndex: 9999,
  ouiaSafe: true,
  open: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Shows the popover */
const visible = defineModel<boolean>('open', { default: false });

type ContentSlot = (props: { hide: () => void }) => VNode[];

defineSlots<{
  /** The trigger of the popover, unless triggerRef is set */
  default?: (props?: Record<never, never>) => VNode[];
  /** Content of the popover header */
  header?: ContentSlot;
  /** Icon displayed in the popover header */
  'header-icon'?: (props?: Record<never, never>) => VNode[];
  /** Content of the popover body */
  body?: ContentSlot;
  /** Content of the popover footer */
  footer?: ContentSlot;
}>();

const emit = defineEmits<{
  /** The popover was opened by a user interaction */
  (name: 'show', event: Event): void;
  /** The popover was closed by a user interaction */
  (name: 'hide', event: Event): void;
  /** The popover has fully transitioned in */
  (name: 'shown'): void;
  /** The popover has fully transitioned out */
  (name: 'hidden'): void;
}>();

const dialog = useTemplateRef('dialogRef');
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
const trigger = computed(() => triggerRefElement.value ?? slotReference.value);

// like upstream, the focus trap is enabled when the popover opens, unless it opens on hover, and released when
// clicking its content
const trapActive = ref(false);
watch(visible, isVisible => (trapActive.value = isVisible && !props.noFocusTrap && !props.hover), { immediate: true });

const focusTrapOptions = {
  returnFocusOnDeactivate: true,
  clickOutsideDeactivates: true,
  // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
  // We want to prevent this in case false is ever passed in.
  initialFocus: props.elementToFocus || undefined,
  tabbableOptions: { displayCheck: 'none' as const },
  // the trigger may be focused but scrolled out of view, hiding the popover
  fallbackFocus: () => (document.activeElement as HTMLElement | null) ?? document.body,
};

function open(event: Event) {
  if (visible.value) {
    return;
  }
  emit('show', event);
  visible.value = true;
}

function close(event?: Event) {
  if (!visible.value) {
    return;
  }
  if (event) {
    emit('hide', event);
  }
  visible.value = false;
}

useEventListener(trigger, 'click', (event: MouseEvent) => {
  if (props.hover) {
    return;
  }
  event.stopPropagation();
  if (visible.value) {
    close(event);
  } else {
    open(event);
  }
});
useEventListener(trigger, 'mouseenter', (event: MouseEvent) => props.hover && open(event));
useEventListener(trigger, 'mouseleave', (event: MouseEvent) => props.hover && close(event));
useEventListener(trigger, 'focus', (event: FocusEvent) => props.hover && open(event));
useEventListener(trigger, 'blur', (event: FocusEvent) => props.hover && close(event));

useEventListener(document, 'keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close(event);
  }
});

// a click outside of the popover and of its trigger closes it
useEventListener(document, 'click', (event: MouseEvent) => {
  if (props.noHideOnOutsideClick || !(event.target instanceof Node)) {
    return;
  }
  const popover: unknown = dialog.value?.$el;
  if ((popover instanceof Node && popover.contains(event.target)) || trigger.value?.contains(event.target)) {
    return;
  }
  close(event);
});

const floatingMiddleware = computed(() => [
  ...(props.position === 'auto'
    ? [autoPlacement(props.placementOptions)]
    : props.noFlip
      ? []
      : [uiFlip(props.flipOptions ?? { fallbackPlacements: props.flipBehavior })]),
  offset(props.distance),
  uiHide(),
  uiHide({
    strategy: 'escaped',
  }),
]);

const uniqueId = useId();

const hasCustomMinWidth = computed(() => props.minWidth !== popoverMinWidth.value);
const hasCustomMaxWidth = computed(() => props.maxWidth !== popoverMaxWidth.value);

defineExpose({
  visible,
});
</script>
