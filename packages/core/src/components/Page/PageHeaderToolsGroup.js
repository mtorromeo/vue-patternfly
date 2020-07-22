
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../../util';
import {h, mergeProps} from 'vue';

const PfPageHeaderToolsGroup = (props, {slots, attrs}) =>
  h('div', mergeProps({
    class: [
      styles.pageHeaderToolsGroup,
      classesFromBreakpointProps(props, ['visibility'], styles, {short: true}),
    ],
  }, attrs), slots.default());

PfPageHeaderToolsGroup.props = {
  ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
};

PfPageHeaderToolsGroup.inheritAttrs = false;

export default PfPageHeaderToolsGroup;
