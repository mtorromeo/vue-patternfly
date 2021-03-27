
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import {h, mergeProps} from 'vue';

const PfInputGroupText = (props, {slots}) => h(props.component, mergeProps({
  class: [
    styles.inputGroupText, {
      [styles.modifiers.plain]: props.plain,
    },
  ],
}, props), slots.default());

PfInputGroupText.props = {
  component: {
    type: String,
    default: 'span',
  },
  plain: Boolean,
};
PfInputGroupText.inheritAttrs = false;

export default PfInputGroupText;
