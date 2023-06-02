<template>
  <teleport :to="teleportTarget">
    <pf-backdrop v-if="open">
      <pf-focus-trap :class="bullsEyeStyles.bullseye" :active="!disableFocusTrap">
        <component
          :is="component"
          v-bind="$attrs"
          role="dialog"
          :aria-label="ariaLabel"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="ariaDescribedby || (noBodyWrapper ? null : descriptorId)"
          aria-modal="true"
          :class="[styles.modalBox, {
            [styles.modifiers.alignTop]: position === 'top',
            [styles.modifiers.lg]: variant === 'large',
            [styles.modifiers.sm]: variant === 'small',
            [styles.modifiers.md]: variant === 'medium',
            [styles.modifiers[titleIconVariant ?? 'default']]: titleIconVariant,
          }]"
          :style="{ [topSpacer.name]: positionOffset }"
        >
          <pf-close-button v-if="!noClose" @click="$emit('update:open', false)" />

          <pf-modal-header>
            <slot name="header">
              <component :is="titleOverflowing ? PfTooltip : (PassThrough as Component)" v-if="title">
                <h1
                  ref="titleRef"
                  :class="[styles.modalBoxTitle, {
                    [styles.modifiers.icon]: titleIconVariant,
                  }]"
                >
                  <span v-if="titleIconVariant" :class="styles.modalBoxTitleIcon">
                    <circle-check-icon v-if="titleIconVariant === 'success'" />
                    <circle-exclamation-icon v-else-if="titleIconVariant === 'danger'" />
                    <triangle-exclamation-icon v-else-if="titleIconVariant === 'warning'" />
                    <circle-info-icon v-else-if="titleIconVariant === 'info'" />
                    <BellIcon v-else-if="titleIconVariant === 'default'" />
                    <slot v-else name="title-icon" />
                  </span>
                  <span v-if="label" :class="accessibleStyles.screenReader">{{ label }}</span>
                  <span :class="styles.modalBoxTitleText">{{ title }}</span>
                </h1>

                <template v-if="titleOverflowing" #content>{{ title }}</template>
              </component>

              <div v-if="$slots.description" :id="descriptorId" :class="styles.modalBoxDescription">
                <slot name="description" />
              </div>
            </slot>

            <template #help>
              <slot name="help" />
            </template>
          </pf-modal-header>

          <component
            :is="noBodyWrapper ? 'pass-through' : 'div'"
            :id="$slots.description || ariaDescribedby ? null : descriptorId"
            :class="styles.modalBoxBody"
          >
            <slot />
          </component>

          <footer v-if="$slots.footer" :class="styles.modalBoxFooter">
            <slot name="footer" />
          </footer>
        </component>
      </pf-focus-trap>
    </pf-backdrop>
  </teleport>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import backdropStyles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import topSpacer from '@patternfly/react-tokens/dist/esm/c_modal_box_m_align_top_spacer';

import { capitalize, ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import type { Component, Ref, HTMLAttributes } from 'vue';
import PfModalHeader from './ModalHeader.vue';
import PassThrough from '../../helpers/PassThrough';
import PfBackdrop from '../Backdrop.vue';
import PfFocusTrap from '../../helpers/FocusTrap.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfCloseButton from '../CloseButton.vue';
import CircleCheckIcon from '@vue-patternfly/icons/dist/esm/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/dist/esm/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';
import { useElementOverflow } from '../../use';

defineOptions({
  name: 'PfModal',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag to show the modal */
  open?: boolean,

  /** Flag to remove the close button in the header area of the modal */
  noClose?: boolean,

  /** Flag indicating if modal content should be placed in a modal box body wrapper */
  noBodyWrapper?: boolean,

  /** Flag to disable focus trap */
  disableFocusTrap?: boolean,

  /** Simple text content of the Modal Header, also used for aria-label on the body */
  title?: string;

  /** Optional title label text for screen readers */
  titleLabel?: string;

  /** Optional alert icon (or other) to show before the title of the Modal Header
   * When the predefined alert types are used the default styling
   * will be automatically applied */
  titleIconVariant?: 'default' | 'success' | 'danger' | 'warning' | 'info';

  appendTo?: HTMLElement | string | (() => HTMLElement);

  /** Accessible descriptor of modal */
  ariaLabel?: string;

  /** Id of Modal Box description */
  ariaDescribedby?: string;

  /** Id of Modal Box label */
  ariaLabelledby?: string;

  /** Variant of the modal */
  variant?: 'default' | 'small' | 'medium' | 'large';

  /** Alternate position of the modal */
  position?: 'default' | 'top';

  /** Offset from alternate position. Can be any valid CSS length/percentage */
  positionOffset?: string;

  /** Id of the ModalBoxBody */
  descriptorId?: string;

  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  position: 'default',
  component: 'div',
});

defineEmits<{
  (name: 'update:open', value: boolean): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
  header?: (props: Record<never, never>) => any;
  footer?: (props: Record<never, never>) => any;
  help?: (props: Record<never, never>) => any;
  description?: (props: Record<never, never>) => any;
  'title-icon'?: (props: Record<never, never>) => any;
}>();

// inject: ['open'],
const titleRef: Ref<HTMLElement | undefined> = ref();
const titleOverflowing = useElementOverflow(titleRef);

const teleportTarget = computed(() => {
  if (typeof props.appendTo === 'function') {
    return props.appendTo();
  }
  if (typeof props.appendTo === 'string') {
    return document.getElementById(props.appendTo) ?? document.body;
  }
  return props.appendTo ?? document.body;
});

const label = computed(() => {
  if (!props.titleLabel && props.titleIconVariant) {
    return `${capitalize(props.titleIconVariant)} alert:`;
  }
  return props.titleLabel;
});

watch(() => props.open, () => {
  if (props.open) {
    teleportTarget.value.classList.add(backdropStyles.backdropOpen);
  } else {
    teleportTarget.value.classList.remove(backdropStyles.backdropOpen);
  }
});

onMounted(() => {
  if (props.open) {
    teleportTarget.value.classList.add(backdropStyles.backdropOpen);
  } else {
    teleportTarget.value.classList.remove(backdropStyles.backdropOpen);
  }
});

onBeforeUnmount(() => {
  teleportTarget.value.classList.remove(backdropStyles.backdropOpen);
});
</script>
