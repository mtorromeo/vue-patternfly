<script lang="ts">
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { h, mergeProps, cloneVNode, defineComponent, type Component, type VNode } from 'vue';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

function vnodeIsFormCtrls(vnode: VNode) {
  return typeof vnode.type === 'object' && formCtrls.includes((vnode.type as Component).name);
}

export default defineComponent({
  name: 'PfInputGroup',

  render() {
    return h('div', mergeProps({
      class: [styles.inputGroup],
    }, this.$props), {
      default: () => {
        const children = this.$slots.default ? this.$slots.default() : [];
        const idItem = children.find(child => !vnodeIsFormCtrls(child) && child.props && child.props.id);

        if (!idItem) {
          return children;
        }

        return children.map(child => vnodeIsFormCtrls(child) ? cloneVNode(child, { 'aria-describedby': idItem.props.id }) : child);
      },
    });
  },
});
</script>
