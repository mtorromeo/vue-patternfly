<template>
  <teleport
    :disabled="!toast"
    :to="appendTo"
  >
    <pf-alert-group-inline
      :toast="toast"
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
    toast: Boolean,
    appendTo: {
      type: String,
      default: 'body',
    },
  },
};
</script>
