<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.tooltipContent, {
      [styles.modifiers.textAlignLeft]: leftAligned,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTooltipContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  leftAligned?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
