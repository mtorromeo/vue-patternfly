import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import { h } from 'vue';

export default {
  name: 'PfTooltipArrow',

  render() {
    return h('div', { class: styles.tooltipArrow });
  },
};
