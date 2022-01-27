import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfTooltipArrow',

  render() {
    return h('div', { class: styles.tooltipArrow });
  },
});
