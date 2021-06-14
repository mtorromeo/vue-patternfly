<script>
import styles from '@patternfly/react-styles/css/components/Title/title';

import {h, mergeProps} from 'vue';

const TitleSizes = [
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];

const headingLevelSizeMap = {
  [1]: '2xl',
  [2]: 'xl',
  [3]: 'lg',
  [4]: 'md',
  [5]: 'md',
  [6]: 'md',
};

export default {
  name: 'PfTitle',

  props: {
    size: {
      type: String,
      default: '',
      validator: v => !v || TitleSizes.includes(v),
    },

    h: {
      type: [Number, String],
      default: 1,
      validator: v => typeof headingLevelSizeMap[Number(v)] !== 'undefined',
    },
  },

  render() {
    const size = this.size || headingLevelSizeMap[Number(this.h)];

    return h(`h${this.h}`, mergeProps({
      class: [styles.title, {
        [styles.modifiers[size]]: size,
      }],
    }, this.$attrs), this.$slots);
  },
};
</script>
