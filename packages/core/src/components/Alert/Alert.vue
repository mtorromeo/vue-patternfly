<template>
  <div
    v-if="!dismissed"
    v-bind="ouiaProps"
    ref="elRef"
    :class="[
      styles.alert,
      styles.modifiers[variant],
      {
        [styles.modifiers.inline]: inline,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.expandable]: expandable,
        [styles.modifiers.expanded]: expanded,
      },
    ]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? 'false' : undefined"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div v-if="expandable" :class="styles.alertToggle">
      <pf-button
        variant="plain"
        :aria-expanded="expanded"
        :aria-label="toggleAriaLabel ?? messages.alertToggle(capitalizedVariant)"
        @click="expanded = !expanded"
      >
        <template #icon>
          <span :class="styles.alertToggleIcon">
            <angle-down-icon />
          </span>
        </template>
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
        :class="[
          styles.alertTitle,
          {
            [styles.modifiers.truncate]: truncateTitle,
          },
        ]"
        :style="truncateTitle ? { [maxLines.name]: truncateTitle } : undefined"
        :tabindex="tooltipVisible ? 0 : undefined"
      >
        <span class="pf-v6-screen-reader">{{ effectiveVariantLabel }}</span>
        <slot name="title">{{ title }}</slot>
      </component>
      <template v-if="tooltipVisible" #content>
        <span class="pf-v6-screen-reader">{{ effectiveVariantLabel }}</span>
        <slot name="title">{{ title }}</slot>
      </template>
    </component>

    <div v-if="$slots['action-close'] || onClose" :class="styles.alertAction">
      <slot name="action-close">
        <pf-alert-action-close-button @close="onClose" />
      </slot>
    </div>

    <div v-if="$slots.default && (!expandable || expanded)" :class="styles.alertDescription">
      <slot />
    </div>

    <div v-if="$slots['action-links']" :class="styles.alertActionGroup">
      <slot name="action-links" />
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'title' | 'aria-live' | 'aria-atomic'> {
  /** Flag indicating that the alert is expandable. */
  expandable?: boolean;
  /** A callback for when the close button is clicked. Setting it renders a pf-alert-action-close-button, unless the
   * action-close slot is used. */
  onClose?: (event: MouseEvent) => void;
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
  /** Adds accessible text to the alert toggle. Defaults to "<Variant> alert details". */
  toggleAriaLabel?: string;
  /** Position of the tooltip which is displayed if text is truncated. */
  tooltipPosition?: Placement;
  /** Truncate title to number of lines. */
  truncateTitle?: number;
  /** Adds alert variant styles.  */
  variant?: keyof typeof AlertVariantIcons;
  /** Variant label text for screen readers. Defaults to "<Variant> alert:". */
  variantLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import { usePfMessages } from '../../messages';
import maxLines from '@patternfly/react-tokens/dist/esm/c_alert__title_max_lines';
import PassThrough from '../../helpers/PassThrough.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfButton from '../Button.vue';
import PfAlertIcon, { AlertVariantIcons } from './AlertIcon.vue';
import PfAlertActionCloseButton from './AlertActionCloseButton.vue';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  useTemplateRef,
  watch,
  type Component,
  type ComponentPublicInstance,
  type HTMLAttributes,
  type VNode,
} from 'vue';
import { useElementSize } from '@vueuse/core';
import type { Placement } from '../../helpers/FloatingUi.vue';
import { AlertGroupItemKey, AlertKey } from './common';

defineOptions({
  name: 'PfAlert',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'custom',
  truncateTitle: 0,
  timeoutAnimation: 3000,
  tooltipPosition: 'auto',
  component: 'h4',
  ouiaSafe: true,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe, variant: props.variant });

/** Flag indicating that the alert is expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

const emit = defineEmits<{
  (name: 'mouseenter', e: MouseEvent): void;
  (name: 'mouseleave', e: MouseEvent): void;
  /** Called once the alert is dismissed after its timeout. */
  (name: 'timeout'): void;
}>();

defineSlots<{
  /** Description of the alert. */
  default?: (props?: Record<never, never>) => VNode[];
  /** Title of the alert, replacing the title prop. */
  title?: (props?: Record<never, never>) => VNode[];
  /** A custom icon, replacing the one of the variant. */
  'custom-icon'?: (props?: Record<never, never>) => VNode[];
  /** Close button: use a pf-alert-action-close-button. */
  'action-close'?: (props?: Record<never, never>) => VNode[];
  /** Action links beneath the description: use pf-alert-action-link. */
  'action-links'?: (props?: Record<never, never>) => VNode[];
}>();

const groupItem = inject(AlertGroupItemKey, undefined);

const capitalizedVariant = computed(() => `${props.variant.charAt(0).toUpperCase()}${props.variant.slice(1)}`);
const effectiveVariantLabel = computed(
  () => props.variantLabel ?? messages.value.alertVariantLabel(capitalizedVariant.value),
);

provide(AlertKey, {
  title: computed(() => props.title),
  variantLabel: effectiveVariantLabel,
});

const titleEl = useTemplateRef<HTMLElement | ComponentPublicInstance>('titleRef');
const { width, height } = useElementSize(titleEl);
const tooltipVisible = ref(false);

watch(
  () => [width.value, height.value, props.truncateTitle],
  () => {
    const el = titleEl.value instanceof HTMLElement ? titleEl.value : titleEl.value?.$el;
    if (!(el instanceof HTMLElement) || !props.truncateTitle) {
      tooltipVisible.value = false;
      return;
    }
    tooltipVisible.value = el.offsetHeight < el.scrollHeight;
  },
);

const el = useTemplateRef('elRef');
const isMouseOver = ref(false);
const containsFocus = ref(false);
const timedOut = ref(false);
const timedOutAnimation = ref(true);
const dismissing = ref(false);
const dismissed = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
let animationTimer: ReturnType<typeof setTimeout> | undefined;

const shouldDismiss = computed(
  () => timedOut.value && timedOutAnimation.value && !isMouseOver.value && !containsFocus.value,
);

watch(shouldDismiss, value => {
  if (!value || dismissing.value) {
    return;
  }
  dismissing.value = true;
  const dismiss = () => {
    dismissed.value = true;
    emit('timeout');
  };
  if (groupItem) {
    groupItem.dismiss(dismiss);
  } else {
    dismiss();
  }
});

watch(
  () => props.timeout,
  timeout => {
    clearTimeout(timer);
    const calculatedTimeout = timeout === true ? 8000 : Number(timeout);
    if (calculatedTimeout > 0) {
      timer = setTimeout(() => (timedOut.value = true), calculatedTimeout);
    }
  },
  { immediate: true },
);

// once the user stops hovering or focusing the alert, wait timeoutAnimation before dismissing it
watch([containsFocus, isMouseOver], () => {
  if (!containsFocus.value && !isMouseOver.value) {
    animationTimer = setTimeout(() => (timedOutAnimation.value = true), props.timeoutAnimation);
  } else {
    clearTimeout(animationTimer);
    timedOutAnimation.value = false;
  }
});

onMounted(() => {
  document.addEventListener('focus', onDocumentFocus, true);
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

function onMouseEnter(e: MouseEvent) {
  isMouseOver.value = true;
  timedOutAnimation.value = false;
  emit('mouseenter', e);
}

function onMouseLeave(e: MouseEvent) {
  isMouseOver.value = false;
  emit('mouseleave', e);
}
</script>
