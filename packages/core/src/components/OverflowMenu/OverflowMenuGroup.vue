<template>
  <div
    v-if="!isBelowBreakpoint || persistent"
    :class="[
      styles.overflowMenuGroup, {
        [styles.modifiers.buttonGroup]: type === 'button',
        [styles.modifiers.iconButtonGroup]: type === 'icon',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfOverflowMenuGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  persistent?: boolean;
  type?: 'button' | 'icon';
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
