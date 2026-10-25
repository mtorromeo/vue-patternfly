<template>
  <wrap :disabled="containerOuiaId === undefined">
    <template #with>
      <component :is="containerComponent" v-bind="containerOuiaProps" />
    </template>

    <pass-through @children="findReference">
      <component :is="fragment(renderToggles())" />
    </pass-through>

    <floating-ui
      :teleport-to="appendTo"
      flip
      :reference="toggleElementRef"
      :placement="placement"
      :z-index="zIndex"
      :hidden="!open"
    >
      <pf-menu
        ref="menuRef"
        v-bind="{ ...$attrs, ...ouiaProps }"
        :scrollable="maxMenuHeight !== undefined || menuHeight !== undefined || scrollable"
        @select="onSelect"
        @keydown="handleKeys($event, false)"
      >
        <pf-menu-content :menu-height="menuHeight" :max-menu-height="maxMenuHeight">
          <slot />
        </pf-menu-content>
      </pf-menu>
    </floating-ui>
  </wrap>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'ouiaId' | 'ouiaSafe'> {
  /** Id of the default toggle */
  id?: string;
  /** Alignment of the menu with the toggle, when the placement is top or bottom */
  position?: 'left' | 'right';
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** Text of the default toggle */
  text?: string;
  /** Disables the toggle */
  disabled?: boolean;

  /** Flag indicating the toggle should be focused after a selection. */
  shouldFocusToggleOnSelect?: boolean;
  /** Flag indicating that the dropdown should close when an item is selected. */
  closeOnSelect?: boolean;
  /**
   * Keys that close the menu, defaults to tab and escape. It is highly recommended to include Escape in the array,
   * while Tab may be omitted if the menu contains non-menu items that are focusable.
   */
  openChangeKeys?: string[];
  /**
   * Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open,
   * pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key
   * and last item for the up arrow key.
   */
  onToggleKeydown?: (event: KeyboardEvent) => void;

  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Placement of the menu relative to the toggle */
  placement?: Placement;

  /** Variant of split button toggle */
  splitButton?: boolean | 'default' | 'action' | 'checkbox';
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';

  /** Indicates if the dropdown menu should be scrollable */
  scrollable?: boolean;
  /** Height of the dropdown menu */
  menuHeight?: string;
  /** Maximum height of dropdown menu */
  maxMenuHeight?: string;
  /** @beta Flag indicating the first menu item should be focused after opening the dropdown. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Flag indicating that focusing the first menu item on open should scroll it into view. */
  scrollOnItemFocus?: boolean;
  /** Time in ms to wait before focusing the first menu item on open. */
  focusTimeoutDelay?: number;

  /** When applied, wraps the dropdown in a container with a data-ouia-component-id. */
  containerOuiaId?: number | string;
  /** Set the value of data-ouia-safe for the container when containerOuiaId is applied. */
  containerOuiaSafe?: boolean;
  /** Element rendered as the container when containerOuiaId is applied. */
  containerComponent?: string | Component;
}
</script>

<script lang="ts" setup>
import {
  h,
  mergeProps,
  type Component,
  type VNode,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  type RendererElement,
  useTemplateRef,
} from 'vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PfMenu, { type MenuItemId } from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import Wrap from '../../helpers/Wrap.vue';
import { useHtmlElementFromVNodes } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { fragment } from '../../util';
import type { ComponentProps } from 'vue-component-type-helpers';

let currentId = 0;

defineOptions({
  name: 'PfDropdown',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  zIndex: 9999,
  placement: 'bottom',
  openChangeKeys: () => ['Escape', 'Tab'],
  focusTimeoutDelay: 0,
  ouiaSafe: true,
  containerOuiaSafe: true,
  containerComponent: 'span',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const containerOuiaProps = useOUIAProps({
  name: 'Dropdown container',
  id: props.containerOuiaId,
  safe: props.containerOuiaSafe,
});

/** Flag to indicate if menu is opened.*/
const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
  (name: 'select', event: Event, itemId: MenuItemId | null | undefined): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  toggle?: (props?: Record<never, never>) => VNode[];
}>();

const menu = useTemplateRef('menuRef');

const { element: toggleElementRef, findReference } = useHtmlElementFromVNodes();

const effectiveId = computed(() => props.id || `pf-dropdown-toggle-id-${currentId++}`);

const placement = computed((): Placement => {
  if (props.placement !== 'top' && props.placement !== 'bottom') {
    return props.placement;
  }
  return `${props.placement}-${props.position === 'right' ? 'end' : 'start'}`;
});

function focusToggle() {
  if (toggleElementRef.value instanceof HTMLElement) {
    toggleElementRef.value.focus();
  }
}

function onSelect(event: Event, itemId: MenuItemId | null | undefined) {
  emit('select', event, itemId);
  if (props.shouldFocusToggleOnSelect) {
    focusToggle();
  }
  if (props.closeOnSelect) {
    open.value = false;
  }
}

function renderToggles() {
  const children: VNode[] = [];

  const toggleProps = {
    id: effectiveId.value,
    disabled: props.disabled,
    expanded: open.value,
    'aria-haspopup': !!slots.default,
    'onUpdate:expanded': (v: boolean) => (open.value = v),
    onKeydown: (e: KeyboardEvent) => handleKeys(e, true),
  };

  if (slots.toggle) {
    const toggles = slots.toggle({});
    for (const t of toggles) {
      t.props = mergeProps(t.props ?? {}, toggleProps);
    }
    children.push(...toggles);
  } else {
    const toggle = h(
      PfMenuToggle,
      mergeProps(
        {
          splitButton: props.splitButton,
          variant: props.variant,
        },
        toggleProps,
      ),
      {
        default: () => props.text,
      },
    );
    children.push(toggle);
  }

  return children;
}

function handleKeys(e: KeyboardEvent, fromToggle: boolean) {
  const wasOpen = open.value;
  if (wasOpen && props.openChangeKeys.includes(e.key)) {
    open.value = false;
    focusToggle();
  }

  if (!fromToggle) {
    return;
  }
  if (props.onToggleKeydown) {
    props.onToggleKeydown(e);
  } else if (wasOpen) {
    menu.value?.handleKeyboard(e);
  }
}

const handleClick = (event: PointerEvent) => {
  if (!open.value) {
    return;
  }

  // If the event is not on the toggle, close the menu
  if (!toggleElementRef.value?.contains(event.target as Node) && !menu.value?.el?.contains(event.target as Node)) {
    open.value = false;
  }
};

watch(open, (isOpen, wasOpen) => {
  // menu was opened, focus on first menu item
  if (!wasOpen && isOpen && props.shouldFocusFirstItemOnOpen) {
    setTimeout(() => {
      const firstElement = menu.value?.el?.querySelector<HTMLElement>(
        'li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])',
      );
      firstElement?.focus({ preventScroll: !props.scrollOnItemFocus });
    }, props.focusTimeoutDelay);
  }
});

onMounted(() => {
  window.addEventListener('click', handleClick as (e: MouseEvent) => void);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick as (e: MouseEvent) => void);
});
</script>
