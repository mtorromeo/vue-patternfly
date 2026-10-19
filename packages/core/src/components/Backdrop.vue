<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.backdrop,
      {
        [styles.modifiers.animate]: !noAnimations,
        [styles.modifiers.show]: !noAnimations && !hidden,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBackdrop',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to disable animations. */
  noAnimations?: boolean;
  /** Flag to hide the backdrop when animations are enabled. Set to true while the backdrop remains mounted to play its exit transition. */
  hidden?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
