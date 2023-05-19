<template>
  <div
    :id="panelId"
    ref="panel"
    :class="[styles.drawerPanel, {
      [styles.modifiers.resizable]: resizable,
      [styles.modifiers.noBorder]: noBorder,
      [styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200,
    }]"
    :style="{
      '--pf-c-drawer__panel--md--FlexBasis': panelSize === null ? defaultSize : `${panelSize}px`,
      '--pf-c-drawer__panel--md--FlexBasis--min': minSize,
      '--pf-c-drawer__panel--md--FlexBasis--max': maxSize,
      overflowAnchor: position === 'bottom' ? 'none' : undefined,
    }"
    :hidden="hidden"
  >
    <template v-if="resizable">
      <div
        ref="splitterRef"
        :class="[styles.drawerSplitter, {[styles.modifiers.vertical]: position !== 'bottom'}]"
        role="separator"
        tabindex="0"
        :aria-orientation="position === 'bottom' ? 'horizontal' : 'vertical'"
        :aria-label="resizeAriaLabel"
        :aria-valuenow="separatorValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-controls="panelId"
        @mousedown="handleMouseDown"
        @keydown="handleKeys"
        @touchstart="handleTouchStart"
      >
        <div :class="styles.drawerSplitterHandle" aria-hidden />
      </div>
      <div :class="styles.drawerPanelMain">
        <overridable-wrapper :component="PfDrawerHead">
          <slot />
        </overridable-wrapper>
      </div>
    </template>

    <overridable-wrapper v-else :component="PfDrawerHead">
      <slot />
    </overridable-wrapper>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { computed, inject, type Ref, ref, unref, type HTMLAttributes } from 'vue';
import { DrawerContentRefKey } from './DrawerContent.vue';
import { getUniqueId } from '../../util';
import { DrawerColorVariant, DrawerKey } from './common';
import OverridableWrapper from '../../helpers/OverridableWrapper';
import PfDrawerHead from './DrawerHead.vue';
import { resolveOverridableComponent } from '../../helpers';

defineOptions({
  name: 'PfDrawerPanelContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** ID of the drawer panel */
  id?: string;
  /** Flag indicating that the drawer panel should not have a border. */
  noBorder?: boolean;
  /** Flag indicating that the drawer panel should be resizable. */
  resizable?: boolean;
  /** The minimum size of a drawer, in either pixels or percentage. */
  minSize?: string;
  /** The starting size of a resizable drawer, in either pixels or percentage. */
  defaultSize?: string;
  /** The maximum size of a drawer, in either pixels or percentage. */
  maxSize?: string;
  /** The increment amount for keyboard drawer resizing, in pixels. */
  increment?: number;
  /** Aria label for the resizable drawer splitter. */
  resizeAriaLabel?: string;
  /** Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize. */
  widths?: {
    default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  };
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}

const props = withDefaults(defineProps<Props>(), {
  increment: 5,
  resizeAriaLabel: 'Resize',
});

const emit = defineEmits<{
  /** Callback for resize end. */
  (name: 'resize', width: number, id?: string): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const panel: Ref<HTMLElement | undefined> = ref();
const panelId = computed(() => props.id || getUniqueId('pf-drawer-panel-'));

const drawerProvide = inject(DrawerKey);

if (!drawerProvide) {
  throw new Error('DrawerPanelContent can only be used inside Drawer components');
}

const { el: drawerRef, position, expanded, inline, static: isStatic } = drawerProvide;
const drawerContentRef = inject(DrawerContentRefKey);
const hidden = computed(() => unref(isStatic) || !unref(expanded));
const splitterRef: Ref<HTMLDivElement | undefined> = ref();

let isResizing: boolean | null = null;
const panelSize: Ref<number | undefined> = ref();
let panelRect: DOMRect;
let setInitialVals = true;
const separatorValue = ref(0);

function calcValueNow() {
  let splitterPos;
  let drawerSize;

  const drawerContentEl = resolveOverridableComponent(drawerContentRef?.value);

  const paR = panel.value?.getBoundingClientRect() ?? { left: 0, right: 0 };
  const spR = splitterRef.value?.getBoundingClientRect() ?? { left: 0, right: 0, top: 0, bottom: 0 };
  const drR = drawerRef.value?.getBoundingClientRect() ?? { left: 0, right: 0 };
  const dCR = drawerContentEl?.getBoundingClientRect() ?? { left: 0, right: 0, top: 0, bottom: 0 };

  if (inline.value && position.value === 'right') {
    splitterPos = paR.right - spR.left;
    drawerSize = drR.right - drR.left;
  } else if (inline.value && position.value === 'left') {
    splitterPos = spR.right - paR.left;
    drawerSize = drR.right - drR.left;
  } else if (position.value === 'right') {
    splitterPos = dCR.right - spR.left;
    drawerSize = dCR.right - dCR.left;
  } else if (position.value === 'left') {
    splitterPos = spR.right - dCR.left;
    drawerSize = dCR.right - dCR.left;
  } else if (position.value === 'bottom') {
    splitterPos = dCR.bottom - spR.top;
    drawerSize = dCR.bottom - dCR.top;
  } else {
    return 0;
  }

  const newSplitterPos = (splitterPos / drawerSize) * 100;
  return Math.round((newSplitterPos + Number.EPSILON) * 100) / 100;
}

function handleTouchStart(e: TouchEvent) {
  e.stopPropagation();
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);
  isResizing = true;
}

function handleMouseDown(e: MouseEvent) {
  e.stopPropagation();
  e.preventDefault();
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  drawerRef.value?.classList.add(styles.modifiers.resizing);
  isResizing = true;
  setInitialVals = true;
}

function handleMouseMove(e: MouseEvent) {
  const mousePos = position.value === 'bottom' ? e.clientY : e.clientX;
  handleControlMove(e, mousePos);
}

function handleTouchMove(e: TouchEvent) {
  e.preventDefault();
  e.stopImmediatePropagation();
  const touchPos = position.value === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
  handleControlMove(e, touchPos);
}

function handleControlMove(e: MouseEvent | TouchEvent, mousePos: number) {
  e.stopPropagation();
  if (!isResizing || !panel.value) {
    return;
  }

  if (setInitialVals) {
    panelRect = panel.value.getBoundingClientRect();
    setInitialVals = false;
  }
  let newSize = 0;
  if (position.value === 'right') {
    newSize = panelRect.right - mousePos;
  } else if (position.value === 'left') {
    newSize = mousePos - panelRect.left;
  } else {
    newSize = panelRect.bottom - mousePos;
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
  setInitialVals = true;
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
  let delta = 0;
  if (key === 'ArrowRight') {
    delta = position.value === 'left' ? props.increment : -props.increment;
  } else if (key === 'ArrowLeft') {
    delta = position .value=== 'left' ? -props.increment : props.increment;
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
