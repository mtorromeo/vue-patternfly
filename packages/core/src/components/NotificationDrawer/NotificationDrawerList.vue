<template>
  <ul class="pf-v5-c-notification-drawer__list" role="list">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNotificationDrawerList',
});

export interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'role'> {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
