<template>
  <floating-element />
</template>

<script lang="ts" setup>
import { flip as uiFlip, size, type Middleware, type Placement, type Strategy, offset as uiOffset, type OffsetOptions } from '@floating-ui/core';
import { cloneVNode, computed, ref, withDirectives, type Ref } from 'vue';
import { useFloatingUI, type FloatingOptions } from '../use';
import type { VNode } from 'vue';

defineOptions({
  name: 'PfFloatingUi',
  inheritAttrs: false,
});

export interface Props {
  reference: string | Element | undefined;
  disable?: boolean;
  placement?: Placement;
  flip?: boolean;
  zIndex?: number;
  middleware?: Middleware[];
  strategy?: Strategy,
  offset?: OffsetOptions;
  /** Custom width of the floating ui. If the value is "trigger", it will set the width to the trigger element's width */
  width?: string | 'trigger' | 'auto';
  /** Minimum width of the floating ui. If the value is "trigger", it will set the min width to the trigger element's width */
  minWidth?: string | 'trigger' | 'auto';
  /** Maximum width of the floating ui. If the value is "trigger", it will set the max width to the trigger element's width */
  maxWidth?: string | 'trigger' | 'auto';
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  minWidth: 'trigger',
  maxWidth: 'auto',
  placement: 'bottom',
  zIndex: 9999,
  middleware: (): Middleware[] => [],
});

const slots = defineSlots<{
  default?: (props: ReturnType<typeof useFloatingUI>) => VNode[];
}>();

const referenceElement = computed<Element | undefined>(() => {
  const reference = typeof props.reference === 'string'
    ? document.querySelector(props.reference)
    : props.reference;
  return reference instanceof Element ? reference : undefined;
});

const htmlElement: Ref<HTMLElement | undefined> = ref();

const floatingOptions = computed<FloatingOptions>(() => {
  const middleware: Middleware[] = [...props.middleware];

  if (props.flip) {
    middleware.push(uiFlip());
  }

  if (props.width !== 'auto' || props.minWidth !== 'auto' || props.maxWidth !== 'auto') {
    middleware.push(size({
      apply({rects}) {
        if (htmlElement.value) {
          if (props.width !== 'auto') {
            htmlElement.value.style.width = props.width === 'trigger' ? `${rects.reference.width}px` : props.width;
          }
          if (props.minWidth !== 'auto') {
            htmlElement.value.style.minWidth = props.minWidth === 'trigger' ? `${rects.reference.width}px` : props.minWidth;
          }
          if (props.maxWidth !== 'auto') {
            htmlElement.value.style.maxWidth = props.maxWidth === 'trigger' ? `${rects.reference.width}px` : props.maxWidth;
          }
        }
      },
    }));
  }

  if (props.offset) {
    middleware.push(uiOffset(props.offset));
  }

  return {
    strategy: props.strategy,
    placement: props.placement,
    middleware,
  };
});

const ui = useFloatingUI(referenceElement, htmlElement, floatingOptions);

const floatingElement = () => {
  if (props.disable) {
    return () => slots.default?.(ui);
  }

  const children = slots.default?.(ui);

  if (!children?.length) {
    return;
  }

  if (children.length > 1) {
    console.error('FloatingUi should only contain a single child or none');
  }

  const onElementMounted = (el: unknown) => {
    htmlElement.value = el instanceof HTMLElement ? el : undefined;
  };

  return withDirectives(cloneVNode(children[0], {
    style: {
      position: ui.strategy,
      top: 0,
      left: 0,
      transform: `translate3d(${Math.round(ui.x)}px,${Math.round(ui.y)}px,0)`,
      zIndex: props.zIndex,
    },
  }), [
    [{mounted: onElementMounted}],
  ]);
};
</script>
