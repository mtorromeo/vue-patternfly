import styles from '@patternfly/react-styles/css/components/Brand/brand';

import { defineComponent, h } from 'vue';
import { breakpointProp, cssVarsFromBreakpointProps, findChildrenVNodes } from '../util';

export default defineComponent({
  name: 'PfBrand',

  props: {
    /** Attribute that specifies the URL of a <img> Brand. For a <picture> Brand this specifies the fallback <img> URL. */
    src: String,

    /** Attribute that specifies the alt text of a <img> Brand. For a <picture> Brand this specifies the fallback <img> alt text. */
    alt: String,

    ...breakpointProp('width', String, []),
    ...breakpointProp('height', String, []),
  },

  render() {
    const children = findChildrenVNodes(this.$slots.default?.());

    const style = children.length
      ? {
        ...cssVarsFromBreakpointProps(this.$props, 'width', '--pf-c-brand--Width'),
        ...cssVarsFromBreakpointProps(this.$props, 'height', '--pf-c-brand--Height'),
      }
      : {};

    if (!children.length) {
      return h('img', {
        class: styles.brand,
        src: this.src,
        alt: this.alt,
      });
    }

    return h('picture', {
      class: [styles.brand, styles.modifiers.picture],
      style,
    }, {
      default: () => [
        ...children,
        h('img', {src: this.src, alt: this.alt}),
      ],
    });
  },
});
