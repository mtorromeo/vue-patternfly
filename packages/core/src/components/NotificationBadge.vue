<template>
  <pf-button
    v-bind="ouiaProps"
    :variant="variant === 'plain' ? 'plain' : 'stateful'"
    :state="variant === 'plain' ? undefined : variant"
    :expanded="expanded"
    :clicked="expanded"
    :class="{ [styles.modifiers.notify]: animating }"
    @animationend="animating = false"
  >
    <template #icon>
      <slot v-if="variant === 'attention'" name="attention-icon">
        <attention-bell-icon />
      </slot>
      <slot v-else name="icon">
        <bell-icon />
      </slot>
    </template>
    <template v-if="count > 0 || $slots.default" #default>
      <template v-if="count > 0">{{ count }}</template>
      <slot v-else />
    </template>
  </pf-button>
</template>

<script lang="ts">
interface Props
  extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'ouiaId' | 'ouiaSafe'> {
  /** Determines the variant of the notification badge */
  variant?: 'read' | 'unread' | 'attention' | 'plain';

  /** A number displayed in the badge alongside the icon */
  count?: number;

  /** Flag for applying expanded styling and setting the aria-expanded attribute on the
   * notification badge.
   */
  expanded?: boolean;

  /** Flag indicating whether the notification badge animation should be triggered. Each
   * time this prop is true, the animation will be triggered a single time.
   */
  shouldNotify?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Button/button';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import AttentionBellIcon from '@vue-patternfly/icons/attention-bell-icon';
import type { ComponentProps } from 'vue-component-type-helpers';
import PfButton from './Button.vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { ref, watch, type VNode } from 'vue';

defineOptions({
  name: 'PfNotificationBadge',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'read',
  count: 0,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content shown when there is no count */
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon of the read, unread and plain variants */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Icon of the attention variant */
  'attention-icon'?: (props?: Record<never, never>) => VNode[];
}>();

// the icon animates while shouldNotify is set, until its animation ends
const animating = ref(props.shouldNotify);
watch(
  () => props.shouldNotify,
  shouldNotify => (animating.value = shouldNotify),
);
</script>
