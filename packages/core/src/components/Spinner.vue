<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Spinner/spinner';

import { defineComponent, h, mergeProps } from 'vue';

const spinnerSizes = [
  'sm',
  'md',
  'lg',
  'xl',
];

export default defineComponent({
  name: 'PfSpinner',

  props: {
    size: {
      type: String,
      default: 'xl',
      validator: (v: any) => spinnerSizes.includes(v),
    },
    ariaValueText: {
      type: String,
      default: 'Loading...',
    },
  },

  render() {
    return h(
      'span',
      mergeProps({
        class: [styles.spinner, styles.modifiers[this.size as keyof typeof styles.modifiers]],
        'aria-valuetext': this.ariaValueText,
      }, this.$attrs),
      [
        h('span', { class: styles.spinnerClipper }),
        h('span', { class: styles.spinnerLeadBall }),
        h('span', { class: styles.spinnerTailBall }),
      ],
    );
  },
});
</script>
