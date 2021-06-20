import { provide, inject, isRef, computed, onMounted, onUnmounted, ref } from 'vue';
import { debounce } from './util';

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol');

export function provideChildrenTracker(items) {
  provide(ChildrenTrackerSymbol, {
    register: item => items.push(item),
    unregister: item => {
      const idx = items.findIndex(i => i === item);
      if (idx >= 0) {
        items.splice(idx, 1);
      }
    },
  });
}

export function useChildrenTracker() {
  return inject(ChildrenTrackerSymbol);
}

export function keyNavigation(itemsRef) {
  const navigate = (index, innerIndex, position) => {
    const items = isRef(itemsRef) ? itemsRef.value : itemsRef;

    if (!Array.isArray(items) || !items.length) {
      return;
    }
    const isMultiDimensional = Array.isArray(items[0]);
    let nextIndex = index;
    let nextInnerIndex = innerIndex;
    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = items.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (position === 'down') {
      if (index === items.length - 1) {
        // loop back to beginning
        nextIndex = 0;
      } else {
        nextIndex = index + 1;
      }
    } else if (position === 'left') {
      if (innerIndex === 0) {
        nextInnerIndex = items[index].length - 1;
      } else {
        nextInnerIndex = innerIndex - 1;
      }
    } else if (position === 'right') {
      if (innerIndex === items[index].length - 1) {
        nextInnerIndex = 0;
      } else {
        nextInnerIndex = innerIndex + 1;
      }
    }

    if (!items[nextIndex] ||
      (isMultiDimensional && !items[nextIndex][nextInnerIndex])
    ) {
      navigate(nextIndex, nextInnerIndex, position, items);
      return;
    }

    if (isMultiDimensional) {
      items[nextIndex][nextInnerIndex].focus();
    } else {
      items[nextIndex].focus();
    }
  };

  return function(e) {
    const innerIndex = this.$el === e.target ? 0 : 1;

    const items = isRef(itemsRef) ? itemsRef.value : itemsRef;
    const index = items.findIndex(i => i.focused());

    if (e.key === 'ArrowUp') {
      navigate(index, innerIndex, 'up');
    } else if (e.key === 'ArrowDown') {
      navigate(index, innerIndex, 'down');
    } else if (e.key === 'ArrowRight') {
      navigate(index, innerIndex, 'right');
    } else if (e.key === 'ArrowLeft') {
      navigate(index, innerIndex, 'left');
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.target.click();
      if (this.enterTriggersArrowDown) {
        navigate(index, innerIndex, 'down');
      }
    } else {
      return;
    }

    e.preventDefault();
  };

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

class WindowResizeManager {
  constructor(refValue) {
    this.width = refValue;
    this.counter = 0;
  }

  onResize = debounce(() => {
    this.width.value = window.innerWidth;
  }, 250)

  addListener() {
    if (!this.counter) {
      window.addEventListener('resize', this.onResize);
    }
    this.counter++;
  }

  removeListener() {
    this.counter--;
    if (!this.counter) {
      window.removeEventListener('resize', this.onResize);
    }
  }
}

const windowResizeManager = new WindowResizeManager(ref(window.innerWidth));

export function useWindowWidth() {
  onMounted(() => windowResizeManager.addListener());
  onUnmounted(() => windowResizeManager.removeListener());
  return computed(() => windowResizeManager.width.value);
}

export function useManagedProp(props, emit, name, value = null) {
  const inner = ref(value);
  return computed({
    get() {
      return props[name] === null ? inner.value : props[name];
    },
    set(to) {
      if (props[name] === null) {
        inner.value = to;
      } else {
        emit(`update:${name}`, to);
      }
    },
  });
}
