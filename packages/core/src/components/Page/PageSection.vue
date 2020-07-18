<template>
  <section :class="[classes, variantType, variantStyle, {
    [styles.modifiers.noFill]: !isFilled,
    [styles.modifiers.fill]: isFilled,
  }]"
  >
    <slot />
  </section>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Page/page';
import {breakpointProp, useBreakpointProp} from '../../util';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'PageSection',

  props: {
    /** Section background color variant */
    variant: {
      type: String,
      default: 'default',
      validate: v => ['default', 'light', 'dark', 'darker'].includes(v),
    },

    /** Section type variant */
    type: {
      type: String,
      default: 'default',
      validate: v => ['default', 'nav'].includes(v),
    },

    /** Enables the page section to fill the available vertical space */
    isFilled: Boolean,

    /** Padding at various breakpoints. */
    ...breakpointProp('padding', String, ['', 'padding', 'no-padding']),
  },

  setup(props) {
    const classes = useBreakpointProp(props, [
      'padding',
    ], styles, {short: true});
    return {classes};
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    variantType() {
      return {
        'default': this.styles.pageMainSection,
        'nav': this.styles.pageMainNav,
      }[this.type];
    },

    variantStyle() {
      return {
        'default': '',
        'light': this.styles.modifiers.light,
        'dark': this.styles.modifiers.dark_200,
        'darker': this.styles.modifiers.dark_100,
      }[this.variant];
    },
  },
};
</script>
