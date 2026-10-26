<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.slider, { [styles.modifiers.disabled]: disabled }]"
    :style="{ [cssSliderValue.name]: `${stylePercent}%`, [cssFormControlWidthChars.name]: widthChars }"
  >
    <define-slider-input>
      <component :is="inputLabel !== undefined && inputLabel !== '' ? PfInputGroup : PassThrough">
        <component :is="inputLabel !== undefined && inputLabel !== '' ? PfInputGroupItem : PassThrough" fill>
          <pf-text-input
            type="number"
            :model-value="localInputValue"
            :aria-label="inputAriaLabel"
            :disabled="disabled"
            :auto-validate="false"
            @update:model-value="onInputChange"
            @keydown="onInputKeydown"
            @blur="commitInput"
            @click.stop
          />
        </component>
        <pf-input-group-text v-if="inputLabel !== undefined && inputLabel !== ''" :disabled="disabled">
          {{ inputLabel }}
        </pf-input-group-text>
      </component>
    </define-slider-input>

    <div v-if="$slots['start-actions']" :class="styles.sliderActions">
      <slot name="start-actions" />
    </div>

    <div :class="styles.sliderMain">
      <div ref="railRef" :class="styles.sliderRail" @click="!disabled && onRailClick($event)">
        <div :class="styles.sliderRailTrack" />
      </div>

      <div v-if="customSteps" :class="styles.sliderSteps" aria-hidden="true">
        <pf-slider-step
          v-for="stepObj in customSteps"
          :key="stepObj.value"
          :value="stepPercent(stepObj.value, customSteps[0]!.value, customSteps[customSteps.length - 1]!.value)"
          :label="stepObj.label"
          :label-hidden="stepObj.labelHidden"
          :active="stepObj.value <= value"
        />
      </div>
      <div v-else-if="showTicks || !hideBoundaries" :class="styles.sliderSteps" aria-hidden="true">
        <pf-slider-step
          v-for="stepValue in builtSteps"
          :key="stepValue"
          :value="stepPercent(stepValue, min, max)"
          :label="String(stepValue)"
          :tick-hidden="!showTicks"
          :label-hidden="!((stepValue === min || stepValue === max) && !hideBoundaries)"
          :active="stepValue <= value"
        />
      </div>

      <div
        ref="thumbRef"
        :class="styles.sliderThumb"
        :tabindex="disabled ? -1 : 0"
        role="slider"
        :aria-valuemin="customSteps ? customSteps[0]?.value : min"
        :aria-valuemax="customSteps ? customSteps[customSteps.length - 1]?.value : max"
        :aria-valuenow="value"
        :aria-valuetext="thumbAriaValueText ?? ariaTextValue"
        :aria-label="thumbAriaLabel"
        :aria-disabled="disabled"
        :aria-describedby="ariaDescribedby"
        :aria-labelledby="ariaLabelledby"
        @mousedown="!disabled && onMouseDown($event)"
        @touchstart="!disabled && onTouchStart($event)"
        @keydown="!disabled && onThumbKeydown($event)"
        @click="!disabled && thumb?.focus()"
      />
      <pf-tooltip
        v-if="tooltipOverThumb"
        v-bind="tooltipAttrs"
        class="pf-v6-m-tabular-nums"
        :trigger-ref="thumb"
        :entry-delay="0"
      >
        <template #content>
          <slot name="tooltip">{{ tooltipContent ?? ariaTextValue }}</slot>
        </template>
      </pf-tooltip>

      <div v-if="inputVisible && inputAboveThumb" :class="[styles.sliderValue, styles.modifiers.floating]">
        <slider-input />
      </div>
    </div>

    <div v-if="inputVisible && !inputAboveThumb" :class="styles.sliderValue">
      <slider-input />
    </div>

    <div v-if="$slots['end-actions']" :class="styles.sliderActions">
      <slot name="end-actions" />
    </div>
  </div>
</template>

