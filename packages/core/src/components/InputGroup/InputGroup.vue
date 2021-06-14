<script>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import {h, mergeProps} from 'vue';
import {cloneElement} from '../../util';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

export default {
  name: 'PfInputGroup',

  render() {
    return h('div', mergeProps({
      class: [styles.inputGroup],
    }, this.$props), {
      default: () => {
        const children = this.$slots.default();
        const idItem = children.find(child => !formCtrls.includes(child.type.name) && child.props && child.props.id);

        if (!idItem) {
          return children;
        }

        return children.map(child => formCtrls.includes(child.type.name) ? cloneElement(child, {'aria-describedby': idItem.props.id}) : child);
      },
    });
  },
};
</script>
