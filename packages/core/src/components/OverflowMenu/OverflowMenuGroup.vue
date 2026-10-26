<template>
  <div
    v-if="!isBelowBreakpoint || persistent"
    v-bind="ouiaProps"
    :class="[
      styles.overflowMenuGroup,
      {
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
import { OverflowMenuIsBelowBreakpointKey } from './common';
import { inject, ref, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfOverflowMenuGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Modifies the overflow menu group visibility */
  persistent?: boolean;
  /** Indicates a button or icon group */
  type?: 'button' | 'icon';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isBelowBreakpoint = inject(OverflowMenuIsBelowBreakpointKey, ref(false));
</script>
