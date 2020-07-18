<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Stack/stack';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Stack',

  props: {
    component: {
      type: String,
      default: 'div',
    },
    /** Adds space between children. */
    hasGutter: Boolean,
  },

  computed: {
    classes() {
      return [styles.stack, this.hasGutter && styles.modifiers.gutter];
    },
  },
};
</script>
