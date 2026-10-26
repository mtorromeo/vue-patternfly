<template>
  <teleport :to="teleportTarget">
    <pf-backdrop
      v-if="rendered"
      :id="backdropId"
      :class="backdropClass"
      :no-animations="noAnimations"
      :hidden="!open"
      :aria-hidden="!noAnimations && !open ? true : undefined"
      @transitionend="onBackdropTransitionEnd"
    >
      <pf-focus-trap
        :id="focusTrapId"
        :class="bullsEyeStyles.bullseye"
        :active="!disableFocusTrap && (noAnimations || open)"
        :focus-trap-options="{
          clickOutsideDeactivates: true,
          tabbableOptions: { displayCheck: 'none' },
          // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
          // We want to prevent this in case false is ever passed in.
          initialFocus: elementToFocus || undefined,
        }"
      >
        <component
          :is="component"
          v-bind="{ ...ouiaProps, ...$attrs }"
          :id="boxId"
          role="dialog"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="describedby"
          aria-modal="true"
          :class="[
            styles.modalBox,
            {
              [styles.modifiers.animate]: !noAnimations,
              [styles.modifiers.open]: !noAnimations && open,
              [styles.modifiers.alignTop]: position === 'top',
              [styles.modifiers.lg]: variant === 'large',
              [styles.modifiers.sm]: variant === 'small',
              [styles.modifiers.md]: variant === 'medium',
            },
          ]"
          :style="{
            '--pf-v6-c-modal-box--Width': width ? (typeof width !== 'number' ? width : `${width}px`) : undefined,
            '--pf-v6-c-modal-box--MaxWidth': maxWidth
              ? typeof maxWidth !== 'number'
                ? maxWidth
                : `${maxWidth}px`
              : undefined,
            [topSpacer.name]: positionOffset,
          }"
        >
          <div v-if="!noClose" :class="styles.modalBoxClose">
            <pf-close-button
              :ouia-id="ouiaId !== undefined ? `${ouiaId}-ModalBoxCloseButton` : undefined"
              @click="emit('update:open', false)"
            />
          </div>

          <pf-modal-header
            v-if="title || $slots.header || $slots.description || $slots.help"
            :title="title"
            :title-icon-variant="titleIconVariant"
            :title-label="titleLabel"
            :descriptor-id="$slots.description ? descriptorId : undefined"
          >
            <template v-if="$slots.header" #default>
              <slot name="header" />
            </template>
            <template v-if="$slots['title-icon']" #title-icon>
              <slot name="title-icon" />
            </template>
            <template v-if="$slots.description" #description>
              <slot name="description" />
            </template>
            <template v-if="$slots.help" #help>
              <slot name="help" />
            </template>
          </pf-modal-header>

          <slot v-if="noBodyWrapper" />
          <auto-wrap
            v-else
            :component="PfModalBody"
            :exclude="[PfModalHeader, PfModalFooter]"
            :id="$slots.description || ariaDescribedby ? undefined : descriptorId"
          >
            <slot />
          </auto-wrap>

          <pf-modal-footer v-if="$slots.footer">
            <slot name="footer" />
          </pf-modal-footer>
        </component>
      </pf-focus-trap>
    </pf-backdrop>
  </teleport>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role' | 'aria-modal'> {
  /** Flag to show the modal */
  open?: boolean;
  /** Flag to remove the close button in the header area of the modal */
  noClose?: boolean;
  /** Flag indicating if loose modal content should not be placed in a modal body wrapper */
  noBodyWrapper?: boolean;
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
  /** The element to focus when the modal opens. By default the first
   * focusable element will receive focus.
   */
  elementToFocus?: HTMLElement | SVGElement | string;
  /** Id of the focus trap, to append menus to it so that they break out of the modal box */
  focusTrapId?: string;
  /** Additional classes added to the modal backdrop */
  backdropClass?: HTMLAttributes['class'];
  /** Simple text content of the Modal Header, also used for aria-label on the body */
  title?: string;
  /** Optional title label text for screen readers */
  titleLabel?: string;
  /** Optional alert icon (or other) to show before the title of the Modal Header
   * When the predefined alert types are used the default styling
   * will be automatically applied */
  titleIconVariant?: ModalTitleIconVariant;
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo?: HTMLElement | string | (() => HTMLElement);
  /** Id of Modal Box description */
  ariaDescribedby?: string;
  /** Variant of the modal */
  variant?: 'default' | 'small' | 'medium' | 'large';
  /** Default width of the modal. */
  width?: number | string;
  /** Maximum width of the modal. */
  maxWidth?: number | string;
  /** Alternate position of the modal */
  position?: 'default' | 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage */
  positionOffset?: string;
  /** Id of the ModalBoxBody */
  descriptorId?: string;
  component?: string | Component;
  /** Flag to disable animations. */
  noAnimations?: boolean;
  /** Called when Escape is pressed while the modal is open, in place of closing it */
  onEscapePress?: (event: KeyboardEvent) => void;
}

// the backdrop ids must be unique across Vue apps sharing a target, which useId does not ensure
let backdropCounter = 0;

// the backdrops of the open modals of each target, the last one being the active modal
const openModalStacks = new Map<HTMLElement, string[]>();

