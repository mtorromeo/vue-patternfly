<template>
  <teleport :disabled="!toast" :to="appendTo">
    <pf-alert-group-inline
      v-bind="{ ...ouiaProps, ...$attrs }"
      :animations="animations"
      :toast="toast"
      :live-region="liveRegion"
      :overflow-message="overflowMessage"
      @overflow-click="emit('overflowClick', $event)"
    >
      <slot />
    </pf-alert-group-inline>
  </teleport>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** @beta Flag to animate the alerts when they are added and dismissed. Dynamically added alerts should be
   * prepended to the list. */
  animations?: boolean;
  /** Toast notifications are positioned at the top right corner of the viewport */
  toast?: boolean;
  /** Turns the container into a live region so that changes to content within the alert group, such as appending an
   * alert, are reliably announced to assistive technology. */
  liveRegion?: boolean;
  /** Custom text to show for the overflow message */
  overflowMessage?: string;
  /** Element or selector where a toast alert group is appended to */
  appendTo?: string | RendererElement | null;
}
</script>

<script lang="ts" setup>
import type { HTMLAttributes, RendererElement, VNode } from 'vue';
import PfAlertGroupInline from './AlertGroupInline.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAlertGroup',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  appendTo: 'body',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Function to call if user clicks on overflow message */
  (name: 'overflowClick', e: PointerEvent): void;
}>();

defineSlots<{
  /** Alerts to be rendered in the alert group */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
