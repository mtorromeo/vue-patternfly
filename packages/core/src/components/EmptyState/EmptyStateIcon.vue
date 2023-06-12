<template>
  <div v-if="container" :class="styles.emptyStateIcon">
    <slot />
  </div>
  <render v-else />
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import type { HTMLAttributes } from 'vue';
import { findChildrenVNodes } from '../../util';
import { mergeProps } from 'vue';

defineOptions({
  name: 'PfEmptyStateIcon',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  container?: boolean;
}

defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

function render() {
  if (!slots.default) {
    return;
  }

  const children = findChildrenVNodes(slots.default());
  return children.map(e => {
    e.props = mergeProps({
      class: styles.emptyStateIcon,
      'aria-hidden': 'true',
    }, e.props ?? {});
    return e;
  });
}
</script>
