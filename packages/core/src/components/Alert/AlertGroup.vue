<template>
  <teleport :disabled="!toast" :to="appendTo">
    <pf-alert-group-inline
      v-bind="$attrs"
      :toast="toast"
      :live-region="liveRegion"
      :overflow-message="overflowMessage"
      @overflow-click="e => $emit('overflowClick', e)"
    >
      <slot />
    </pf-alert-group-inline>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PfAlertGroupInline from './AlertGroupInline';

export default defineComponent({
  name: 'PfAlertGroup',

  components: { PfAlertGroupInline },

  inheritAttrs: false,

  props: {
    /** Toast notifications are positioned at the top right corner of the viewport */
    toast: Boolean,

    /** Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology. */
    liveRegion: Boolean,

    /** Determine where the alert is appended to */
    appendTo: {
      type: String,
      default: 'body',
    },

    /** Custom text to show for the overflow message */
    overflowMessage: String,
  },

  emits: {
    overflowClick: (e: MouseEvent | TouchEvent) => e !== undefined,
  },
});
</script>
