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
    }]"
    :tabindex="tabIdx"
  >
    <span v-if="variant !== 'plain' && $slots.icon && iconPosition === 'left'" :class="[styles.buttonIcon, styles.modifiers.start]">
      <slot name="icon" />
    </span>
    <slot />
    <span v-if="variant !== 'plain' && $slots.icon && iconPosition === 'right'" :class="[styles.buttonIcon, styles.modifiers.end]">
      <slot name="icon" />
    </span>
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Btn',

  props: {
    type: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'tertiary', 'danger', 'link', 'plain', 'control'].includes(v),
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

    active: Boolean,
    block: Boolean,
    disabled: Boolean,

    /** @beta Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
    ariaDisabled: Boolean,

    inline: Boolean,
    small: Boolean,

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
      if ((this.disabled && this.component === 'button') || this.ariaDisabled) {
        return null;
      }
      return -1;
    },
  },
};
</script>
