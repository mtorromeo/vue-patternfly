<template>
  <ul :class="styles.jumpLinksList" role="list">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfJumpLinksList',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
