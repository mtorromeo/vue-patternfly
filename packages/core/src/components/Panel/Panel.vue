<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.panel,
      {
        [styles.modifiers.raised]: variant === 'raised',
        [styles.modifiers.bordered]: variant === 'bordered',
        [styles.modifiers.secondary]: variant === 'secondary',
        [styles.modifiers.scrollable]: scrollable,
        [styles.modifiers.scrollableAutoHeight]: autoHeight,
        [styles.modifiers.noBorder]: noBorder,
        [styles.modifiers.fullHeight]: fullHeight,
        [styles.modifiers.glass]: glass,
        [styles.modifiers.pill]: pill,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered' | 'secondary';
  /** Flag to add scrollable styling to the panel */
  scrollable?: boolean;
  /** When used with a scrollable panel, sets the panel to auto height */
  autoHeight?: boolean;
  /** Flag to remove the panel's border */
  noBorder?: boolean;
  /** Flag to make the panel fill the available height of its container */
  fullHeight?: boolean;
  /** Modifies the panel to use glass styling when the glass theme is enabled */
  glass?: boolean;
  /** Uses pill (fully rounded) border radius for the panel */
  pill?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPanel',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
