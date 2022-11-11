<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Title/title';

import { defineComponent, h, mergeProps, type PropType } from 'vue';

const headingLevelSizeMap: Record<number, keyof typeof styles.modifiers> = {
  [1]: '2xl',
  [2]: 'xl',
  [3]: 'lg',
  [4]: 'md',
  [5]: 'md',
  [6]: 'md',
};

export default defineComponent({
  name: 'PfTitle',

  props: {
    size: {
      type: String as PropType<keyof typeof styles.modifiers>,
      default: '',
      validator: (v: any) => !v || v in styles.modifiers,
    },

    h: {
      type: [Number, String],
      default: 1,
      validator: (v: any) => typeof headingLevelSizeMap[Number(v) as keyof typeof headingLevelSizeMap] !== 'undefined',
    },
  },

  render() {
    const size = headingLevelSizeMap[Number(this.h) as keyof typeof headingLevelSizeMap];

    return h(`h${this.h}`, mergeProps({
      class: [styles.title, this.size in styles.modifiers ? styles.modifiers[this.size] : styles.modifiers[size]],
    }, this.$attrs), this.$slots);
  },
});
</script>
