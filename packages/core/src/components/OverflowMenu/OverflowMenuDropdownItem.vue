<template>
  <pf-dropdown-item v-if="isBelowBreakpoint || !shared" v-bind="ouiaProps" component="button">
    <slot />
  </pf-dropdown-item>
</template>

<script lang="ts" setup>
import { OverflowMenuIsBelowBreakpointKey } from './common';
import { inject, ref, type VNode } from 'vue';
import PfDropdownItem from '../Menu/MenuItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfOverflowMenuDropdownItem',
});

interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfDropdownItem>, 'component' | 'ouiaId' | 'ouiaSafe'> {
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  shared?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, ref(false));
</script>
