import styles from '@patternfly/react-styles/css/components/Content/content';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfTextContent',

  props: {
    /** Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited */
    visited: Boolean,
  },

  render() {
    return h('div', {
      class: [styles.content, {
        [styles.modifiers.visited]: this.visited,
      }],
    }, this.$slots);
  },
});