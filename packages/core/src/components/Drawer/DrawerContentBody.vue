<template>
  <div v-bind="ouiaProps" :class="[styles.drawerBody, {[styles.modifiers.padding]: padding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerContentBody',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Indicates if there should be padding around the drawer content body */
  padding?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
