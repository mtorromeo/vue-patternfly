<template>
  <floating-element />
</template>

<script lang="ts" setup>
import { flip, size, type Middleware, type Placement } from '@floating-ui/core';
import { cloneVNode, computed, ref, useSlots, withDirectives, type Ref } from 'vue';
import { useFloatingUI, type FloatingOptions } from '../use';

const props = withDefaults(defineProps<{
  reference: string | HTMLElement | undefined;
  disable?: boolean;
  placement?: Placement;
  flip?: boolean;
  sameWidth?: boolean;
  zIndex?: number;
  middleware?: Middleware[];
}>(), {
  placement: 'bottom',
  zIndex: 9999,
  middleware: (): Middleware[] => [],
});

const slots = useSlots();

const referenceElement = computed<HTMLElement | undefined>(() => {
  const reference = typeof props.reference === 'string'
    ? document.querySelector(props.reference)
    : props.reference;
  return reference instanceof HTMLElement ? reference : undefined;
});

const htmlElement: Ref<HTMLElement | undefined> = ref();

const floatingOptions = computed<FloatingOptions>(() => {
  const middleware: Middleware[] = [...props.middleware];
  if (props.flip) {
    middleware.push(flip());
  }
  if (props.sameWidth) {
    middleware.push(size({
      apply({rects}) {
        if (htmlElement.value) {
          Object.assign(htmlElement.value.style, {
            width: `${rects.reference.width}px`,
          });
        }
      },
    }));
  }
  return {
    placement: props.placement,
    middleware,
  };
});

const ui = useFloatingUI(referenceElement, htmlElement, floatingOptions);

const floatingElement = () => {
  if (props.disable) {
    return () => slots.default?.({});
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
