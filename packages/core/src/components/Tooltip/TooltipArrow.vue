<template>
  <div v-bind="ouiaProps" :class="styles.tooltipArrow">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTooltipArrow',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
