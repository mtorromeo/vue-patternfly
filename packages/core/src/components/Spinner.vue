<script>
import styles from '@patternfly/react-styles/css/components/Spinner/spinner';

import {h, mergeProps} from 'vue';

const spinnerSizes = [
  'sm',
  'md',
  'lg',
  'xl',
];

export default {
  name: 'PfSpinner',

  props: {
    size: {
      type: String,
      default: 'xl',
      validator: v => spinnerSizes.includes(v),
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
        class: [styles.spinner, styles.modifiers[this.size]],
        'aria-valuetext': this.ariaValueText,
      }, this.$attrs),
      [
        h('span', {class: styles.spinnerClipper}),
        h('span', {class: styles.spinnerLeadBall}),
        h('span', {class: styles.spinnerTailBall}),
      ],
    );
  },
};
</script>
