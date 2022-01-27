import styles from '@patternfly/react-styles/css/components/Content/content';

import { defineComponent, h } from 'vue';

export const TextVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'a',
  'small',
  'blockquote',
  'pre',
];

export default defineComponent({
  name: 'PfText',

  props: {
    component: {
      type: String,
      default: 'p',
      validator: (v: any) => TextVariants.includes(v),
    },

    /** Flag to indicate the link has visited styles applied if the browser determines the link has been visited */
    visited: Boolean,
  },

  render() {
    return h(this.component, {
      'data-pf-content': true,
      class: {
        [styles.modifiers.visited]: this.visited && this.component === 'a',
      },
    }, this.$slots);
  },
});
