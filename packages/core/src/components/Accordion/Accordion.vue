<script>
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export default {
  name: 'PfAccordion',

  provide() {
    return {
      accordion: this,
    };
  },

  props: {
    /** Heading level to use */
    level: {
      type: Number,
      default: 3,
      validator: v => v >= 1 && v <= 6,
    },

    /** Flag to indicate whether use definition list or div */
    dl: Boolean,

    /** Flag to indicate the accordion had a border */
    bordered: Boolean,

    /** Large display size variant. */
    large: Boolean,
  },

  render() {
    return h(this.dl ? 'dl' : 'div', {
      class: [styles.accordion, {
        [styles.modifiers.bordered]: this.bordered,
        [styles.modifiers.displayLg]: this.large,
      }],
    }, this.$slots);
  },
};
</script>
