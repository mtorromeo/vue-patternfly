<template>
  <pass-through @children="findReference">
    <render-toggles />
  </pass-through>

  <floating-ui :teleport-to="appendTo" flip :reference="toggleElementRef" :placement="placement" :z-index="zIndex" :hidden="!open">
    <pf-menu
      ref="menuRef"
      v-bind="$attrs"
      :scrollable="maxMenuHeight !== undefined || menuHeight !== undefined || scrollable"
      @select="onSelect"
      @keydown="onKeydown"
    >
      <pf-menu-content :menu-height="menuHeight" :max-menu-height="maxMenuHeight">
        <slot />
      </pf-menu-content>
    </pf-menu>
  </floating-ui>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'ouiaId' | 'ouiaSafe'> {
  id?: string;
  position?: 'left' | 'right';
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  text?: string;
  disabled?: boolean;

  /** Flag indicating the toggle should be focused after a selection. */
  autoFocus?: boolean;
  /** Flag indicating that the dropdown should not automatically close on select. */
  noCloseOnSelect?: boolean;

  /** z-index of the dropdown menu */
  zIndex?: number;
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
}
</script>

<script lang="ts" setup>
import { h, mergeProps, type VNode, computed, onMounted, onBeforeUnmount, type RendererElement, useTemplateRef, type Reactive } from 'vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PfMenu, { type MenuItemId, type MenuItemTrack } from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

let currentId = 0;

defineOptions({
  name: 'PfDropdown',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  autoFocus: true,
  zIndex: 9999,
  placement: 'bottom',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

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

function onSelect(event: Event, itemId: MenuItemId | null | undefined) {
  emit('select', event, itemId);
  if (props.autoFocus && toggleElementRef.value instanceof HTMLElement) {
    toggleElementRef.value.focus();
  }
  if (!props.noCloseOnSelect) {
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
    onKeydown,
    ...ouiaProps,
  };

  if (slots.toggle) {
    const toggles = slots.toggle({});
    for (const t of toggles) {
      t.props = mergeProps(t.props ?? {}, toggleProps);
    }
    children.push(...toggles);
  } else {
    const toggle = h(PfMenuToggle, mergeProps({
      splitButton: props.splitButton,
      variant: props.variant,
    }, toggleProps), {
      default: () => props.text,
    });
    children.push(toggle);
  }

  return children;
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value) {
    return;
  }

  if (!['Escape', 'Tab'].includes(e.key)) {
    menu.value?.$.exposed?.handleKeyboard(e);
    return;
  }

  // Close the menu on tab or escape if onOpenChange is provided
  open.value = false;
  if (toggleElementRef.value instanceof HTMLElement) {
    toggleElementRef.value?.focus();
  }
}

const handleClick = (event: PointerEvent) => {
  if (!open.value) {
    return;
  }

  if (toggleElementRef.value?.contains(event.target as Node)) {
    if (props.shouldFocusFirstItemOnOpen) {
      const items = menu.value?.$.exposed?.items as Reactive<MenuItemTrack[]> | null | undefined;
      if (props.shouldFocusFirstItemOnOpen && items?.length) {
        items[0].focus();
      }
    }
  } else if (!menu.value?.el?.contains(event.target as Node)) {
    // If the event is not on the toggle, close the menu
    open.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClick as (e: MouseEvent) => void);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick as (e: MouseEvent) => void);
});
</script>
