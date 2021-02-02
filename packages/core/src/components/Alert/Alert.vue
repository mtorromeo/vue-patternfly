<template>
  <div v-if="!disabled"
       :class="[styles.alert, {
         [styles.modifiers.inline]: inline,
         [styles.modifiers[variant]]: variant !== 'default',
       }]"
       :aria-live="liveRegion ? 'polite' : null"
       :aria-atomic="liveRegion ? 'false' : null"
  >
    <pf-alert-icon :variant="variant">
      <template v-if="$slots['custom-icon']" #default>
        <slot name="custom-icon" />
      </template>
    </pf-alert-icon>

    <component :is="tooltipVisible ? 'pf-tooltip' : 'void'">
      <h4 ref="title"
          :class="[styles.alertTitle, {
            [styles.modifiers.truncate]: truncateTitle,
          }]"
      >
        <span :class="accessibleStyles.screenReader">{{ variantLabel }}</span>
        {{ title }}
      </h4>
    </component>

    <div v-if="close" :class="styles.alertAction">
      <pf-close-button @click="$emit('close', $event)" />
    </div>

    <div v-if="$slots.default" :class="styles.alertDescription">
      <slot />
    </div>

    <div v-if="$slots['action-links']" :class="styles.alertActionGroup">
      <slot name="action-links" />
    </div>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

import Void from '../Void';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfCloseButton from '../CloseButton';
import PfAlertIcon from './AlertIcon';

export default {
  name: 'PfAlert',

  components: {PfAlertIcon, PfCloseButton, PfTooltip, Void},

  props: {
    inline: Boolean,
    truncateTitle: Boolean,
    liveRegion: Boolean,
    close: Boolean,

    title: {
      type: String,
      required: true,
    },

    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'success', 'danger', 'warning', 'info'].includes(v),
    },

    timeout: {
      type: [Boolean, Number],
      default: false,
    },
  },

  emits: ['close', 'timeout'],

  data() {
    return {
      tooltipVisible: true, // TODO
      styles,
      accessibleStyles,
      disabled: false,
      timer: null,
    };
  },

  computed: {
    variantLabel() {
      return `${this.variant.charAt('').toUpperCase()}${this.variant.slice(1)} alert:`;
    },
  },

  mounted() {
    if (this.timeout) {
      this.timer = setTimeout(() => {
        this.disabled = true;
        this.$emit('timeout');
      }, this.timeout === true ? 8000 : this.timeout)
    }
  },

  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>
