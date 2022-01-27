<template>
  <component
    :is="to ? 'router-link' : 'void'"
    v-slot="routerCtx"
    :to="to"
    :replace="replace"
    custom
  >
    <component
      v-bind="$attrs"
      :is="buttonComponent"
      :type="buttonComponent === 'button' ? type : null"
      :disabled="effectiveDisabled"
      :aria-disabled="effectiveDisabled || ariaDisabled"
      :class="[styles.button, styles.modifiers[variant], {
        [styles.modifiers.block]: block,
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.ariaDisabled]: ariaDisabled,
        [styles.modifiers.active]: active || routerCtx?.isActive,
        [styles.modifiers.inline]: inline && variant === 'link',
        [styles.modifiers.danger]: danger && (variant === 'link' || variant === 'secondary'),
        [styles.modifiers.small]: small,
        [styles.modifiers.displayLg]: large,
        [styles.modifiers.progress]: loading !== null,
        [styles.modifiers.inProgress]: loading,
      }]"
      :aria-current="routerCtx?.isExactActive ? ariaCurrentValue : null"
      :aria-pressed="active || routerCtx?.isActive || null"
      :tabindex="tabIdx"
      :role="buttonComponent !== 'button' ? 'button' : null"
      :href="href || (buttonComponent === 'a' ? routerCtx?.href : null)"
      @click="onClick($event, routerCtx?.navigate)"
    >
      <span v-if="loading" :class="styles.buttonProgress">
        <pf-spinner size="md" :aria-valuetext="spinnerAriaValueText" />
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
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Button/button';
import { DefineComponent, defineComponent, markRaw, PropType } from 'vue';

import PfSpinner from './Spinner.vue';
import Void from './Void';

export default defineComponent({
  name: 'PfButton',

  components: { PfSpinner, Void },

  inheritAttrs: false,

  props: {
    /** type of button */
    type: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String as PropType<'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control'>,
      default: 'primary',
      validator: (v: any) => ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'link', 'plain', 'control'].includes(v),
    },

    iconPosition: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
      validator: (v: any) => ['left', 'right'].includes(v),
    },

    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'auto',
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

    /** Adds inline styling to a link button */
    inline: Boolean,

    /** Adds small styling to the button */
    small: Boolean,

    /** Adds small styling to the button */
    large: Boolean,

    /** Adds danger styling to secondary or link button variants */
    danger: Boolean,

    tabindex: {
      type: [Number, String],
      default: null,
    },

    href: {
      type: String,
      default: null,
    },

    // router-link attributes
    to: {
      type: [String, Object],
      default: null,
    },
    replace: Boolean,
    ariaCurrentValue: {
      type: String,
      default: null,
    },
  },

  emits: ['click'],

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  computed: {
    buttonComponent() {
      if (this.component !== 'auto') {
        return this.component;
      }
      return (this.href || this.to) ? 'a' : 'button';
    },

    effectiveDisabled() {
      return this.loading || this.disabled || null;
    },

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

  methods: {
    onClick(e: Event, navigate: (e: Event) => void) {
      if (this.effectiveDisabled) {
        e.preventDefault();
        return;
      }

      if (navigate) {
        navigate(e);
        return;
      }

      this.$emit('click', e);
    },
  },
});
</script>
