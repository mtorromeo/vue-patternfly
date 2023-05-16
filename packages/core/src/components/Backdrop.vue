<template>
  <div :class="styles.backdrop">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

defineOptions({
  name: 'PfBackdrop',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
