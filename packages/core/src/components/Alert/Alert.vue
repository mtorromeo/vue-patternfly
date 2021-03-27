<template>
  <div v-if="!dismissed"
       :class="[styles.alert, {
         [styles.modifiers.inline]: inline,
         [styles.modifiers[variant]]: variant !== 'default',
       }]"
       :aria-live="liveRegion ? 'polite' : null"
       :aria-atomic="liveRegion ? 'false' : null"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
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

    timeoutAnimation: {
      type: Number,
      default: 3000,
    },
  },

  emits: ['close', 'timeout', 'mouseenter', 'mouseleave'],

  data() {
    return {
      tooltipVisible: true, // TODO
      styles,
      accessibleStyles,
      timer: null,

      timedOut: false,
      timedOutAnimation: true,
      containsFocus: false,
      isMouseOver: false,
    };
  },

  computed: {
    variantLabel() {
      return `${this.variant.charAt('').toUpperCase()}${this.variant.slice(1)} alert:`;
    },

    dismissed() {
      return this.timedOut && this.timedOutAnimation && !this.isMouseOver && !this.containsFocus;
    },
  },

  watch: {
    dismissed() {
      if (this.dismissed) {
        this.$emit('timeout');
      }
    },
  },

  mounted() {
    if (this.timeout) {
      this.timer = setTimeout(() => this.timedOut = true, this.timeout === true ? 8000 : this.timeout);
    }

    document.addEventListener('focus', this.onDocumentFocus, true);

    this.$watch(() => [this.containsFocus, this.isMouseOver], ([containsFocus, isMouseOver]) => {
      if (!containsFocus || !isMouseOver) {
        this.animationTimer = setTimeout(() => this.timedOutAnimation = true, this.timeoutAnimation);
      }
    });
  },

  beforeUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.animationTimer);
    document.removeEventListener('focus', this.onDocumentFocus, true);
  },

  methods: {
    onDocumentFocus() {
      if (this.$el && this.$el.contains(document.activeElement)) {
        this.containsFocus = true;
        this.timedOutAnimation = false;
      } else if (this.containsFocus) {
        this.containsFocus = false;
      }
    },

    onMouseEnter(e) {
      this.isMouseOver = true;
      this.timedOutAnimation = false;
      this.$emit('mouseenter', e);
    },

    onMouseLeave(e) {
      this.isMouseOver = false;
      this.$emit('mouseleave', e);
    },
  },
};
</script>
