<template>
  <span :class="styles.tabsItemIcon">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTabTitleIcon',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
