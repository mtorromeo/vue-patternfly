<script>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { h, mergeProps, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfInputGroupText',

  props: {
    /** Component that wraps the input group text. */
    component: {
      type: String,
      default: 'span',
    },

    /** Input group plain variant */
    plain: Boolean,
  },

  render() {
    return h(resolveDynamicComponent(this.component), mergeProps({
      class: [
        styles.inputGroupText, {
          [styles.modifiers.plain]: this.plain,
        },
      ],
    }, this.$props), this.$slots);
  },
};
</script>
