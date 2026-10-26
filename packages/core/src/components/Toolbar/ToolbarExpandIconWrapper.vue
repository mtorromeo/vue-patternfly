<template>
  <span :class="styles.toolbarExpandAllIcon">
    <slot />
  </span>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import type { HTMLAttributes, VNode } from 'vue';

defineOptions({
  name: 'PfToolbarExpandIconWrapper',
});

defineProps<Props>();

defineSlots<{
  /** Icon used for the expand all or collapse all indication */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
