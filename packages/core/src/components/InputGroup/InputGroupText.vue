<script>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import {h, mergeProps} from 'vue';

export default {
  name: 'PfInputGroupText',

  props: {
    component: {
      type: String,
      default: 'span',
    },
    plain: Boolean,
  },

  render() {
    return h(this.component, mergeProps({
      class: [
        styles.inputGroupText, {
          [styles.modifiers.plain]: this.plain,
        },
      ],
    }, this.$props), this.$slots);
  },
};
</script>
