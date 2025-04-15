<template>
  <div
    v-if="!dismissed"
    v-bind="ouiaProps"
    ref="el"
    :class="[
      styles.alert,
      styles.modifiers[variant], {
        [styles.modifiers.inline]: inline,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.expandable]: expandable,
        [styles.modifiers.expanded]: managedExpanded,
      }
    ]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? 'false' : undefined"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div v-if="expandable" :class="styles.alertToggle">
      <pf-button
        variant="plain"
        :aria-expanded="managedExpanded"
        :aria-label="toggleAriaLabel || `Toggle ${variantLabel} ${title}`"
        @click="managedExpanded = !managedExpanded"
      >
        <span :class="styles.alertToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </pf-button>
    </div>

    <pf-alert-icon :variant="variant">
      <template v-if="$slots['custom-icon']" #default>
        <slot name="custom-icon" />
      </template>
    </pf-alert-icon>

    <component :is="tooltipVisible ? PfTooltip : PassThrough" :position="tooltipPosition">
      <component
        :is="component"
        ref="titleRef"
        :class="[styles.alertTitle, {
          [styles.modifiers.truncate]: truncateTitle,
        }]"
        :style="truncateTitle ? `${maxLines.name}: ${truncateTitle}` : null"
        :tabindex="tooltipVisible ? '0' : null"
      >
        <span class="pf-v5-screen-reader">{{ variantLabel }}</span>
        {{ title }}
      </component>
      <template v-if="tooltipVisible" #content>{{ title }}</template>
    </component>

    <div v-if="onClose" :class="styles.alertAction">
      <pf-close-button @click="onClose?.($event)" />
    </div>

    <div v-if="$slots.default && (!expandable || expanded)" :class="styles.alertDescription">
      <slot />
    </div>

    <div v-if="$slots['action-links']" :class="styles.alertActionGroup">
      <slot name="action-links" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import maxLines from '@patternfly/react-tokens/dist/esm/c_alert__title_max_lines';

import PassThrough from '../../helpers/PassThrough.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfButton from '../Button.vue';
import PfCloseButton from '../CloseButton.vue';
import PfAlertIcon, { AlertVariantIcons } from './AlertIcon.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { ref, watch, type HTMLAttributes, onBeforeUnmount, onMounted, computed, type Component, useTemplateRef, type ComponentPublicInstance } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useManagedProp } from '../../use';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfAlert',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-live' | 'aria-atomic'> {
  /** Adds accessible text to the alert. */
  ariaLabel?: string;
  /** Uniquely identifies the alert. */
  id?: string;
  /** Flag indicating that the alert is expandable. */
  expandable?: boolean;
  /** Flag indicating that the alert is expanded */
  expanded?: boolean;
  /** Show close button */
  onClose?: (e: Event) => void;
  /** Flag to indicate if the alert is inline. */
  inline?: boolean;
  /** Flag to indicate if the alert is in a live region. */
  liveRegion?: boolean;
  /** Flag to indicate if the alert is plain. */
  plain?: boolean;
  /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
   * be dismissed after that amount of time in milliseconds.
   */
  timeout?: number | boolean;
  /** If the user hovers over the alert and `timeout` expires, this is how long to wait
   * before finally dismissing the alert.
   */
  timeoutAnimation?: number;
  /** Title of the alert.  */
  title?: string;
  /** Sets the element to use as the alert title. Default is h4. */
  component?: string | Component;
  /** Adds accessible text to the alert toggle. */
  toggleAriaLabel?: string;
  /** Position of the tooltip which is displayed if text is truncated. */
  tooltipPosition?: Placement;
  /** Truncate title to number of lines. */
  truncateTitle?: number;
  /** Adds alert variant styles.  */
  variant?: keyof typeof AlertVariantIcons;
  /** Variant label text for screen readers. */
  variantLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
  variant: 'custom',
  truncateTitle: 0,
  timeoutAnimation: 3000,
  tooltipPosition: 'auto',
  component: 'h4',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe, variant: props.variant});

const emit = defineEmits<{
  (name: 'mouseenter', e: Event): void;
  (name: 'mouseleave', e: Event): void;
  (name: 'timeout'): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'custom-icon'?: (props?: Record<never, never>) => any;
  'action-links'?: (props?: Record<never, never>) => any;
}>();

const titleRef = useTemplateRef<HTMLElement | ComponentPublicInstance>('titleRef');
const { width, height } = useElementSize(titleRef);
const tooltipVisible = ref(false);
let timer: number | undefined = undefined;
let animationTimer: number | undefined = undefined;
const isMouseOver = ref(false);
const timedOut = ref(false);
const timedOutAnimation = ref(true);
const containsFocus = ref(false);
const el = useTemplateRef('el');

const managedExpanded = useManagedProp('expanded', false);
const variantLabel = computed(() => `${props.variant.charAt(0).toUpperCase()}${props.variant.slice(1)} alert:`);
const dismissed = computed(() => timedOut.value && timedOutAnimation.value && !isMouseOver.value && !containsFocus.value);


watch(() => [width.value, height.value], () => {
  if (!(titleRef.value instanceof HTMLElement) || !props.truncateTitle) {
    return false;
  }
  tooltipVisible.value = titleRef.value.offsetHeight < titleRef.value.scrollHeight;
});

watch(dismissed, () => {
  if (dismissed.value) {
    emit('timeout');
  }
});

onMounted(() => {
  if (props.timeout) {
    timer = setTimeout(() => (timedOut.value = true), props.timeout === true ? 8000 : props.timeout);
  }

  document.addEventListener('focus', onDocumentFocus, true);

  watch(() => [containsFocus.value, isMouseOver.value], () => {
    if (!containsFocus.value && !isMouseOver.value) {
      animationTimer = setTimeout(() => (timedOutAnimation.value = true), props.timeoutAnimation);
    } else {
      clearTimeout(animationTimer);
      timedOutAnimation.value = false;
    }
  });
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  clearTimeout(animationTimer);
  document.removeEventListener('focus', onDocumentFocus, true);
});

function onDocumentFocus() {
  if (el.value?.contains(document.activeElement)) {
    containsFocus.value = true;
    timedOutAnimation.value = false;
  } else if (containsFocus.value) {
    containsFocus.value = false;
  }
}

function onMouseEnter(e: Event) {
  isMouseOver.value = true;
  timedOutAnimation.value = false;
  emit('mouseenter', e);
}

function onMouseLeave(e: Event) {
  isMouseOver.value = false;
  emit('mouseleave', e);
}
</script>
