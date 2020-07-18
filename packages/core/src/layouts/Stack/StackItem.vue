<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Stack/stack';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'StackItem',

  props: {
    isFilled: Boolean,
  },

  computed: {
    classes() {
      return [styles.stackItem, this.isFilled && styles.modifiers.fill];
    },
  },
};
</script>
