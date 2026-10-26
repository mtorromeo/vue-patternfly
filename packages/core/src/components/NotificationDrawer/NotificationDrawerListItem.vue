<template>
  <li
    v-bind="ouiaProps"
    :class="[
      styles.notificationDrawerListItem,
      styles.modifiers[variant],
      {
        [styles.modifiers.hoverable]: hoverable,
        [styles.modifiers.read]: read,
      },
    ]"
    :tabindex="tabindex"
    @keydown="onKeydown"
  >
    <span class="pf-v6-screen-reader">{{ readStateScreenReaderText ?? (read ? 'read' : 'unread') }}</span>
    <slot />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { LiHTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerListItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /**  Modifies the list item to include hover styles on :hover */
  hoverable?: boolean;
  /**  Adds styling to the list item to indicate it has been read */
  read?: boolean;
  /**  Tab index for the list item */
  tabindex?: string | number;
  /**  Variant indicates the severity level */
  variant?: 'custom' | 'success' | 'danger' | 'warning' | 'info';
  /**  Visually hidden text that conveys the current read state of the notification list item. Defaults to "read" or "unread". */
  readStateScreenReaderText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'custom',
  tabindex: 0,
  hoverable: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

// Enter and Space click the focused element, unless it is an action of the item header
function onKeydown(event: KeyboardEvent) {
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    !target.parentElement?.classList.contains(styles.notificationDrawerListItemAction) &&
    (event.key === 'Enter' || event.key === ' ')
  ) {
    target.click();
  }
}
</script>
