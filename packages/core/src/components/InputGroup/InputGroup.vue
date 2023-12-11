<template>
  <div v-bind="(ouiaProps as any)" :class="styles.inputGroup">
    <render />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { cloneVNode, type Component, type VNode, type HTMLAttributes } from 'vue';

const formCtrls = ['PfFormSelect', 'PfTextArea', 'PfTextInput'];

function vnodeIsFormCtrls(vnode: VNode) {
  return typeof vnode.type === 'object' && formCtrls.includes((vnode.type as Component).name ?? '');
}

defineOptions({
  name: 'PfInputGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

function render() {
  const children = slots.default?.({}) ?? [];
  const idItem = children.find(child => !vnodeIsFormCtrls(child) && child.props?.id);

  if (!idItem) {
    return children;
  }

  return children.map(child => vnodeIsFormCtrls(child) ? cloneVNode(child, { 'aria-describedby': idItem.props?.id }) : child);
}
</script>
