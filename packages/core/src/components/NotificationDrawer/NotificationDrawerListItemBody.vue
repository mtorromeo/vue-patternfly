<template>
  <div v-bind="{...ouiaProps as any, ...$attrs}" :class="styles.notificationDrawerListItemDescription">
    <slot />
  </div>
  <div v-if="timestamp || $slots.timestamp" :class="styles.notificationDrawerListItemTimestamp">
    <slot name="timestamp">{{ timestamp }}</slot>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerListItemBody',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  timestamp?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  timestamp?: (props?: Record<never, never>) => any;
}>();
</script>
