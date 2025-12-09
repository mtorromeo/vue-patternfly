<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.panel, {
      [styles.modifiers.raised]: variant === 'raised',
      [styles.modifiers.bordered]: variant === 'bordered',
      [styles.modifiers.scrollable]: scrollable,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPanel',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered';
  /** Flag to add scrollable styling to the panel */
  scrollable?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
