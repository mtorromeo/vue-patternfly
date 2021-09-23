import styles from '@patternfly/react-styles/css/components/Form/form';

import { h } from 'vue';

export default {
  name: 'PfForm',

  props: {
    horizontal: Boolean,
    widthLimited: Boolean,
  },

  render() {
    return h('form', {
      class: [styles.form, {
        [styles.modifiers.horizontal]: this.horizontal,
        [styles.modifiers.limitWidth]: this.widthLimited,
      }],
    }, this.$slots);
  },
};
