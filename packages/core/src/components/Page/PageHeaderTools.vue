<template>
  <div :class="styles.pageHeaderTools">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';

defineOptions({
  name: 'PfPageHeaderTools',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
