<template>
  <component
    :is="component"
    :class="[
      styles.helperTextItem,
      variant === 'default' ? null : styles.modifiers[variant],
      {
        [styles.modifiers.dynamic]: dynamic,
      },
    ]"
  >
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

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { defineComponent, inject, markRaw, PropType } from 'vue';

import PfMinusIcon from '@vue-patternfly/icons/dist/esm/icons/minus-icon';
import PfExclamationTriangleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-triangle-icon';
import PfCheckCircleIcon from '@vue-patternfly/icons/dist/esm/icons/check-circle-icon';
import PfExclamationCircleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-circle-icon';
import { HelperTextComponentKey } from './HelperText.vue';

export default defineComponent({
  name: 'PfHelperTextItem',

  components: {
    PfMinusIcon,
    PfExclamationTriangleIcon,
    PfCheckCircleIcon,
    PfExclamationCircleIcon,
  },

  props: {
    /** Variant styling of the helper text item. */
    variant: {
      type: String as PropType<'default' | 'warning' | 'success' | 'error' | 'indeterminate'>,
      default: 'default',
      validator: (v: any) => ['default', 'warning', 'success', 'error', 'indeterminate'].includes(v),
    },

    /** Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not. */
    icon: Boolean,

    /** Flag indicating the helper text item is dynamic. */
    dynamic: Boolean,
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
      helperTextComponent: inject(HelperTextComponentKey, 'div'),
    };
  },

  computed: {
    component() {
      return this.helperTextComponent === 'ul'
        ? 'li'
        : 'div';
    },
  },
});
</script>
