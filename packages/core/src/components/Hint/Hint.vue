<template>
  <div :class="styles.hint">
    <div v-if="$slots.actions" :class="styles.hintActions">
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfHint',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  actions?: (props?: Record<never, never>) => any;
}>();
</script>
