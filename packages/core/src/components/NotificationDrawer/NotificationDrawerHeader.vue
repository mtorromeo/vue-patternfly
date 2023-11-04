<template>
  <div :class="styles.notificationDrawerHeader">
    <pf-text component="h1" :class="styles.notificationDrawerHeaderTitle">
      {{ title }}
    </pf-text>

    <span v-if="customText || count !== undefined" :class="styles.notificationDrawerHeaderStatus">
      {{ customText || `${count} ${unreadText}` }}
    </span>

    <div v-if="$slots.default || onClose" :class="styles.notificationDrawerHeaderAction">
      <slot />
      <div v-if="onClose">
        <pf-close-button @close="onClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';
import PfText from '../Text/Text.vue';
import PfCloseButton from '../CloseButton.vue';

defineOptions({
  name: 'PfNotificationDrawerHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /**  Notification drawer heading count */
  count?: number | string;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
  /**  Callback for when close button is clicked */
  onClose?: (event: KeyboardEvent | MouseEvent | TouchEvent) => void;
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Notifications',
  unreadText: 'unread',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
