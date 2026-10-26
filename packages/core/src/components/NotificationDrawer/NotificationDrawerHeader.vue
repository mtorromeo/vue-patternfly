<template>
  <div v-bind="ouiaProps" :class="styles.notificationDrawerHeader">
    <h1 :class="styles.notificationDrawerHeaderTitle">
      {{ title }}
    </h1>

    <span
      v-if="customText !== undefined || count !== undefined"
      :class="styles.notificationDrawerHeaderStatus"
      aria-live="polite"
    >
      {{ customText || `${count} ${unreadText}` }}
    </span>

    <div v-if="$slots.default || onClose" :class="styles.notificationDrawerHeaderAction">
      <slot />
      <div v-if="onClose">
        <pf-close-button :aria-label="closeButtonAriaLabel" @click="onClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
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
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
  /** Accessible text of the close button */
  closeButtonAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Notifications',
  unreadText: 'unread',
  closeButtonAriaLabel: 'Close',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
