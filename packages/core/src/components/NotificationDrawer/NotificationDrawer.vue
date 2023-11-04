<template>
  <div :class="styles.notificationDrawer">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNotificationDrawer',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
