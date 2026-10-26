<template>
  <pass-through @children="findToggle">
    <slot name="toggle" :open="open" :toggle="toggle" />
  </pass-through>
  <floating-ui
    ref="floatingRef"
    :teleport-to="appendTo"
    :reference="toggleElement"
    :placement="placement"
    :z-index="zIndex"
    flip
    :hidden="!open"
  >
    <slot />
  </floating-ui>
</template>

<script lang="ts">
interface Props {
  /** Keys that close the menu, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  openChangeKeys?: string[];
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown?: (event: KeyboardEvent) => void;
  /** z-index of the menu */
  zIndex?: number;
  /** Placement of the menu relative to the toggle */
  placement?: Placement;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** @beta Flag indicating the first menu item should be focused after opening the menu. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Flag indicating the page scrolls to the first menu item when it is focused. */
  scrollOnItemFocus?: boolean;
  /** Time in ms to wait before focusing the first menu item. Defaults to 0 */
  focusTimeoutDelay?: number;
}
</script>

<script lang="ts" setup>
import { computed, useTemplateRef, watch, type RendererElement, type VNode } from 'vue';
import { useEventListener } from '@vueuse/core';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes } from '../../use';

/** Container that links a menu and its toggle, handling basic keyboard input and the opening and closing of the menu. */
defineOptions({
  name: 'PfMenuContainer',
});

const props = withDefaults(defineProps<Props>(), {
  openChangeKeys: () => ['Escape', 'Tab'],
  zIndex: 9999,
  placement: 'bottom-start',
  focusTimeoutDelay: 0,
});

/** Flag to indicate if the menu is opened */
const open = defineModel<boolean>('open', { default: false });

defineSlots<{
  /** The menu, like a pf-menu */
  default?: (props?: Record<never, never>) => VNode[];
  /** The toggle of the menu, like a pf-menu-toggle; `toggle()` opens or closes the menu */
  toggle?: (props: { open: boolean; toggle: () => void }) => VNode[];
}>();

const { element: toggleElement, findReference: findToggle } = useHtmlElementFromVNodes();
const floating = useTemplateRef('floatingRef');
const menuElement = computed(() => floating.value?.element ?? null);

function toggle() {
  open.value = !open.value;
}

function focusableItems() {
  return Array.from(menuElement.value?.querySelectorAll('li') ?? [])
    .map(li =>
      li.querySelector<HTMLElement>('button:not(:disabled),input:not(:disabled),a:not([aria-disabled="true"])'),
    )
    .filter((e): e is HTMLElement => e !== null);
}

/** Focuses the first or last menu item with the up and down arrow keys */
function onToggleArrowKeydownDefault(event: KeyboardEvent) {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
    return;
  }
  event.preventDefault();
  const items = focusableItems();
  const item = event.key === 'ArrowDown' ? items[0] : items[items.length - 1];
  item?.focus();
}

useEventListener(window, 'keydown', (event: KeyboardEvent) => {
  const target = event.target as Node;
  const fromToggle = !!toggleElement.value?.contains(target);
  if ((open.value && menuElement.value?.contains(target)) || fromToggle) {
    if (props.openChangeKeys.includes(event.key)) {
      open.value = false;
      if (toggleElement.value instanceof HTMLElement) {
        toggleElement.value.focus();
      }
    }
  }
  if (fromToggle) {
    if (props.onToggleKeydown) {
      props.onToggleKeydown(event);
    } else if (open.value) {
      onToggleArrowKeydownDefault(event);
    }
  }
});

useEventListener(window, 'click', (event: MouseEvent) => {
  const target = event.target as Node;
  if (open.value && !toggleElement.value?.contains(target) && !menuElement.value?.contains(target)) {
    open.value = false;
  }
});

watch(open, (isOpen, wasOpen) => {
  if (!wasOpen && isOpen && props.shouldFocusFirstItemOnOpen) {
    setTimeout(() => focusableItems()[0]?.focus({ preventScroll: !props.scrollOnItemFocus }), props.focusTimeoutDelay);
  }
});
</script>
