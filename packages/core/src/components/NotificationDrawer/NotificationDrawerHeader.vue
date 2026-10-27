<template>
  <div v-bind="ouiaProps" :class="styles.notificationDrawerHeader">
    <h1 :class="styles.notificationDrawerHeaderTitle">
      {{ title ?? messages.notificationDrawerTitle }}
    </h1>

    <span
      v-if="customText !== undefined || count !== undefined"
      :class="styles.notificationDrawerHeaderStatus"
      aria-live="polite"
    >
      {{ customText || `${count} ${unreadText ?? messages.notificationDrawerUnread}` }}
    </span>

    <div v-if="$slots.default || onClose" :class="styles.notificationDrawerHeaderAction">
      <slot />
      <div v-if="onClose">
        <pf-close-button :aria-label="closeButtonAriaLabel ?? messages.notificationDrawerClose" @click="onClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import { usePfMessages } from '../../messages';
import type { HTMLAttributes, VNode } from 'vue';
import PfCloseButton from '../CloseButton.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerHeader',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /**  Notification drawer heading count */
  count?: number | string;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
  /**  Callback for when close button is clicked */
  onClose?: (event: PointerEvent) => void;
  /**  Notification drawer heading title. Defaults to the `notificationDrawerTitle` message. */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count. Defaults to the `notificationDrawerUnread` message. */
  unreadText?: string;
  /** Accessible text of the close button. Defaults to the `notificationDrawerClose` message. */
  closeButtonAriaLabel?: string;
}

const props = defineProps<Props>();
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
