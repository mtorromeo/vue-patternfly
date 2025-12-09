<template>
  <ul v-bind="ouiaProps" :class="`${styles.notificationDrawer}__list`" role="list">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNotificationDrawerList',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role'> {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
