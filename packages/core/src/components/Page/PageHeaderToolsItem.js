
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../../util';
import {h, mergeProps} from 'vue';

const PfPageHeaderToolsItem = (props, {slots, attrs}) =>
  h('div', mergeProps({
    class: [
      styles.pageHeaderToolsItem,
      classesFromBreakpointProps(props, ['visibility'], styles, {short: true}),
      {
        [styles.modifiers.selected]: props.selected,
      },
    ],
  }, attrs), slots.default());

PfPageHeaderToolsItem.props = {
  ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
  selected: Boolean,
};
PfPageHeaderToolsItem.inheritAttrs = false;

export default PfPageHeaderToolsItem;
