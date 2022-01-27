<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { defineComponent, h, inject } from 'vue';
import { CardExpandedKey } from './Card.vue';

export default defineComponent({
  name: 'PfCardExpandableContent',

  setup() {
    return {
      expanded: inject(CardExpandedKey),
    };
  },

  render() {
    if (!this.expanded) {
      return null;
    }

    return h('div', { class: styles.cardExpandableContent }, this.$slots);
  },
});
</script>
