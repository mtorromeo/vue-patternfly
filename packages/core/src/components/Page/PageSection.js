import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {breakpointProp, classesFromBreakpointProps} from '../../util';
import {h, mergeProps} from 'vue';

const variantTypes = {
  'default': styles.pageMainSection,
  'nav': styles.pageMainNav,
};

const variantStyles = {
  'default': '',
  'light': styles.modifiers.light,
  'dark': styles.modifiers.dark_200,
  'darker': styles.modifiers.dark_100,
};

const PageSection = (props, {slots, attrs}) => {
  const variantType = variantTypes[props.type];
  const variantStyle = variantStyles[props.variant];

  const classes = classesFromBreakpointProps(props, [
    'padding',
  ], styles, {short: true});

  return h('section', mergeProps({
    class: [classes, variantType, variantStyle, {
      [styles.modifiers.noFill]: !props.filled,
      [styles.modifiers.fill]: props.filled,
    }],
  }, attrs), slots.default());
};

PageSection.props = {
  /** Section background color variant */
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'light', 'dark', 'darker'].includes(v),
  },

  /** Section type variant */
  type: {
    type: String,
    default: 'default',
    validator: v => ['default', 'nav'].includes(v),
  },

  /** Enables the page section to fill the available vertical space */
  filled: Boolean,

  /** Padding at various breakpoints. */
  ...breakpointProp('padding', String, ['', 'padding', 'no-padding']),
};

PageSection.inheritAttrs = false;

export default PageSection;
