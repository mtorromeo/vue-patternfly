import { provide, inject, unref, computed, ref, onUpdated, onBeforeUnmount, getCurrentInstance, type Component, type ComponentInternalInstance, type RendererNode, type Ref, type ComponentPublicInstance, type WritableComputedRef, reactive, watch, type VNode } from 'vue';
import { type MaybeComputedRef, resolveUnref, tryOnMounted } from '@vueuse/shared';
import { useActiveElement } from '@vueuse/core';
import { computePosition, autoUpdate } from '@floating-ui/dom';
import { findComponentVNode } from './util';

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol');

type FloatingOptions = Parameters<typeof computePosition>[2];

export function useFloatingUI(reference: MaybeComputedRef<HTMLElement | null>, floating: MaybeComputedRef<HTMLElement | null>, options: MaybeComputedRef<FloatingOptions>) {
  const defaultFloatingData: Awaited<ReturnType<typeof computePosition>> = {
    x: null,
    y: null,
    placement: 'top',
    strategy: 'absolute',
    middlewareData: {},
  };
  const floatingData = reactive(defaultFloatingData);

  let cleanup = (): any => undefined;

  watch([reference, floating, options], () => {
    const referenceElement = resolveUnref(reference);
    const floatingElement = resolveUnref(floating);
    cleanup();
    Object.assign(floatingData, defaultFloatingData);
    if (referenceElement && floatingElement) {
      cleanup = autoUpdate(referenceElement, floatingElement, async() => {
        const data = await computePosition(referenceElement, floatingElement, unref(options) as FloatingOptions);
        Object.assign(floatingData, data);
      });
    }
  }, { immediate: true });

  onBeforeUnmount(() => cleanup());

  return floatingData;
}

export function useHtmlElementFromVNodes() {
  const referenceVNode: Ref<VNode | null> = ref(null);

  const element = computed(() => {
    let el = referenceVNode.value?.el as Node;
    if (!(el instanceof Node)) {
      return null;
    }
    if (!(el instanceof HTMLElement)) {
      el = (el as Element).nextElementSibling;
    }
    if (!(el instanceof HTMLElement)) {
      return null;
    }
    return el;
  });

  return {
    element,
    findReference(children: VNode[]) {
      referenceVNode.value = findComponentVNode(children);
    },
  };
}

