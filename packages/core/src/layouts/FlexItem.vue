<template>
  <div :class="breakpointClasses">
    <slot />
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/layouts/Flex/flex';
import {breakpointProp, useBreakpointProp} from '../util';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'FlexItem',

  props: {
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('shrink', Boolean),
    ...breakpointProp('flex', String, ['', 'default', 'none', '1', '2', '3', '4']),
    ...breakpointProp('alignSelf', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    ...breakpointProp('grow', Boolean),
    ...breakpointProp('align', String, ['', 'left', 'right']),
    ...breakpointProp('fullWidth', Boolean),
  },

  setup(props) {
    const breakpointClasses = useBreakpointProp(props, [
      'spacer',
      'shrink',
      'flex',
      'alignSelf',
      'grow',
      'align',
      'fullWidth',
    ], styles);
    return {breakpointClasses};
  },
};
</script>
