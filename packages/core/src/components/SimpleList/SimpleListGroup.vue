<script>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { h, mergeProps } from 'vue';

export default {
  name: 'PfSimpleListGroup',

  inheritAttrs: false,

  props: {
    /** ID of SimpleList group */
    id: {
      type: String,
      default: '',
    },

    /** Title of the SimpleList group */
    title: {
      type: String,
      default: '',
    },

    /** Additional classes added to the SimpleList group title */
    titleClass: {
      type: [String, Array, Object],
      default: null,
    },
  },

  render() {
    const { class: className, ...attrs } = this.$attrs;

    return h('section', mergeProps({
      class: styles.simpleListSection,
    }, attrs), [
      h('h2', { id: this.id, class: [styles.simpleListTitle, this.titleClass], 'aria-hidden': true }, this.$slots.title ? this.$slots.title() : this.title),
      h('ul', { class: className, 'aria-labelledby': this.id }, this.$slots.default && this.$slots.default()),
    ]);
  },
};
</script>
