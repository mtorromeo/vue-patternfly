import _styles from '@patternfly/react-styles/css/components/Divider/divider';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../util';
import {h, mergeProps} from 'vue';

const Divider = (props, {attrs}) => {
  attrs = mergeProps({
    class: [
      styles.divider,
      classesFromBreakpointProps(props, ['inset'], styles),
      {
        [styles.modifiers.vertical]: props.vertical,
      },
    ],
  }, attrs);

  if (props.component !== 'hr') {
    attrs.role = 'separator';
  }

  return h(props.component, attrs);
}

Divider.props = {
  ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  vertical: Boolean,
  component: {
    type: String,
    default: 'hr',
    validator: v => ['hr', 'li', 'div'].includes(v),
  },
};
Divider.inheritAttrs = false;

export default Divider;
