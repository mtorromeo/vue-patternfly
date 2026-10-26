<template>
  <div v-bind="ouiaProps" :class="styles.panelHeader">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPanelHeader',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
