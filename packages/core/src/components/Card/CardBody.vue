<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h } from 'vue';

export default {
  name: 'PfCardBody',

  props: {
    /** Sets the base component to render. */
    component: {
      type: String,
      default: 'div',
    },

    /** Enables the body Content to fill the height of the card. */
    filled: Boolean,
  },

  render() {
    return h(this.component, {
      class: [styles.cardBody, {
        [styles.modifiers.noFill]: !this.filled,
      }],
    }, this.$slots);
  },
};
</script>
