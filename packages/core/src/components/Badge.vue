<template>
  <span
    v-bind="(ouiaProps as any)"
    :class="[styles.badge, {
      [styles.modifiers.read]: read,
      [styles.modifiers.unread]: !read,
    }]">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Badge/badge';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBadge',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  read?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
