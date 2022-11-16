import styles from '@patternfly/react-styles/css/components/Page/page';

import { breakpointProp, classesFromBreakpointProps } from '../../util';
import { defineComponent, h, type PropType, type Slots, type VNode } from 'vue';

const variantTypes = {
  default: styles.pageMainSection,
  nav: styles.pageMainNav,
  subNav: styles.pageMainSubnav,
  breadcrumb: styles.pageMainBreadcrumb,
  tabs: styles.pageMainTabs,
  wizard: styles.pageMainWizard,
};

const variantStyles = {
  default: '',
  light: styles.modifiers.light,
  dark: styles.modifiers.dark_200,
  darker: styles.modifiers.dark_100,
};

export default defineComponent({
  name: 'PfPageSection',

  props: {
    /** Section background color variant */
    variant: {
      type: String as PropType<keyof typeof variantStyles>,
      default: 'default',
      validator: (v: any) => v in variantStyles,
    },

    /** Section type variant */
    type: {
      type: String as PropType<keyof typeof variantTypes>,
      default: 'default',
      validator: (v: any) => v in variantTypes,
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

    let children: Slots | VNode;
    if (this.widthLimited) {
      children = h('div', { class: styles.pageMainBody }, this.$slots);
    } else {
      children = this.$slots;
    }

    return h('section', {
      class: [classes, variantType, variantStyle, {
        [styles.modifiers.noFill]: !this.filled,
        [styles.modifiers.fill]: this.filled,
        [styles.modifiers.limitWidth]: this.widthLimited,
      }],
    }, children);
  },
});
