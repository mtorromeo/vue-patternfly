<template>
  <div
    v-bind="ouiaProps"
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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfEmptyState',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Cause component to consume the available height of its container */
  fullHeight?: boolean;

  /** Modifies EmptyState max-width */
  variant?: 'xs' | 'small' | 'large' | 'xl' | 'full';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
