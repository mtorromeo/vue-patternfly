import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

import { h, mergeProps } from 'vue';

const PfBullseye = (props, { slots, attrs }) => h(props.component, mergeProps({ class: styles.bullseye }, attrs), slots.default());

PfBullseye.props = {
  component: {
    type: String,
    default: 'div',
  },
};

PfBullseye.inheritAttrs = false;

export default PfBullseye;
