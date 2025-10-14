<template>
  <ol
    v-bind="ouiaProps"
    :class="[styles.progressStepper, {
      [styles.modifiers.center]: centerAligned,
      [styles.modifiers.vertical]: vertical,
      [styles.modifiers.compact]: compact,
    }]"
    role="list"
  >
    <slot />
  </ol>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ OlHTMLAttributes {
  /** Flag indicating the progress stepper should be centered. */
  centerAligned?: boolean;
  /** Flag indicating the progress stepper has a vertical layout. */
  vertical?: boolean;
  /** Flag indicating the progress stepper should be rendered compactly. */
  compact?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper';

import type { OlHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';


defineOptions({
  name: 'PfProgressStepper',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
