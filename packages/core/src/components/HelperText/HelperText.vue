<template>
  <component :is="component" :class="styles.helperText">
    <slot />
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { markRaw, provide } from 'vue';

export default {
  name: 'HelperText',

  props: {
    component: {
      type: String,
      default: 'div',
      validator: v => ['div', 'ul'].includes(v),
    },
  },

  setup(props) {
    provide('helperTextComponent', props.component);
    return {
      styles: markRaw(styles),
    };
  },
};
</script>
