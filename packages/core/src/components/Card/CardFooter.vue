<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h } from 'vue';

export default {
  name: 'PfCardFooter',

  props: {
    /** Sets the base component to render. */
    component: {
      type: String,
      default: 'div',
    },
  },

  render() {
    return h(this.component, { class: styles.cardFooter }, this.$slots);
  },
};
</script>
