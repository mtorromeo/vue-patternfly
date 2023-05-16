<template>
  <ul
    :class="[styles.alertGroup, {
      [styles.modifiers.toast]: toast,
    }]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? false : undefined"
  >
    <render-children />

    <li v-if="overflowMessage">
      <button :class="styles.alertGroupOverflowButton" @click="emit('overflowClick', $event)">
        {{ overflowMessage }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';

import { h } from 'vue';
import { findChildrenVNodes } from '../../util';

defineOptions({
  name: 'PfAlertGroupInline',
});

defineProps<{
  toast?: boolean;
  liveRegion?: boolean;
  overflowMessage?: string;
}>();

const emit = defineEmits<{
  (name: 'overflowClick', e: MouseEvent | TouchEvent): void;
}>();

const slots = defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

function renderChildren() {
  const children = findChildrenVNodes(slots.default?.({}));
  return children.map((e, index) => h('li', { key: index }, e));
}
</script>
