<template>
  <div
    v-bind="ouiaProps"
    :id="validId"
    :class="[
      styles.progress,
      variant && styles.modifiers[variant],
      measureLocation === 'inside' || measureLocation === 'outside' && styles.modifiers[measureLocation],
      measureLocation !== 'inside' && size && size !== 'md' && styles.modifiers[size],
      {
        [styles.modifiers.lg]: measureLocation === 'inside',
        [styles.modifiers.singleline]: !title,
      },
    ]"
  >
    <component :is="tooltip ? PfTooltip : PassThrough" :position="tooltipPosition">
      <div
        :id="`${validId}-description`"
        :class="[styles.progressDescription, {
          [styles.modifiers.truncate]: titleTruncated,
        }]"
        @mouseenter="checkTooltip($event as PointerEvent)"
      >{{ title }}</div>
      <template v-if="tooltip" #content>{{ tooltip }}</template>
    </component>

    <div :class="styles.progressStatus" aria-hidden="true">
      <span v-if="measureLocation && ['top', 'outside'].includes(measureLocation)" :class="styles.progressMeasure">
        <slot>{{ label || `${scaledValue}%` }}</slot>
      </span>

      <span v-if="variantIcon !== null" :class="styles.progressStatusIcon">
        <component :is="variantIcon" />
      </span>
    </div>

    <div
      role="progressbar"
      :class="styles.progressBar"
      :aria-valuemin="min"
      :aria-valuenow="value"
      :aria-valuemax="max"
      :aria-labelledby="progressLabelledBy"
      :aria-label="ariaLabel"
      :aria-valuetext="valueText"
    >
      <div :class="styles.progressIndicator" :style="{ width: `${scaledValue}%` }">
        <span :class="styles.progressMeasure">
          <template v-if="measureLocation === 'inside'">{{ value }}%</template>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import PassThrough from '../helpers/PassThrough.vue';
import PfTooltip from './Tooltip/Tooltip.vue';
import CircleXmarkIcon from '@vue-patternfly/icons/circle-xmark-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import { getUniqueId } from '../util';
import { ref, computed, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

const variantToIcon = {
  danger: CircleXmarkIcon,
  success: CircleCheckIcon,
  warning: TriangleExclamationIcon,
};

defineOptions({
  name: 'PfProgress',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Id of the progress component. */
  id?: string;

  /** Actual value of progress. */
  value?: number;

  /** Minimal value of progress. */
  min?: number;

  /** Maximum value of progress. */
  max?: number;

  /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
  valueText?: string;

  /** Title above progress. */
  title?: string;

  /** Text description of current progress value to display instead of percentage. */
  label?: string;

  titleTruncated?: boolean,

  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';

  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg' | null;

  /** Where the measure percent will be located. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';

  /** Status variant of progress. */
  variant?: 'success' | 'warning' | 'danger';

  /** Adds accessible text to the ProgressBar. Required when title not used and there is not any label associated with the progress bar */
  ariaLabel?: string;

  /** Associates the ProgressBar with it's label for accessibility purposes. Required when title not used */
  ariaLabelledby?: string;
}

const props = withDefaults(defineProps<Props>(), {
  valueText: '',
  value: 0,
  min: 0,
  max: 100,
  measureLocation: 'top',
  tooltipPosition: 'top',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const tooltip = ref('');

const validId = computed(() => {
  return props.id || getUniqueId();
});

const scaledValue = computed(() => {
  return Math.min(100, Math.max(0, Math.floor(((props.value - props.min) / (props.max - props.min)) * 100)));
});

const progressLabelledBy = computed(() => {
  return props.title ? `${validId.value}-description` : props.ariaLabelledby;
});

const variantIcon = computed(() => {
  if (props.variant && Object.prototype.hasOwnProperty.call(variantToIcon, props.variant)) {
    return variantToIcon[props.variant];
  }
  return null;
});

function checkTooltip(e: PointerEvent) {
  if (!(e.currentTarget instanceof HTMLElement)) {
    return;
  }
  if (e.currentTarget.offsetWidth < e.currentTarget.scrollWidth) {
    tooltip.value = props.title || e.currentTarget.innerHTML;
  } else {
    tooltip.value = '';
  }
}
</script>
