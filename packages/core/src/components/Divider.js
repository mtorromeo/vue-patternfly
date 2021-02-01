import styles from '@patternfly/react-styles/css/components/Divider/divider';

import {breakpointProp, classesFromBreakpointProps} from '../util';
import {h, mergeProps, inject} from 'vue';

const PfDivider = (props, {attrs}) => {
  attrs = mergeProps({
    class: [
      styles.divider,
      classesFromBreakpointProps(props, ['inset'], styles),
      {
        [styles.modifiers.vertical]: props.vertical,
      },
    ],
  }, attrs);

  const component = inject('dividerComponent', props.component);

  if (component !== 'hr') {
    attrs.role = 'separator';
  }

  return h(component, attrs);
}

PfDivider.props = {
  ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  vertical: Boolean,
  component: {
    type: String,
    default: 'hr',
    validator: v => ['hr', 'li', 'div'].includes(v),
  },
};
PfDivider.inheritAttrs = false;

export default PfDivider;
