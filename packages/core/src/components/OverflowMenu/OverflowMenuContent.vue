<template>
  <div v-if="!isBelowBreakpoint || persistent" v-bind="(ouiaProps as any)" :class="styles.overflowMenuContent">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenuContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  persistent?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
