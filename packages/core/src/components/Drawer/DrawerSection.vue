<template>
  <div v-bind="ouiaProps" :class="[styles.drawerSection, {
    [styles.modifiers.noBackground]: colorVariant === 'no-background',
    [styles.modifiers.secondary]: colorVariant === 'secondary',
  }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerSection',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Color variant of the background of the drawer Section */
  colorVariant?: 'no-background' | 'default' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