export function provideChildrenTracker<C extends Component = ComponentPublicInstance>(symbol?: symbol) {
  const items: Ref<C[]> = ref([]);

  provide(symbol || ChildrenTrackerSymbol, {
    register: (item: C) => items.value.push(item),

    unregister: (item: C) => {
      const idx = items.value.findIndex(i => i === item);
      if (idx >= 0) {
        items.value.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker(symbol?: symbol) {
  const tracker = inject(symbol || ChildrenTrackerSymbol, null);

  if (tracker) {
    tryOnMounted(() => {
      const instance = getCurrentInstance();
      if (instance) {
        tracker.register(instance.proxy);
      }
    });

    onBeforeUnmount(() => {
      const instance = getCurrentInstance();
      if (instance) {
        tracker.unregister(instance.proxy);
      }
    });
  }

  return tracker;
}

export function useFocused(getFocusElement: () => RendererNode, instance: ComponentInternalInstance) {
  if (!instance) {
    instance = getCurrentInstance();
  }

  if (!getFocusElement) {
    getFocusElement = () => instance.vnode.el;
  }

  const activeElement = useActiveElement();
  const focused = computed({
    get() {
      const el = getFocusElement();
      return activeElement.value === el || (el && el.contains(activeElement.value));
    },
    set(focus) {
      const el = getFocusElement();
      focus ? el.focus() : el.blur();
    },
  });

  return focused;
}

export interface Disableable {
  disabled: boolean;
}

export interface Focusable {
  focused: boolean;
}

export interface Navigatable {
  focusElement: () => HTMLElement;
  enterTriggersArrowDown?: boolean;
}

export function keyNavigation<N extends Component & Navigatable, C extends Component & Disableable & Focusable, T extends C[] | C[][]>(itemsRef: T | Ref<T>): (this: N, e: KeyboardEvent, itemEl?: HTMLElement) => void {
  const enabledItems = () => {
    const items = unref(itemsRef);
    const isMultiDimensional = items.length && Array.isArray(items[0]);
    // ignore disabled items
    if (isMultiDimensional) {
      const components = items as C[][];
      return components.map(innerItems => innerItems.filter(item => !item.disabled));
    } else {
      const components = items as C[];
      return components.filter(item => !item.disabled);
    }
  };

  const navigate = (index: number, innerIndex: number, position: 'up' | 'down' | 'left' | 'right') => {
    const items = enabledItems();

    if (!Array.isArray(items) || !items.length) {
      return;
    }

    let nextIndex = index;
    let nextInnerIndex = innerIndex;
    if (position === 'up') {
      if (index <= 0) {
        // loop back to end
        nextIndex = items.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (position === 'down') {
      if (index >= items.length - 1) {
        // loop back to beginning
        nextIndex = 0;
      } else {
        nextIndex = index + 1;
      }
    } else if (position === 'left') {
      if (innerIndex <= 0) {
        nextInnerIndex = items[index].length - 1;
      } else {
        nextInnerIndex = innerIndex - 1;
      }
    } else if (position === 'right') {
      if (innerIndex >= items[index].length - 1) {
        nextInnerIndex = 0;
      } else {
        nextInnerIndex = innerIndex + 1;
      }
    }

    if (!items[nextIndex] ||
      (Array.isArray(items[nextIndex]) && !(items[nextIndex] as C[])[nextInnerIndex])
    ) {
      navigate(nextIndex, nextInnerIndex, position);
      return;
    }

    if (Array.isArray(items[nextIndex])) {
      (items[nextIndex] as C[])[nextInnerIndex].focused = true;
    } else {
      (items[nextIndex] as C).focused = true;
    }
  };

  const onKeydown = function(this: N, e: KeyboardEvent, itemEl?: HTMLElement) {
    if (!itemEl) {
      itemEl = this.focusElement();
    }

    const innerIndex = itemEl === e.currentTarget ? 0 : 1;

    const items = enabledItems();
    const index = items.findIndex(i => !Array.isArray(i) && i.focused);

    if (e.key === 'ArrowUp') {
      navigate(index, innerIndex, 'up');
    } else if (e.key === 'ArrowDown') {
      navigate(index, innerIndex, 'down');
    } else if (e.key === 'ArrowRight') {
      navigate(index, innerIndex, 'right');
    } else if (e.key === 'ArrowLeft') {
      navigate(index, innerIndex, 'left');
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.click();
      }
      if (this.enterTriggersArrowDown) {
        navigate(index, innerIndex, 'down');
      }
    } else {
      return;
    }

    e.preventDefault();
  };

  onKeydown.navigate = navigate;
  return onKeydown;

  // return () => {
  //   if (!Array.isArray(kids)) {
  //     return;
  //   }
  //   const isMultiDimensional = refsCollection.filter(ref => ref)[0].constructor === Array;
  //   let nextIndex = index;
  //   let nextInnerIndex = innerIndex;
  //   if (position === 'up') {
  //     if (index === 0) {
  //       // loop back to end
  //       nextIndex = kids.length - 1;
  //     } else {
  //       nextIndex = index - 1;
  //     }
  //   } else if (position === 'down') {
  //     if (index === kids.length - 1) {
  //       // loop back to beginning
  //       nextIndex = 0;
  //     } else {
  //       nextIndex = index + 1;
  //     }
  //   } else if (position === 'left') {
  //     if (innerIndex === 0) {
  //       nextInnerIndex = refsCollection[index].length - 1;
  //     } else {
  //       nextInnerIndex = innerIndex - 1;
  //     }
  //   } else if (position === 'right') {
  //     if (innerIndex === refsCollection[index].length - 1) {
  //       nextInnerIndex = 0;
  //     } else {
  //       nextInnerIndex = innerIndex + 1;
  //     }
  //   }
  //   if (
  //     refsCollection[nextIndex] === null ||
  //     refsCollection[nextIndex] === undefined ||
  //     (isMultiDimensional &&
  //       (refsCollection[nextIndex][nextInnerIndex] === null || refsCollection[nextIndex][nextInnerIndex] === undefined))
  //   ) {
  //     keyHandler(nextIndex, nextInnerIndex, position, refsCollection, kids, custom);
  //   } else if (custom) {
  //     if (refsCollection[nextIndex].focus) {
  //       refsCollection[nextIndex].focus();
  //     }
  //     // eslint-disable-next-line react/no-find-dom-node
  //     const element = ReactDOM.findDOMNode(refsCollection[nextIndex]) as HTMLElement;
  //     element.focus();
  //   } else {
  //     if (isMultiDimensional) {
  //       refsCollection[nextIndex][nextInnerIndex].focus();
  //     } else {
  //       refsCollection[nextIndex].focus();
  //     }
  //   }
  // };
}

export function isDefined(value: any): boolean {
  return value !== null && typeof value !== 'undefined';
}

export function useManagedProp<T>(name: string, value: T, onSet?: (to: T) => void): WritableComputedRef<T> {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error('missing component instance');
  }

  const inner = ref(value);
  return computed({
    get(): T {
      return isDefined(instance.props[name]) ? (instance.props[name] as any) : inner.value;
    },
    set(to: T) {
      if (inner.value || !isDefined(instance.props[name])) {
        inner.value = to as any;
      }
      instance.emit(`update:${name}`, to);
      onSet?.(to);
    },
  });
}

export function useElementOverflow(element: Ref<HTMLElement>): Ref<boolean> {
  const overflowing = ref(false);

  const testElementOverflow = () => {
    if (!window || !element.value) {
      overflowing.value = false;
      return;
    }

    overflowing.value = element.value.scrollWidth > element.value.clientWidth;
  };

  tryOnMounted(testElementOverflow);
  onUpdated(testElementOverflow);

  return overflowing;
}
