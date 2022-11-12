<template>
  <div
    :id="validId"
    :class="[
      styles.progress,
      styles.modifiers[variant],
      measureLocation === 'inside' || measureLocation === 'outside' && styles.modifiers[measureLocation],
      measureLocation !== 'inside' && size !== 'md' && styles.modifiers[size],
      {
        [styles.modifiers.lg]: measureLocation === 'inside',
        [styles.modifiers.singleline]: !title,
      },
    ]"
  >
    <component :is="tooltip ? 'pf-tooltip' : 'pass-through'" :position="tooltipPosition">
      <div
        :id="`${validId}-description`"
        :class="[styles.progressDescription, {
          [styles.modifiers.truncate]: titleTruncated,
        }]"
        @mouseenter="checkTooltip"
      >{{ title }}</div>

      <template #content>{{ tooltip }}</template>
    </component>

    <div :class="styles.progressStatus" aria-hidden="true">
      <span v-if="['top', 'outside'].includes(measureLocation)" :class="styles.progressMeasure">
        <slot name="label">{{ label || `${value}%` }}</slot>
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

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import PassThrough from '../helpers/PassThrough';
import PfTooltip from './Tooltip/Tooltip.vue';
import CircleXmarkIcon from '@vue-patternfly/icons/dist/esm/icons/circle-xmark-icon';
import CircleCheckIcon from '@vue-patternfly/icons/dist/esm/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/triangle-exclamation-icon';
import { getUniqueId } from '../util';
import { type Component, defineComponent, markRaw, type PropType } from 'vue';

const variantToIcon = {
  danger: CircleXmarkIcon as Component,
  success: CircleCheckIcon as Component,
  warning: TriangleExclamationIcon as Component,
};

export default defineComponent({
  name: 'PfProgress',

  components: { PassThrough, PfTooltip },

  props: {
    /** Id of the progress component. */
    id: {
      type: String,
      default: null,
    },

    /** Actual value of progress. */
    value: {
      type: Number,
      default: 0,
    },

    /** Minimal value of progress. */
    min: {
      type: Number,
      default: 0,
    },

    /** Maximum value of progress. */
    max: {
      type: Number,
      default: 100,
    },

    /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
    valueText: {
      type: String,
      default: '',
    },

    /** Title above progress. */
    title: {
      type: String,
      default: null,
    },

    /** Text description of current progress value to display instead of percentage. */
    label: {
      type: String,
      default: null,
    },

    titleTruncated: Boolean,

    /** Position of the tooltip which is displayed if title is truncated */
    tooltipPosition: {
      type: String as PropType<'auto' | 'top' | 'bottom' | 'left' | 'right'>,
      default: 'top',
      validator: (v: any) => ['auto', 'top', 'bottom', 'left', 'right'].includes(v),
    },

    /** Size variant of progress. */
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | null>,
      default: null,
      validator: (v: any) => !v || ['sm', 'md', 'lg'].includes(v),
    },

    /** Where the measure percent will be located. */
    measureLocation: {
      type: String as PropType<'outside' | 'inside' | 'top' | 'none'>,
      default: 'top',
      validator: (v: any) => ['outside', 'inside', 'top', 'none'].includes(v),
    },

    /** Status variant of progress. */
    variant: {
      type: String as PropType<'success' | 'warning' | 'danger'>,
      default: '',
      validator: (v: any) => !v || ['danger', 'success', 'warning'].includes(v),
    },

    /** Adds accessible text to the ProgressBar. Required when title not used and there is not any label associated with the progress bar */
    ariaLabel: {
      type: String,
      default: undefined,
    },

    /** Associates the ProgressBar with it's label for accessibility purposes. Required when title not used */
    ariaLabelledby: {
      type: String,
      default: undefined,
    },
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },

  data() {
    return {
      tooltip: '',
    };
  },

  computed: {
    validId() {
      return this.id || getUniqueId();
    },

    scaledValue() {
      return Math.min(100, Math.max(0, Math.floor(((this.value - this.min) / (this.max - this.min)) * 100)));
    },

    progressLabelledBy() {
      return this.title ? `${this.validId}-description` : this.ariaLabelledby;
    },

    variantIcon() {
      if (Object.prototype.hasOwnProperty.call(variantToIcon, this.variant)) {
        return variantToIcon[this.variant];
      }
      return null;
    },
  },

  methods: {
    checkTooltip(e: MouseEvent) {
      if (!(e.currentTarget instanceof HTMLElement)) {
        return;
      }
      if (e.currentTarget.offsetWidth < e.currentTarget.scrollWidth) {
        this.tooltip = this.title || e.currentTarget.innerHTML;
      } else {
        this.tooltip = '';
      }
    },
  },
});
</script>
