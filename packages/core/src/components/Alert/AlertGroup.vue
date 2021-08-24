<template>
  <teleport
    :disabled="!toast"
    :to="appendTo"
  >
    <pf-alert-group-inline
      :toast="toast"
      :live-region="liveRegion"
      v-bind="$attrs"
    >
      <slot />
    </pf-alert-group-inline>
  </teleport>
</template>

<script>
import PfAlertGroupInline from './AlertGroupInline';

export default {
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
  },
};
</script>
