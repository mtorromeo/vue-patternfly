<template>
  <div v-bind="(ouiaProps as any)" :class="[styles.drawerSection, {[styles.modifiers.light_200]: colorVariant === DrawerColorVariant.light200}]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { DrawerColorVariant } from './common';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerSection',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Color variant of the background of the drawer Section */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: DrawerColorVariant.default,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
