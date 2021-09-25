<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfCardFooter',

  props: {
    /** Sets the base component to render. */
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  render() {
    return h(resolveDynamicComponent(this.component), { class: styles.cardFooter }, this.$slots);
  },
};
</script>
