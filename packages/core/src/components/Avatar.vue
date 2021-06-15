<script>
import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';

export default {
  name: 'PfAvatar',

  inheritAttrs: true,

  props: {
    /** Attribute that specifies the URL of the image for the Avatar. */
    src: {
      type: String,
      default: "",
    },

    /** Attribute that specifies the alternate text of the image for the Avatar. */
    alt: {
      type: String,
      required: true,
    },
  },

  render() {
    return h('img', mergeProps({
      class: styles.avatar,
    }, this.$props));
  },
};
</script>
