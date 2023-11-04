<template>
  <div v-bind="$attrs" :class="styles.notificationDrawerListItemDescription">
    <slot />
  </div>
  <div v-if="timestamp || $slots.timestamp" :class="styles.notificationDrawerListItemTimestamp">
    <slot name="timestamp">{{ timestamp }}</slot>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNotificationDrawerListItemBody',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  timestamp?: string;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  timestamp?: (props?: Record<never, never>) => any;
}>();
</script>
