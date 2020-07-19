import _styles from '@patternfly/react-styles/css/layouts/Flex/flex';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../../util';
import {h, mergeProps} from 'vue';

const Flex = (props, {slots, attrs}) => h('div', mergeProps({
  class: [styles.flex, classesFromBreakpointProps(props, [
    'spacer',
    'spaceItems',
    'grow',
    'shrink',
    'flex',
    'direction',
    'alignItems',
    'alignContent',
    'alignSelf',
    'align',
    'justifyContent',
    'display',
    'fullWidth',
    'flexWrap',
  ], styles)],
}, attrs), slots.default());

Flex.props = {
  ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  ...breakpointProp('spaceItems', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  ...breakpointProp('grow', Boolean),
  ...breakpointProp('shrink', Boolean),
  ...breakpointProp('flex', String, ['', 'default', 'none', '1', '2', '3', '4']),
  ...breakpointProp('direction', String, ['', 'column', 'column-reverse', 'row', 'row-reverse']),
  ...breakpointProp('alignItems', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  ...breakpointProp('alignContent', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']),
  ...breakpointProp('alignSelf', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  ...breakpointProp('align', String, ['', 'left', 'right']),
  ...breakpointProp('justifyContent', String, ['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  ...breakpointProp('display', String, ['', 'flex', 'inline-flex']),
  ...breakpointProp('fullWidth', Boolean),
  ...breakpointProp('flexWrap', String, ['', 'wrap', 'wrap-reverse', 'nowrap']),
};

Flex.inheritAttrs = false;

export default Flex;
