<template>
  <div :class="styles.drawerActions">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerActions',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
