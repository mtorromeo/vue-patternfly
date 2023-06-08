<template>
  <span :class="styles.tabsItemText">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTabTitleText',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
