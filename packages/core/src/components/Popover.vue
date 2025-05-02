<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-slot="{ placement, middlewareData }"
    :teleport-to="appendTo"
    :reference="referenceElement"
    :placement="position"
    :middleware="floatingMiddleware"
    :hidden="!visible"
    :animation-duration="animationDuration"
    @shown="() => $emit('shown')"
    @hidden="() => $emit('hidden')"
  >
    <pf-focus-trap
      ref="dialogRef"
      v-bind="{...ouiaProps, ...$attrs}"
      :active="focusTrap && visible"
      :class="[styles.popover, (styles.modifiers as any)[placement], {
        [styles.modifiers.noPadding]: noPadding,
        [styles.modifiers.widthAuto]: autoWidth,
      }]"
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
    >
      <div :class="styles.popoverArrow" />
      <div :class="styles.popoverContent">
        <pf-close-button
          v-if="showClose"
          :aria-label="closeBtnAriaLabel"
          @click.prevent="visible = false"
        />

        <pf-title v-if="$slots.header" :id="`popover-${uniqueId}-header`" :h="6" size="md">
          <slot name="header" />
        </pf-title>

        <div :id="`popover-${uniqueId}-body`" :class="styles.popoverBody">
          <slot name="body" />
        </div>

        <footer
          v-if="$slots.footer"
          :id="`popover-${uniqueId}-footer`"
          :class="styles.popoverFooter"
        >
          <slot name="footer" />
        </footer>
      </div>
    </pf-focus-trap>
  </floating-ui>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { useHtmlElementFromVNodes } from '../use';
import { computed, watch, onMounted, onBeforeUnmount, type RendererElement, useTemplateRef, useId } from 'vue';
import popoverMaxWidth from '@patternfly/react-tokens/dist/js/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/js/c_popover_MinWidth';
import PfFocusTrap, { type Props as PfFocusTrapProps } from '../helpers/FocusTrap.vue';
import PfCloseButton from './CloseButton.vue';
import PfTitle from './Title.vue';
import FloatingUi from '../helpers/FloatingUi.vue';
import PassThrough from '../helpers/PassThrough.vue';
import { offset, autoPlacement, type Placement, hide, flip as uiFlip, type FlipOptions, type AutoPlacementOptions } from '@floating-ui/core';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfPopover',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<PfFocusTrapProps, 'active' | 'role' | 'aria-modal' | 'aria-labelledby' | 'aria-describedby'> {
  /** Whether to trap focus in the popover */
  focusTrap?: boolean;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
  /** Removes fixed-width and allows width to be defined by contents */
  autoWidth?: boolean;
  /** Allows content to touch edges of popover container */
  noPadding?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /**
   * If true, tries to keep the popover in view by flipping it if necessary.
   * Otherwise it uses an auto-placement strategy.
   */
  flip?: boolean;
  flipOptions?: FlipOptions;
  placementOptions?: AutoPlacementOptions;
  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
  noHideOnOutsideClick?: boolean,
  /**
   * Popover position.
   * Notice: it will change the position if there is not enough space for the starting position.
   * The behavior of where it flips to can be controlled through the flip, flipOptions or placementOptions props.
   */
  position?: Placement;
  /** Minimum width of the popover (default 6.25rem) */
  minWidth?: string;
  /** Maximum width of the popover (default 18.75rem) */
  maxWidth?: string;
  /** CSS fade transition animation duration */
  animationDuration?: number;
  closeBtnAriaLabel?: string;
  distance?: number;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  closeBtnAriaLabel: 'Close',
  minWidth: popoverMinWidth.value,
  maxWidth: popoverMaxWidth.value,
  animationDuration: 300,
  distance: 25,
  open: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const visible = defineModel('open', { default: false });

defineSlots<{
  default: (props?: Record<never, never>) => any;
  header?: (props?: Record<never, never>) => any;
  body?: (props?: Record<never, never>) => any;
  footer?: (props?: Record<never, never>) => any;
}>();

defineEmits<{
  (name: 'shown'): void;
  (name: 'hidden'): void;
}>();

const dialog = useTemplateRef('dialogRef');
const { element: referenceElement, findReference } = useHtmlElementFromVNodes();

watch(referenceElement, (el) => {
  el?.addEventListener('click', (e: Event) => {
    e.stopPropagation();
    visible.value = !visible.value;
  });
});

const floatingMiddleware = computed(() => [
  props.flip
    ? uiFlip(props.flipOptions)
    : autoPlacement(props.placementOptions),
  offset(props.distance),
  hide(),
  hide({
    strategy: 'escaped',
  }),
]);

const uniqueId = useId();

const hasCustomMinWidth = computed(() => {
  return props.minWidth !== popoverMinWidth.value;
});

const hasCustomMaxWidth = computed(() => {
  return props.maxWidth !== popoverMaxWidth.value;
});

onMounted(() => {
  document.addEventListener('click', onDocumentClick as (e: MouseEvent) => void);
  document.addEventListener('keydown', onEscPress, { capture: true });
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick as (e: MouseEvent) => void);
  document.removeEventListener('keydown', onEscPress, { capture: true });
});

function onDocumentClick(event: PointerEvent) {
  if (props.noHideOnOutsideClick || !visible.value) {
    return;
  }
  // check if we clicked within the popper, if so don't do anything
  if (dialog.value?.$el?.contains(event.target)) {
    return;
  }
  visible.value = false;
}

function onEscPress(event: KeyboardEvent) {
  const keyCode = event.keyCode || event.which;

  if (!visible.value || !(keyCode === 27 /* ESC */)) {
    return;
  }

  visible.value = false;
}

defineExpose({
  visible,
});
</script>
