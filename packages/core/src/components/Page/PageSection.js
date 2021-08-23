import styles from '@patternfly/react-styles/css/components/Page/page';

import { breakpointProp, classesFromBreakpointProps } from '../../util';
import { h } from 'vue';

const variantTypes = {
  default: styles.pageMainSection,
  nav: styles.pageMainNav,
};

const variantStyles = {
  default: '',
  light: styles.modifiers.light,
  dark: styles.modifiers.dark_200,
  darker: styles.modifiers.dark_100,
};

export default {
  name: 'PfPageSection',

  props: {
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
  },

  render() {
    const variantType = variantTypes[this.type];
    const variantStyle = variantStyles[this.variant];

    const classes = classesFromBreakpointProps(this.$props, [
      'padding',
    ], styles, { short: true });

    let children = this.$slots.default();
    if (this.widthLimited) {
      children = h('div', { class: styles.pageMainBody }, children);
    }

    return h('section', {
      class: [classes, variantType, variantStyle, {
        [styles.modifiers.noFill]: !this.filled,
        [styles.modifiers.fill]: this.filled,
        [styles.modifiers.limitWidth]: this.widthLimited,
      }],
    }, children);
  },
};
