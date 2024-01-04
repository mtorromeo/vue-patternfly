<template>
  <div v-bind="(ouiaProps as any)" :class="styles.notificationDrawerHeader">
    <pf-text component="h1" :class="styles.notificationDrawerHeaderTitle">
      {{ title }}
    </pf-text>

    <span v-if="customText || count !== undefined" :class="styles.notificationDrawerHeaderStatus">
      {{ customText || `${count} ${unreadText}` }}
    </span>

    <div v-if="$slots.default || onClose" :class="styles.notificationDrawerHeaderAction">
      <slot />
      <div v-if="onClose">
        <pf-close-button @click="onClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';
import PfText from '../Text/Text.vue';
import PfCloseButton from '../CloseButton.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerHeader',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
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
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Notifications',
  unreadText: 'unread',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
