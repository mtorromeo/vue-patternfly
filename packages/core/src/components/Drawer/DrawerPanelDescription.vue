<template>
  <div v-bind="ouiaProps" :class="styles.drawerDescription">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { HTMLAttributes, VNode } from 'vue';

defineOptions({
  name: 'PfDrawerPanelDescription',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
