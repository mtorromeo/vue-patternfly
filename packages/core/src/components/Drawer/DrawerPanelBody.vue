<template>
  <div v-bind="(ouiaProps as any)" :class="[styles.drawerBody, {[styles.modifiers.noPadding]: noPadding}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerPanelBody',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Indicates if there should be no padding around the drawer panel body */
  noPadding?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
