// import {reactive} from 'vue';

export function keyNavigation(getItems) {
  const navigate = (index, innerIndex, position, items) => {
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

  return {
    keyDown(e) {
      const items = getItems();
      const innerIndex = this.$el === e.target ? 0 : 1;
      const index = items.findIndex(i => i.focused());
      if (e.key === 'ArrowUp') {
        navigate(index, innerIndex, 'up', items);
      } else if (e.key === 'ArrowDown') {
        navigate(index, innerIndex, 'down', items);
      } else if (e.key === 'ArrowRight') {
        navigate(index, innerIndex, 'right', items);
      } else if (e.key === 'ArrowLeft') {
        navigate(index, innerIndex, 'left', items);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.target.click();
        if (this.enterTriggersArrowDown) {
          navigate(index, innerIndex, 'down', items);
        }
      }
    },
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
