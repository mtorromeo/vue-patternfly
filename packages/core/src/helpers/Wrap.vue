<template>
  <component :is="fragment(render())" />
</template>

<script lang="ts" setup>
/**
 * Component that wraps the content of the `default` slot with the single component optionally contained in the `with` slot.
 * If no `with` slot is present or the `disabled` prop is set, the nodes in the `default` slot are unwrapped.
 */

import { h, type VNode } from 'vue';
import { findChildrenVNodes, fragment } from '../util';

defineOptions({
  inheritAttrs: false,
});

interface Props {
  disabled?: boolean;
}

const props = defineProps<Props>();

const slots = defineSlots<{
  default: (props?: Record<never, never>) => VNode[];
  with?: (props?: Record<never, never>) => VNode[];
}>();

function render() {
  const content = slots.default({});

  if (!props.disabled && slots.with) {
    const wrapper = slots.with({});
    const wrapperNode = findChildrenVNodes(wrapper);

    if (!wrapperNode[0]) {
      return;
    }

    if (wrapperNode.length > 1) {
      throw new Error("Wrap's \"with\" slot can only contain a single child node");
    }

    const wrapperType = wrapperNode[0].type;
    const isComponent = typeof wrapperType === 'object' || typeof wrapperType === 'function';
    return h(wrapperNode[0], null, isComponent ? { default: () => content } : content);
  }

  return content;
}
</script>
