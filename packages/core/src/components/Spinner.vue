<template>
  <svg
    v-bind="ouiaProps"
    :class="[
      styles.spinner,
      inline ? [styles.modifiers.inline] : styles.modifiers[size],
    ]"
    role="progressbar"
    viewBox="0 0 100 100"
    :style="diameter ? {
      [cssDiameter.name]: diameter,
    } : undefined"
    :aria-valuetext="ariaValueText"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledby"
  >
    <circle :class="styles.spinnerPath" cx="50" cy="50" r="45" fill="none" />
  </svg>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<SVGAttributes, 'role' | 'viewBox'> {
  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Text describing that current loading status or progress */
  ariaValueText?: string;
  /** Diameter of spinner set as CSS variable */
  diameter?: string;
  /** @beta Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop. */
  inline?: boolean;
  /** Accessible label to describe what is loading */
  ariaLabel?: string;
  /** ID of the element(s) that provide an accessible name for the spinner. */
  ariaLabelledby?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Spinner/spinner';
import cssDiameter from '@patternfly/react-tokens/dist/esm/c_spinner_diameter';
import type { SVGAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSpinner',
});

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  ariaValueText: 'Loading...',
  ariaLabel: 'Contents',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
