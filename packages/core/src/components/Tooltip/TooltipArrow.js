import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import { h } from 'vue';

const PfTooltipArrow = () => h('div', {
  class: styles.tooltipArrow,
});

export default PfTooltipArrow;
