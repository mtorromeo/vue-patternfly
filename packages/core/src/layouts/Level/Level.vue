<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Level/level';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Level',

  props: {
    hasGutter: Boolean,
  },

  computed: {
    classes() {
      return [styles.level, this.hasGutter && styles.modifiers.gutter];
    },
  },
};
</script>
