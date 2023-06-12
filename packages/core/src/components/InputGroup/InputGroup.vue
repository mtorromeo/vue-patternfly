<template>
  <div :class="styles.inputGroup">
    <render />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { cloneVNode, type Component, type VNode, type HTMLAttributes } from 'vue';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

function vnodeIsFormCtrls(vnode: VNode) {
  return typeof vnode.type === 'object' && formCtrls.includes((vnode.type as Component).name ?? '');
}

defineOptions({
  name: 'PfInputGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

function render() {
  const children = slots.default?.({}) ?? [];
  const idItem = children.find(child => !vnodeIsFormCtrls(child) && child.props && child.props.id);

  if (!idItem) {
    return children;
  }

  return children.map(child => vnodeIsFormCtrls(child) ? cloneVNode(child, { 'aria-describedby': idItem.props?.id }) : child);
}
</script>
