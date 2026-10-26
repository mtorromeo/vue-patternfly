<template>
  <div :class="[styles.tabContentBody, { [styles.modifiers.padding]: padding }]">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Indicates if there should be padding around the tab content body */
  padding?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import type { HTMLAttributes, VNode } from 'vue';

defineOptions({
  name: 'PfTabContentBody',
});

defineProps<Props>();

defineSlots<{
  /** Content of the tab content body */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
