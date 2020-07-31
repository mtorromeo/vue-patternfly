import _styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

// commonjs bug
let styles = _styles.default;

import {h} from 'vue';

const PfTooltipArrow = () => h('div', {
  class: styles.tooltipArrow,
});

export default PfTooltipArrow;
