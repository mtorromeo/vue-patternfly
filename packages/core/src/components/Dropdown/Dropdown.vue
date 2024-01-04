<template>
  <pass-through @children="findReference">
    <render-toggles />
  </pass-through>

  <floating-ui :teleport-to="appendTo" flip :reference="toggleElementRef" :placement="placement" :z-index="zIndex">
    <pf-menu
      v-if="managedOpen"
      ref="menuRef"
      v-bind="$attrs"
      @select="onSelect"
      @keydown="onKeydown"
    >
      <pf-menu-content>
        <slot />
      </pf-menu-content>
    </pf-menu>
  </floating-ui>
</template>

<script lang="ts">
export interface Props extends OUIAProps, /* @vue-ignore */ MenuProps {
  id?: string;
  position?: 'left' | 'right';
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  text?: string;
  disabled?: boolean;

  /** Flag to indicate if menu is opened.*/
  open?: boolean;
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
}
</script>

<script lang="ts" setup>
import { h, mergeProps, ref, type Ref, type VNode, computed, onMounted, onBeforeUnmount, type RendererElement } from 'vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PfMenu, { type MenuItemId, type Props as MenuProps } from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import FloatingUi, { type Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useManagedProp, useHtmlElementFromVNodes } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

let currentId = 0;

defineOptions({
  name: 'PfDropdown',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  appendTo: 'inline',
  open: undefined,
  autoFocus: true,
  zIndex: 9999,
  placement: 'bottom',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:open', value: boolean): void;
  (name: 'select', event: Event, itemId: MenuItemId | null | undefined): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  toggle?: (props?: Record<never, never>) => VNode[];
}>();

const menuRef: Ref<InstanceType<typeof PfMenu> | undefined> = ref();

const { element: toggleElementRef, findReference } = useHtmlElementFromVNodes();

const managedOpen = useManagedProp('open', false);
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
    managedOpen.value = false;
  }
}

function renderToggles() {
  const children = [];

  const toggleProps = {
    id: effectiveId.value,
    disabled: props.disabled,
    expanded: managedOpen.value,
    'aria-haspopup': !!slots.default,
    'onUpdate:expanded': (v: boolean) => (managedOpen.value = v),
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
  if (!managedOpen.value || !['Escape', 'Tab'].includes(e.key)) {
    return;
  }

  // Close the menu on tab or escape if onOpenChange is provided
  managedOpen.value = false;
  if (toggleElementRef.value instanceof HTMLElement) {
    toggleElementRef.value?.focus();
  }
}

const handleClick = (event: PointerEvent) => {
  if (!managedOpen.value) {
    return;
  }

  if (toggleElementRef.value?.contains(event.target as Node)) {
    // toggle was clicked open via keyboard, focus on first menu item
    if (event.detail === 0) {
      setTimeout(() => {
        const firstElement = menuRef.value?.el?.querySelector(
          'li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])',
        );
        firstElement && (firstElement as HTMLElement).focus();
      }, 0);
    }
  } else if (!menuRef.value?.el?.contains(event.target as Node)) {
    // If the event is not on the toggle, close the menu
    managedOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClick as (e: MouseEvent) => void);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick as (e: MouseEvent) => void);
});
</script>
