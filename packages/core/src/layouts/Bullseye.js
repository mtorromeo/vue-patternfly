import _styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

const Bullseye = (props, {slots, attrs}) => h(props.component, mergeProps({class: styles.bullseye}, attrs), [slots.default()]);

Bullseye.props = {
  component: {
    type: String,
    default: 'div',
  },
};

Bullseye.inheritAttrs = false;

export default Bullseye;
