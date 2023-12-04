<template>
  <div
    :class="[styles.panel, {
      [styles.modifiers.raised]: variant === 'raised',
      [styles.modifiers.bordered]: variant === 'bordered',
      [styles.modifiers.scrollable]: scrollable,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPanel',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered';
  /** Flag to add scrollable styling to the panel */
  scrollable?: boolean;
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
