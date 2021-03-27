import styles from '@patternfly/react-styles/css/components/Page/page';

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

const PfPageSection = (props, {slots, attrs}) => {
  const variantType = variantTypes[props.type];
  const variantStyle = variantStyles[props.variant];

  const classes = classesFromBreakpointProps(props, [
    'padding',
  ], styles, {short: true});

  let children = slots.default();
  if (props.widthLimited) {
    children = h('div', {class: styles.pageMainBody}, children);
  }

  return h('section', mergeProps({
    class: [classes, variantType, variantStyle, {
      [styles.modifiers.noFill]: !props.filled,
      [styles.modifiers.fill]: props.filled,
      [styles.modifiers.limitWidth]: props.widthLimited,
    }],
  }, attrs), children);
};

PfPageSection.props = {
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

  /** Limits the width of the section */
  widthLimited: Boolean,

  /** Padding at various breakpoints. */
  ...breakpointProp('padding', String, ['', 'padding', 'no-padding']),
};

PfPageSection.inheritAttrs = false;

export default PfPageSection;
