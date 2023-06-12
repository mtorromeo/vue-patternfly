<template>
  <teleport :disabled="!toast" :to="appendTo">
    <pf-alert-group-inline
      v-bind="$attrs"
      :toast="toast"
      :live-region="liveRegion"
      :overflow-message="overflowMessage"
      @overflow-click="e => emit('overflow-click', e)"
    >
      <slot />
    </pf-alert-group-inline>
  </teleport>
</template>

<script lang="ts" setup>
import PfAlertGroupInline from './AlertGroupInline.vue';
import type { ComponentProps } from '../../util';

defineOptions({
  name: 'PfAlertGroup',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfAlertGroupInline> {
  /** Toast notifications are positioned at the top right corner of the viewport */
  toast?: boolean;
  /** Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology. */
  liveRegion?: boolean;
  /** Determine where the alert is appended to */
  appendTo?: string;
  /** Custom text to show for the overflow message */
  overflowMessage?: string;
}

withDefaults(defineProps<Props>(), {
  appendTo: 'body',
});

const emit = defineEmits<{
  (name: 'overflow-click', e: MouseEvent | TouchEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
