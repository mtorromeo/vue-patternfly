<template>
  <pf-dropdown-item v-if="isBelowBreakpoint || !shared" :class="styles.overflowMenuControl" component="button">
    <slot />
  </pf-dropdown-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject } from 'vue';
import PfDropdownItem, { type Props as DropdownItemProps } from '../Menu/MenuItem.vue';

defineOptions({
  name: 'PfOverflowMenuDropdownItem',
});

export interface Props extends /* @vue-ignore */ Omit<DropdownItemProps, 'component'> {
  shared?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
