<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { defineComponent, h } from 'vue';

export default defineComponent({
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
});
</script>
