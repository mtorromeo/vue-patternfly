<template>
  <pf-dropdown-item v-if="isBelowBreakpoint || !shared" v-bind="ouiaProps" :class="styles.overflowMenuControl" component="button">
    <slot />
  </pf-dropdown-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject } from 'vue';
import PfDropdownItem, { type Props as DropdownItemProps } from '../Menu/MenuItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenuDropdownItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<DropdownItemProps, 'component'> {
  shared?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
