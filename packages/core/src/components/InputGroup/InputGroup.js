
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import {h, mergeProps} from 'vue';
import {cloneElement} from '../../util';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

const PfInputGroup = (props, {slots}) => h('div', mergeProps({
  class: [styles.inputGroup],
}, props), {
  default: () => {
    const children = slots.default();
    const idItem = children.find(child => !formCtrls.includes(child.type.name) && child.props && child.props.id);

    if (!idItem) {
      return children;
    }

    return children.map(child => formCtrls.includes(child.type.name) ? cloneElement(child, {'aria-describedby': idItem.props.id}) : child);
  },
});

PfInputGroup.inheritAttrs = false;

export default PfInputGroup;
