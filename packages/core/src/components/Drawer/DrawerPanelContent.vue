<template>
  <component
    :is="validFocusTrap ? PfFocusTrap : 'div'"
    v-bind="{ ...ouiaProps, ...focusTrapAttrs }"
    :id="id"
    ref="panelRef"
    :class="[
      styles.drawerPanel,
      {
        [styles.modifiers.resizable]: resizable,
        // not in react-styles yet: upstream uses the literal class too
        'pf-m-no-glass': noGlass,
        [styles.modifiers.glass]: glass,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
        [styles.modifiers.noBorder]: noBorder,
        [styles.modifiers.noBackground]: colorVariant === 'no-background',
        [styles.modifiers.secondary]: colorVariant === 'secondary',
      },
      widthModifiers,
    ]"
    :style="{
      display: display ? 'inherit' : 'none',
      [cssPanelMdFlexBasis.name]: isDefined(panelSize) ? `${panelSize}px` : defaultSize,
      [cssPanelMdFlexBasisMin.name]: minSize,
      [cssPanelMdFlexBasisMax.name]: maxSize,
      overflowAnchor: position === 'bottom' ? 'none' : undefined,
    }"
    :hidden="!expanded"
    @transitionend="handleTransitionEnd"
  >
    <template v-if="resizable">
      <div
        ref="splitterRef"
        :class="[styles.drawerSplitter, { [styles.modifiers.vertical]: position !== 'bottom' }]"
        role="separator"
        tabindex="0"
        :aria-orientation="position === 'bottom' ? 'horizontal' : 'vertical'"
        :aria-label="resizeAriaLabel ?? messages.drawerResize"
        :aria-valuenow="separatorValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-controls="id"
        @mousedown="handleMouseDown"
        @keydown="handleKeys"
        @touchstart="handleTouchStart"
      >
        <div :class="styles.drawerSplitterHandle" aria-hidden="true" />
      </div>
      <div :class="styles.drawerPanelMain">
        <slot />
      </div>
    </template>

    <slot v-else />
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'hidden' | 'onResize'> {
  /** ID of the drawer panel */
  id?: string;
  /** Flag indicating that the drawer panel should not have a border. */
  noBorder?: boolean;
  /** Flag indicating that the drawer panel should be resizable. */
  resizable?: boolean;
  /** @beta Flag indicating that the drawer panel should disable glass styles. This prop is intended to work with pill drawers. */
  noGlass?: boolean;
  /** @beta Flag indicating that the drawer panel should use glass styles when in glass theme */
  glass?: boolean;
  /** @beta Flag indicating that the drawer panel should use plain styles. This only applies when the drawer is static or inline. */
  plain?: boolean;
  /** @beta Flag indicating that plain styles should be disabled when glass styles are used. This only applies when the drawer is static or inline. */
  noPlainOnGlass?: boolean;
  /** The minimum size of a drawer. */
  minSize?: string;
  /** The starting size of a resizable drawer. */
  defaultSize?: string;
  /** The maximum size of a drawer. */
  maxSize?: string;
  /** The increment amount for keyboard drawer resizing. */
  increment?: number;
  /** Aria label for the resizable drawer splitter. Defaults to the `drawerResize` message. */
  resizeAriaLabel?: string;
  /** Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize. */
  widths?: {
    default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  };
  /** Color variant of the background of the drawer panel. `no-background` is deprecated: use `plain` instead. */
  colorVariant?: 'no-background' | 'default' | 'secondary';
  /**
   * Enables a focus trap on the drawer panel content. This will also automatically handle focus management when the
   * panel expands and when it collapses. Do not enable it if the drawer is static.
   */
  focusTrap?: boolean;
  /**
   * The element to focus when the drawer panel content expands with a focus trap. By default the first focusable
   * element will receive focus. If there are no focusable elements, the panel itself will receive focus.
   */
  elementToFocusOnExpand?: HTMLElement | SVGElement | string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { usePfMessages } from '../../messages';
import { devWarn } from '../../helpers/dev';
import cssPanelMdFlexBasis from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis';
import cssPanelMdFlexBasisMin from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis_min';
import cssPanelMdFlexBasisMax from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis_max';
import { computed, inject, type Ref, ref, type HTMLAttributes, type VNode, useTemplateRef, useId, watch } from 'vue';
import { unrefElement } from '@vueuse/core';
import { DrawerContentRefKey, DrawerKey } from './common';
import { resolveOverridableComponent } from '../../helpers';
import PfFocusTrap from '../../helpers/FocusTrap.vue';
import { isDefined } from '@vueuse/shared';
import { ucfirst } from '../../util';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerPanelContent',
});

