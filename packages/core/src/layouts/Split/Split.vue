<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Split/split';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Split',

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
      return [styles.split, this.hasGutter && styles.modifiers.gutter];
    },
  },
};
</script>
