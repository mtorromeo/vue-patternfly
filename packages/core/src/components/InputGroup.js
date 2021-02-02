
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import {h, mergeProps} from 'vue';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

function cloneElement(e, props) {
  return h(e.type, mergeProps(e.props, props), e.children);
}

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
