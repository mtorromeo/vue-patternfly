<template>
  <component :is="component" :class="className">
    <slot />
  </component>
</template>

<script>
import { css } from '@patternfly/react-styles';
import _styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

// commojs bug
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
      className: css(styles.bullseye),
    };
  },
};
</script>
