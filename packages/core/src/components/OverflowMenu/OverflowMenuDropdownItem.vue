<template>
  <pf-dropdown-item v-if="isBelowBreakpoint || !shared" v-bind="ouiaProps" :class="styles.overflowMenuControl" component="button">
    <slot />
  </pf-dropdown-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject } from 'vue';
import PfDropdownItem from '../Menu/MenuItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfOverflowMenuDropdownItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfDropdownItem>, 'component' | 'ouiaId' | 'ouiaSafe'> {
  shared?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