<script lang="ts">
export type { SliderStepObject } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onChange'> {
  /** Array of custom slider step objects (value and label of each step) for the slider. */
  customSteps?: SliderStepObject[];
  /** Flag indicating that the custom steps are continuous: the slider does not snap to the closest step. */
  customStepsContinuous?: boolean;
  /** Adds disabled styling, and disables the slider and the input component if present. */
  disabled?: boolean;
  /** Flag to show the value input field. */
  inputVisible?: boolean;
  /** Flag indicating if the input value should also update the slider value as the user types. When false, the slider updates on blur or enter key press. */
  inputLive?: boolean;
  /** Flag to place the input above the thumb instead of at the end of the slider. */
  inputAboveThumb?: boolean;
  /** Text label placed after the input field. */
  inputLabel?: string | number;
  /** Accessible label for the input field. */
  inputAriaLabel?: string;
  /** Accessible label for the slider thumb. */
  thumbAriaLabel?: string;
  /** Accessible text for the current value of the slider. Defaults to the current value, or the label of the current custom step. */
  thumbAriaValueText?: string;
  /** One or more id's to use for the slider thumb's accessible description. */
  ariaDescribedby?: string;
  /** One or more id's to use for the slider thumb's accessible label. */
  ariaLabelledby?: string;
  /** Enables a tooltip over the slider thumb. Defaults to the current value, or tooltipContent if provided. */
  tooltipOverThumb?: boolean;
  /** Content of the tooltip over the slider thumb, replaced by the tooltip slot. Defaults to the current value. */
  tooltipContent?: string;
  /** Additional attributes passed to the tooltip, such as its aria or position. */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content' | 'triggerRef'>;
  /** The step interval. */
  step?: number;
  /** The minimum permitted value. */
  min?: number;
  /** The maximum permitted value. */
  max?: number;
  /** Flag to show ticks for a slider that does not have custom steps. */
  showTicks?: boolean;
  /** Flag to hide the boundaries of a slider that does not have custom steps. */
  hideBoundaries?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import cssSliderValue from '@patternfly/react-tokens/dist/esm/c_slider_value';
