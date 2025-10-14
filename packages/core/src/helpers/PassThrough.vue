<template>
  <render />
</template>

<script lang="ts" setup>
import { type ComponentPublicInstance, type Slot, type VNode } from "vue";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  alter?: (v: VNode[]) => VNode[];
  useRef?: ComponentPublicInstance<object, object, {
    templateFn?: Slot,
  }>;
  template?: boolean;
}

const props = defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const emit = defineEmits<{
  (name: 'children', c: VNode[]): void;
}>();

let templateFn: Slot | undefined = undefined;

function render() {
  const retEmit = (children: VNode[]) => {
    emit('children', children);
    return children;
  };

  if (props.template) {
    templateFn = slots.default;
    return retEmit([]);
  }

  if (props.useRef && props.useRef.templateFn) {
    return retEmit(props.useRef.templateFn());
  }

  if (!slots.default) {
    return retEmit([]);
  }

  let children = slots.default({});
  if (props.alter) {
    children = props.alter(children);
  }

  return retEmit(children);
}

defineExpose({
  templateFn,
});
</script>
