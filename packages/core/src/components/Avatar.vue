<script>
import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';

export default {
  name: 'PfAvatar',

  props: {
    /** Attribute that specifies the URL of the image for the Avatar. */
    src: {
      type: String,
      default: '',
    },

    /** Attribute that specifies the alternate text of the image for the Avatar. */
    alt: {
      type: String,
      required: true,
    },

    /** Border to add */
    border: {
      type: String,
      default: '',
      validator: v => ['', 'light', 'dark'].includes(v),
    },
  },

  render() {
    return h('img', mergeProps({
      class: [styles.avatar, {
        [styles.modifiers.light]: this.border === 'light',
        [styles.modifiers.dark]: this.border === 'dark',
      }],
    }, this.$props));
  },
};
</script>
