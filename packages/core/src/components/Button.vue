<template>
  <component
    :is="component"
    :type="type"
    :aria-disabled="disabled || ariaDisabled"
    :disabled="disabled"
    :class="[styles.button, styles.modifiers[variant], {
      [styles.modifiers.block]: block,
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.ariaDisabled]: ariaDisabled,
      [styles.modifiers.active]: active,
      [styles.modifiers.inline]: inline && variant === 'link',
      [styles.modifiers.small]: small,
      [styles.modifiers.displayLg]: large,
      [styles.modifiers.progress]: loading !== null,
      [styles.modifiers.inProgress]: loading,
    }]"
    :tabindex="tabIdx"
  >
    <span
      v-if="loading"
      :class="styles.buttonProgress"
    >
      <pf-spinner
        size="md"
        :aria-valuetext="spinnerAriaValueText"
      />
    </span>
    <span
      v-if="variant !== 'plain' && $slots.icon && iconPosition === 'left'"
      :class="[styles.buttonIcon, styles.modifiers.start]"
    >
      <slot name="icon" />
    </span>
    <slot />
    <span
      v-if="variant !== 'plain' && $slots.icon && iconPosition === 'right'"
      :class="[styles.buttonIcon, styles.modifiers.end]"
    >
      <slot name="icon" />
    </span>
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Button/button';

import PfSpinner from './Spinner.vue';

export default {
  name: 'PfButton',

  components: { PfSpinner },

  props: {
    /** type of button */
    type: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'link', 'plain', 'control'].includes(v),
    },

    iconPosition: {
      type: String,
      default: 'left',
      validator: v => ['left', 'right'].includes(v),
    },

    component: {
      type: String,
      default: 'button',
    },

    spinnerAriaValueText: {
      type: String,
      default: '',
    },

    active: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: {
      type: Boolean,
      default: null,
    },

    /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
    ariaDisabled: Boolean,

    inline: Boolean,
    small: Boolean,
    large: Boolean,

    tabindex: {
      type: [Number, String],
      default: null,
    },
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    tabIdx() {
      if (this.tabindex) {
        return this.tabindex;
      }
      if (this.disabled) {
        return this.component === 'button' ? null : -1;
      }
      if (!this.ariaDisabled && this.component === 'span') {
        return 0;
      }
      return null;
    },
  },
};
</script>
