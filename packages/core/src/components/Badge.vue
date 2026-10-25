<template>
  <span
    v-bind="ouiaProps"
    :class="[
      styles.badge,
      {
        [styles.modifiers.read]: read,
        [styles.modifiers.unread]: !read,
        [styles.modifiers.disabled]: disabled,
      },
    ]"
  >
    <slot />
    <span v-if="screenReaderText || $slots['screen-reader-text']" class="pf-v6-screen-reader">
      <slot name="screen-reader-text">{{ screenReaderText }}</slot>
    </span>
  </span>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text announced by screen readers to indicate the current content/status of the badge. */
  screenReaderText?: string;
  /** Adds styling to the badge to indicate it has been read */
  read?: boolean;
  /** Adds styling to the badge to indicate it is disabled */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Badge/badge';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBadge',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content rendered inside the badge */
  default?: (props?: Record<never, never>) => VNode[];
  /** Text announced by screen readers, replacing screenReaderText */
  'screen-reader-text'?: (props?: Record<never, never>) => VNode[];
}>();
</script>
