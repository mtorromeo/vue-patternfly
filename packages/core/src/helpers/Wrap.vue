<template>
  <render />
</template>

<script lang="ts" setup>
/**
 * Component that wraps the content of the `default` slot with the single component optionally contained in the `with` slot.
 * If no `with` slot is present or the `disabled` prop is set, the nodes in the `default` slot are unwrapped.
 */

import { h, type VNode } from 'vue';
import { findChildrenVNodes } from '../util';

defineOptions({
  inheritAttrs: false,
});

export interface Props {
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

    if (wrapperNode.length > 1) {
      throw new Error("Wrap's \"with\" slot can only contain a single child node");
    }

    return h(wrapperNode[0], content);
  }

  return content;
}
</script>
