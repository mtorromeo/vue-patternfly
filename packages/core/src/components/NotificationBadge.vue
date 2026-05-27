<template>
  <pf-button v-bind="ouiaProps" :variant="variant === 'plain' ? 'plain' : 'stateful'" :state="variant === 'plain' ? undefined : variant" :class="{ [styles.modifiers.notify]: animating }" @animationend="handleAnimationEnd">
    <template #icon>
      <slot name="icon">
        <attention-bell-icon v-if="variant === 'attention'" />
        <bell-icon v-else />
      </slot>
    </template>
    <template v-if="count > 0">{{ count }}</template>
    <slot v-else />
  </pf-button>
</template>

<script lang="ts" setup>
import styles from "@patternfly/react-styles/css/components/Button/button";
import BellIcon from "@vue-patternfly/icons/bell-icon";
import AttentionBellIcon from "@vue-patternfly/icons/attention-bell-icon";
import type { ComponentProps } from "vue-component-type-helpers";
import PfButton from "./Button.vue";
import { useOUIAProps } from "../helpers/ouia";
import { ref } from "vue";
import { watch } from "vue";

defineOptions({
  name: "PfNotificationBadge",
});

interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, "variant"> {
  /** Determines the variant of the notification badge */
  variant?: "read" | "unread" | "attention" | "plain";

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

const props = withDefaults(defineProps<Props>(), {
  variant: "read",
  count: 0,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

const animating = ref(false);
watch(
  () => props.shouldNotify,
  (newValue) => {
    if (newValue) {
      animating.value = true;
    }
  },
);

function handleAnimationEnd() {
  animating.value = false;
}
</script>
