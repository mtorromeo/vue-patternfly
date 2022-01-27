<template>
  <div
    :class="[styles.emptyState, {
      [styles.modifiers.xs]: variant === 'xs',
      [styles.modifiers.sm]: variant === 'small',
      [styles.modifiers.lg]: variant === 'large',
      [styles.modifiers.xl]: variant === 'xl',
      [styles.modifiers.fullHeight]: fullHeight,
    }]"
  >
    <div :class="styles.emptyStateContent">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfEmptyState',

  props: {
    /** Cause component to consume the available height of its container */
    fullHeight: Boolean,

    /** Modifies EmptyState max-width */
    variant: {
      type: String,
      default: '',
      validator: (v: any) => ['', 'xs', 'small', 'large', 'xl', 'full'].includes(v),
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
