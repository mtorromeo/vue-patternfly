<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h } from 'vue';

export default {
  name: 'PfCardExpandableContent',

  inject: {
    expanded: {
      default: false,
    },
  },

  render() {
    if (!this.expanded.value) {
      return null;
    }

    return h('div', { class: styles.cardExpandableContent }, this.$slots);
  },
};
</script>
