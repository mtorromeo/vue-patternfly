import _styles from '@patternfly/react-styles/css/components/Spinner/spinner';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

const spinnerSizes = [
  'sm',
  'md',
  'lg',
  'xl',
];

const PfSpinner = ({size, ariaValueText}, {attrs}) =>
  h(
    'span',
    mergeProps({
      class: [styles.spinner, styles.modifiers[size]],
      'aria-valuetext': ariaValueText,
    }, attrs),
    [
      h('span', {class: styles.spinnerClipper}),
      h('span', {class: styles.spinnerLeadBall}),
      h('span', {class: styles.spinnerTailBall}),
    ],
  );

PfSpinner.props = {
  size: {
    type: String,
    default: 'xl',
    validator: v => spinnerSizes.includes(v),
  },
  ariaValueText: {
    type: String,
    default: 'Loading...',
  },
};

PfSpinner.inheritAttrs = false;

export default PfSpinner;
