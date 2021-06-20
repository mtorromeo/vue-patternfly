
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import { h, mergeProps } from 'vue';

const PfTooltipContent = (props, { attrs, slots }) => h('div', mergeProps({
  class: [styles.tooltipContent, {
    [styles.modifiers.textAlignLeft]: props.leftAligned,
  }],
}, attrs), slots);

PfTooltipContent.props = {
  leftAligned: Boolean,
};

PfTooltipContent.inheritAttrs = false;

export default PfTooltipContent;
