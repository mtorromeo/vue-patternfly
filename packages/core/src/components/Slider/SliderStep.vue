<template>
  <div
    :class="[styles.sliderStep, { [styles.modifiers.active]: active }]"
    :style="{ [stepInsetInlineStart.name]: `${value ? value : stepInsetInlineStart.value}%` }"
  >
    <div v-if="!tickHidden" :class="styles.sliderStepTick" />
    <div v-if="!labelHidden && label" :class="styles.sliderStepLabel">{{ label }}</div>
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating the step is active. */
  active?: boolean;
  /** Flag indicating that the label should be hidden. */
  labelHidden?: boolean;
  /** Flag indicating that the tick should be hidden. */
  tickHidden?: boolean;
  /** Step label. */
  label?: string;
  /** Position of the step, as a percentage of the slider. */
  value?: number;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import stepInsetInlineStart from '@patternfly/react-tokens/dist/esm/c_slider__step_InsetInlineStart';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfSliderStep',
});

defineProps<Props>();
</script>
