<template>
  <component :is="component" :class="[
    styles.helperTextItem,
    variant === 'default' ? null : styles.modifiers[variant],
    {
      [styles.modifiers.dynamic]: dynamic,
    },
  ]">
    <span v-if="icon || $slots.icon" :class="styles.helperTextItemIcon" aria-hidden>
      <slot name="icon">
        <PfMinusIcon v-if="variant === 'default' || variant === 'indeterminate'" />
        <PfExclamationTriangleIcon v-else-if="variant === 'warning'" />
        <PfCheckCircleIcon v-else-if="variant === 'success'" />
        <PfExclamationCircleIcon v-else-if="variant === 'error'" />
      </slot>
    </span>
    <span :class="styles.helperTextItemText">
      <slot />
    </span>
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { markRaw } from 'vue';

import PfMinusIcon from '@vue-patternfly/icons/dist/esm/icons/minus-icon';
import PfExclamationTriangleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-triangle-icon';
import PfCheckCircleIcon from '@vue-patternfly/icons/dist/esm/icons/check-circle-icon';
import PfExclamationCircleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-circle-icon';

export default {
  name: 'HelperTextItem',

  components: {
    PfMinusIcon,
    PfExclamationTriangleIcon,
    PfCheckCircleIcon,
    PfExclamationCircleIcon,
  },

  inject: {
    helperTextComponent: {
      default: 'div',
    },
  },

  props: {
    /** Variant styling of the helper text item. */
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'indeterminate', 'warning', 'success', 'error'].includes(v),
    },

    /** Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not. */
    icon: Boolean,

    /** Flag indicating the helper text item is dynamic. */
    dynamic: Boolean,
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  computed: {
    component() {
      return this.helperTextComponent === 'ul'
        ? 'li'
        : 'div';
    },
  },
};
</script>
