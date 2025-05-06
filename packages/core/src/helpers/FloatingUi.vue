<template>
  <teleport :to="parent === 'inline' ? undefined : parent" :disabled="!parent || parent === 'inline'">
    <floating-element />
  </teleport>
</template>

<script lang="ts">
export type Placement = UIPlacement |'auto';

export const FloatingElementTeleportKey = Symbol('FloatingElementTeleportKey') as InjectionKey<MaybeRef<string | RendererElement | null | undefined>>;

export interface Props {
  reference: string | ReferenceElement | undefined | null;
  disable?: boolean;
  placement?: Placement;
  flip?: boolean;
  zIndex?: number;
  middleware?: Middleware[];
  strategy?: Strategy,
  offset?: OffsetOptions;
  /** True to make the floating element invisible */
  hidden?: boolean;
  /** The duration of the CSS fade transition animation. */
  animationDuration?: number;
  /** Custom width of the floating ui. If the value is "trigger", it will set the width to the trigger element's width */
  width?: string | 'trigger' | 'auto';
  /** Minimum width of the floating ui. If the value is "trigger", it will set the min width to the trigger element's width */
  minWidth?: string | 'trigger' | 'auto';
  /** Maximum width of the floating ui. If the value is "trigger", it will set the max width to the trigger element's width */
  maxWidth?: string | 'trigger' | 'auto';
  /** Element or selector where to render the floating element */
  teleportTo?: 'inline' | string | RendererElement | null | undefined;
}
</script>

<script lang="ts" setup>
import { flip as uiFlip, autoPlacement, size, type Middleware, type Placement as UIPlacement, type Strategy, offset as uiOffset, type OffsetOptions } from '@floating-ui/core';
import { cloneVNode, computed, ref, withDirectives, type Ref, type VNode, type RendererElement, type InjectionKey, inject, type MaybeRef, toValue, watch } from 'vue';
import { useFloatingUI, type FloatingOptions } from '../use';
import type { ReferenceElement } from '@floating-ui/dom';

defineOptions({
  name: 'PfFloatingUi',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  teleportTo: 'body',
  width: 'auto',
  minWidth: 'trigger',
  maxWidth: 'auto',
  placement: 'bottom',
  animationDuration: 0,
  zIndex: 9999,
  middleware: (): Middleware[] => [],
});

const emit = defineEmits<{
  (name: 'hidden'): void;
  (name: 'shown'): void;
}>();

const slots = defineSlots<{
  default?: (props: ReturnType<typeof useFloatingUI>) => VNode[];
}>();

const injectedParent = inject(FloatingElementTeleportKey, undefined);
const parent = computed(() => props.teleportTo ?? toValue(injectedParent));

const internalHidden = ref(props.hidden);
const opacity = ref(props.hidden ? 0 : 1);
const isVisible = ref(false);

watch(() => props.hidden, (hidden) => {
  if (hidden) {
    opacity.value = 0;
    if (!isVisible.value) {
      internalHidden.value = true;
    }
  } else if (internalHidden.value) {
    internalHidden.value = false;
  } else {
    opacity.value = 1;
  }
});

const referenceElement = computed<ReferenceElement | undefined>(() => {
  const reference = typeof props.reference === 'string'
    ? document.querySelector(props.reference)
    : props.reference;
  return typeof reference?.getBoundingClientRect !== 'undefined' ? reference : undefined;
});

const htmlElement: Ref<HTMLElement | null> = ref(null);

const floatingOptions = computed<FloatingOptions>(() => {
  const middleware: Middleware[] = [...props.middleware];

  const placement = props.placement === 'auto' ? undefined : props.placement;

  if (props.placement === 'auto') {
    middleware.push(autoPlacement());
  } else if (props.flip) {
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
    placement,
    middleware,
  };
});

const ui = useFloatingUI(referenceElement, htmlElement, floatingOptions);

function floatingElement() {
  if (props.disable) {
    return () => slots.default?.(ui);
  }

  if (internalHidden.value) {
    return;
  }

  const children = slots.default?.(ui);

  if (!children?.length) {
    return;
  }

  if (children.length > 1) {
    console.error('FloatingUi should only contain a single child or none');
  }

  const onElementMounted = (el: unknown) => {
    htmlElement.value = el instanceof HTMLElement ? el : null;
    opacity.value = 1;
  };

  return withDirectives(cloneVNode(children[0], {
    style: {
      position: ui.strategy,
      top: 0,
      left: 0,
      opacity: opacity.value,
      transform: `translate3d(${Math.round(ui.x)}px,${Math.round(ui.y)}px,0)`,
      transition: `opacity ${props.animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`,
      zIndex: props.zIndex,
    },
    onTransitionstart: (e: TransitionEvent) => {
      if (e.propertyName === 'opacity' && opacity.value > 0) {
        isVisible.value = true;
      }
    },
    onTransitionend: (e: TransitionEvent) => {
      if (e.propertyName === 'opacity') {
        if (!opacity.value) {
          internalHidden.value = true;
          isVisible.value = false;
          emit('hidden');
        } else {
          emit('shown');
        }
      }
    },
  }), [
    [{mounted: onElementMounted}],
  ]);
}
</script>