// marks the target as having an open backdrop and hides from screen readers all its children
// but the backdrop of the active modal
function syncTarget(target: HTMLElement) {
  const stack = openModalStacks.get(target);
  const active = stack?.[stack.length - 1];
  target.classList.toggle(backdropStyles.backdropOpen, active !== undefined);
  for (const child of Array.from(target.children)) {
    if (active !== undefined && child.id !== active) {
      child.setAttribute('aria-hidden', 'true');
    } else {
      child.removeAttribute('aria-hidden');
    }
  }
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import backdropStyles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import topSpacer from '@patternfly/react-tokens/dist/esm/c_modal_box_m_align_top_spacer';

import { computed, onBeforeUnmount, provide, ref, useAttrs, useId, watch } from 'vue';
import type { Component, HTMLAttributes, VNode } from 'vue';
import PfModalHeader from './ModalHeader.vue';
import PfModalBody from './ModalBody.vue';
import PfModalFooter from './ModalFooter.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfBackdrop from '../Backdrop.vue';
import PfFocusTrap from '../../helpers/FocusTrap.vue';
import PfCloseButton from '../CloseButton.vue';
import { useEventListener } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { ModalKey, type ModalTitleIconVariant } from './common';

defineOptions({
  name: 'PfModal',
  inheritAttrs: false,
});

const transitionEndFallbackDelay = 300;

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  position: 'default',
  component: 'div',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'update:open', value: boolean): void;
}>();

defineSlots<{
  /** Content of the modal: wrapped in a modal body unless it is made of pf-modal-header, pf-modal-body and pf-modal-footer */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom content of the modal header, replacing the title and the description */
  header?: (props?: Record<never, never>) => VNode[];
  /** Content of the modal footer */
  footer?: (props?: Record<never, never>) => VNode[];
  /** Help section of the modal header */
  help?: (props?: Record<never, never>) => VNode[];
  /** Description of the modal, in the header */
  description?: (props?: Record<never, never>) => VNode[];
  /** Custom icon shown before the title */
  'title-icon'?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
const generatedBoxId = useId();
const boxId = computed(() => (typeof attrs.id === 'string' ? attrs.id : generatedBoxId));
const backdropId = `pf-modal-backdrop-${backdropCounter++}`;

const titleId = ref<string>();
const descriptionId = ref<string>();
provide(ModalKey, { titleId, descriptionId });

// like upstream, a modal without a title nor an aria-label is labelled by its whole content
const ariaLabelledby = computed(() => {
  if (attrs['aria-labelledby'] !== undefined) {
    return attrs['aria-labelledby'];
  }
  return attrs['aria-label'] ? undefined : (titleId.value ?? boxId.value);
});

const describedby = computed(
  () =>
    props.ariaDescribedby ||
    attrs['aria-describedby'] ||
    descriptionId.value ||
    (props.noBodyWrapper ? undefined : props.descriptorId),
);

const teleportTarget = computed(() => {
  if (typeof props.appendTo === 'function') {
    return props.appendTo();
  }
  if (typeof props.appendTo === 'string') {
    return document.querySelector<HTMLElement>(props.appendTo) ?? document.body;
  }
  return props.appendTo ?? document.body;
});

// Keeps the modal in the DOM while the close animation runs: with animations enabled it is
// unmounted once the backdrop's transition ends instead of as soon as open becomes false.
const rendered = ref(props.open);
let transitionEndFallback: ReturnType<typeof setTimeout> | undefined;

function clearTransitionEndFallback() {
  clearTimeout(transitionEndFallback);
  transitionEndFallback = undefined;
}

watch(
  () => [props.open, props.noAnimations],
  () => {
    clearTransitionEndFallback();
    if (props.open) {
      rendered.value = true;
    } else if (props.noAnimations) {
      rendered.value = false;
    } else if (rendered.value) {
      // Ensure the modal is removed if CSS transitions are disabled or transitionend does not fire.
      transitionEndFallback = setTimeout(() => (rendered.value = false), transitionEndFallbackDelay);
    }
  },
);

function onBackdropTransitionEnd(e: TransitionEvent) {
  // Only unmount once the backdrop's own transition finishes, not one bubbled from its children
  if (!props.open && e.target === e.currentTarget) {
    clearTransitionEndFallback();
    rendered.value = false;
  }
}

// the target this modal is stacked on while open
let stackTarget: HTMLElement | undefined;

function release() {
  const target = stackTarget;
  if (!target) {
    return;
  }
  stackTarget = undefined;
  const stack = (openModalStacks.get(target) ?? []).filter(id => id !== backdropId);
  if (stack.length) {
    openModalStacks.set(target, stack);
  } else {
    openModalStacks.delete(target);
  }
  syncTarget(target);
}

function acquire(target: HTMLElement) {
  if (stackTarget === target) {
    return;
  }
  release();
  stackTarget = target;
  const stack = openModalStacks.get(target) ?? [];
  stack.push(backdropId);
  openModalStacks.set(target, stack);
  syncTarget(target);
}

watch(
  [() => props.open, teleportTarget],
  ([open, target]) => {
    if (open) {
      acquire(target);
    } else {
      release();
    }
  },
  { immediate: true },
);

useEventListener(teleportTarget, 'keydown', (e: KeyboardEvent) => {
  if (!props.open || e.key !== 'Escape') {
    return;
  }
  if (props.onEscapePress) {
    props.onEscapePress(e);
  } else {
    emit('update:open', false);
  }
});

onBeforeUnmount(() => {
  clearTransitionEndFallback();
  release();
});
</script>
