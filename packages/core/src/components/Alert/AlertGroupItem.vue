<template>
  <li
    :class="[
      styles.alertGroupItem,
      {
        [styles.modifiers.offstageTop]: offstageTop,
        [styles.modifiers.offstageRight]: offstageRight,
      },
    ]"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { inject, onBeforeUnmount, onMounted, provide, ref, type VNode } from 'vue';
import { AlertGroupItemKey, AlertGroupKey } from './common';

defineOptions({
  name: 'PfAlertGroupItem',
});

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const group = inject(AlertGroupKey, undefined);

// animated items slide in from the top once mounted
const offstageTop = ref(group?.animations.value ?? false);
const offstageRight = ref(false);
let onDismissed: (() => void) | undefined;
let slideInTimer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  slideInTimer = setTimeout(() => (offstageTop.value = false), 0);
});

onBeforeUnmount(() => {
  clearTimeout(slideInTimer);
  onDismissed = undefined;
});

function onTransitionEnd(event: TransitionEvent) {
  if (!group?.animations.value || event.target !== event.currentTarget || !offstageRight.value) {
    return;
  }

  // without a motion preference wait for the "slide up" of the other alerts, otherwise only opacity transitions
  const prefersReducedMotion = !window.matchMedia?.('(prefers-reduced-motion: no-preference)')?.matches;
  if (prefersReducedMotion || event.propertyName === 'grid-template-rows') {
    const callback = onDismissed;
    onDismissed = undefined;
    callback?.();
  }
}

provide(AlertGroupItemKey, {
  dismiss(callback) {
    if (group?.animations.value) {
      offstageRight.value = true;
      onDismissed = callback;
    } else {
      callback();
    }
  },
});
</script>
