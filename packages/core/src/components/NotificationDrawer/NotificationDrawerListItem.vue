<template>
  <li
    v-bind="ouiaProps"
    :class="[styles.notificationDrawerListItem, styles.modifiers[variant], {
      [styles.modifiers.hoverable]: hoverable,
      [styles.modifiers.read]: read,
    }]"
    :tabindex="tabindex"
  >
    <slot />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { LiHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerListItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /**  Modifies the list item to include hover styles on :hover */
  hoverable?: boolean;
  /**  Adds styling to the list item to indicate it has been read */
  read?: boolean;
  /**  Tab index for the list item */
  tabindex?: string | number;
  /**  Variant indicates the severity level */
  variant?: 'custom' | 'success' | 'danger' | 'warning' | 'info';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'custom',
  tabindex: 0,
  hoverable: true,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
