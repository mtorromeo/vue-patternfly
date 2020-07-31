
import _styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

const PfTooltipContent = (props, {attrs, slots}) => h('div', mergeProps({
  class: [styles.tooltipContent, {
    [styles.modifiers.textAlignLeft]: props.leftAligned,
  }],
}, attrs), slots);

PfTooltipContent.props = {
  leftAligned: Boolean,
};

PfTooltipContent.inheritAttrs = false;

export default PfTooltipContent;
