<template>
  <div v-if="isBelowBreakpoint || additionalOptions" v-bind="ouiaProps" :class="styles.overflowMenuControl">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuIsBelowBreakpointKey } from './OverflowMenu.vue';
import { inject, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenuControl',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  additionalOptions?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, false);
</script>
