<template>
  <div v-if="!isBelowBreakpoint || persistent" v-bind="ouiaProps" :class="styles.overflowMenuContent">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './common';
import { inject, ref, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenuContent',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Modifies the overflow menu content visibility */
  persistent?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, ref(false));
</script>
