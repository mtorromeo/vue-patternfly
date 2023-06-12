<template>
  <div v-if="isBelowBreakpoint || additionalOptions" :class="styles.overflowMenuControl">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfOverflowMenuControl',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  additionalOptions?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
