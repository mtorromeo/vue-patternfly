<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Split/split';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'SplitItem',

  props: {
    filled: Boolean,
  },

  computed: {
    classes() {
      return [styles.splitItem, {[styles.modifiers.fill]: this.filled}];
    },
  },
};
</script>
