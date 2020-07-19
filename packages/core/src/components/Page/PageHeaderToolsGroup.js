
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../../util';
import {h, mergeProps} from 'vue';

const PageHeaderToolsGroup = (props, {slots, attrs}) =>
  h('div', mergeProps({
    class: [
      styles.pageHeaderToolsGroup,
      classesFromBreakpointProps(props, ['visibility'], styles, {short: true}),
    ],
  }, attrs), slots.default());

PageHeaderToolsGroup.props = {
  ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
};
PageHeaderToolsGroup.inheritAttrs = false;

export default PageHeaderToolsGroup;
