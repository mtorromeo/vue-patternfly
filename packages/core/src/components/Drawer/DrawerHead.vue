<template>
  <pf-drawer-panel-body v-bind="ouiaProps">
    <div :class="styles.drawerHead">
      <slot />
    </div>
  </pf-drawer-panel-body>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import PfDrawerPanelBody from './DrawerPanelBody.vue';
import type { ComponentProps } from '../../util';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerHead',
});

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfDrawerPanelBody> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
