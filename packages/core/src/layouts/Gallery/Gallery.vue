<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Gallery',

  props: {
    hasGutter: Boolean,
  },

  computed: {
    classes() {
      return [styles.gallery, this.hasGutter && styles.modifiers.gutter];
    },
  },
};
</script>
