<template>
  <pf-button variant="plain">
    <span :class="[styles.notificationBadge, styles.modifiers[variant], {[styles.modifiers.expanded]: expanded}]">
      <slot>
        <pf-attention-bell-icon v-if="variant === 'attention'" />
        <pf-bell-icon v-else />
      </slot>
      <span v-if="count > 0" :class="styles.notificationBadgeCount">{{ count }}</span>
    </span>
  </pf-button>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationBadge/notification-badge';
import PfButton from './Button.vue';
import PfBellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';
import PfAttentionBellIcon from '@vue-patternfly/icons/dist/esm/icons/attention-bell-icon';

defineOptions({
  name: 'PfNotificationBadge',
});

withDefaults(defineProps<{
  /** Determines the variant of the notification badge */
  variant?: 'read' | 'unread' | 'attention';

  /** A number displayed in the badge alongside the icon */
  count?: number;

  /** Flag for applying expanded styling and setting the aria-expanded attribute on the
   * notification badge.
   */
  expanded?: boolean;
}>(), {
  variant: 'unread',
  count: 0,
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
