import styles from '@patternfly/react-styles/css/components/Form/form';

import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfForm',

  props: {
    component: {
      type: String,
      default: 'form',
    },

    horizontal: Boolean,
    widthLimited: Boolean,
  },

  render() {
    return h(resolveDynamicComponent(this.component), {
      class: [styles.form, {
        [styles.modifiers.horizontal]: this.horizontal,
        [styles.modifiers.limitWidth]: this.widthLimited,
      }],
    }, this.$slots);
  },
};
