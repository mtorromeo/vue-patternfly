import { unref, computed, ref, onUpdated, getCurrentInstance, type Component, type Ref, type WritableComputedRef, type VNode, nextTick } from 'vue';
import { isDefined, tryOnMounted } from '@vueuse/shared';
import { findFirstChildVNode } from '../util';

export * from './children-tracker';
export * from './floating';

export function findHtmlElementFromVNode(vnode: VNode | undefined) {
  let el = vnode?.el;
  if (!(el instanceof Node)) {
    return;
  }
  if (!(el instanceof HTMLElement)) {
    el = (el as Element).nextElementSibling;
  }
  if (!(el instanceof HTMLElement)) {
    return;
  }
  return el;
}

export function useHtmlElementFromVNodes() {
  const element: Ref<HTMLElement | undefined> = ref();

  return {
    element,
    async findReference(children: VNode[]) {
      const vnode = findFirstChildVNode(children);
      if (vnode?.component === null) {
        await nextTick();
      }
      element.value = findHtmlElementFromVNode(vnode);
    },
  };
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

export function useElementOverflow(element: Ref<HTMLElement | undefined>): Ref<boolean> {
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
