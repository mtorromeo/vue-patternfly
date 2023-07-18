<template>
  <render />
</template>

<script lang="ts" setup>
import type { VNode, RendererElement } from 'vue';
import { h, Teleport } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  to: string | RendererElement | null | undefined;
  disabled?: boolean;
}>();

const slots = defineSlots<{
  default?: (props: { copy: boolean }) => VNode[];
}>();

function render() {
  const children = slots.default?.({ copy: false });

  if (children && !props.disabled && props.to) {
    children.push(h(Teleport as any, { to: props.to }, slots.default?.({ copy: true })));
  }

  return children;
}
</script>