import cssFormControlWidthChars from '@patternfly/react-tokens/dist/esm/c_slider__value_c_form_control_width_chars';
import { computed, ref, watch, onBeforeUnmount, useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PassThrough from '../../helpers/PassThrough.vue';
import PfInputGroup from '../InputGroup/InputGroup.vue';
import PfInputGroupItem from '../InputGroup/InputGroupItem.vue';
import PfInputGroupText from '../InputGroup/InputGroupText.vue';
import PfTextInput from '../TextInput.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfSliderStep from './SliderStep.vue';
import type { SliderStepObject } from './common';

defineOptions({
  name: 'PfSlider',
});

const props = withDefaults(defineProps<Props>(), {
  inputAriaLabel: 'Slider value input',
  thumbAriaLabel: 'Value',
  step: 1,
  min: 0,
  max: 100,
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Current value of the slider */
const value = defineModel<number>({ default: 0 });
/**
 * Value of the input field, when it differs from the slider value, such as the label of a custom step.
 * When bound, the input does not update the slider value: map it in the change event.
 */
const inputValue = defineModel<number | undefined>('inputValue', { default: undefined });

const emit = defineEmits<{
  /** Emitted when the value changes, with the input value when the change comes from the input field */
  (name: 'change', event: Event, value: number, inputValue?: number): void;
}>();

defineSlots<{
  /** Actions placed at the start of the slider */
  'start-actions'?: (props?: Record<never, never>) => VNode[];
  /** Actions placed at the end of the slider */
  'end-actions'?: (props?: Record<never, never>) => VNode[];
  /** Content of the tooltip over the thumb, replacing the tooltipContent prop */
  tooltip?: (props?: Record<never, never>) => VNode[];
}>();

const [DefineSliderInput, SliderInput] = createReusableTemplate();

const rail = useTemplateRef<HTMLDivElement>('railRef');
const thumb = useTemplateRef<HTMLDivElement>('thumbRef');

// the input is independent from the slider value only when its own model is bound
const inputIndependent = computed(() => inputValue.value !== undefined);
const localInputValue = ref<number>(inputValue.value ?? value.value);
watch(
  () => (inputIndependent.value ? inputValue.value : value.value),
  v => {
    localInputValue.value = v ?? 0;
  },
);

const stylePercent = computed(() => ((value.value - props.min) * 100) / (props.max - props.min));
const widthChars = computed(() => String(localInputValue.value).length);

const ariaTextValue = computed(() => {
  if (!props.customStepsContinuous && props.customSteps) {
    const matchingStep = props.customSteps.find(stepObj => stepObj.value === value.value);
    if (matchingStep) {
      return matchingStep.label;
    }
  }
  // for continuous steps, show at most 2 decimals
  return Number(Number(value.value).toFixed(2)).toString();
});

function stepPercent(val: number, min: number, max: number) {
  return ((val - min) * 100) / (max - min);
}

const builtSteps = computed(() => {
  const steps: number[] = [];
  for (let i = props.min; i <= props.max; i += props.step) {
    // with boundaries but no ticks, only the boundaries are needed
    if (!props.showTicks && !props.hideBoundaries && i !== props.min && i !== props.max) {
      continue;
    }
    steps.push(i);
  }
  return steps;
});

function isRtl() {
  return !!rail.value && getComputedStyle(rail.value).direction === 'rtl';
}

function setValue(event: Event, newValue: number, newInputValue?: number) {
  value.value = newValue;
  emit('change', event, newValue, newInputValue);
}

// --- input ---

function commitInput(event: Event) {
  if (inputIndependent.value) {
    inputValue.value = localInputValue.value;
    emit('change', event, value.value, localInputValue.value);
    return;
  }
  const clamped = Math.min(props.max, Math.max(props.min, localInputValue.value));
  localInputValue.value = clamped;
  setValue(event, clamped, clamped);
}

function onInputChange(newValue: number | string | null) {
  localInputValue.value = Number(newValue ?? 0);
  if (props.inputLive) {
    commitInput(new Event('input'));
  }
}

function onInputKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault();
    commitInput(event);
  }
}

// --- thumb dragging ---

let diff = 0;

function clientX(event: MouseEvent | TouchEvent) {
  return 'touches' in event ? (event.touches[0]?.clientX ?? 0) : event.clientX;
}

function startDrag(event: MouseEvent | TouchEvent) {
  if (!thumb.value) {
    return;
  }
  const rect = thumb.value.getBoundingClientRect();
  diff = isRtl() ? rect.right - clientX(event) : clientX(event) - rect.left;
}

function onMouseDown(event: MouseEvent) {
  event.stopPropagation();
  event.preventDefault();
  startDrag(event);
  document.addEventListener('mousemove', onThumbMove);
  document.addEventListener('mouseup', stopDrag);
}

function onTouchStart(event: TouchEvent) {
  event.stopPropagation();
  startDrag(event);
  document.addEventListener('touchmove', onThumbMove, { passive: false });
  document.addEventListener('touchend', stopDrag);
  document.addEventListener('touchcancel', stopDrag);
}

function stopDrag() {
  document.removeEventListener('mousemove', onThumbMove);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', onThumbMove);
  document.removeEventListener('touchend', stopDrag);
  document.removeEventListener('touchcancel', stopDrag);
}

onBeforeUnmount(stopDrag);

function onRailClick(event: MouseEvent) {
  diff = 0;
  onThumbMove(event);
}

function onThumbMove(event: MouseEvent | TouchEvent) {
  if (event.type === 'touchmove') {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  if (!rail.value || !thumb.value) {
    return;
  }

  const railRect = rail.value.getBoundingClientRect();
  let position = isRtl() ? railRect.right - clientX(event) - diff : clientX(event) - diff - railRect.left;
  const end = rail.value.offsetWidth - thumb.value.offsetWidth;
  position = Math.min(Math.max(position, 0), end);

  const percentage = end > 0 ? (100 * position) / end : 0;
  // convert the percentage to a value
  const newValue = Math.round(((percentage * (props.max - props.min)) / 100 + props.min) * 100) / 100;
  let snapValue: number | undefined;

  const { customSteps } = props;
  if (!customSteps) {
    // snap to the step
    snapValue = Math.round((Math.round((newValue - props.min) / props.step) * props.step + props.min) * 100) / 100;
  } else if (!props.customStepsContinuous && customSteps.length) {
    // snap to the closest custom step
    let stepPosition = percentage;
    if (customSteps[customSteps.length - 1]!.value !== 100) {
      stepPosition = (percentage * (props.max - props.min)) / 100 + props.min;
    }
    const stepIndex = customSteps.findIndex(stepObj => stepObj.value >= stepPosition);
    const next = customSteps[stepIndex];
    const previous = customSteps[stepIndex - 1];
    if (!next) {
      snapValue = customSteps[customSteps.length - 1]!.value;
    } else if (next.value === stepPosition || !previous) {
      snapValue = next.value;
    } else {
      snapValue = (next.value + previous.value) / 2 > stepPosition ? previous.value : next.value;
    }
  }

  setValue(event, snapValue ?? newValue);
}

// --- keyboard ---

function onThumbKeydown(event: KeyboardEvent) {
  const { key } = event;
  if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
    return;
  }
  event.preventDefault();

  // in right-to-left languages, the right arrow decreases the value
  const forward = (key === 'ArrowRight') !== isRtl();
  let newValue = value.value;
  const { customSteps } = props;
  if (!props.customStepsContinuous && customSteps) {
    const stepIndex = customSteps.findIndex(stepObj => stepObj.value === value.value);
    const target = customSteps[forward ? stepIndex + 1 : stepIndex - 1];
    if (stepIndex >= 0 && target) {
      newValue = target.value;
    }
  } else if (forward) {
    newValue = Math.min(value.value + props.step, props.max);
  } else {
    newValue = Math.max(value.value - props.step, props.min);
  }

  if (newValue !== value.value) {
    setValue(event, newValue);
  }
}
</script>
