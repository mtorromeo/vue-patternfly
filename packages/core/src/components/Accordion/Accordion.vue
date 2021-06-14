<script>
import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export default {
  name: 'PfAccordion',

  provide() {
    return {
      accordion: this,
    };
  },

  props: {
    level: {
      type: Number,
      default: 3,
      validator: v => v >= 1 && v <= 6,
    },

    dl: Boolean,
  },

  render() {
    return h(this.dl ? 'dl' : 'div', mergeProps({
      class: styles.accordion,
    }, this.$attrs), {
      default: () => this.$slots.default && this.$slots.default(),
    });
  },
};
</script>
