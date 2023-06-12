<template>
  <div v-if="!isBelowBreakpoint || persistent" :class="styles.overflowMenuContent">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfOverflowMenuContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  persistent?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
