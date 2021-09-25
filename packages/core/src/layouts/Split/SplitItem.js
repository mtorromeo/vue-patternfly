import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfSplitItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
    filled: Boolean,
  },

  render() {
    return h(resolveDynamicComponent(this.component), {
      class: [styles.splitItem, {
        [styles.modifiers.fill]: this.filled,
      }],
    }, this.$slots);
  },
};
