<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfCardBody',

  props: {
    /** Sets the base component to render. */
    component: {
      type: [String, Object],
      default: 'div',
    },

    /** Enables the body Content to fill the height of the card. */
    filled: Boolean,
  },

  render() {
    return h(resolveDynamicComponent(this.component), {
      class: [styles.cardBody, {
        [styles.modifiers.noFill]: !this.filled,
      }],
    }, this.$slots);
  },
};
</script>
