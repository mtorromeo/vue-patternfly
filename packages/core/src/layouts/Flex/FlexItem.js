import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import {h, mergeProps} from 'vue';
import {breakpointProp, classesFromBreakpointProps} from '../../util';

const PfFlexItem = (props, {slots, attrs}) => h('div', mergeProps({
    class: classesFromBreakpointProps(props, [
      'spacer',
      'shrink',
      'flex',
      'alignSelf',
      'grow',
      'align',
      'fullWidth',
    ], styles),
  }, attrs), slots.default());

PfFlexItem.props = {
  ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  ...breakpointProp('shrink', Boolean),
  ...breakpointProp('flex', String, ['', 'default', 'none', '1', '2', '3', '4']),
  ...breakpointProp('alignSelf', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  ...breakpointProp('grow', Boolean),
  ...breakpointProp('align', String, ['', 'left', 'right']),
  ...breakpointProp('fullWidth', Boolean),
};

PfFlexItem.inheritAttrs = false;

export default PfFlexItem;
