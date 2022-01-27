<template>
  <pf-button variant="plain">
    <span :class="[styles.notificationBadge, styles.modifiers[variant]]">
      <slot>
        <pf-attention-bell-icon v-if="variant === 'attention'" />
        <pf-bell-icon v-else />
      </slot>
      <span v-if="count > 0" :class="styles.notificationBadgeCount">{{ count }}</span>
    </span>
  </pf-button>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/NotificationBadge/notification-badge';
import { defineComponent, markRaw, PropType } from 'vue';
import PfButton from './Button.vue';
import PfBellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';
import PfAttentionBellIcon from '@vue-patternfly/icons/dist/esm/icons/attention-bell-icon';

export default defineComponent({
  name: 'PfNotificationBadge',

  components: {
    PfButton,
    PfBellIcon,
    PfAttentionBellIcon,
  },

  props: {
    /** Determines the variant of the notification badge */
    variant: {
      type: String as PropType<'read' | 'unread' | 'attention'>,
      default: 'unread',
      validator: (v: any) => ['read', 'unread', 'attention'].includes(v),
    },

    /** A number displayed in the badge alongside the icon */
    count: {
      type: Number,
      default: 0,
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
