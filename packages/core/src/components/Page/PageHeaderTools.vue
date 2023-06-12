<template>
  <div :class="styles.pageHeaderTools">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPageHeaderTools',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
