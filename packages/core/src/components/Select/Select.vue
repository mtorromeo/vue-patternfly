<template>
  <pass-through @children="findReference">
    <slot name="toggle">
      <pf-menu-toggle v-bind="ouiaProps" v-model:expanded="managedOpen" :disabled="disabled" :variant="variant" :full-height="fullHeight" :full-width="fullWidth">
        <slot name="label">
          Select a value
        </slot>
      </pf-menu-toggle>
    </slot>
  </pass-through>

  <floating-ui :teleport-to="appendTo" :reference="toggleRef" :z-index="zIndex" flip>
    <pf-menu
      v-if="managedOpen"
      ref="menuRef"
      v-bind="$attrs"
      :style="{'--pf-v5-c-menu--MinWidth': minWidth}"
      @select="handleSelect"
    >
      <slot />
    </pf-menu>
  </floating-ui>
</template>

<script lang="ts" setup>
import PfMenu, { type MenuItemId, type Props as MenuProps } from '../Menu/Menu.vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { nextTick, ref, type Ref, type RendererElement } from 'vue';
import { useHtmlElementFromVNodes, useManagedProp } from '../../use';
import { useEventListener } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfSelect',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ MenuProps {
  /** Flag to indicate if select is open */
  open?: boolean;
  /** Minimum width of the select menu */
  minWidth?: string;
  /** z-index of the select menu */
  zIndex?: number;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;

  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  focusToggleOnSelect?: boolean;
  /** @beta Keys that trigger menu close, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  closeOnKeys?: string[];

  // MENU TOGGLE PROPS
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
}

const props = withDefaults(defineProps<Props>(), {
  open: undefined,
  selected: undefined,
  closeOnKeys: () => ['Escape', 'Tab'],
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  toggle: (props?: Record<never, never>) => any;
  label: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  (name: 'select', event: Event, itemId?: MenuItemId | null | undefined): void;
  (name: 'update:open', value: boolean): void;
}>();

const managedOpen = useManagedProp('open', false);
const menuRef: Ref<InstanceType<typeof PfMenu> | undefined> = ref();
const { element: toggleRef, findReference } = useHtmlElementFromVNodes();


const handleMenuKeys = (event: KeyboardEvent) => {
  // Close the menu on tab or escape
  if (
    managedOpen.value &&
    (menuRef.value?.el?.contains(event.target as Node) || toggleRef.value?.contains(event.target as Node))
  ) {
    if (props.closeOnKeys.includes(event.key)) {
      event.preventDefault();
      managedOpen.value = false;
      if (toggleRef.value instanceof HTMLElement) {
        toggleRef.value?.focus();
      }
    }
  }
};

const handleClick = (event: MouseEvent) => {
  // toggle was clicked open via keyboard, focus on first menu item
  if (managedOpen.value && toggleRef.value?.contains(event.target as Node) && event.detail === 0) {
    nextTick(() => {
      const firstElement = menuRef.value?.el?.querySelector('li button:not(:disabled),li input:not(:disabled)');
      firstElement && (firstElement as HTMLElement).focus();
    });
  }

  // If the event is not on the toggle, close the menu
  if (managedOpen.value && !toggleRef.value?.contains(event.target as Node) && !menuRef.value?.el?.contains(event.target as Node)) {
    managedOpen.value = false;
  }
};

function handleSelect(event: Event) {
  emit('select', event);
  if (props.focusToggleOnSelect && toggleRef.value instanceof HTMLElement) {
    toggleRef.value?.focus();
  }
}

useEventListener(window, 'keydown', handleMenuKeys);
useEventListener(window, 'click', handleClick);
</script>
