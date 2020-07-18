<template>
  <component :is="component" :class="className">
    <slot />
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Bullseye',

  props: {
    component: {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
      className: styles.bullseye,
    };
  },
};
</script>
