<template>
  <pass-through @children="findReference">
    <component :is="fragment(renderToggles())" />
  </pass-through>

  <floating-ui
    :hidden="!open"
    :teleport-to="appendTo"
    :reference="toggleElementRef"
    :placement="placement"
    :z-index="zIndex"
    flip
  >
    <pf-menu
      ref="menuRef"
      v-bind="{ ...$attrs, ...ouiaProps }"
      v-model:selected="selected"
      :role="role"
      :scrollable="scrollable ?? (menuHeight !== undefined || maxMenuHeight !== undefined)"
      :style="{ '--pf-v6-c-menu--MinWidth': minWidth }"
      @select="onSelect"
      @keydown="handleKeys($event, false)"
    >
      <pf-menu-content :menu-height="menuHeight" :max-menu-height="maxMenuHeight">
        <slot />
      </pf-menu-content>
    </pf-menu>
  </floating-ui>
</template>

<script lang="ts">
interface Props<T>
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'ouiaId' | 'ouiaSafe' | 'selected' | 'onUpdate:selected'> {
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify selected on the SelectOption. */
  selected?: T | null;
  /** Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role?: string;
  /** Minimum width of the select menu */
  minWidth?: string;
  /** z-index of the select menu */
  zIndex?: number;
  /** Placement of the menu relative to the toggle */
  placement?: 'top' | 'bottom' | Placement;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;

  /** Flag indicating the toggle should be focused after a selection. */
  shouldFocusToggleOnSelect?: boolean;
  /** Flag indicating that the select should close when an option is selected. */
  closeOnSelect?: boolean;
  /** @beta Flag indicating the first menu item should be focused after opening the menu. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Flag indicating that focusing the first menu item on open should scroll it into view. */
  scrollOnItemFocus?: boolean;
  /** Time in ms to wait before focusing the first menu item on open. */
  focusTimeoutDelay?: number;
  /**
   * Keys that close the menu, defaults to tab and escape. It is highly recommended to include Escape in the array,
   * while Tab may be omitted if the menu contains non-menu items that are focusable.
   */
  openChangeKeys?: string[];
  /**
   * Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open,
   * pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key
   * and last item for the up arrow key. The typeahead variant keeps the focus on the toggle.
   */
  onToggleKeydown?: (event: KeyboardEvent) => void;

  /** Indicates if the select menu should be scrollable. Defaults to true with menuHeight or maxMenuHeight. */
  scrollable?: boolean;
  /** Height of the select menu */
  menuHeight?: string;
  /** Maximum height of the select menu */
  maxMenuHeight?: string;

  // MENU TOGGLE PROPS
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Variant styles of the menu toggle. With typeahead the toggle arrow keys don't move the focus to the menu. */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
  /** Label for the menu toggle. Defaults to the `selectLabel` message. */
  label?: string;
}
</script>

<script lang="ts" setup generic="T extends MenuItemId | MenuItemId[] = MenuItemId | MenuItemId[]">
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import { usePfMessages } from '../../messages';
import PfMenu, { type MenuItemId } from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import {
  computed,
  h,
  mergeProps,
  onBeforeUnmount,
  onMounted,
  useModel,
  useTemplateRef,
  watch,
  type RendererElement,
  type VNode,
} from 'vue';
import { useHtmlElementFromVNodes } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { fragment } from '../../util';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfSelect',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props<T>>(), {
  selected: null,
  role: 'listbox',
  zIndex: 9999,
  placement: 'bottom',
  openChangeKeys: () => ['Escape', 'Tab'],
  focusTimeoutDelay: 0,
  scrollable: undefined,
  ouiaSafe: true,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag to indicate if select is open */
const open = defineModel<boolean>('open', { default: false });

const slots = defineSlots<{
  /** Options of the select */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom toggle, replacing the default menu toggle. It receives the expanded state, click and keydown handlers. */
  toggle?: (props?: Record<never, never>) => VNode[];
  /** Icon of the default menu toggle */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Label of the default menu toggle, replacing the label prop */
  label?: (props?: Record<never, never>) => VNode[];
}>();

const emit = defineEmits<{
  /** Callback for updating when item selection changes. You can also specify onClick on the SelectOption. */
  (name: 'select', event: Event, itemId?: MenuItemId | null | undefined): void;
  // Deselecting the selected item of a single select emits null
  (name: 'update:selected', value: T extends unknown[] ? T : T | null): void;
}>();

const selected = useModel(props, 'selected');

const placement = computed((): Placement => {
  if (props.placement !== 'top' && props.placement !== 'bottom') {
    return props.placement;
  }
  return `${props.placement}-start`;
});

const menu = useTemplateRef('menuRef');
const { element: toggleElementRef, findReference } = useHtmlElementFromVNodes();

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
  const toggleProps = {
    // a custom toggle keeps its own disabled state unless the select is disabled
    ...(props.disabled && { disabled: true }),
    expanded: open.value,
    'onUpdate:expanded': (v: boolean) => (open.value = v),
    onKeydown: (e: KeyboardEvent) => handleKeys(e, true),
  };

  if (slots.toggle) {
    const toggles = slots.toggle({});
    for (const t of toggles) {
      // a menu toggle in the slot gets the OUIA id, unless it has its own
      const ownOuiaId = t.props?.ouiaId ?? t.props?.['ouia-id'];
      const ouiaProps = t.type === PfMenuToggle && ownOuiaId === undefined ? { ouiaId: props.ouiaId } : {};
      t.props = mergeProps({ 'aria-haspopup': 'listbox', ...ouiaProps }, t.props ?? {}, toggleProps);
    }
    return toggles;
  }

  return [
    h(
      PfMenuToggle,
      mergeProps(
        {
          'aria-haspopup': 'listbox',
          variant: props.variant,
          fullHeight: props.fullHeight,
          fullWidth: props.fullWidth,
          // the menu and the toggle share the OUIA id, so tests find both with the same one
          ouiaId: props.ouiaId,
        },
        toggleProps,
      ),
      {
        icon: slots.icon,
        default: () => slots.label?.() ?? props.label ?? messages.value.selectLabel,
      },
    ),
  ];
}

function handleKeys(e: KeyboardEvent, fromToggle: boolean) {
  const wasOpen = open.value;
  if (wasOpen && props.openChangeKeys.includes(e.key)) {
    e.preventDefault();
    open.value = false;
    focusToggle();
  }

  if (!fromToggle) {
    return;
  }
  if (props.onToggleKeydown) {
    props.onToggleKeydown(e);
  } else if (wasOpen && props.variant !== 'typeahead') {
    menu.value?.handleKeyboard(e);
  }
}

const handleClick = (event: MouseEvent) => {
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
        'li button:not(:disabled),li input:not(:disabled)',
      );
      firstElement?.focus({ preventScroll: !props.scrollOnItemFocus });
    }, props.focusTimeoutDelay);
  }
});

onMounted(() => {
  window.addEventListener('click', handleClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick);
});
</script>
