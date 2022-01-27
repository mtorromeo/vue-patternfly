
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfTooltipContent',

  props: {
    leftAligned: Boolean,
  },

  render() {
    return h('div', {
      class: [styles.tooltipContent, {
        [styles.modifiers.textAlignLeft]: this.leftAligned,
      }],
    }, this.$slots);
  },
});
