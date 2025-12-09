<template>
  <div v-bind="ouiaProps" :class="styles.drawerHead">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerHead',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
