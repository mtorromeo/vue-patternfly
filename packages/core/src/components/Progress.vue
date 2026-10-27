<template>
  <div
    v-bind="ouiaProps"
    :id="id"
    :class="[
      styles.progress,
      variant && styles.modifiers[variant],
      (measureLocation === 'inside' || measureLocation === 'outside') && styles.modifiers[measureLocation],
      measureLocation !== 'inside' && size && size !== 'md' && styles.modifiers[size],
      {
        [styles.modifiers.lg]: measureLocation === 'inside',
        [styles.modifiers.singleline]: !hasTitle,
      },
    ]"
  >
    <component :is="tooltip ? PfTooltip : PassThrough" v-if="hasTitle" :position="tooltipPosition">
      <div
        :id="`${id}-description`"
        :class="[styles.progressDescription, { [styles.modifiers.truncate]: truncatedTitle }]"
        :aria-hidden="truncatedTitle ? undefined : 'true'"
        :tabindex="truncatedTitle ? 0 : undefined"
        @mouseenter="truncatedTitle && updateTooltip($event)"
        @focus="truncatedTitle && updateTooltip($event)"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <template v-if="tooltip" #content>{{ tooltip }}</template>
    </component>

    <div v-if="measureLocation !== 'none' || statusIcon" :class="styles.progressStatus" aria-hidden="true">
      <span v-if="measureLocation === 'top' || measureLocation === 'outside'" :class="styles.progressMeasure">
        <slot>{{ label || `${scaledValue}%` }}</slot>
      </span>

      <span v-if="statusIcon" :class="styles.progressStatusIcon">
        <component :is="statusIcon" />
      </span>
    </div>

    <div
      role="progressbar"
      :class="styles.progressBar"
      :aria-valuemin="min"
      :aria-valuenow="value"
      :aria-valuemax="max"
      :aria-labelledby="hasTitle ? `${id}-description` : ariaLabelledby"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedby"
      :aria-valuetext="valueText"
    >
      <div :class="styles.progressIndicator" :style="{ width: `${scaledValue}%` }">
        <span :class="styles.progressMeasure">
          <slot v-if="measureLocation === 'inside'">{{ label || `${scaledValue}%` }}</slot>
        </span>
      </div>
    </div>

    <div v-if="helperText || $slots['helper-text']" :class="styles.progressHelperText">
      <slot name="helper-text">{{ helperText }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Id of the progress component. Generated when not set. */
  id?: string;
  /** Actual value of progress. */
  value?: number;
  /** Minimal value of progress. */
  min?: number;
  /** Maximum value of progress. */
  max?: number;
  /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
  valueText?: string;
  /** Title above progress, replaced by the title slot. Only a string title is truncated with titleTruncated. */
  title?: string;
  /** Text description of current progress value to display instead of percentage, replaced by the default slot. */
  label?: string;
  /** Indicate whether to truncate the string title */
  titleTruncated?: boolean;
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg' | null;
  /** Where the measure percent will be located. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';
  /** Status variant of progress. */
  variant?: 'success' | 'warning' | 'danger';
  /** Content conveying additional information about the progress, replaced by the helper-text slot. */
  helperText?: string;
  /** Hides the status icon, helpful when space is limited. The status must then be conveyed in another way. */
  hideStatusIcon?: boolean;
  /** Adds accessible text to the progress bar. Required when title not used and there is not any label associated with the progress bar */
  ariaLabel?: string;
  /** Associates the progress bar with its label for accessibility purposes. Required when title not used */
  ariaLabelledby?: string;
  /** Adds an accessible description to the progress bar via space separated list of ids. Required with a helper text. */
  ariaDescribedby?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import { devWarn } from '../helpers/dev';
import PassThrough from '../helpers/PassThrough.vue';
import PfTooltip from './Tooltip/Tooltip.vue';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import { ref, computed, useSlots, type HTMLAttributes, type VNode, useId } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

const variantToIcon = {
  danger: CircleExclamationIcon,
  success: CircleCheckIcon,
  warning: TriangleExclamationIcon,
};

defineOptions({
  name: 'PfProgress',
});

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  min: 0,
  max: 100,
  measureLocation: 'top',
  tooltipPosition: 'top',
  id: () => useId(),
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Description of the current progress value, replacing the label prop */
  default?: (props?: Record<never, never>) => VNode[];
  /** Title above the progress, replacing the title prop */
  title?: (props?: Record<never, never>) => VNode[];
  /** Additional information about the progress, replacing the helperText prop */
  'helper-text'?: (props?: Record<never, never>) => VNode[];
}>();

const slots = useSlots();
const hasTitle = computed(() => !!props.title || !!slots.title);
// like upstream, only a string title is truncated
const truncatedTitle = computed(() => props.titleTruncated && !!props.title && !slots.title);

if (!hasTitle.value && !props.ariaLabelledby && !props.ariaLabel) {
  devWarn(
    'One of aria-label or aria-labelledby properties should be passed when using the progress component without a title.',
  );
}

const tooltip = ref('');

const scaledValue = computed(
  () => Math.min(100, Math.max(0, Math.floor(((props.value - props.min) / (props.max - props.min)) * 100))) || 0,
);

const statusIcon = computed(() => (!props.hideStatusIcon && props.variant ? variantToIcon[props.variant] : null));

function updateTooltip(e: Event) {
  if (!(e.currentTarget instanceof HTMLElement)) {
    return;
  }
  tooltip.value = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth ? (props.title ?? '') : '';
}
</script>
