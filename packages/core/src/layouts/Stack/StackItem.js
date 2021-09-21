import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfStackItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: String,
      default: 'div',
    },
    filled: Boolean,
  },

  render() {
    return h(resolveDynamicComponent(this.component), { class: [styles.stackItem, { [styles.modifiers.fill]: this.filled }] }, this.$slots);
  },
};