const props = withDefaults(defineProps<Props>(), {
  increment: 5,
  id: () => useId(),
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Callback for resize end. */
  (name: 'resize', width: number, id?: string): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const panelRef = useTemplateRef('panelRef');
const panel = computed(() => unrefElement(panelRef) as HTMLElement | null | undefined);

const drawerProvide = inject(DrawerKey);

if (!drawerProvide) {
  throw new Error('DrawerPanelContent can only be used inside Drawer components');
}

const { el: drawerRef, position, expanded, display, inline, viewport, static: isStatic, onExpand } = drawerProvide;
const drawerContentRef = inject(DrawerContentRefKey);
const splitter = useTemplateRef('splitterRef');

let isResizing: boolean | null = null;
const panelSize: Ref<number | undefined> = ref();
let initialPointerPos = 0;
let initialPanelSize = 0;
const separatorValue = ref(0);

watch(
  [isStatic, () => props.focusTrap],
  ([isStatic, focusTrap]) => {
    if (isStatic && focusTrap) {
      devWarn(
        `DrawerPanelContent: The focusTrap prop cannot be true if the Drawer's static prop is true. This will cause a permanent focus trap.`,
      );
    }
  },
  { immediate: true },
);

const validFocusTrap = computed(() => props.focusTrap && !isStatic.value);
const focusTrapActive = ref(false);
let previouslyFocusedElement: Element | null = null;

const focusTrapAttrs = computed(() => {
  if (!validFocusTrap.value) {
    return {};
  }
  return {
    tabindex: -1,
    'aria-modal': true,
    role: 'dialog',
    'aria-labelledby': props.id,
    active: focusTrapActive.value,
    focusTrapOptions: {
      fallbackFocus: () => panel.value ?? document.body,
      onActivate: () => {
        if (previouslyFocusedElement !== document.activeElement) {
          previouslyFocusedElement = document.activeElement;
        }
      },
      onDeactivate: () => {
        if (previouslyFocusedElement instanceof HTMLElement || previouslyFocusedElement instanceof SVGElement) {
          previouslyFocusedElement.focus();
        }
      },
      clickOutsideDeactivates: true,
      returnFocusOnDeactivate: false,
      initialFocus: props.elementToFocusOnExpand || undefined,
      escapeDeactivates: false,
    },
  };
});

function handleTransitionEnd(e: TransitionEvent) {
  if (e.target !== panel.value || e.propertyName !== 'transform') {
    return;
  }
  if (expanded.value) {
    onExpand(e);
  } else {
    // collapse the space of the hidden panel, so that its content can't be reached
    display.value = false;
  }
  focusTrapActive.value = expanded.value;
}

function isRTL() {
  return !!panel.value && getComputedStyle(panel.value).getPropertyValue('direction') === 'rtl';
}

const widthModifiers = computed(() =>
  Object.entries(props.widths ?? {}).map(([breakpoint, width]) => {
    if (!width) {
      return undefined;
    }
    if (breakpoint === 'default') {
      return styles.modifiers[width];
    }
    const suffix = breakpoint === '2xl' ? '_2xl' : ucfirst(breakpoint);
    return styles.modifiers[`${width}On${suffix}` as keyof typeof styles.modifiers];
  }),
);

function calcValueNow() {
  let splitterPos;
  let drawerSize;

  const drawerContentEl = resolveOverridableComponent(drawerContentRef?.value);
  // a viewport drawer is sized by the drawer itself, otherwise by its content
  const sizeEl = viewport.value ? (drawerRef.value ?? drawerContentEl) : (drawerContentEl ?? drawerRef.value);

  const paR = panel.value?.getBoundingClientRect() ?? { left: 0, right: 0 };
  const spR = splitter.value?.getBoundingClientRect() ?? { left: 0, right: 0, top: 0, bottom: 0 };
  const drR = drawerRef.value?.getBoundingClientRect() ?? { left: 0, right: 0 };
  const dCR = sizeEl?.getBoundingClientRect() ?? { left: 0, right: 0, top: 0, bottom: 0 };
  const rtl = isRTL();

  if (inline.value && position.value === 'end') {
    splitterPos = rtl ? paR.left - spR.right : paR.right - spR.left;
    drawerSize = rtl ? drR.left - drR.right : drR.right - drR.left;
  } else if (inline.value && position.value === 'start') {
    splitterPos = rtl ? spR.left - paR.right : spR.right - paR.left;
    drawerSize = rtl ? drR.left - drR.right : drR.right - drR.left;
  } else if (position.value === 'end') {
    splitterPos = rtl ? dCR.left - spR.right : dCR.right - spR.left;
    drawerSize = rtl ? dCR.left - dCR.right : dCR.right - dCR.left;
  } else if (position.value === 'start') {
    splitterPos = rtl ? spR.left - dCR.right : spR.right - dCR.left;
    drawerSize = rtl ? dCR.left - dCR.right : dCR.right - dCR.left;
  } else if (position.value === 'bottom') {
    splitterPos = dCR.bottom - spR.top;
    drawerSize = dCR.bottom - dCR.top;
  } else {
    return 0;
  }

  const newSplitterPos = (splitterPos / drawerSize) * 100;
  return Math.round((newSplitterPos + Number.EPSILON) * 100) / 100;
}

function setInitialResizeState(controlPosition: number) {
  const panelRect = panel.value?.getBoundingClientRect();
  initialPointerPos = controlPosition;
  initialPanelSize = (position.value === 'bottom' ? panelRect?.height : panelRect?.width) ?? 0;
}

function handleTouchStart(e: TouchEvent) {
  e.stopPropagation();
  const touch = e.touches[0];
  if (touch) {
    setInitialResizeState(position.value === 'bottom' ? touch.clientY : touch.clientX);
  }
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);
  isResizing = true;
}

function handleMouseDown(e: MouseEvent) {
  e.stopPropagation();
  e.preventDefault();
  setInitialResizeState(position.value === 'bottom' ? e.clientY : e.clientX);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  drawerRef.value?.classList.add(styles.modifiers.resizing);
  isResizing = true;
}

function handleMouseMove(e: MouseEvent) {
  const mousePos = position.value === 'bottom' ? e.clientY : e.clientX;
  handleControlMove(e, mousePos);
}

function handleTouchMove(e: TouchEvent) {
  e.preventDefault();
  e.stopImmediatePropagation();
  const touchPos = position.value === 'bottom' ? e.touches[0]?.clientY : e.touches[0]?.clientX;
  if (touchPos === undefined) {
    return;
  }
  handleControlMove(e, touchPos);
}

function handleControlMove(e: MouseEvent | TouchEvent, controlPosition: number) {
  e.stopPropagation();
  if (!isResizing) {
    return;
  }

  const delta = controlPosition - initialPointerPos;
  const rtl = isRTL();
  let newSize = 0;
  if (position.value === 'end') {
    newSize = rtl ? initialPanelSize + delta : initialPanelSize - delta;
  } else if (position.value === 'start') {
    newSize = rtl ? initialPanelSize - delta : initialPanelSize + delta;
  } else {
    newSize = initialPanelSize - delta;
  }

  panelSize.value = newSize;
  separatorValue.value = calcValueNow();
}

function handleMouseUp() {
  if (!isResizing) {
    return;
  }
  drawerRef.value?.classList.remove(styles.modifiers.resizing);
  isResizing = false;
  emit('resize', panelSize.value ?? 0, props.id);
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

function handleTouchEnd(e: TouchEvent) {
  e.stopPropagation();
  if (!isResizing) {
    return;
  }
  isResizing = false;
  emit('resize', panelSize.value ?? 0, props.id);
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('touchend', handleTouchEnd);
}

function handleKeys(e: KeyboardEvent) {
  if (!panel.value) {
    return;
  }

  const key = e.key;
  if (
    key !== 'Escape' &&
    key !== 'Enter' &&
    key !== 'ArrowUp' &&
    key !== 'ArrowDown' &&
    key !== 'ArrowLeft' &&
    key !== 'ArrowRight'
  ) {
    if (isResizing) {
      e.preventDefault();
    }
    return;
  }
  e.preventDefault();

  if (key === 'Escape' || key === 'Enter') {
    emit('resize', panelSize.value ?? 0, props.id);
  }
  const panelRect = panel.value.getBoundingClientRect();
  const newSize = position.value === 'bottom' ? panelRect.height : panelRect.width;
  // ArrowLeft grows a panel on the right: at the end in LTR, at the start in RTL
  const leftDelta = isRTL() === (position.value === 'start') ? props.increment : -props.increment;
  let delta = 0;
  if (key === 'ArrowRight') {
    delta = -leftDelta;
  } else if (key === 'ArrowLeft') {
    delta = leftDelta;
  } else if (key === 'ArrowUp') {
    delta = props.increment;
  } else if (key === 'ArrowDown') {
    delta = -props.increment;
  }

  panelSize.value = newSize + delta;
  separatorValue.value = calcValueNow();
}

defineExpose({
  expanded,
});
</script>
