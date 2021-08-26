<script>
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h } from 'vue';

export default {
  name: 'PfCardActions',

  props: {
    /** Flag indicating that the actions have no offset. */
    noOffset: Boolean,
  },

  render() {
    return h('div', {
      class: [styles.cardActions, {
        [styles.modifiers.noOffset]: this.noOffset,
      }],
    }, this.$slots);
  },
};
</script>
